# seajs-var

Sea.js plugin to load non-CMD module (e.g. jQuery).

# usage

Config jQuery as a CMD module:

```javascript
// seajs-config.js
seajs.config({
  alias: {
    // "?var=<name>", name is the global variable's name exported by the lib
    jquery: 'path/to/jquery.js?var=jQuery' 
  }
})
```

Use jQuery in CMD system:

```javascript
define(function (require) {
  var $ = require('jquery')
  // ...
})
```