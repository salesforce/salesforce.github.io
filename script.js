/*
 * Copyright (c) 2016, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the MIT license.
 * For full license text, see LICENSE file in the repo root or
 * https://opensource.org/licenses/MIT
 */

'use strict';

// Invoke the provided callback once the document has completed loading.
var onDocumentLoad = function(loaded) {
  if (document.readyState === 'complete') {
    setTimeout(loaded, 0);
  } else {
    document.addEventListener('load', loaded);
  }
};

// Get the latest posts for a medium.com user or organization,
// then invoke the given callback.
// Users should be prefixed with an @ symbol, while orgs should not.
var loadMediumFeed = function(user, processItems) {
  var processRSS = function(rss) {
    var items = Array.from(rss.getElementsByTagName('item'));
    items = items.map(function(item) {
      return {
        title: item.getElementsByTagName('title')[0].childNodes[0].data,
        link: item.getElementsByTagName('link')[0].innerHTML,
        date: new Date(item.getElementsByTagName('pubDate')[0].innerHTML),
      };
    });
    processItems(items);
  };

  // Thanks to a Same Origin Policy and medium.com not setting a CORS header on
  // its public feeds, this script can't fetch a medium.com feed directly.
  // Instead, this will fetch the feed via a Yahoo YQL API. If this stops
  // working well, we could swap any other (caching) proxy in here later, or
  // maybe medium.com will add a CORS header one day.
  var req = new XMLHttpRequest();
  req.addEventListener('load', function() {
    var rss = req.responseXML;
    // Since we're jumping through the Yahoo proxy, we have to dig in a bit to
    // get the embedded RSS document.
    rss = rss.getElementsByTagName('results')[0].children[0];
    processRSS(rss);
  });
  var mediumURL = 'https://medium.com/feed/' + user;
  var yahooURL = ('https://query.yahooapis.com/v1/public/yql?q=' +
    encodeURIComponent('select * from xml where url="' + mediumURL + '"'));
  req.open('GET', yahooURL);
  req.send();
};

// Fetch the feed for https://medium.com/salesforce-open-source, then inject
// the top five items into #recent-posts.
loadMediumFeed('salesforce-open-source', function(items) {
  onDocumentLoad(function() {
    var recentPosts = document.getElementById('recent-posts');
    recentPosts.innerHTML = '';
    items.slice(0, 5).forEach(function(item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = item.link;
      a.innerHTML = item.title;
      li.appendChild(a);
      var div = document.createElement('div');
      div.innerHTML = item.date.toLocaleDateString(undefined,
        {month: 'long', day: 'numeric', year: 'numeric'});
      li.appendChild(div);
      recentPosts.appendChild(li);
    });
  });
});
