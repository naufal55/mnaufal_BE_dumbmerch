const { user } = require("../../models");
const Joi = require("joi");

exports.userReg = async (req, res) => {

  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().min(5).required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    await user.create(req.body); //create = insert into
    res.status(201).send({
      status: "success",
      data: {
        user: {
          name: req.body.name,
          email: req.body.email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

