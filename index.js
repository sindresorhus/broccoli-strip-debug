'use strict';
var Filter = require('broccoli-filter');
var stripDebug = require('strip-debug');

function StripDebugFilter(inputTree) {
	if (!(this instanceof StripDebugFilter)) {
		return new StripDebugFilter(inputTree);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
}

StripDebugFilter.prototype = Object.create(Filter.prototype);
StripDebugFilter.prototype.constructor = StripDebugFilter;

StripDebugFilter.prototype.extensions = ['js'];
StripDebugFilter.prototype.targetExtension = 'js';

StripDebugFilter.prototype.processString = function (str) {
	return stripDebug(str);
};

module.exports = StripDebugFilter;
