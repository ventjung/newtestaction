const request = require('supertest');
const app = require('../app');

describe('GET /hello', () => {
    it('should return Hello World', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Hello World' });
    });
});