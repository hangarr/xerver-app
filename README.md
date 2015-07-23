# xerver-app
## Example xerver app module
A simple example of an **xerver** app used by a test package that has both the **xerver** core and this **xerver-app** app as a dependency.

This example app provides a single API endpoint that returns the version number of the node.js system running the app and a single static HTML file to illustrate how both are used by an **xerver** app. 

## Use
### Access by an enclosing test package
This **xerver-app** example provides the handler `function()` required by the Express `app.use()` and `route.use()` methods described here:
```
http://expressjs.com/4x/api.html#app.use
http://expressjs.com/4x/api.html#router.use
```
in the `api.js` module of the **xerver-test** package.  It also provides an example of a static page for the app. The app static page folder and module with the javascript `function()` handlers are `require`'d in the `api.js` module of the enclosing **xerver-test** package as
```
var xerverappdir = require('xerver-app/dirname.js')
  , nodeversion = require('xerver-app/1.0/nodejsutils/nodeversion.js').run;
```

## Notes
An app technically consists of the dependences in `node_modules\` folder and all files except the `dirname.js`, `package.json` and `README.me` files.  These latter files are support for the npm package system.





