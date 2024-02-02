let minNum = 1;
let maxNum = 500;
let sum = 0;

for (let i = 1; i <= maxNum; i++) {
    sum += i;
}
console.log(`Среднее арифметическое всех чисел от ${minNum} до ${maxNum} является число:  ${parseInt (sum / maxNum)}`);