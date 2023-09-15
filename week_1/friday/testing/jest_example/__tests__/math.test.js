const mathOperations = require('../src/math.js');

// V1
test("Adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
})

// V2
/**
 * AAA Pattern
 */
describe("Calculator Tests", () => {
    test("Adding 4 + 5 should return 9", () => {
        // Arrange
        const a = 4;
        const b = 5;

        // Act
        const result = mathOperations.sum(a, b);

        // Assert
        expect(result).toBe(9);
    })
})

// The describe block is an outer description of the test suite
// The individual test block represents a single test case
// The expect statement is the assertion that the test is making

// Failing test
describe("Failing tests for calculator", () => {
    test('adding 5 + 3 should return 8', () => {
        let result = mathOperations.sum(5, 3);
        expect(result).toBe(10);
    })
})

// More examples

describe("Calculator Tests Expanded", () => {
    test('Subtracting 2 from 10 should return 8', () => {
        // Arrange and Act
        let result = mathOperations.diff(10, 2);
        // Assert
        expect(result).toBe(8);
    })
    test('Multiplying 2 and 10 should return 20', () => {
        // Arrange and Act
        let result = mathOperations.product(2, 10);
        // Assert
        expect(result).toBe(20);
    })
})
