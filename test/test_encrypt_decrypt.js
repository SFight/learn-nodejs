/**
 * 测试加解密
 */

'use strict';

const CryptoJS = require('crypto-js');
const EncryptDecrypt = require('../utils/encrypt_decrypt');

const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF'); // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); // 十六位十六进制数作为密钥偏移量
const obj = {
  uid: 1,
  permission: 'test',
  expire: '2018-10-10',
};
const a = EncryptDecrypt.encryptAES(key, iv, JSON.stringify(obj));
const b = EncryptDecrypt.decryptAES(key, iv, a);
console.log('加密:', a, '-----解密:', b);

const c = 'hello';
const d = EncryptDecrypt.encryptMD5(c);
console.log(d);