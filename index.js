'use strict';

const UglifyJS = require('uglify-js');
const fs = require('fs');
const path = require('path');


const file = fs.readFileSync('./a.js');

const options = {
  compress: {
    join_vars: true,
    keep_fnames: false,
  },
  mangle: {
    // eval: true,
    // keep_fnames: false,
    // reserved: ['createHiddenIframe', 'bar'],
    toplevel: true,
  },
  toplevel: true,
};
const res = UglifyJS.minify(file.toString(), options);

console.log('===========', res);


// const http = require('http');
// const queryStr = require('querystring');
// const StringDecoder = require('string_decoder').StringDecoder;
// const decoder = new StringDecoder('utf-8');

// const hostname = '127.0.0.1';
// const port = 8089;
// const server = http.createServer((request, response) => {
//   let body = '';
//   request.on('error', (err) => {
//     console.error(err);
//     response.statusCode = 404;
//     response.end();
//   });
//   if (request.method.toUpperCase() == 'GET') {
//     const exists = fs.existsSync(request.url);
//     if (exists) {
//       const file = fs.readFileSync(request.url);
//       response.statusCode = 200;
//       response.setHeader('Content-Type', 'application/json');
//       const options = {
//         compress: {
//           keep_fnames: false,
//         },
//         mangle: {
//           eval: true,
//           keep_fnames: false,
//           reserved: ['foo', 'bar'],
//           toplevel: true,
//         },
//         toplevel: true,
//       };
//       const uglifyCode = UglifyJS.minify(file.toString(), options);

//       response.write(uglifyCode.code);
//       response.end();
//     } else {
//       response.statusCode = 404;
//       response.end();
//     }
    
//   }else{
//       response.statusCode = 404;
//       response.end();
//   }
//   // if (request.method.toUpperCase() == 'POST' && request.url == '/mangleCode') {
    
//   //   request.on('data', function (chunk) {
//   //     console.log('=================', JSON.parse(decoder.write(chunk)));
//   //     body += chunk;
//   //   }).on('end', function(){
//   //     response.statusCode = 200;
//   //     response.setHeader('Content-Type', 'application/json');
//   //     const bodyCode = queryStr.parse(body);
//   //     const uglifyCode = uglifyJS.minify(bodyCode.code,{
//   //         compress:{
//   //             join_vars:false
//   //         },
//   //         output:{
//   //             comments:'all'
//   //         }
//   //     });

//   //     response.write(JSON.stringify({"code":uglifyCode.code}));
//   //     response.end();
//   //   });
//   // }else{
//   //     response.statusCode = 404;
//   //     response.end();
//   // }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

