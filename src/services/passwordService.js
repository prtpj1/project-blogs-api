const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

const checkPassword = (password, passwordDB) => {
  const isMatch = bcrypt.compareSync(password, passwordDB) || (password === passwordDB);

  if (!isMatch) {
    const error = new Error('Password is incorrect');
    error.name = 'UnauthorizedError';
    throw error;
  }
};

module.exports = {
  encryptPassword,
  checkPassword,
};