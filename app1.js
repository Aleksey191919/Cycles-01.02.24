let num = 10;
let result = '';

for (; num <= 20; num++) {
    if (num !== 20) {
        result += num + ', ';
    }
    else {
        result += num;
        console.log(result)
    }
}