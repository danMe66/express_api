import methods from 'methods';

function promisifyMiddleware(fn) {
  return function(req, res, next) {
    Promise.resolve(fn(req)).then(
      () => next(),
      (err) => next(err)
    );
  }
}

export default function(app, ...middlewares) {
  const fn = middlewares.pop();

  middlewares = middlewares.map((m) => m.length <= 1 ? promisifyMiddleware(m) : m);

  const original = methods.reduce((o, m) => {
    o[m] = app[m];
    return o
  }, {});

  methods.forEach(function(m) {
    app[m] = function(route, ...handlers) {
      original[m].call(app, route, ...middlewares, ...handlers);
    };
  });

  fn(app);

  methods.forEach(function(m) {
    app[m] = original[m];
  });
}
