const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const decodedToken = jwt.verify(token, String(process.env.SALT));
      const userId = decodedToken.userId;
      req.auth = {
        userId: userId
      };
      next();
    } catch (error) {
        res.status(401).json({ error })
    }
};