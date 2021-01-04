const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const senseis = await connection('senseis').select('*');
    
    return response.json(senseis);
  },

  async create(request, response) {
    const { name, email, password, whatsapp, college, city, uf } = request.body;

    const id = generateUniqueId();

    await connection('senseis').insert({
      id,
      name,
      email,
      password,
      whatsapp,
      college,
      city,
      uf
    });

    return response.json({ id });
  }
}
