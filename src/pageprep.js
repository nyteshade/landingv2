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

// Create a pagewide shared promises object for various deferred needs
window.promises = {
  pg: Promise.withResolvers()
}
