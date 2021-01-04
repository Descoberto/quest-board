const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const sensei_id = request.headers.authorization;

    const quests = await connection('quests')
      .where('sensei_id', sensei_id)
      .select('*');
    
    return response.json(quests);
  }
}
