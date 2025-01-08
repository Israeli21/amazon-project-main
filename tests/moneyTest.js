// Automated Testing: using code to test code
// situation = test case
import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test Suite: formatCurrency');

console.log('Converts cents into dollars:');
if (formatCurrency(2095) === '20.95'){
    console.log('passed');
} else {
    console.log('failed');
}

console.log('Works with 0');
if (formatCurrency(0) === '0.00'){
    console.log('passed');
} else {
    console.log('failed');
}

console.log('Rounds up to the nearest cent');
if (formatCurrency(2000.5) === '20.01'){
    console.log('passed');
} else {
    console.log('failed');
}

// Basic Test Case: checks if the code works correctly
// Edge Cases: test with values that are tricky

// Test Suite: group of related tests