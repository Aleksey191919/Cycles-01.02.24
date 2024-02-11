/** @format */

let minNum = 30;
let maxNum = 80;
let sumEvenNumbers = 0;

for (let i = minNum; i <= maxNum; i++) {
  if (i % 2 === 0) {
    sumEvenNumbers += i;
  }
}
console.log(
  `Сумма парных чисел от ${minNum} до ${maxNum} равна: ${sumEvenNumbers}`
);
