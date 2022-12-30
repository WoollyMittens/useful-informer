# informer.js: React to changes

Report when the document is updated.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/informer.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/informer.js'
], function(informer) {
	...
});
```

Or import into an MVC framework.

```js
var informer = require('js/informer.js');
```

## How to start the script

```javascript
informer(container, conditions, handler, delay);
// Once element starts existing:
informer(
	document.querySelector('#container'),
	{'elementsFilter': ['#container h1']},
	function (results) { console.log('elements added:', results) }
);
// After every change:
informer(
	document.querySelector('#container'),
	{'attributeFilter': ['id', 'class', 'style']},
	function (results) { console.log('attributes changed:', results) }
);
```

**'container' : {DOM Element}** - The target to watch for changes.

**'conditions' : {Object}** - What to watch the target for.

- **'elementsFilter' : {Array}** - CSS rules for the elements to wait for.

- **'attributeFilter' : {Array}** - Attributes to watch for changes.

**'handler' : {Function}** - Handler function for the changes.

**'delay' : {Boolean)** - Delay between subsequent reports.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary www server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
