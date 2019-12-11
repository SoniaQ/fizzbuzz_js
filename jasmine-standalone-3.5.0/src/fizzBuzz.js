var FizzBuzz = function() {};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return(number % divisor === 0);
};
FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};
FizzBuzz.prototype.isDivisibleByThree = function(number) {
  // return (number % 3 === 0);
  return this._isDivisibleBy(number, 3);
};
FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};
FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
  } else if (this.isDivisibleByThree(number)) {
    return "Fizz";
  } else if (this.isDivisibleByFive(number)) {
    return "Buzz";
  } else {
    return number;
  }
};
// Below is my own development of JS code to run the game in console:
//   // var fizzbuzz = 0
//   //   while(fizzbuzz < 100) {
//   //     fizzbuzz++;
//   //     if (fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0) {
//   //       console.log("FizzBuzz");
//   //     } else if (fizzbuzz % 3 == 0) {
//   //       console.log("Fizz");
//   //     } else if (fizzbuzz % 5 == 0) {
//   //       console.log("Buzz");
//   //     } else {
//   //       console.log(fizzbuzz);
//   //     }
//   //   }
