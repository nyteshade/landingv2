// Polyfill Promise.withResolvers if needed
if (!Promise.withResolvers) {
  Promise.withResolvers = function() {
    let deferred = { promise: undefined, resolve: undefined, reject: undefined }

    deferred.promise = new Promise((resolve, reject) => {
      Object.assign(deferred, { resolve, reject })
    })

    return deferred
  }
}

/**
 * Creates a debounced function that delays invoking `func` until after `delay`
 * milliseconds have passed since the last time the debounced function was invoked.
 *
 * @param {Function} func The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
window.debounce = function debounce(func, delay) {
  let timeoutId; // This variable will hold the timer ID

  // Return a new function that will be the actual event handler
  return function(...args) {
    // `this` and `args` are captured for the original function
    const context = this;

    // Clear the previous timeout to reset the timer
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      // When the timeout completes, call the original function
      func.apply(context, args);
    }, delay);
  };
}

// Create a pagewide shared promises object for various deferred needs
window.promises = {
  pg: Promise.withResolvers()
}
