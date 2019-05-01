/*jshint esversion: 6 */
const https = require('https');

function getJSONDataWithHttps(path, callback) {
  https.get(path, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const parsedData = JSON.parse(data);
      callback(parsedData);
    });
  });
  
}

module.exports.getJSONDataWithHttps = getJSONDataWithHttps;