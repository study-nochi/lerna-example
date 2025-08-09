'use strict';

const a = require('../lib/a.js');
const assert = require('assert').strict;

assert.strictEqual(a(), 'Hello from a');
console.info('a tests passed');
