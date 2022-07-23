const jwt = require('../services/jwtService');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const err = new Error();
    err.name = 'tokenNotFound';
    throw err;
  }
  
  const checkToken = jwt.verifyToken(authorization);
  if (checkToken instanceof Error) {
    const err = new Error();
    err.name = 'tokenInvalid';
    throw err;
  }
  next();
};

module.exports = tokenValidation;