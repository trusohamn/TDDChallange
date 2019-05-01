/* global describe, it */
const assert = require('assert')
const answer = require('./index')
const path = 'https://swapi.co/api/people/';

describe('getDataWithHttps', () => {
  it('fetches people from swapi', (done) => {
    answer.getJSONDataWithHttps(path, (data) => {
      console.log('count: ' + data.count);
      const isCount = data.count > 0;
      assert.equal(true, isCount);
      done();
    });
  }).timeout(6000);

});
// I increase the timeout as the default 2000 is sometimes exceeded 
// (we are fetching quite a lot of data)

describe('getJSONDataWithHttpsPromise', () => {
  //use the promise instead of callback
  it('is a function', () => {
    assert.equal('function', typeof answer.getJSONDataWithHttpsPromise);
  });
});


