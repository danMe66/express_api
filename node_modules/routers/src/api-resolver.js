import errorHandler from './error-handler';
import handlerResolver from './handler-resolver';
import promisedResolver from './promised-resolver';

const formatters = {
  json(res, statusCode, data) {
    res.status(statusCode);
    res.json(data);
  }
};

function apiResolver(pathname, { dataType, ...opts } = {}) {
  const resolver = handlerResolver(pathname, opts);
  const formatter = formatters[dataType || 'json'];
  const handleError = errorHandler('boom');

  const resolve = promisedResolver(
    resolver,
    function (data, res, next) {
      formatter(res, 200, data);
    },
    function (err, res, next) {
      console.log('error', err.stack);
      const data = handleError(err);
      formatter(res, data.statusCode, data);
    }
  );

  resolve.resolver = resolver;
  resolve.formatter = formatter;
  resolve.handleError = handleError;

  resolve.errorHandler = function(err, req, res, next) {
    console.log('error', err.stack);
    const data = handleError(err);
    formatter(res, data.statusCode, data);
  };

  return resolve;
}

apiResolver.formatters = formatters;

export default apiResolver;
