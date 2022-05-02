let n = 1;
let result: string = '';

while( n <= 100 ) {
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
  n++;
}

console.log(result);
