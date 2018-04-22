'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errorHandler = require('./error-handler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _handlerResolver = require('./handler-resolver');

var _handlerResolver2 = _interopRequireDefault(_handlerResolver);

var _promisedResolver = require('./promised-resolver');

var _promisedResolver2 = _interopRequireDefault(_promisedResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var formatters = {
  json: function json(res, statusCode, data) {
    res.status(statusCode);
    res.json(data);
  }
};

function apiResolver(pathname) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var dataType = _ref.dataType;

  var opts = _objectWithoutProperties(_ref, ['dataType']);

  var resolver = (0, _handlerResolver2.default)(pathname, opts);
  var formatter = formatters[dataType || 'json'];
  var handleError = (0, _errorHandler2.default)('boom');

  var resolve = (0, _promisedResolver2.default)(resolver, function (data, res, next) {
    formatter(res, 200, data);
  }, function (err, res, next) {
    console.log('error', err.stack);
    var data = handleError(err);
    formatter(res, data.statusCode, data);
  });

  resolve.resolver = resolver;
  resolve.formatter = formatter;
  resolve.handleError = handleError;

  resolve.errorHandler = function (err, req, res, next) {
    console.log('error', err.stack);
    var data = handleError(err);
    formatter(res, data.statusCode, data);
  };

  return resolve;
}

apiResolver.formatters = formatters;

exports.default = apiResolver;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktcmVzb2x2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sYUFBYTtBQUNqQixNQURpQixnQkFDWixHQURZLEVBQ1AsVUFETyxFQUNLLElBREwsRUFDVztBQUMxQixRQUFJLE1BQUosQ0FBVyxVQUFYO0FBQ0EsUUFBSSxJQUFKLENBQVMsSUFBVDtBQUNEO0FBSmdCLENBQW5COztBQU9BLFNBQVMsV0FBVCxDQUFxQixRQUFyQixFQUEyRDtBQUFBLG1FQUFKLEVBQUk7O0FBQUEsTUFBMUIsUUFBMEIsUUFBMUIsUUFBMEI7O0FBQUEsTUFBYixJQUFhOztBQUN6RCxNQUFNLFdBQVcsK0JBQWdCLFFBQWhCLEVBQTBCLElBQTFCLENBQWpCO0FBQ0EsTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUF2QixDQUFsQjtBQUNBLE1BQU0sY0FBYyw0QkFBYSxNQUFiLENBQXBCOztBQUVBLE1BQU0sVUFBVSxnQ0FDZCxRQURjLEVBRWQsVUFBVSxJQUFWLEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCO0FBQ3pCLGNBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsSUFBcEI7QUFDRCxHQUphLEVBS2QsVUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixJQUFwQixFQUEwQjtBQUN4QixZQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLElBQUksS0FBekI7QUFDQSxRQUFNLE9BQU8sWUFBWSxHQUFaLENBQWI7QUFDQSxjQUFVLEdBQVYsRUFBZSxLQUFLLFVBQXBCLEVBQWdDLElBQWhDO0FBQ0QsR0FUYSxDQUFoQjs7QUFZQSxVQUFRLFFBQVIsR0FBbUIsUUFBbkI7QUFDQSxVQUFRLFNBQVIsR0FBb0IsU0FBcEI7QUFDQSxVQUFRLFdBQVIsR0FBc0IsV0FBdEI7O0FBRUEsVUFBUSxZQUFSLEdBQXVCLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDbkQsWUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixJQUFJLEtBQXpCO0FBQ0EsUUFBTSxPQUFPLFlBQVksR0FBWixDQUFiO0FBQ0EsY0FBVSxHQUFWLEVBQWUsS0FBSyxVQUFwQixFQUFnQyxJQUFoQztBQUNELEdBSkQ7O0FBTUEsU0FBTyxPQUFQO0FBQ0Q7O0FBRUQsWUFBWSxVQUFaLEdBQXlCLFVBQXpCOztrQkFFZSxXIiwiZmlsZSI6ImFwaS1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9lcnJvci1oYW5kbGVyJztcbmltcG9ydCBoYW5kbGVyUmVzb2x2ZXIgZnJvbSAnLi9oYW5kbGVyLXJlc29sdmVyJztcbmltcG9ydCBwcm9taXNlZFJlc29sdmVyIGZyb20gJy4vcHJvbWlzZWQtcmVzb2x2ZXInO1xuXG5jb25zdCBmb3JtYXR0ZXJzID0ge1xuICBqc29uKHJlcywgc3RhdHVzQ29kZSwgZGF0YSkge1xuICAgIHJlcy5zdGF0dXMoc3RhdHVzQ29kZSk7XG4gICAgcmVzLmpzb24oZGF0YSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFwaVJlc29sdmVyKHBhdGhuYW1lLCB7IGRhdGFUeXBlLCAuLi5vcHRzIH0gPSB7fSkge1xuICBjb25zdCByZXNvbHZlciA9IGhhbmRsZXJSZXNvbHZlcihwYXRobmFtZSwgb3B0cyk7XG4gIGNvbnN0IGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZGF0YVR5cGUgfHwgJ2pzb24nXTtcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSBlcnJvckhhbmRsZXIoJ2Jvb20nKTtcblxuICBjb25zdCByZXNvbHZlID0gcHJvbWlzZWRSZXNvbHZlcihcbiAgICByZXNvbHZlcixcbiAgICBmdW5jdGlvbiAoZGF0YSwgcmVzLCBuZXh0KSB7XG4gICAgICBmb3JtYXR0ZXIocmVzLCAyMDAsIGRhdGEpO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gKGVyciwgcmVzLCBuZXh0KSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIuc3RhY2spO1xuICAgICAgY29uc3QgZGF0YSA9IGhhbmRsZUVycm9yKGVycik7XG4gICAgICBmb3JtYXR0ZXIocmVzLCBkYXRhLnN0YXR1c0NvZGUsIGRhdGEpO1xuICAgIH1cbiAgKTtcblxuICByZXNvbHZlLnJlc29sdmVyID0gcmVzb2x2ZXI7XG4gIHJlc29sdmUuZm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICByZXNvbHZlLmhhbmRsZUVycm9yID0gaGFuZGxlRXJyb3I7XG5cbiAgcmVzb2x2ZS5lcnJvckhhbmRsZXIgPSBmdW5jdGlvbihlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLnN0YWNrKTtcbiAgICBjb25zdCBkYXRhID0gaGFuZGxlRXJyb3IoZXJyKTtcbiAgICBmb3JtYXR0ZXIocmVzLCBkYXRhLnN0YXR1c0NvZGUsIGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiByZXNvbHZlO1xufVxuXG5hcGlSZXNvbHZlci5mb3JtYXR0ZXJzID0gZm9ybWF0dGVycztcblxuZXhwb3J0IGRlZmF1bHQgYXBpUmVzb2x2ZXI7XG4iXX0=