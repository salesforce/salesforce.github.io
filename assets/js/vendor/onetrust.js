var SfdcWwwBase = SfdcWwwBase || {}
SfdcWwwBase.oneTrustComponent = SfdcWwwBase.oneTrustComponent || {}
;(function(a) {
  SfdcWwwBase.oneTrustComponent.changeButtons = function() {
    var e = a(".ot-sdk-container").find(".save-preference-btn-handler")
    var d = a(".ot-sdk-container").find("#accept-recommended-btn-handler")
    var c = a(".category-menu-switch-handler")
    function b(f) {
      if (
        typeof a(f)
          .closest("li")
          .data("optanongroupid") == "undefined"
      ) {
        e.removeClass("visible")
        d.removeClass("optanon-ghost-button")
        d.children().removeClass("optanon-ghost-button-text-color")
      } else {
        e.addClass("visible")
        d.addClass("optanon-ghost-button")
        d.children().addClass("optanon-ghost-button-text-color")
      }
    }
    c.click(function(f) {
      b(f.currentTarget)
    })
    c.keydown(function(f) {
      if (f.keyCode === 32) {
        b(f.currentTarget)
      }
    })
    d.keydown(function(f) {
      if (f.key === "Enter" || f.key === " ") {
        a("#onetrust-consent-sdk").hide()
        a(".optanon-toggle-display").focus()
      }
    })
    e.keydown(function(f) {
      if (f.key === "Enter" || f.key === " ") {
        a("#onetrust-consent-sdk").hide()
        a(".optanon-toggle-display").focus()
      }
    })
  }
  SfdcWwwBase.oneTrustComponent.changeTabText = function() {
    var b = a(
      ".menu-item-about, .menu-item-necessary, .menu-item-functional, .menu-item-advertising"
    )
    a(".menu-item-about")
      .find(".preference-menu-item")
      .addClass("preference-menu-text")
    b.click(function() {
      b.find(".preference-menu-item").removeClass("preference-menu-text")
    })
    a(".menu-item-about").click(function() {
      a(".menu-item-about")
        .find(".preference-menu-item")
        .addClass("preference-menu-text")
    })
    a(".menu-item-necessary").click(function() {
      a(".menu-item-necessary")
        .find(".preference-menu-item")
        .addClass("preference-menu-text")
    })
    a(".menu-item-functional").click(function() {
      a(".menu-item-functional")
        .find(".preference-menu-item")
        .addClass("preference-menu-text")
    })
    a(".menu-item-advertising").click(function() {
      a(".menu-item-advertising")
        .find(".preference-menu-item")
        .addClass("preference-menu-text")
    })
  }
  SfdcWwwBase.oneTrustComponent.overrideSettings = function() {
    var b = a("#onetrust-pc-sdk #vendors-list").find(
      "#accept-recommended-btn-handler"
    )
    b.addClass("optanon-ghost-button")
    a(
      ".menu-item-about, .menu-item-necessary, .menu-item-functional, .menu-item-advertising, .optanon-white-button-middle"
    ).mousedown(function(c) {
      c.preventDefault()
    })
    a(".optanon-toggle-display").click(function() {
      a("#onetrust-consent-sdk").show()
      a(".active-group").focus()
      a(".optanon-alert-box-wrapper").hide()
    })
    a(".optanon-toggle-display").keydown(function(c) {
      if (c.key === "Enter" || c.key === " ") {
        a(".optanon-toggle-display").click()
      }
    })
    a(".optanon-status-checkbox").click(function() {
      a(".optanon-status-checkbox").blur()
    })
    a("#optanon-popup-wrapper").removeAttr("tabindex")
    a("#optanon-popup-wrapper").attr("data-keyboard", "false")
    a("#optanon-popup-wrapper").attr("data-backdrop", "static")
  }
  SfdcWwwBase.oneTrustComponent.init = function() {
    a(window).on("load", function() {
      SfdcWwwBase.oneTrustComponent.overrideSettings()
      SfdcWwwBase.oneTrustComponent.changeButtons()
      SfdcWwwBase.oneTrustComponent.changeTabText()
    })
  }
  a(document).ready(function() {
    SfdcWwwBase.oneTrustComponent.init()
  })
})(jQuery)
