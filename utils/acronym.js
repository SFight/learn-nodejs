/**
 * 获取首字母ASCII码工具
 */

'use strict';

const transliteration = require('transliteration'); // 中文翻译

/**
 * 获取字符串的首字母
 * @param {String} str 中英文字符串
 * @returns ASCII码
 */
function getFirstPY(str) {

  if (typeof str !== 'string') throw new Error('str必须为字符串');

  if (str === null || str === undefined || str === '') {
    return 0;
  }

  const py = transliteration.slugify(str, { uppercase: true, separator: '_' });
  const first = py.substr(0, 1).charCodeAt();
  // 控制first在0-9 A-Z ASCII 48-57 65-90
  if (!(first >= 65 && first <= 90) && !(first >= 48 && first <= 57)) {
    return 0;
  }

  return first;
}

module.exports = {
  getFirstPY,
};
