'use strict';
const Filter = require('broccoli-filter');
const stripDebug = require('strip-debug');

module.exports = class extends Filter {
	constructor(inputTree) {
		super(inputTree);
		this.inputTree = inputTree;
	}

	get extensions() {
		return ['js'];
	}

	get targetExtension() {
		return 'js';
	}

	processString(text) {
		return stripDebug(text);
	}
};
