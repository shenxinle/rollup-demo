/* begin */
(function () {
'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _classnames_2_2_5_classnames$1 = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var add = function add() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.reduce(function (prev, cur, index, arr) {
        return prev + cur;
    }, 0);
};

var max = function max() {
    return Math.max.apply(Math, arguments);
};

var name = "rollup-test";
var version = "1.0.0";

var testData = [5, 2, 8, 4, 1, 6, 9];
var testDataStr = testData.join(',');
console.log('add ' + testDataStr + ' : ', add.apply(undefined, testData));
console.log('max ' + testDataStr + ' : ', max.apply(undefined, testData));

console.log('package.name: ' + name);
console.log('package.version: ' + version);

console.log(_classnames_2_2_5_classnames$1('foo', { bar: true, zoo: false }));

}());
/* end */
