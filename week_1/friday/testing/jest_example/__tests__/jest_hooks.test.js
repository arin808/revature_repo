const mathOperations = require('../math.js');
// Hooks - setup and teardown

/**
 * There are 4 hooks
 * beforeEach and afterEach - run before and after each test
 * beforeAll and afterAll - run before and after all tests
 */

describe("Calculator with hooks", () => {
    let input1 = 0;
    let input2 = 0;
    
    beforeAll(() => {
        console.log("beforeAll called"); 
    })
    
    afterAll(() => {
        console.log("afterAll called");
    })

    beforeEach(() => {
        input1 = 2;
        input2 = 10;
    })

    afterEach(() => {
        console.log("afterEach called");
    })
    
    test("Adding 4 + 5 should return 9", () => {
        // Arrange
        const a = 4;
        const b = 5;

        // Act
        const result = mathOperations.sum(a, b);

        // Assert
        expect(result).toBe(9);
    })

    test('Subtracting 2 from 10 should return 8', () => {
        // Arrange and Act
        let result = mathOperations.diff(input1, input2);
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