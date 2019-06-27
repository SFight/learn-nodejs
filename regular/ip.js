/**
 * ip工具
 */

'use strict';

/**
 * 将ip地址转换成数字数据
 * @param {String} ip ip地址
 */
function ipToNumber(ip) {
  let num = 0;
  if (ip === '') {
    return num;
  }
  const aNum = ip.split('.');
  if (aNum.length !== 4) {
    return num;
  }
  num += parseInt(aNum[0]) << 24;
  num += parseInt(aNum[1]) << 16;
  num += parseInt(aNum[2]) << 8;
  num += parseInt(aNum[3]) << 0;
  num = num >>> 0; // 这个很关键，不然可能会出现负数的情况
  return num;
}

/**
 * 将数字转化成ip地址
 * @param {Number} number 要转化成ip的数字内容
 */
function numberToIp(number) {
  let ip = '';
  if (number <= 0) {
    return ip;
  }
  const ip3 = (number << 0) >>> 24;
  const ip2 = (number << 8) >>> 24;
  const ip1 = (number << 16) >>> 24;
  const ip0 = (number << 24) >>> 24;

  ip += ip3 + '.' + ip2 + '.' + ip1 + '.' + ip0;

  return ip;
}

/**
 * 判断ip地址是否为正确的ip
 * @param {String} ip 要进行检测的ip地址
 * @returns true: 正确的ip false:错误的ip
 */
function checkIP(ip) {
  const reg = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
  return reg.test(ip);
}

/**
 * 测试ip是否为内网ip
 * 10.0.0.0/8：10.0.0.0～10.255.255.255 
 * 172.16.0.0/12：172.16.0.0～172.31.255.255 
 * 192.168.0.0/16：192.168.0.0～192.168.255.255
 * @param {String} ip 要匹配的ip地址
 * @returns true:是内网ip false:不是内网ip
 */
function lanIP(ip) {
  let reg = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
  if (!reg.test(ip)) {
    // 非正确的ip 
    throw new Error('IP地址错误');
  }
  reg = /^(127\.0\.0\.1)|(localhost)|(10\.\d{1,3}\.\d{1,3}\.\d{1,3})|(172\.((1[6-9])|(2\d)|(3[01]))\.\d{1,3}\.\d{1,3})|(192\.168\.\d{1,3}\.\d{1,3})$/;
  return reg.test(ip);
}

/**
 * 判断两个区间是否存在重叠
 * @param {Array} max 两个区间的起始值数组
 * @param {Array} min 两个区间的结束值数组
 */
function validIpSegmentsOverlap(max, min) {
  return Math.max.apply(null, max) <= Math.min.apply(null, min);
}

/**
 * 判断上传的IP地址是否合法
 * @param {String} ipsegment ip地址段 地址段间用短横线隔开，多个用英文逗号隔开，例如：255.255.255.255-23.12.12.12,255.255.255.255-23.12.12.12
 */
function validIpSegments(ipsegment) {
  const reg = /^(?:(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(?:\.(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}-(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(?:\.(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}(?:$|,))+$/;
  return reg.test(ipsegment);
}
