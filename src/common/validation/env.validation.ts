import * as Joi from "joi";

export const EnvValidationSchema = Joi.object({
  TOKEN: Joi.string().required().description("Discord bot token"),
});
