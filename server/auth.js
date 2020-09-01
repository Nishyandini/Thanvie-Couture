const jwt = require('jsonwebtoken');

const algorithm = { algorithm: 'HS256'}

exports.generateToken = (payload) => {
    return jwt.sign(payload, process.env.PRIVATE_KEY, algorithm);
}

exports.isAuthenticated = (req, res, next) => {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[0];
        
        jwt.verify(token, process.env.PRIVATE_KEY, algorithm, (err, user) => {

            if (err) {  
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }

            req.jwt = user;
            return next();
        });
    } else {
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized");
    }
}