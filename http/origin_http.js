/**
 * xunsearch索引同步
 */

'use strict';

const http = require('http');

async function sleep() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  return promise;
}

async function mockHttp(data, callback) {
  await sleep();

  const code = data % 2;
  callback({ code: code, msg: 'Success' });
}

for (let i = 0; i < 10; i++) {

  mockHttp(i, (res) => {
    console.log(res);
  });
}
