// Zero-dependency local web server using Node.js CommonJS
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HTML_FILE = path.join(__dirname, 'udemy_platform.html');

const server = http.createServer((req, res) => {
  fs.readFile(HTML_FILE, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading udemy_platform.html: ' + err.message);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Udemy Platform App is running locally!`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`📂 Direct File: ${HTML_FILE}`);
  console.log(`======================================================\n`);
});
