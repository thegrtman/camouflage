"use strict";

var Document = require('../../index').Document;
//var Foo = require('./foo');

class Bar extends Document {
	constructor() {
		super('bar');

		this.foo = require('./foo');
		this.num = Number;
	}
}

module.exports = Bar;