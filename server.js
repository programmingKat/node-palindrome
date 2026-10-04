//Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const placeholder = document.querySelector('div');


const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

else if (page == '/css/styles.css') {
    fs.readFile('css/main.css', function (err, data) {
        res.write(data);
        res.end();
    });
}

else if (page == '/api') {
    if('palindrome' in params){
        let p = document.createElement('p')
        p.textContent = "test"
        placeholder.appendChild(p)
    //  if str === reverse(str){
    //      show "is palindrome"  in DOM
    //  }
    //  else {
    // "not a palindrome in dom"
    //   }
    }
else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

// returns a reversed string: 
// function reverse(str){
//   return str.split('').reverse().join('');  
// }

server.listen(8000);