const joi = require('joi');
const { changePassword } = require('./users-controller');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      confirmPassword: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('Confirm Password'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      oldPassword: joi.string().required(),
      newPassword: joi.string().min(6).max(32).required(),
      confirmNewPassword: joi.string().min(6).max(32).required(),
    },
  },
};
