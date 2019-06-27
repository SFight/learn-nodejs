/**
 * 随机串工具
 */

'use strict';

/**
 * 生成权限码
 */
/**
 * 随机生成字符串
 * @param {Number} num 生成的字符串位数
 * @returns 随机字符串
 */
function randomString(num) {

  if (num === undefined || num === '' || num === null) throw new Error('num必须为数字');
  if (parseInt(num) <= 0) throw new Error('num必须大于0');
  
  const baseStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const baseBuffer = Buffer.from(baseStr);

  
  // 比如参数"10"表示使用我们通常使用的十进制数值系统。始终指定此参数可以消除阅读该代码时的困惑并且保证转换结果可预测。当未指定基数时，不同的实现会产生不同的结果，通常将值默认为10。
  // let quotient = Math.floor((Math.random() * 10)) + '' + new Date().getTime();
  const r = Math.pow(baseStr.length, num);
  let quotient = Math.floor((Math.random() * r)) + new Date().getTime(); // + new Date().getTime();

  // 随机数为1400 ～ 9999之间的数据 为了保证生成的权限码为10位
  // const maxNum = 9999; const minNum = 1400;
  // let quotient = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10) + '' + new Date().getTime();
  // let quotient = '1400' + new Date('2019-1-1 23:59:59').getTime();
  // let quotient = '9999' + new Date('2019-1-1 23:59:59').getTime();
  const arr = [];
  while (quotient !== 0) {
    // const mod = quotient % 62;
    // quotient = Math.floor(quotient / 62); // 向下取整
    const mod = quotient % baseStr.length;
    quotient = Math.floor(quotient / baseStr.length); // 向下取整
    arr.push(baseBuffer[mod]);
  }

  const pcode = Buffer.from(arr).toString('ascii');
  return pcode;
}

module.exports = {
  randomString,
};
