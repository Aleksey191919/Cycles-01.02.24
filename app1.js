/** @format */

let minNum = 10;
let maxNum = 20;
let result = '';

for (minNum; minNum <= maxNum; minNum++) {
  if (minNum !== maxNum) {
    result += minNum + ', ';
  } else {
    result += minNum;
  }
}
console.log(result);
