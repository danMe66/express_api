"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function promisedResolver(resolve, handleResponse, handleError) {
  return function (handler) {
    if (resolve) {
      handler = resolve(handler);
    }

    if (handler.length > 1) {
      return handler;
    }

    return function (req, res, next) {
      Promise.resolve(handler(req)).then(function (data) {
        return handleResponse(data, res, next);
      }, function (err) {
        return handleError(err, res, next);
      });
    };
  };
}

exports.default = promisedResolver;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9taXNlZC1yZXNvbHZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsY0FBbkMsRUFBbUQsV0FBbkQsRUFBZ0U7QUFDOUQsU0FBTyxVQUFTLE9BQVQsRUFBa0I7QUFDdkIsUUFBSSxPQUFKLEVBQWE7QUFDWCxnQkFBVSxRQUFRLE9BQVIsQ0FBVjtBQUNEOztBQUVELFFBQUksUUFBUSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQUUsYUFBTyxPQUFQO0FBQWlCOztBQUUzQyxXQUFPLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUI7QUFDOUIsY0FBUSxPQUFSLENBQWdCLFFBQVEsR0FBUixDQUFoQixFQUE4QixJQUE5QixDQUNFLFVBQUMsSUFBRDtBQUFBLGVBQVUsZUFBZSxJQUFmLEVBQXFCLEdBQXJCLEVBQTBCLElBQTFCLENBQVY7QUFBQSxPQURGLEVBRUUsVUFBQyxHQUFEO0FBQUEsZUFBUyxZQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsSUFBdEIsQ0FBVDtBQUFBLE9BRkY7QUFJRCxLQUxEO0FBTUQsR0FiRDtBQWNEOztrQkFFYyxnQiIsImZpbGUiOiJwcm9taXNlZC1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHByb21pc2VkUmVzb2x2ZXIocmVzb2x2ZSwgaGFuZGxlUmVzcG9uc2UsIGhhbmRsZUVycm9yKSB7XG4gIHJldHVybiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaWYgKHJlc29sdmUpIHtcbiAgICAgIGhhbmRsZXIgPSByZXNvbHZlKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVyLmxlbmd0aCA+IDEpIHsgcmV0dXJuIGhhbmRsZXI7IH1cblxuICAgIHJldHVybiBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGhhbmRsZXIocmVxKSkudGhlbihcbiAgICAgICAgKGRhdGEpID0+IGhhbmRsZVJlc3BvbnNlKGRhdGEsIHJlcywgbmV4dCksXG4gICAgICAgIChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgcmVzLCBuZXh0KVxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb21pc2VkUmVzb2x2ZXI7XG4iXX0=