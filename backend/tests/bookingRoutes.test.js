const request = require('supertest');
const app = require('../server');

let server;

beforeAll(() => {
    // Start the server on a dynamic port
    server = app.listen(4000, () => {
        console.log('Test server running on port 4000');
    });
});

afterAll(async () => {
    // Ensure server is closed after tests
    await server.close();
});

describe('Booking Routes', () => {
    it('should fetch all bookings', async () => {
        const res = await request(app).get('/bookings');
        console.log('Fetch All Bookings Response:', res.body); // Debugging log
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
        console.log('Create Booking Response:', res.body); // Debugging log
        expect(res.statusCode).toEqual(201);
        expect(res.body.user_name).toBe('John Doe');
    });
});