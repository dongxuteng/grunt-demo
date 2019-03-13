#!/usr/bin/node

const http = require('http'),
      log  = console.log,
      url  = require('url'),
      qs   = require('querystring');
http.createServer((req,res)=>{
  
  console.log(`${req.method} ${req.url} ${req.httpVersion}`)
  log(req.headers);
  log();

  var addr = url.parse(req.url);
  var rect = qs.parse(addr.query);
  console.log(rect.width,rect.height);
  
  var r = {
      'area':Number(rect.width) * Number(rect.height),
      'perimeter':2*(Number(rect.width)+Number(rect.height))
      

  }
  
  res.end(JSON.stringify(r));



}).listen(8080);







