'use strict';
// Core dependencies
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Tester = require('../src/tester');

describe('Tester constructor', function () {
    describe('Invoking Tester with function and params', () => {
        let foo;
        before( () => {
            const params = {
              params: [1,1],
              numOfTimes: 2
            };
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
        it('should return the title of the test', () => {
          expect(foo.executor().testTitle).to.equal('fooTest');
        });
        it('should return and object with a property named "average" that is the number of executions', () => {
          expect(foo.executor()).to.have.property('average');
        });
        it('should return "2" as number of executions', () => {
          expect(foo.executor().numberOfExecutions).to.equal(2);
        });
    });
    describe('Invoking Tester with incorrect params', () => {
      it('should return 500 as number of executions if no passed as argument', () => {
        let foo;
        const params = {
          params: [1,1]
        };
        const fooTest = function(params) {
            const a = params[0] + params[1];
        };
        foo = new Tester(fooTest, params);
        expect(foo.executor().numberOfExecutions).to.equal(5000);
      });
    });
});
