const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const sensei = await connection('senseis')
      .where('id', id)
      .select('password', 'name', 'college')
      .first();

    if (!sensei) {
      return response.status(400).json({ error: 'No Sensei found with this ID' });
    }

    return response.json(sensei);
  }
}
