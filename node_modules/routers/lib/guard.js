'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  for (var _len = arguments.length, middlewares = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    middlewares[_key - 1] = arguments[_key];
  }

  var fn = middlewares.pop();

  middlewares = middlewares.map(function (m) {
    return m.length <= 1 ? promisifyMiddleware(m) : m;
  });

  var original = _methods2.default.reduce(function (o, m) {
    o[m] = app[m];
    return o;
  }, {});

  _methods2.default.forEach(function (m) {
    app[m] = function (route) {
      var _original$m;

      for (var _len2 = arguments.length, handlers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        handlers[_key2 - 1] = arguments[_key2];
      }

      (_original$m = original[m]).call.apply(_original$m, [app, route].concat(_toConsumableArray(middlewares), handlers));
    };
  });

  fn(app);

  _methods2.default.forEach(function (m) {
    app[m] = original[m];
  });
};

var _methods = require('methods');

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function promisifyMiddleware(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req)).then(function () {
      return next();
    }, function (err) {
      return next(err);
    });
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndWFyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBV2UsVUFBUyxHQUFULEVBQThCO0FBQUEsb0NBQWIsV0FBYTtBQUFiLGVBQWE7QUFBQTs7QUFDM0MsTUFBTSxLQUFLLFlBQVksR0FBWixFQUFYOztBQUVBLGdCQUFjLFlBQVksR0FBWixDQUFnQixVQUFDLENBQUQ7QUFBQSxXQUFPLEVBQUUsTUFBRixJQUFZLENBQVosR0FBZ0Isb0JBQW9CLENBQXBCLENBQWhCLEdBQXlDLENBQWhEO0FBQUEsR0FBaEIsQ0FBZDs7QUFFQSxNQUFNLFdBQVcsa0JBQVEsTUFBUixDQUFlLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUN4QyxNQUFFLENBQUYsSUFBTyxJQUFJLENBQUosQ0FBUDtBQUNBLFdBQU8sQ0FBUDtBQUNELEdBSGdCLEVBR2QsRUFIYyxDQUFqQjs7QUFLQSxvQkFBUSxPQUFSLENBQWdCLFVBQVMsQ0FBVCxFQUFZO0FBQzFCLFFBQUksQ0FBSixJQUFTLFVBQVMsS0FBVCxFQUE2QjtBQUFBOztBQUFBLHlDQUFWLFFBQVU7QUFBVixnQkFBVTtBQUFBOztBQUNwQyw4QkFBUyxDQUFULEdBQVksSUFBWixxQkFBaUIsR0FBakIsRUFBc0IsS0FBdEIsNEJBQWdDLFdBQWhDLEdBQWdELFFBQWhEO0FBQ0QsS0FGRDtBQUdELEdBSkQ7O0FBTUEsS0FBRyxHQUFIOztBQUVBLG9CQUFRLE9BQVIsQ0FBZ0IsVUFBUyxDQUFULEVBQVk7QUFDMUIsUUFBSSxDQUFKLElBQVMsU0FBUyxDQUFULENBQVQ7QUFDRCxHQUZEO0FBR0QsQzs7QUFoQ0Q7Ozs7Ozs7O0FBRUEsU0FBUyxtQkFBVCxDQUE2QixFQUE3QixFQUFpQztBQUMvQixTQUFPLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUI7QUFDOUIsWUFBUSxPQUFSLENBQWdCLEdBQUcsR0FBSCxDQUFoQixFQUF5QixJQUF6QixDQUNFO0FBQUEsYUFBTSxNQUFOO0FBQUEsS0FERixFQUVFLFVBQUMsR0FBRDtBQUFBLGFBQVMsS0FBSyxHQUFMLENBQVQ7QUFBQSxLQUZGO0FBSUQsR0FMRDtBQU1EIiwiZmlsZSI6Imd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1ldGhvZHMgZnJvbSAnbWV0aG9kcyc7XG5cbmZ1bmN0aW9uIHByb21pc2lmeU1pZGRsZXdhcmUoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKGZuKHJlcSkpLnRoZW4oXG4gICAgICAoKSA9PiBuZXh0KCksXG4gICAgICAoZXJyKSA9PiBuZXh0KGVycilcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFwcCwgLi4ubWlkZGxld2FyZXMpIHtcbiAgY29uc3QgZm4gPSBtaWRkbGV3YXJlcy5wb3AoKTtcblxuICBtaWRkbGV3YXJlcyA9IG1pZGRsZXdhcmVzLm1hcCgobSkgPT4gbS5sZW5ndGggPD0gMSA/IHByb21pc2lmeU1pZGRsZXdhcmUobSkgOiBtKTtcblxuICBjb25zdCBvcmlnaW5hbCA9IG1ldGhvZHMucmVkdWNlKChvLCBtKSA9PiB7XG4gICAgb1ttXSA9IGFwcFttXTtcbiAgICByZXR1cm4gb1xuICB9LCB7fSk7XG5cbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcbiAgICBhcHBbbV0gPSBmdW5jdGlvbihyb3V0ZSwgLi4uaGFuZGxlcnMpIHtcbiAgICAgIG9yaWdpbmFsW21dLmNhbGwoYXBwLCByb3V0ZSwgLi4ubWlkZGxld2FyZXMsIC4uLmhhbmRsZXJzKTtcbiAgICB9O1xuICB9KTtcblxuICBmbihhcHApO1xuXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgYXBwW21dID0gb3JpZ2luYWxbbV07XG4gIH0pO1xufVxuIl19