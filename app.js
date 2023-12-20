import http from 'http';
import fs from 'fs';

const htmlPath = 'xhr.html';
const jsonPath = 'name.json';
const xhrPath = 'xhr.js';

const serv = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile(htmlPath, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type' : 'text/html'});
      res.end(data);
    });
  } else if (req.method === 'GET' && req.url === '/xhr.js') {
    fs.readFile(xhrPath, 'utf8', (err, xhrData) => {
      res.writeHead(200, { 'Content-Type' : 'application/json'});
      res.end(xhrData);
    });
  } else if (req.method === 'GET' && req.url === '/name.json') {
    fs.readFile(jsonPath, 'utf8', (err, jsonData) => {
      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(jsonData);
    });
  }
});

const PORT = 3000;

serv.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
