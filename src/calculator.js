#!/usr/bin/env node

/**
 * Advanced Arithmetic Calculator CLI
 * 
 * Supported Operations:
 * - Addition: Add two or more numbers
 * - Subtraction: Subtract numbers from a given value
 * - Multiplication: Multiply two or more numbers
 * - Division: Divide numbers with error handling for division by zero
 * - Modulo: Calculate remainder of division
 * - Power: Raise a base to an exponent
 * - Square Root: Calculate square root of a number
 */

const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Addition operation
 * @param {...number} numbers - Numbers to add
 * @returns {number} Sum of all numbers
 */
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Subtraction operation
 * @param {...number} numbers - Numbers to subtract (first is the base, rest are subtracted from it)
 * @returns {number} Result of subtraction
 */
function subtract(...numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((result, num) => result - num);
}

/**
 * Multiplication operation
 * @param {...number} numbers - Numbers to multiply
 * @returns {number} Product of all numbers
 */
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

/**
 * Division operation
 * @param {number} dividend - Number to be divided
 * @param {number} divisor - Number to divide by
 * @returns {number|string} Result of division or error message
 */
function divide(dividend, divisor) {
  if (divisor === 0) {
    return 'Error: Division by zero is not allowed';
  }
  return dividend / divisor;
}

/**
 * Modulo operation
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number|string} Remainder of a divided by b or error message
 */
function modulo(a, b) {
  if (b === 0) {
    return 'Error: Modulo by zero is not allowed';
  }
  return a % b;
}

/**
 * Power operation (exponentiation)
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Result of base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root operation
 * @param {number} n - The number to find the square root of
 * @returns {number|string} Square root of n or error message
 */
function squareRoot(n) {
  if (n < 0) {
    return 'Error: Cannot calculate square root of negative numbers';
  }
  return Math.sqrt(n);
}

/**
 * Display welcome message and menu
 */
function displayMenu() {
  console.log('\n=== Advanced Arithmetic Calculator ===');
  console.log('Choose an operation:');
  console.log('1. Addition (+)');
  console.log('2. Subtraction (-)');
  console.log('3. Multiplication (*)');
  console.log('4. Division (/)');
  console.log('5. Modulo (%)');
  console.log('6. Power (^)');
  console.log('7. Square Root (√)');
  console.log('8. Exit');
  console.log('========================================\n');
}

/**
 * Get numbers from user input
 * @param {string} operationName - Name of the operation
 * @param {number} count - Number of values needed (optional)
 * @returns {Promise<number[]>} Array of numbers
 */
function getNumbers(operationName, count = null) {
  return new Promise((resolve) => {
    const prompt = count
      ? `Enter ${count} numbers for ${operationName} (comma-separated): `
      : `Enter numbers for ${operationName} (comma-separated): `;

    rl.question(prompt, (input) => {
      const numbers = input.split(',').map((n) => parseFloat(n.trim())).filter((n) => !isNaN(n));

      if (numbers.length === 0) {
        console.log('Invalid input. Please enter valid numbers.');
        resolve(getNumbers(operationName, count));
      } else if (count && numbers.length !== count) {
        console.log(`Please enter exactly ${count} numbers.`);
        resolve(getNumbers(operationName, count));
      } else {
        resolve(numbers);
      }
    });
  });
}

/**
 * Main calculator loop
 */
async function runCalculator() {
  console.log('Welcome to the CLI Calculator!');

  let running = true;
  while (running) {
    displayMenu();

    const choice = await new Promise((resolve) => {
      rl.question('Enter your choice (1-8): ', resolve);
    });

    let result;

    switch (choice) {
      case '1': {
        const numbers = await getNumbers('addition');
        result = add(...numbers);
        console.log(`\nResult: ${numbers.join(' + ')} = ${result}\n`);
        break;
      }

      case '2': {
        const numbers = await getNumbers('subtraction');
        result = subtract(...numbers);
        console.log(`\nResult: ${numbers[0]} - ${numbers.slice(1).join(' - ')} = ${result}\n`);
        break;
      }

      case '3': {
        const numbers = await getNumbers('multiplication');
        result = multiply(...numbers);
        console.log(`\nResult: ${numbers.join(' * ')} = ${result}\n`);
        break;
      }

      case '4': {
        const numbers = await getNumbers('division', 2);
        result = divide(numbers[0], numbers[1]);
        console.log(`\nResult: ${numbers[0]} / ${numbers[1]} = ${result}\n`);
        break;
      }

      case '5': {
        const numbers = await getNumbers('modulo', 2);
        result = modulo(numbers[0], numbers[1]);
        console.log(`\nResult: ${numbers[0]} % ${numbers[1]} = ${result}\n`);
        break;
      }

      case '6': {
        const numbers = await getNumbers('power', 2);
        result = power(numbers[0], numbers[1]);
        console.log(`\nResult: ${numbers[0]} ^ ${numbers[1]} = ${result}\n`);
        break;
      }

      case '7': {
        const numbers = await getNumbers('square root', 1);
        result = squareRoot(numbers[0]);
        console.log(`\nResult: √${numbers[0]} = ${result}\n`);
        break;
      }

      case '8': {
        console.log('\nThank you for using the Calculator. Goodbye!\n');
        running = false;
        break;
      }

      default: {
        console.log('\nInvalid choice. Please enter a number between 1 and 8.\n');
      }
    }
  }

  rl.close();
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};

// Start the calculator only if running directly
if (require.main === module) {
  runCalculator();
}
