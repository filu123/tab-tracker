const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('[a-zA-Z0-9]{8,32}$')),
    };

    const {error} = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'u must provide an valid email addres',
          });
          break;
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match rules:
                <br>
                1.It must contain ONLY the following characters: lower case, 
                upper case, numerics
                <br>
                2.It must be at least 8 characters in length and > 32;
                `,
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information',
          });
      }
    } else {
      next();
    }
  },
};
