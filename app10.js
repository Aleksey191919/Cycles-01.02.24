let num = parseInt(+prompt("Введите любое натуральное число"));

if (!isNaN(num) && num !== 0) {
   let evenDivisorNum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            if (i % 2 === 0) {
                evenDivisorNum++;
            }
        }
    }
alert(`У числа ${num} количество парных делителей: ${evenDivisorNum}`)

}
else {
    alert("Вы ввели не корректные данные");
}