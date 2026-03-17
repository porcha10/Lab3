/**
 * Comprehensive unit tests for calculator.js
 * Tests all four basic arithmetic operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division (with edge case handling)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  describe('Modulo (Remainder)', () => {
    test('should calculate modulo: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with equal numbers: 5 % 5 = 0', () => {
      expect(modulo(5, 5)).toBe(0);
    });

    test('should calculate modulo with negative numbers: -10 % 3 = -1', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should return error message for modulo by zero', () => {
      const result = modulo(10, 0);
      expect(typeof result).toBe('string');
      expect(result).toContain('Error');
      expect(result).toContain('Modulo by zero');
    });

    test('should calculate modulo: 7 % 2 = 1', () => {
      expect(modulo(7, 2)).toBe(1);
    });

    test('should calculate modulo from image example: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger divisor: 3 % 10 = 3', () => {
      expect(modulo(3, 10)).toBe(3);
    });

    test('should calculate modulo with negative dividend: -7 % 3 = -1', () => {
      expect(modulo(-7, 3)).toBe(-1);
    });

    test('should calculate modulo with both negative: -10 % -3 = -1', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with decimal numbers: 7.5 % 2 = 1.5', () => {
      expect(modulo(7.5, 2)).toBe(1.5);
    });

    test('should calculate modulo of zero: 0 % 5 = 0', () => {
      expect(modulo(0, 5)).toBe(0);
    });

    test('should return error for modulo by negative zero', () => {
      const result = modulo(10, -0);
      expect(typeof result).toBe('string');
      expect(result).toContain('Error');
    });
  });

  describe('Power (Exponentiation)', () => {
    test('should calculate power: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power: 5 ^ 2 = 25', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate power with zero exponent: 5 ^ 0 = 1', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with negative exponent: 2 ^ -1 = 0.5', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('should calculate power with decimal base: 2.5 ^ 2 = 6.25', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power: 10 ^ 3 = 1000', () => {
      expect(power(10, 3)).toBe(1000);
    });

    test('should calculate power with base of 1: 1 ^ 100 = 1', () => {
      expect(power(1, 100)).toBe(1);
    });

    test('should calculate power from image example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power of zero with positive exponent: 0 ^ 5 = 0', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should calculate power with negative base and even exponent: -2 ^ 2 = 4', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should calculate power with negative base and odd exponent: -2 ^ 3 = -8', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with decimal exponent: 4 ^ 0.5 = 2', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate power with large exponent: 2 ^ 10 = 1024', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should calculate power with fractional exponent: 8 ^ (1/3) ≈ 2', () => {
      expect(power(8, 1/3)).toBeCloseTo(2, 5);
    });

    test('should handle power of 0 base with 0 exponent: 0 ^ 0 = 1', () => {
      expect(power(0, 0)).toBe(1);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root: √25 = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root: √2 ≈ 1.414...', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of zero: √0 = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal: √6.25 = 2.5', () => {
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('should return error message for negative square root', () => {
      const result = squareRoot(-4);
      expect(typeof result).toBe('string');
      expect(result).toContain('Error');
      expect(result).toContain('negative');
    });

    test('should calculate square root: √100 = 10', () => {
      expect(squareRoot(100)).toBe(10);
    });

    test('should calculate square root from image example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of one: √1 = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should return error for negative one: √-1', () => {
      const result = squareRoot(-1);
      expect(typeof result).toBe('string');
      expect(result).toContain('Error');
    });

    test('should calculate square root of large number: √10000 = 100', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should calculate square root of small decimal: √0.01 = 0.1', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });

    test('should calculate square root of pi: √π ≈ 1.772...', () => {
      expect(squareRoot(Math.PI)).toBeCloseTo(Math.sqrt(Math.PI), 10);
    });

    test('should return error for negative decimal: √-2.5', () => {
      const result = squareRoot(-2.5);
      expect(typeof result).toBe('string');
      expect(result).toContain('Error');
    });

    test('should handle very small positive numbers: √0.0001 = 0.01', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('should calculate square root of perfect square: √144 = 12', () => {
      expect(squareRoot(144)).toBe(12);
    });

    test('should calculate square root of non-perfect square: √50 ≈ 7.071...', () => {
      expect(squareRoot(50)).toBeCloseTo(7.071, 3);
    });
  });

  describe('Integration Tests - All Operations', () => {
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

    test('should perform: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should perform: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should perform: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });
});
