# @mattinsler/es6require

In cases where you need to use `require` and you don't know if the module is
using `export default` or `module.exports`.

## Installation

```bash
$ npm install --save @mattinsler/es6require
```

## Usage

```javascript
import es6require from '@mattinsler/es6require';

const otheModule = es6require('module-name');
```
