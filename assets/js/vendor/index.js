import mrDropdownGrid from './assets/js/vendor/dropdown-grid';

(() => {
  if (typeof $ === 'undefined') {
    throw new TypeError('JavaScript requires jQuery. jQuery must be included before theme.js.');
  }
})();

export {
  mrDropdownGrid,
};
