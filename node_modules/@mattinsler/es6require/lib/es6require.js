'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function es6require() {
  for (var _len = arguments.length, filenames = Array(_len), _key = 0; _key < _len; _key++) {
    filenames[_key] = arguments[_key];
  }

  var passedOpts = typeof filenames.slice(-1)[0] === 'string' ? {} : filenames.pop();

  var opts = _extends({
    ignoreModuleNotFound: false
  }, passedOpts);

  var filename = void 0;

  try {
    filename = require.resolve(_path2.default.resolve.apply(_path2.default, filenames));
  } catch (err) {
    if (opts.ignoreModuleNotFound === true && err.code === 'MODULE_NOT_FOUND') {
      return;
    } else {
      throw err;
    }
  }

  if (!filename) {
    return;
  }

  var requiredModule = require(filename);

  if (requiredModule && requiredModule.default) {
    return requiredModule.default;
  }

  return requiredModule;
}

exports.default = es6require;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lczZyZXF1aXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVMsVUFBVCxHQUFrQztBQUFBLG9DQUFYLFNBQVc7QUFBWCxhQUFXO0FBQUE7O0FBQ2hDLE1BQU0sYUFBYSxPQUFPLFVBQVUsS0FBVixDQUFnQixDQUFDLENBQWpCLEVBQW9CLENBQXBCLENBQVAsS0FBbUMsUUFBbkMsR0FDZixFQURlLEdBRWYsVUFBVSxHQUFWLEVBRko7O0FBSUEsTUFBTTtBQUNKLDBCQUFzQjtBQURsQixLQUVELFVBRkMsQ0FBTjs7QUFLQSxNQUFJLGlCQUFKOztBQUVBLE1BQUk7QUFDRixlQUFXLFFBQVEsT0FBUixDQUFnQixlQUFLLE9BQUwsdUJBQWdCLFNBQWhCLENBQWhCLENBQVg7QUFDRCxHQUZELENBRUUsT0FBTyxHQUFQLEVBQVk7QUFDWixRQUFJLEtBQUssb0JBQUwsS0FBOEIsSUFBOUIsSUFBc0MsSUFBSSxJQUFKLEtBQWEsa0JBQXZELEVBQTJFO0FBQ3pFO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxHQUFOO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLENBQUMsUUFBTCxFQUFlO0FBQUU7QUFBUzs7QUFFMUIsTUFBTSxpQkFBaUIsUUFBUSxRQUFSLENBQXZCOztBQUVBLE1BQUksa0JBQWtCLGVBQWUsT0FBckMsRUFBOEM7QUFDNUMsV0FBTyxlQUFlLE9BQXRCO0FBQ0Q7O0FBRUQsU0FBTyxjQUFQO0FBQ0Q7O2tCQUVjLFUiLCJmaWxlIjoiZXM2cmVxdWlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBlczZyZXF1aXJlKC4uLmZpbGVuYW1lcykge1xuICBjb25zdCBwYXNzZWRPcHRzID0gdHlwZW9mKGZpbGVuYW1lcy5zbGljZSgtMSlbMF0pID09PSAnc3RyaW5nJ1xuICAgID8ge31cbiAgICA6IGZpbGVuYW1lcy5wb3AoKTtcblxuICBjb25zdCBvcHRzID0ge1xuICAgIGlnbm9yZU1vZHVsZU5vdEZvdW5kOiBmYWxzZSxcbiAgICAuLi5wYXNzZWRPcHRzXG4gIH07XG5cbiAgbGV0IGZpbGVuYW1lO1xuXG4gIHRyeSB7XG4gICAgZmlsZW5hbWUgPSByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKC4uLmZpbGVuYW1lcykpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAob3B0cy5pZ25vcmVNb2R1bGVOb3RGb3VuZCA9PT0gdHJ1ZSAmJiBlcnIuY29kZSA9PT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBpZiAoIWZpbGVuYW1lKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IHJlcXVpcmVkTW9kdWxlID0gcmVxdWlyZShmaWxlbmFtZSk7XG5cbiAgaWYgKHJlcXVpcmVkTW9kdWxlICYmIHJlcXVpcmVkTW9kdWxlLmRlZmF1bHQpIHtcbiAgICByZXR1cm4gcmVxdWlyZWRNb2R1bGUuZGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiByZXF1aXJlZE1vZHVsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXM2cmVxdWlyZTtcbiJdfQ==