describe('FizzBuzz', function() {
  var fizzbuzz;

beforeEach(function() {
  fizzbuzz = new FizzBuzz();
});

  describe('knows when a number is', function() {
    it('divisible by 3 and 5', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });
  describe('knows when a number is NOT', function() {
    it('divisible by 3 and 5', function() {
    expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      // fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
    describe('knows when a number is NOT', function(){
      it('divisible by 3', function() {
        // fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
      });
    });

    describe('knows when a number is', function() {
      it('divisible by 5', function() {
        expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      });
    });
    describe('knows when a number is NOT', function() {
      it('divisible by 5', function() {
        expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
      })
    });
    describe('multiples of 3 and 5', function() {
      it('fizzbuzzes for 15', function() {
        expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
      });
    });
    describe('multiples of 3', function() {
      it('fizzes for 3', function() {
        expect(fizzbuzz.play(3)).toEqual('Fizz');
      });
    });
    describe('multiples of 5', function() {
      it('buzzes for 5', function() {
        expect(fizzbuzz.play(5)).toEqual('Buzz');
      });
    });
    describe('any other number', function() {
      it('prints number', function() {
        expect(fizzbuzz.play(1)).toEqual(1)
      });
    });

});
