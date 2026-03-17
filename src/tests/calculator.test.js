/**
 * Comprehensive unit tests for calculator.js
 * Tests all four basic arithmetic operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division (with edge case handling)
 */

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add multiple numbers: 2 + 3 + 5 = 10', () => {
      expect(add(2, 3, 5)).toBe(10);
    });

    test('should add negative numbers: -5 + 3 = -2', () => {
      expect(add(-5, 3)).toBe(-2);
    });

    test('should add zero: 5 + 0 = 5', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers: 2.5 + 3.5 = 6', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should return 0 when no arguments provided', () => {
      expect(add()).toBe(0);
    });

    test('should add single number: 42 = 42', () => {
      expect(add(42)).toBe(42);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract multiple numbers: 10 - 4 - 2 = 4', () => {
      expect(subtract(10, 4, 2)).toBe(4);
    });

    test('should subtract resulting in negative: 5 - 10 = -5', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers: 10 - (-5) = 15', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract zero: 10 - 0 = 10', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract decimal numbers: 7.5 - 2.5 = 5', () => {
      expect(subtract(7.5, 2.5)).toBe(5);
    });

    test('should return 0 when no arguments provided', () => {
      expect(subtract()).toBe(0);
    });

    test('should subtract single number: 42 = 42', () => {
      expect(subtract(42)).toBe(42);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply multiple numbers: 2 * 3 * 4 = 24', () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test('should multiply by zero: 5 * 0 = 0', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one: 42 * 1 = 42', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply negative numbers: -5 * 3 = -15', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('should multiply two negative numbers: -5 * -3 = 15', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should return 1 when no arguments provided', () => {
      expect(multiply()).toBe(1);
    });

    test('should multiply large numbers: 1000 * 1000 = 1000000', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  describe('Division', () => {
    test('should divide two numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal: 7 / 2 = 3.5', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should divide negative numbers: -20 / 5 = -4', () => {
      expect(divide(-20, 5)).toBe(-4);
    });

    test('should divide two negative numbers: -20 / -5 = 4', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide by one: 42 / 1 = 42', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide zero: 0 / 5 = 0', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers: 10 / 2.5 = 4', () => {
      expect(divide(10, 2.5)).toBe(4);
    });

    test('should return error message for division by zero: 10 / 0', () => {
      const result = divide(10, 0);
      expect(typeof result).toBe('string');
      expect(result).toContain('Error');
      expect(result).toContain('Division by zero');
    });

    test('should return error message for zero division: 0 / 0', () => {
      const result = divide(0, 0);
      expect(typeof result).toBe('string');
      expect(result).toContain('Error');
    });

    test('should handle very small divisor: 1 / 0.001 = 1000', () => {
      expect(divide(1, 0.001)).toBe(1000);
    });
  });

  describe('Integration Tests - Example Operations from Image', () => {
    test('should perform: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should perform: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should perform: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should perform: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    test('should handle very large numbers in addition', () => {
      const result = add(Number.MAX_SAFE_INTEGER - 1, 1);
      expect(result).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('should handle scientific notation: 1e3 + 2e3 = 3000', () => {
      expect(add(1e3, 2e3)).toBe(3000);
    });

    test('should handle negative zero in division', () => {
      expect(divide(-0, 5)).toBe(-0);
    });

    test('should return error string type for division by zero', () => {
      const result = divide(100, 0);
      expect(typeof result).toBe('string');
    });

    test('should perform chained operations', () => {
      const step1 = add(2, 3); // 5
      const step2 = multiply(step1, 2); // 10
      const step3 = divide(step2, 5); // 2
      expect(step3).toBe(2);
    });
  });
});
