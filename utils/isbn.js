/**
 * isbn工具
 */

'use strict';

/**
 * 判断是否为ISBN号
 * @param {String} isbn 要进行监测的字符串
 * @returns false:不是ISBN true:是ISBN
 */
function checkIsbn(isbn) {

  if (typeof isbn !== 'string') {
    return false;
  }

  const len = isbn.length;
  if (len !== 10 && len !== 13) { return 0; }
  const rc = isbnCompute(isbn, len);
  if (isbn[len - 1] !== rc) {
    /* ISBN尾数与计算出来的校验码不符 */
    return false;
  }
  return true;
}

/** ************************
* 计算ISBN加权和
* 参数说明：
* isbn: isbn码
* len: isbn码长度
**************************/
/**
 * 计算ISBN加权和
 * @param {String} isbn ISBN号码
 * @param {Number} len ISBN码长度
 */
function isbnSum(isbn, len) {

  let sum = 0;
  if (len === 10) {
    for (let i = 0; i < len - 1; i++) {
      sum = sum + parseInt(isbn[i]) * (len - i);
    }
  } else if (len === 13) {
    for (let i = 0; i < len - 1; i++) {
      if (i % 2 === 0) { sum = sum + parseInt(isbn[i]); } else { sum = sum + parseInt(isbn[i]) * 3; }
    }
  }
  return sum;
}

/** ***************************
* 计算ISBN末位校验码
* isbn: isbn码
* len: isbn码长度
******************************/
function isbnCompute(isbn, len) {
  let digit = 0;
  let rc = '';
  if (len === 10) {
    digit = 11 - isbnSum(isbn, len) % 11;
    if (digit === 10) { rc = 'X'; } else if (digit === 11) { rc = '0'; } else { rc = digit.toString(); }
  } else if (len === 13) {
    digit = 10 - isbnSum(isbn, len) % 10;
    if (digit === 10) { rc = '0'; } else { rc = digit.toString(); }
  }
  return rc;
}

/**
 * 获取短ISBN，去掉978和最后以为验证码
 * @param {String} isbn 要获取短ISBN的isbn号码
 * @returns 短ISBN码
 */
function getShortIsbn(isbn) {

  if (typeof isbn !== 'string') throw new Error('isbn必须为字符串');

  isbn = isbn.replace(/-/g, '');
  const len = isbn.length;
  if (len === 13 && isbn.substr(0, 3) === '978') {
    isbn = isbn.substr(3, len - 4); // 删除978和最后一位验证码
  } else if (len === 10) {
    isbn = isbn.substr(0, len - 1); // 最后一位验证码
  }
  return isbn;
}

module.exports = {
  checkIsbn,
  getShortIsbn,
};
