const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('SENSEI', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new SENSEI', async () => {
    const response = await request(app)
      .post('/senseis')
      .send({
        name: "Theo Neto",
        email: "contato@teste.com",
        password: "SenhadoTestinh#",
        whatsapp: "8100000000",
        college: "Eldorado",
        city: "Recife",
        uf: "PE"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
