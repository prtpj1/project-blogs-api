const errorMessages = {
  emailInvalid: '"email" must be a valid email',
  nameInvalid: '"displayName" length must be at least 8 characters long',
  passwordInvalid: '"password" length must be at least 6 characters long',
  userExist: 'User already registered',
  tokenInvalid: 'Invalid token',
};

const errors = {
  emailInvalid: 400,
  nameInvalid: 400,
  passwordInvalid: 400,
  userExist: 409,
  tokenInvalid: 401,
};
const errorHandler = ({ name, _message }, _req, res, next) => {
      const status = errors[name];
      const message = errorMessages[name];
      if (!status) return res.sendStatus(500).send('Internal server error!');
      res.status(status).json({ message });

      next();
    };

module.exports = errorHandler;
