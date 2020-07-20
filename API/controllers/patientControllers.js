'use strict';

//when a new client is created
exports.newClient = (req, res, next) => {
  res.json({ message: 'El cliente se agregó correctamente' });
};
