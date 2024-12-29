const request = require('supertest');
const app = require('../server');

describe('Booking Routes', () => {
    it('should fetch all bookings', async () => {
        const res = await request(app).get('/bookings');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new booking', async () => {
        const res = await request(app)
            .post('/bookings')
            .send({
                flight_id: 1,
                user_name: 'John Doe',
                email: 'john.doe@example.com',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.user_name).toBe('John Doe');
    });
});