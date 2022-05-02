let result: string = '';

for( let n = 1; n <= 100; n++ ) {
  if (n % 15 == 0) {
    result += ' FizzBuzz';
  }
  else if (n % 5 == 0) {
    result += ' Buzz';
  }
  else if (n % 3 == 0) {
    result += ' Fizz'
  }
  else {
    result += ` ${n}`;
  }
}

console.log(result);
