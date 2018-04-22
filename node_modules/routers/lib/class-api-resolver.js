'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _es6require = require('@mattinsler/es6require');

var _es6require2 = _interopRequireDefault(_es6require);

var _apiResolver = require('./api-resolver');

var _apiResolver2 = _interopRequireDefault(_apiResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function classApiResolver(pathname) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var dataType = _ref.dataType;

  return (0, _apiResolver2.default)(pathname, {
    dataType: dataType,
    descriptorToHandler: function descriptorToHandler(context, _ref2) {
      var controller = _ref2.controller;
      var action = _ref2.action;

      if (!context.handlerFiles) {
        context.handlerFiles = {};
      }
      if (!context.handlerFiles[controller]) {
        var handlerModule = (0, _es6require2.default)(context.root, controller);

        if (typeof handlerModule !== 'function') {
          throw new Error('Controllers must export a class (' + handlerFile + ')');
        }

        context.handlerFiles[controller] = new handlerModule();
      }

      if (!context.handlerFiles[controller][action]) {
        throw new Error('Could not find a method named ' + action + ' in the class exported from the ' + controller + ' controller');
      }

      var instance = context.handlerFiles[controller];
      return instance[action].bind(instance);
    }
  });
}

exports.default = classApiResolver;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzcy1hcGktcmVzb2x2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQXVEO0FBQUEsbUVBQUosRUFBSTs7QUFBQSxNQUFqQixRQUFpQixRQUFqQixRQUFpQjs7QUFDckQsU0FBTywyQkFBWSxRQUFaLEVBQXNCO0FBQzNCLHNCQUQyQjtBQUUzQix1QkFGMkIsK0JBRVAsT0FGTyxTQUUwQjtBQUFBLFVBQXRCLFVBQXNCLFNBQXRCLFVBQXNCO0FBQUEsVUFBVixNQUFVLFNBQVYsTUFBVTs7QUFDbkQsVUFBSSxDQUFDLFFBQVEsWUFBYixFQUEyQjtBQUFFLGdCQUFRLFlBQVIsR0FBdUIsRUFBdkI7QUFBMkI7QUFDeEQsVUFBSSxDQUFDLFFBQVEsWUFBUixDQUFxQixVQUFyQixDQUFMLEVBQXVDO0FBQ3JDLFlBQU0sZ0JBQWdCLDBCQUFXLFFBQVEsSUFBbkIsRUFBeUIsVUFBekIsQ0FBdEI7O0FBRUEsWUFBSSxPQUFPLGFBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDeEMsZ0JBQU0sSUFBSSxLQUFKLHVDQUE4QyxXQUE5QyxPQUFOO0FBQ0Q7O0FBRUQsZ0JBQVEsWUFBUixDQUFxQixVQUFyQixJQUFtQyxJQUFJLGFBQUosRUFBbkM7QUFDRDs7QUFFRCxVQUFJLENBQUMsUUFBUSxZQUFSLENBQXFCLFVBQXJCLEVBQWlDLE1BQWpDLENBQUwsRUFBK0M7QUFDN0MsY0FBTSxJQUFJLEtBQUosb0NBQTJDLE1BQTNDLHdDQUFvRixVQUFwRixpQkFBTjtBQUNEOztBQUVELFVBQU0sV0FBVyxRQUFRLFlBQVIsQ0FBcUIsVUFBckIsQ0FBakI7QUFDQSxhQUFPLFNBQVMsTUFBVCxFQUFpQixJQUFqQixDQUFzQixRQUF0QixDQUFQO0FBQ0Q7QUFwQjBCLEdBQXRCLENBQVA7QUFzQkQ7O2tCQUVjLGdCIiwiZmlsZSI6ImNsYXNzLWFwaS1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGVzNnJlcXVpcmUgZnJvbSAnQG1hdHRpbnNsZXIvZXM2cmVxdWlyZSc7XG5pbXBvcnQgYXBpUmVzb2x2ZXIgZnJvbSAnLi9hcGktcmVzb2x2ZXInO1xuXG5mdW5jdGlvbiBjbGFzc0FwaVJlc29sdmVyKHBhdGhuYW1lLCB7IGRhdGFUeXBlIH0gPSB7fSkge1xuICByZXR1cm4gYXBpUmVzb2x2ZXIocGF0aG5hbWUsIHtcbiAgICBkYXRhVHlwZSxcbiAgICBkZXNjcmlwdG9yVG9IYW5kbGVyKGNvbnRleHQsIHsgY29udHJvbGxlciwgYWN0aW9uIH0pIHtcbiAgICAgIGlmICghY29udGV4dC5oYW5kbGVyRmlsZXMpIHsgY29udGV4dC5oYW5kbGVyRmlsZXMgPSB7fSB9XG4gICAgICBpZiAoIWNvbnRleHQuaGFuZGxlckZpbGVzW2NvbnRyb2xsZXJdKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJNb2R1bGUgPSBlczZyZXF1aXJlKGNvbnRleHQucm9vdCwgY29udHJvbGxlcik7XG5cbiAgICAgICAgaWYgKHR5cGVvZihoYW5kbGVyTW9kdWxlKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udHJvbGxlcnMgbXVzdCBleHBvcnQgYSBjbGFzcyAoJHtoYW5kbGVyRmlsZX0pYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LmhhbmRsZXJGaWxlc1tjb250cm9sbGVyXSA9IG5ldyBoYW5kbGVyTW9kdWxlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghY29udGV4dC5oYW5kbGVyRmlsZXNbY29udHJvbGxlcl1bYWN0aW9uXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgbWV0aG9kIG5hbWVkICR7YWN0aW9ufSBpbiB0aGUgY2xhc3MgZXhwb3J0ZWQgZnJvbSB0aGUgJHtjb250cm9sbGVyfSBjb250cm9sbGVyYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlID0gY29udGV4dC5oYW5kbGVyRmlsZXNbY29udHJvbGxlcl07XG4gICAgICByZXR1cm4gaW5zdGFuY2VbYWN0aW9uXS5iaW5kKGluc3RhbmNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FwaVJlc29sdmVyO1xuIl19