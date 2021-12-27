const request = require('supertest')
const app = require('../../index')

describe('Percentage Change API routes', () => {
    test('it return the correct percentage for discount', async () => {

        const response = await request(app).get('/?baseValue=100&newValue=80').send()

        expect(response.body).toHaveProperty('percentageChange')
        expect(response.body.percentageChange).toBe(20)
    })
})