const jwt = require('jsonwebtoken');

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;

    if (!atoken) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    // verify token
    const decoded = jwt.verify(atoken, "codeEngineers");
    console.log("Decoded Token",decoded);
    

    // you should store admin info inside the token, e.g. email
    if (decoded != "admin@gmail.comadmin123") {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    next(); // ✔️ go to next middleware/controller

  } catch (error) {
    console.error('Auth Error:', error);
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

module.exports = authAdmin;
