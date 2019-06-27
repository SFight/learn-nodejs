/**
 * 数字工具
 */

'use strict';

/**
 * 校验数据是否是数字
 * @param {Any} str 要进行校验的数据
 */
function isNumber(str) {
  // return /^(\d+||-\d+)$/.test(str);
  if (str === undefined || str === null || str === '' || isNaN(str)) {
    return false;
  }
  return true;
}

module.exports = {
  isNumber,
};
