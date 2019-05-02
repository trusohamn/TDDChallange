/* global describe, it */
const assert = require('assert')
const answer = require('./index')

describe('helloWorld function', () => {
  it('is a function', function () {
    assert.equal('function', typeof answer.helloWorld);
  });

  it('returns hello world', () => {
    assert.equal(answer.helloWorld(), 'Hello World!');
  })
});

describe('findFirstNumberInArray function', () => {
  it('is a function', () => {
    assert.equal('function', typeof answer.findFirstNumberInArray);
  });
  it('returns a proper value', () => {
    assert.equal(22, answer.findFirstNumberInArray(['hi dude', '22', '123']));
  });
});
