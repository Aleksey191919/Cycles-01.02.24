/** @format */

let num = parseInt(+prompt('Введите любое натуральное число'));

if (!isNaN(num) && num !== 0) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
} else {
  alert('Вы ввели не корректные данные');
}
