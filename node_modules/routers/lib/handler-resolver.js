'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (root, opts) {
  var resolver = new HandlerResolver(root, opts);
  return resolver.resolve.bind(resolver);
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _es6require = require('@mattinsler/es6require');

var _es6require2 = _interopRequireDefault(_es6require);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function defaultParseSpecToDescriptor(spec) {
  var matches = spec.match(/^([^#]+)(#(.+))?$/);
  if (!matches) {
    throw new Error('Invalid handler format');
  }

  return {
    controller: matches[1],
    action: matches[3]
  };
}

function defaultDescriptorToHandler(_ref, _ref2) {
  var root = _ref.root;
  var controller = _ref2.controller;
  var action = _ref2.action;

  var handlerFile = require.resolve(_path2.default.join(root, controller));
  var handlerModule = (0, _es6require2.default)(handlerFile);
  if (!handlerModule[action]) {
    throw new Error('Could not find a method named ' + action + ' in ' + handlerFile);
  }

  return handlerModule[action];
}

var HandlerResolver = function () {
  function HandlerResolver(root) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, HandlerResolver);

    this.root = _path2.default.resolve(process.cwd(), root || '');
    this.opts = {
      parseSpecToDescriptor: opts.parseSpecToDescriptor || defaultParseSpecToDescriptor,
      descriptorToHandler: opts.descriptorToHandler || defaultDescriptorToHandler
    };
  }

  _createClass(HandlerResolver, [{
    key: 'resolve',
    value: function resolve(spec) {
      if (typeof spec === 'string') {
        var _opts$parseSpecToDesc = this.opts.parseSpecToDescriptor(spec);

        var controller = _opts$parseSpecToDesc.controller;
        var _opts$parseSpecToDesc2 = _opts$parseSpecToDesc.action;
        var action = _opts$parseSpecToDesc2 === undefined ? 'index' : _opts$parseSpecToDesc2;

        return this.opts.descriptorToHandler(this, { controller: controller, action: action });
      }

      return spec;
    }
  }]);

  return HandlerResolver;
}();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYW5kbGVyLXJlc29sdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQTBDZSxVQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCO0FBQ2xDLE1BQU0sV0FBVyxJQUFJLGVBQUosQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FBakI7QUFDQSxTQUFPLFNBQVMsT0FBVCxDQUFpQixJQUFqQixDQUFzQixRQUF0QixDQUFQO0FBQ0QsQzs7QUE3Q0Q7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTLDRCQUFULENBQXNDLElBQXRDLEVBQTRDO0FBQzFDLE1BQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxtQkFBWCxDQUFkO0FBQ0EsTUFBSSxDQUFDLE9BQUwsRUFBYztBQUFFLFVBQU0sSUFBSSxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUE0Qzs7QUFFNUQsU0FBTztBQUNMLGdCQUFZLFFBQVEsQ0FBUixDQURQO0FBRUwsWUFBUSxRQUFRLENBQVI7QUFGSCxHQUFQO0FBSUQ7O0FBRUQsU0FBUywwQkFBVCxjQUFzRTtBQUFBLE1BQWhDLElBQWdDLFFBQWhDLElBQWdDO0FBQUEsTUFBdEIsVUFBc0IsU0FBdEIsVUFBc0I7QUFBQSxNQUFWLE1BQVUsU0FBVixNQUFVOztBQUNwRSxNQUFJLGNBQWMsUUFBUSxPQUFSLENBQWdCLGVBQUssSUFBTCxDQUFVLElBQVYsRUFBZ0IsVUFBaEIsQ0FBaEIsQ0FBbEI7QUFDQSxNQUFJLGdCQUFnQiwwQkFBVyxXQUFYLENBQXBCO0FBQ0EsTUFBSSxDQUFDLGNBQWMsTUFBZCxDQUFMLEVBQTRCO0FBQzFCLFVBQU0sSUFBSSxLQUFKLG9DQUEyQyxNQUEzQyxZQUF3RCxXQUF4RCxDQUFOO0FBQ0Q7O0FBRUQsU0FBTyxjQUFjLE1BQWQsQ0FBUDtBQUNEOztJQUVLLGU7QUFDSiwyQkFBWSxJQUFaLEVBQTZCO0FBQUEsUUFBWCxJQUFXLHlEQUFKLEVBQUk7O0FBQUE7O0FBQzNCLFNBQUssSUFBTCxHQUFZLGVBQUssT0FBTCxDQUFhLFFBQVEsR0FBUixFQUFiLEVBQTRCLFFBQVEsRUFBcEMsQ0FBWjtBQUNBLFNBQUssSUFBTCxHQUFZO0FBQ1YsNkJBQXVCLEtBQUsscUJBQUwsSUFBOEIsNEJBRDNDO0FBRVYsMkJBQXFCLEtBQUssbUJBQUwsSUFBNEI7QUFGdkMsS0FBWjtBQUlEOzs7OzRCQUVPLEksRUFBTTtBQUNaLFVBQUksT0FBTyxJQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQUEsb0NBQ1ksS0FBSyxJQUFMLENBQVUscUJBQVYsQ0FBZ0MsSUFBaEMsQ0FEWjs7QUFBQSxZQUNyQixVQURxQix5QkFDckIsVUFEcUI7QUFBQSwyREFDVCxNQURTO0FBQUEsWUFDVCxNQURTLDBDQUNBLE9BREE7O0FBRTdCLGVBQU8sS0FBSyxJQUFMLENBQVUsbUJBQVYsQ0FBOEIsSUFBOUIsRUFBb0MsRUFBRSxzQkFBRixFQUFjLGNBQWQsRUFBcEMsQ0FBUDtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEIiwiZmlsZSI6ImhhbmRsZXItcmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBlczZyZXF1aXJlIGZyb20gJ0BtYXR0aW5zbGVyL2VzNnJlcXVpcmUnO1xuXG5mdW5jdGlvbiBkZWZhdWx0UGFyc2VTcGVjVG9EZXNjcmlwdG9yKHNwZWMpIHtcbiAgdmFyIG1hdGNoZXMgPSBzcGVjLm1hdGNoKC9eKFteI10rKSgjKC4rKSk/JC8pO1xuICBpZiAoIW1hdGNoZXMpIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhhbmRsZXIgZm9ybWF0Jyk7IH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRyb2xsZXI6IG1hdGNoZXNbMV0sXG4gICAgYWN0aW9uOiBtYXRjaGVzWzNdXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREZXNjcmlwdG9yVG9IYW5kbGVyKHsgcm9vdCB9LCB7IGNvbnRyb2xsZXIsIGFjdGlvbiB9KSB7XG4gIHZhciBoYW5kbGVyRmlsZSA9IHJlcXVpcmUucmVzb2x2ZShwYXRoLmpvaW4ocm9vdCwgY29udHJvbGxlcikpO1xuICB2YXIgaGFuZGxlck1vZHVsZSA9IGVzNnJlcXVpcmUoaGFuZGxlckZpbGUpO1xuICBpZiAoIWhhbmRsZXJNb2R1bGVbYWN0aW9uXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBtZXRob2QgbmFtZWQgJHthY3Rpb259IGluICR7aGFuZGxlckZpbGV9YCk7XG4gIH1cblxuICByZXR1cm4gaGFuZGxlck1vZHVsZVthY3Rpb25dO1xufVxuXG5jbGFzcyBIYW5kbGVyUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihyb290LCBvcHRzID0ge30pIHtcbiAgICB0aGlzLnJvb3QgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgcm9vdCB8fCAnJyk7XG4gICAgdGhpcy5vcHRzID0ge1xuICAgICAgcGFyc2VTcGVjVG9EZXNjcmlwdG9yOiBvcHRzLnBhcnNlU3BlY1RvRGVzY3JpcHRvciB8fCBkZWZhdWx0UGFyc2VTcGVjVG9EZXNjcmlwdG9yLFxuICAgICAgZGVzY3JpcHRvclRvSGFuZGxlcjogb3B0cy5kZXNjcmlwdG9yVG9IYW5kbGVyIHx8IGRlZmF1bHREZXNjcmlwdG9yVG9IYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIHJlc29sdmUoc3BlYykge1xuICAgIGlmICh0eXBlb2Yoc3BlYykgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB7IGNvbnRyb2xsZXIsIGFjdGlvbiA9ICdpbmRleCcgfSA9IHRoaXMub3B0cy5wYXJzZVNwZWNUb0Rlc2NyaXB0b3Ioc3BlYyk7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLmRlc2NyaXB0b3JUb0hhbmRsZXIodGhpcywgeyBjb250cm9sbGVyLCBhY3Rpb24gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocm9vdCwgb3B0cykge1xuICBjb25zdCByZXNvbHZlciA9IG5ldyBIYW5kbGVyUmVzb2x2ZXIocm9vdCwgb3B0cyk7XG4gIHJldHVybiByZXNvbHZlci5yZXNvbHZlLmJpbmQocmVzb2x2ZXIpO1xufVxuIl19