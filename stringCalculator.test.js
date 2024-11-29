const add = require('./stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the sum of numbers separated by commas', () => {
    expect(add("1,2")).toBe(3);
  });

  test('should handle newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2")).toThrow('Negatives not allowed: -2');
  });

  test('should handle any amount of numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });
});
