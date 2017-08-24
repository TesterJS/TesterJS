'use strict';
// Core dependencies
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Tester = require('./../app/tester');

describe('Tester constructor', function () {
    describe('Invoking Tester with function and params', () => {
        let foo;
        before( () => {
            const params = [1,1];
            const fooTest = function(params) {
                const a = params[0] + params[1];
            };
            foo = new Tester(fooTest, params);
        });

        it('should return an object', () => {
            expect(foo).to.be.an('object');
        });
        it('should be and instance of Tester', () => {
            assert.instanceOf(foo, Tester, 'foo is an instance of Tester');
        });
    });
});