/** @format */

import Joi from "joi";

export const UserPostSchema = Joi.object({
  fullname: Joi.string().required(),
  username: Joi.string().required().min(3).max(20),
  password: Joi.string().required(),
  role: Joi.string().required().valid("admin", "user"),
});

export const UserPatchSchema = Joi.object({
  fullname: Joi.string(),
  username: Joi.string().min(3).max(20),
  password: Joi.string(),
  role: Joi.string().valid("admin", "user"),
});

export const UserLoginSchema = Joi.object({
  username: Joi.string().required().min(3).max(20),
  password: Joi.string().required(),
});
