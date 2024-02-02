let num = parseInt(+prompt("Введите любое натуральное число"));

if (!isNaN(num) && num !== 0) {
   let evenDivisorSum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            if (i % 2 === 0) {
                evenDivisorSum += i;
            }
        }
    }
    if (evenDivisorSum !== 0) {
        alert(`У числа ${num} сумма парных делителей: ${evenDivisorSum}`)
    }
    else {
        alert(`У числа ${num} нет парных делителей`);
    }

}
else {
    alert("Вы ввели не корректные данные");
}