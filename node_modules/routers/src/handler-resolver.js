import path from 'path';
import es6require from '@mattinsler/es6require';

function defaultParseSpecToDescriptor(spec) {
  var matches = spec.match(/^([^#]+)(#(.+))?$/);
  if (!matches) { throw new Error('Invalid handler format'); }

  return {
    controller: matches[1],
    action: matches[3]
  };
}

function defaultDescriptorToHandler({ root }, { controller, action }) {
  var handlerFile = require.resolve(path.join(root, controller));
  var handlerModule = es6require(handlerFile);
  if (!handlerModule[action]) {
    throw new Error(`Could not find a method named ${action} in ${handlerFile}`);
  }

  return handlerModule[action];
}

class HandlerResolver {
  constructor(root, opts = {}) {
    this.root = path.resolve(process.cwd(), root || '');
    this.opts = {
      parseSpecToDescriptor: opts.parseSpecToDescriptor || defaultParseSpecToDescriptor,
      descriptorToHandler: opts.descriptorToHandler || defaultDescriptorToHandler
    };
  }

  resolve(spec) {
    if (typeof(spec) === 'string') {
      const { controller, action = 'index' } = this.opts.parseSpecToDescriptor(spec);
      return this.opts.descriptorToHandler(this, { controller, action });
    }

    return spec;
  }
}

export default function(root, opts) {
  const resolver = new HandlerResolver(root, opts);
  return resolver.resolve.bind(resolver);
}
