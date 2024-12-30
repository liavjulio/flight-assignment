const request = require('supertest');
const app = require('../server');

let server;

beforeAll(() => {
    server = app.listen(4000); // Start on a different port
});

afterAll(async () => {
    await server.close(); // Ensure server stops after tests
});

describe('Flight Routes', () => {
    it('should fetch all flights', async () => {
        const res = await request(app).get('/flights');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new flight', async () => {
        const res = await request(app)
            .post('/flights')
            .send({
                name: 'Flight 101',
                departure: 'New York',
                arrival: 'London',
                price: 500,
                date: '2024-01-01',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toBe('Flight 101');
    });
});