const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('quests').count();

    const quests = await connection('quests')
    .join('senseis', 'senseis.id', '=', 'quests.sensei_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select([
      'quests.*',
      'senseis.name',
      'senseis.email',
      'senseis.password',
      'senseis.whatsapp', 
      'senseis.college', 
      'senseis.city', 
      'senseis.uf'
    ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(quests);
  },

  async create(request, response) {
    const { title, course, discipline, classification, colorClass, description, reward } = request.body;
    const sensei_id = request.headers.authorization;

    const [id] = await connection('quests').insert({
      title,
      course,
      discipline,
      classification,
      colorClass,
      description,
      reward,
      sensei_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const sensei_id = request.headers.authorization;

    const quest = await connection('quests')
      .where('id', id)
      .select('sensei_id')
      .first();

    if (quest.sensei_id != sensei_id) {
      return response.status(401).json({error: 'Operation not permitted.'});
    } 

    await connection('quests').where('id', id).delete();

    return response.status(204).send();
  }
}
