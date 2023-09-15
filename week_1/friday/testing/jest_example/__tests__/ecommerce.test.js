const { calculateTotal, calculateDiscount } = require('../src/ecommerce');

// Create a mock functionfor the calculateTotal function
const mockCalculateTotal = jest.fn();

// Mock a sample shopping cart
const sampleCart = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
]

test('calculateDiscoutn should calculate the correct price', () => {
    // Configure the mock function to return a fixed value
    mockCalculateTotal.mockReturnValue(100);

    const discount = 0.8;

    // call the calculateDiscount function w the sample cart and mockCalculateValue
    const discountedPrice = calculateDiscount(mockCalculateTotal, sampleCart, discount);

    // Assert that the mock function was called w the sample cart
    expect(mockCalculateTotal).toHaveBeenCalledWith(sampleCart);

    // Assert that the discounted price is correct
    expect(discountedPrice).toBe(80);
})

afterEach(() => {
    // Clear the mock function
    mockCalculateTotal.mockClear();
})