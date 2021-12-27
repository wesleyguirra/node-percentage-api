const calculatePercentageChange = require('./calculatePercentageChange')

describe('is the value returned correct', () => {
    test('is the discounted value correct', () => {
        const basePrice = 100;
        const priceWithDiscount = 80;

        const percentageChange = calculatePercentageChange(basePrice, priceWithDiscount);

        expect(percentageChange).toBe(20)
    })

    test('is the increase returned value correct', () => {
        const basePrice = 100
        const priceTaxes = 115

        const percentageChange = calculatePercentageChange(basePrice, priceTaxes);

        expect(percentageChange).toBe(15)
    })

    test('is returned value for equals values 0', () => {
        const basePrice = 100
        const newPrice = 100

        const percentageChange = calculatePercentageChange(basePrice, newPrice)

        expect(percentageChange).toBe(0)
    })
})