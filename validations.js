const Joi = require("joi");

module.exports.userValidate = req => {
  const { username, email, password } = req.body;
  const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),

    password: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
  });
  return schema.validate({ username, email, password });
};
module.exports.blogValidate = req => {
  const { title, description } = req.body;
  const schema = Joi.object({
    title: Joi.string().min(3).max(30).required(),

    description: Joi.string().min(40).required(),
  });
  return schema.validate({ title, description });
};

// const joiSchema = Joi.object({
//   a: Joi.string().min(2).max(10).required().messages({
//     "string.base": `"a" should be a type of 'text'`,
//     "string.empty": `"a" cannot be an empty field`,
//     "string.min": `"a" should have a minimum length of {#limit}`,
//     "any.required": `"a" is a required field`,
//   }),
// });
