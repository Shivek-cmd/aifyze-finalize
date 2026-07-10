/* ============================================================
   AIFYZE — Blog Listing "Load More" Pagination
   Works alongside the existing search/category/tag/sort filter
   script (globalscripts/bodytrackingcode.js) without modifying it.
   That script owns each card's inline `style.display` (matched vs
   filtered out) and reorders cards for sort. This script only ever
   toggles a dedicated class, so the two can never fight over the
   same property.
   ============================================================ */

(function () {
  'use strict';

  var PAGE_SIZE = 9;   // initial cards shown (3 full rows on desktop)
  var INCREMENT = 6;   // cards revealed per click (2 full rows)
  var HIDE_CLASS = 'blog-card--paged-hidden';

  init();

  function init() {
    var grid = document.querySelector('.blog-grid');
    var wrap = document.getElementById('blog-loadmore');
    var btn = document.getElementById('blog-loadmore-btn');
    var fill = document.getElementById('blog-loadmore-fill');
    var countEl = document.getElementById('blog-loadmore-count');

    if (!grid || !wrap || !btn) return;

    var limit = PAGE_SIZE;

    function isMatch(card) {
      return card.style.display !== 'none';
    }

    function getCards() {
      return Array.prototype.slice.call(grid.querySelectorAll('.blog-card'));
    }

    function render() {
      var matching = getCards().filter(isMatch);
      var total = matching.length;
      var shown = Math.min(limit, total);

      matching.forEach(function (card, index) {
        if (index < limit) {
          card.classList.remove(HIDE_CLASS);
        } else {
          card.classList.add(HIDE_CLASS);
        }
      });

      if (total <= PAGE_SIZE || shown >= total) {
        wrap.hidden = true;
        return;
      }

      wrap.hidden = false;
      if (countEl) {
        countEl.textContent = 'Showing ' + shown + ' of ' + total + (total === 1 ? ' article' : ' articles');
      }
      if (fill) {
        var pct = total ? (shown / total) * 100 : 100;
        fill.style.width = pct + '%';
      }
    }

    btn.addEventListener('click', function () {
      btn.classList.add('is-loading');
      limit += INCREMENT;
      window.setTimeout(function () {
        render();
        btn.classList.remove('is-loading');
      }, 200);
    });

    // The filter script rewrites `style.display` on every card and
    // reorders the grid (via appendChild) whenever search, category,
    // tag, or sort state changes. Watching for those two things lets
    // this script react without the filter script knowing it exists.
    var debounceId = null;
    var observer = new MutationObserver(function () {
      window.clearTimeout(debounceId);
      debounceId = window.setTimeout(function () {
        limit = PAGE_SIZE;
        render();
      }, 30);
    });

    observer.observe(grid, {
      attributes: true,
      attributeFilter: ['style'],
      childList: true,
      subtree: true
    });

    render();
  }
})();
