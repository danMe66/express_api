import invariant from 'invariant';

const handlers = {
  boom(err) {
    if (err.isBoom) {
      let { statusCode, error, message } = err.output.payload;

      return {
        statusCode,
        error,
        message
      };
    }
  }
};

function createHandler(handlerNames) {
  const handlerList = handlerNames.map((name) => {
    if (!handlers[name]) {
      const availableHandlers = Object.keys(handlers).join(', ');
      throw new Error(`No error handler named ${name}. Available are ${availableHandlers}`);
    }
    return handlers[name];
  });

  handlerList.push((err) => ({
    statusCode: 500,
    message: err.message
  }));

  return function(err) {
    for (const handler of handlerList) {
      const res = handler(err);
      if (res !== undefined) { return res; }
    }
  }
}

function errorHandler(...handlerNames) {
  return createHandler(handlerNames);
}

errorHandler.handlers = handlers;

export default errorHandler;
