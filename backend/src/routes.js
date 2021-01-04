const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SenseiController = require('./controllers/SenseiController');
const QuestController = require('./controllers/QuestController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}), SessionController.create);

routes.get('/senseis', SenseiController.index);

routes.post('/senseis', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(18),
    whatsapp: Joi.string().required().min(10).max(11),
    college: Joi.string().required(),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), SenseiController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProfileController.index);

routes.get('/quests', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), QuestController.index);


routes.post('/quests', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    course: Joi.string().required(),
    discipline: Joi.string().required(),
    classification: Joi.string().required(),
    colorClass: Joi.string().required(),
    description: Joi.string().required(),
    reward: Joi.string().required(),
  })
}),QuestController.create);

routes.delete('/quests/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), QuestController.delete);

module.exports = routes;
