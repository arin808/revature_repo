
// Jest matchers
// Improve the expect function
test('Equality matcher', () => {
    expect(2*2).toBe(4);
    expect(4-2).not.toBe(1);
})

//Truthiness
test("truthy operators", () => {
    const name = "John";
    const n = null;
    expect(n).toBeNull();
    expect(name).not.toBeNull();

    // Name has a valid value
    expect(name).toBeTruthy();

    // Fail with null checks
    expect(n).toBeTruthy();

    // Pass as n is falsy
    expect(n).toBeFalsy();
    expect(0).toBeFalsy();
})

test("Numeric Operators", () => {
    const num1 = 100;
    const num2 = -20;
    const num3 = 0;

    // greater than
    expect(num1).toBeGreaterThan(10);

    // less than or equal to
    expect(num2).toBeLessThanOrEqual(0);

    // greater than or equal to
    expect(num3).toBeGreaterThanOrEqual(0);
})

// String Matchers
test('String Matchers', () => {
    const string1 = "Revature";

    // test for a successful match
    expect(string1).toMatch(/Revature/);
})