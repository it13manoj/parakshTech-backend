// middleware/auth.js
const jwt = require('jsonwebtoken');
const Message = require('../helper/utils');

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(403).json(Message.ERROR.UNAUTHORIZED);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request
    next();
  } catch (err) {
    return res.status(401).json(Message.AUTH.TOKEN_MISSING);
  }
};
