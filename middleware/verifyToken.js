const jwt = require('jsonwebtoken');

const verifyAccessToken = (req,res,next) => {
if (!req.headers["authorization"]) {
   return res.status(401).json({message: "Unauthorized"})
}
const authHeader = req.headers["authorization"];
const token = authHeader.split(" ")[1];
    jwt.verify(token, 'dfzfdnsdfisfjsdfjksmfkfjfmfbvhdfbfnf', function(err, payload) {
        if (err) {
            return res.status(401).json({message: "Unauthorized"})
        }
        require.payload = payload;
        next();
      });
    }

module.exports = verifyAccessToken;