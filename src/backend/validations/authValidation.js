const joi = require("@hapi/joi");

module.exports = {
  registerValidation: (data) => {
    const schema = joi.object({
      name: joi.string().required(),

      email: joi.string().email().required(),

      password: joi.string().min(8).max(15).required(),
      //it will check the password equal to the confirm password or not.
    });
    return schema.validate(data);
  },
  loginValidation: (data) => {
    const schema = joi.object({
      email: joi.string().email().required(),

      password: joi.string().min(8).max(15).required(),
    });
    return schema.validate(data);
  },
};
