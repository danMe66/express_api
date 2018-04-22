function promisedResolver(resolve, handleResponse, handleError) {
  return function(handler) {
    if (resolve) {
      handler = resolve(handler);
    }

    if (handler.length > 1) { return handler; }

    return function(req, res, next) {
      Promise.resolve(handler(req)).then(
        (data) => handleResponse(data, res, next),
        (err) => handleError(err, res, next)
      );
    }
  };
}

export default promisedResolver;
