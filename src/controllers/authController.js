const loginService = require('../services/loginService');

const login = async (req, res) => {
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Login with registered email and password (using the example below) or with an user created using the <b>POST/user</b> endpoint',
            schema: {
                "email": "lewishamilton@gmail.com",
                "password": "123456",
            }
    } */
  try {
    const { email, password } = req.body;
    const token = await loginService.login(email, password);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login };
