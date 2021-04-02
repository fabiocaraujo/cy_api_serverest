const Joi = require('joi');

const loginSchema = Joi.object(
    {
      authorization: Joi.string(),
      message: Joi.string()
      }   
)
export default loginSchema;