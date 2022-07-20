const errors = {
  ConflictError: 409,
  NotFoundError: 404,
  ValidationError: 400,
  UnauthorizedError: 401,
};

const errorHandler = ({ name, message }, _req, res, _next) => {
  const status = errors[name] || 500;
  res.status(status).json({ message });  
};

module.exports = errorHandler;