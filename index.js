'use strict';
var Filter = require('broccoli-filter');
var stripDebug = require('strip-debug');

function StripDebugFilter(inputTree, options) {
	if (!(this instanceof StripDebugFilter)) {
		return new StripDebugFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

StripDebugFilter.prototype = Object.create(Filter.prototype);
StripDebugFilter.prototype.constructor = StripDebugFilter;

StripDebugFilter.prototype.extensions = ['js'];
StripDebugFilter.prototype.targetExtension = 'js';

StripDebugFilter.prototype.processString = function (str) {
	return stripDebug(str);
};

module.exports = StripDebugFilter;
