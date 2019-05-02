/*jshint esversion: 6 */
const https = require('https');
const http = require('http');
const port = process.env.PORT || 3000;

//create web server
http.createServer(function (req, res) {
  if (req.url === '/' && req.method.toLowerCase() === 'get') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
    <html><head></head>
        <body>
        <a href="/starwarspeople">Give me all Star Wars poeple!</a>
        <a href="/giveme3species">Give me third species!</a>
        <a href="/hicamilla">Say hi to Camilla!</a>
        </body>
    </html>`);
  }
  if (req.url === '/starwarspeople' && req.method.toLowerCase() === 'get') {
    // Get data from API
    const path = 'https://swapi.co/api/people/';
    getJSONDataWithHttps(path, (data) => {
      // Send modified data 
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  }
  else if (req.url === '/giveme3species' && req.method.toLowerCase() === 'get') {
    // Get data from API
    const path = 'https://swapi.co/api/species/3/';
    getJSONDataWithHttps(path, (data) => {
      // Send modified data 
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  }
  else if (req.url === '/hicamilla' && req.method.toLowerCase() === 'get') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Hi Camilla');
  };
}
).listen(port);

console.log(`Server running at :${port}`);

function getJSONDataWithHttps(path, callback) {
  https.get(path, res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk
    });
    res.on('end', () => {
      const parsedData = JSON.parse(data);
      callback(parsedData);
    });
  });
}