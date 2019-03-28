const AC = require('./controllers/AuthenticationController');
const ACP = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  app.post('/register', ACP.register, AC.register);
};
