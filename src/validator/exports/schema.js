const Joi = require('joi');

const ExportSongAtPayloadSchema = Joi.object({
  targetEmail: Joi.string().email({ tlds: true }).required(),
});

module.exports = ExportSongAtPayloadSchema;
