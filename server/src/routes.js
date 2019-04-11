const AC = require('./controllers/AuthenticationController');
const ACP = require('./policies/AuthenticationControllerPolicy');
const SC = require('./controllers/SongsController');

module.exports = (app) => {
  app.post('/register', ACP.register, AC.register);
  app.post('/login', AC.login);
  app.get('/songs', SC.index);
  app.post('/songs', SC.post);
};
