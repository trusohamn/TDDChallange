/* global describe, it */
const assert = require('assert')
const answer = require('./index')

describe('getDataWithHttps', () => {
  const path = 'https://swapi.co/api/people/';
  it('fetches people from swapi', (done) => {
    answer.getJSONDataWithHttps(path, (data) => {
      console.log('count: ' + data.count);
      const isCount = data.count > 0;
      assert.equal(true, isCount);
      done();
    });
  });
});


