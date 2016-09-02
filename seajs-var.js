seajs.on('request', function (data) {
  var requestUri = data.requestUri
  var match = requestUri.match(/\?var=(.+)$/)
  if (match) {
    var varName = match[1]
    seajs.request(requestUri, function () {
      define(requestUri, function () {
        return window[varName]
      })
      data.onRequest()
    }, data.charset, data.crossorigin)
    data.requested = true
  }
})