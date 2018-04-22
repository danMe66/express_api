import path from 'path';
import es6require from '@mattinsler/es6require';
import apiResolver from './api-resolver';

function classApiResolver(pathname, { dataType } = {}) {
  return apiResolver(pathname, {
    dataType,
    descriptorToHandler(context, { controller, action }) {
      if (!context.handlerFiles) { context.handlerFiles = {} }
      if (!context.handlerFiles[controller]) {
        const handlerModule = es6require(context.root, controller);

        if (typeof(handlerModule) !== 'function') {
          throw new Error(`Controllers must export a class (${handlerFile})`);
        }

        context.handlerFiles[controller] = new handlerModule();
      }

      if (!context.handlerFiles[controller][action]) {
        throw new Error(`Could not find a method named ${action} in the class exported from the ${controller} controller`);
      }

      const instance = context.handlerFiles[controller];
      return instance[action].bind(instance);
    }
  });
}

export default classApiResolver;
