# routers

A group of router helpers for server-side use

## Installation

```bash
$ npm install --save routers
```

## Included Router Helpers

#### apiResolver(handlerRootPathname, { dataType = 'json' })

Composes `promisedResolver` and `handlerResolver` with a response formatter based
on `dataType`.

The resolver will also have a method named `errorHandler` that you can use to handle
middleware errors in a standard way (uses the error resolution and data formatter
from the resolver).

```javascript
import express from 'express';
import { apiResolver } from 'routers';

const app = express();
const resolve = apiResolver('routes');

// resolve to module at routes/users, method index
app.get('/users', resolve('users#index'));
app.get('/users/:id', resolve('users#get'));

app.use(resolve.errorHandler);
```

Your `routes/users.js` file might look like:

```javascript
function index() {
  return Users.array();
}

function get({ params: { id } }) {
  return Users.where({ id }).first();
}

export { index, get };
```

#### classApiResolver(handlerRootPathname, { dataType = 'json' })

A specialized version of `apiResolver` (and is used the same way) that expects a
class to be exported from the resolved module. It will instantiate this class
once and then each request will call the appropriate method on that class.

This is very useful when you want to use decorators, which are not available on
first-class functions.

```javascript
import express from 'express';
import { classApiResolver } from 'routers';

const app = express();
const resolve = classApiResolver('routes');

// resolve to module at routes/users, method index
app.get('/users', resolve('users#index'));
app.get('/users/:id', resolve('users#get'));

app.use(resolve.errorHandler);
```

Your `routes/users.js` file might look like:

```javascript
import { propTypes, strip } from './magical-decorators';

class UsersRoute {
  constructor() {
    // run only once
    // will run when the first route that resolves to this module (lazy instantiation)
  }

  @strip('password')
  index() {
    return Users.array();
  }

  @propTypes({
    params: { id: '!string' }
  })
  @strip('password')
  get({ params: { id } }) {
    return Users.where({ id }).first();
  }
};

export default UsersRoute;
```

#### handlerResolver(handlerRootPathname)

Maps a root path and string to file and method.

```javascript
import express from 'express';
import { handlerResolver } from 'routers';

const app = express();
const resolve = handlerResolver('routes');

// resolve to module at routes/users, method index
app.get('/users', resolve('users#index'));
```

#### promisedResolver(resolver, handleResponse, handleError)

Adapts another resolver to handle promises.

```javascript
import express from 'express';
import { promisedResolver } from 'routers';

const app = express();
const resolve = promisedResolver(
  handlerResolver('routes'),
  (data, res, next) => res.send(data),
  (err, res, next) => res.statusCode(err.statusCode).send(err.stack)
);

// resolve to module at routes/users, method index
app.get('/users', resolve('users#index'));
```

If the handler is of the form `function(req)`, the return value will be
interpreted as a promise. Otherwise the handler acts as any normal request
handler (you write to res and then call next).

#### guard(app, middleware, fn)

Adds a middleware to every route added inside `fn`.

```javascript
import express from 'express';
import { guard } from 'routers';

const app = express();

guard(app, authMiddleware, (app) => {
  app.get('/users', loggedInUsers.index);
});
```
