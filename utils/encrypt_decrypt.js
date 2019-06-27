/**
 * 加解密工具
 */

'use strict';

const CryptoJS = require('crypto-js'); // 引用AES源码js
const Crypto = require('crypto'); // 文件加密
const fs = require('fs');

/**
 * AES加密
 * @param {String} key AES加密的key字符串
 * @param {String} iv AES加密的iv字符串
 * @param {String} word 要加密的字符串
 * @returns 加密后的字符串
 */
function encryptAES(key, iv, word) {
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString().toUpperCase();
}

/**
 * AES解密
 * @param {String} key AES加密的key字符串
 * @param {String} iv AES加密的iv字符串
 * @param {String} word 要解密的字符串
 * @returns 解密后的字符串
 */
function decryptAES(key, iv, word) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();

}

/**
 * MD5加密字符串
 * @param {String} word 要进行MD5加密的字符串
 * @returns 32位小写串
 */
function encryptMD5(word) {
  return CryptoJS.MD5(word).toString().toLowerCase();
}

/**
 * MD5加密文件
 * @param {String} url 要加密的文件地址
 * @returns 32位小写串
 */
async function encryptFileMD5(url) {
  return new Promise(reslove => {
    const md5sum = Crypto.createHash('md5');
    const stream = fs.createReadStream(url);
    stream.on('data', function(chunk) {
      md5sum.update(chunk);
    });
    stream.on('end', function() {
      const fileMd5 = md5sum.digest('hex').toLocaleLowerCase();
      reslove(fileMd5);
    });
  });
}

module.exports = {
  encryptAES,
  decryptAES,
  encryptMD5,
  encryptFileMD5
};