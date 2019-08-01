'use strict';

const buffer = new ArrayBuffer(99);
const int8View = new Int8Array(buffer);
for (let i = 0; i < int8View.length; i++) {
  int8View[i] = i;
}

const dataView = new DataView(buffer);


const buffer4 = new ArrayBuffer(4);
const int8View2 = new Int8Array(buffer4);
int8View2[0] = dataView.getInt8(dataView.byteLength - 4);
int8View2[1] = dataView.getInt8(dataView.byteLength - 3);
int8View2[2] = dataView.getInt8(dataView.byteLength - 2);
int8View2[3] = dataView.getInt8(dataView.byteLength - 1);


const int32View = new Int32Array(buffer4);
console.log(int8View2, int32View, bytesToint(int8View2));

function intTobytes(value) {
  const a = new Uint8Array(4);
  a[3] = (value >> 24) & 0xFF;
  a[2] = (value >> 16) & 0xFF;

  a[1] = (value >> 8) & 0xFF;

  a[0] = value & 0xFF;

  return a;
}

function bytesToint(value) {

  const a = new Uint32Array(1);

  a[0] = (value[3] & 0xFF) << 24;

  a[0] = a[0] | ((value[2] & 0xFF) << 16);

  a[0] = a[0] | ((value[1] & 0xFF) << 8);

  a[0] = a[0] | (value[0] & 0xFF);

  return a;
}

console.log(intTobytes(1885554121));
const test = new Uint8Array([ 201, 84, 15, 11 ]);
console.log(bytesToint(intTobytes(1885554121)), test);