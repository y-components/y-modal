# y-modal

:warning: __Under development__

## [Demo](http://y-components.github.io/y-modal/)

__Notice:__ Demo files are not bundled or minified - so first load will be slow.

## Development

```json
System.config({
  "transpiler": "babel",
  "babelOptions": {
    "blacklist": [],
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});
```

```bash
npm install jspm http-server -g

jspm install
jspm bundle demo - index.jsx!
npm run serve
```
