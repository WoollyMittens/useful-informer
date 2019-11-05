/*
	Source:
	van Creij, Maurice (2019). "informer.js: React to changes", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
function informer(container, conditions, handler, delay) {
  // fine-tune the conditions
  if (conditions.elementsFilter) { conditions.childList = true; conditions.subtree = true; }
  if (conditions.attributeFilter) { conditions.attributes = true; }
  // start the observer
  var mutationTimeout;
  new MutationObserver(function(mutations, observer) {
    // avoid spamming changes
    clearTimeout(mutationTimeout);
    mutationTimeout = setTimeout(function(){
      // return sought elements once
      if (conditions.elementsFilter) {
        var elements = document.querySelectorAll(conditions.elementsFilter.join(','));
        if (elements) { handler({'elements': elements}); observer.disconnect(); }
      }
      // or return all changes forever
      else { handler({'mutations': mutations, 'observer': observer }); }
    }, delay || 100);
  }).observe(container, conditions);
}

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return informer });
if (typeof module != 'undefined') module.exports = informer;
