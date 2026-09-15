import { test, expect } from 'vitest';
import { getFizzBuzzResult } from '../src/scripts/fizzbuzz.js';

test('Si el numero es 9 (y es divisible por 3), debe devolver "Fizz"', () => {
  expect(getFizzBuzzResult(9)).toBe("Fizz");
});

test('Si el numero es 10( y es divisible por 5 ), debe devolver "Buzz"', () => {
  expect(getFizzBuzzResult(10)).toBe("Buzz");
});

test('Si el numero es 15 ( y es divisible por 3 y 5 ), entonces debe devolver "FizzBuzz"', () => {
  expect(getFizzBuzzResult(15)).toBe("FizzBuzz"); 
});