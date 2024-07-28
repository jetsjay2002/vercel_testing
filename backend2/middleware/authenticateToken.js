const jwt = require('jsonwebtoken');
const { isTokenBlacklisted } = require('../utils/tokenBlacklist');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log('Token received:', token);
console.log('Access Token Secret:', process.env.ACCESS_TOKEN_SECRET);


    if (token == null) {
        console.log('No token provided');
        return res.sendStatus(401);
    }

    if (isTokenBlacklisted(token)) {
        console.log('Token is blacklisted');
        return res.sendStatus(401);
    }

    const secret = process.env.ACCESS_TOKEN_SECRET;

    if (!secret) {
        console.error('Access Token Secret is undefined');
        return res.sendStatus(500);
    }

    jwt.verify(token, secret, (err, user) => {
        if (err) {
            console.error('Token verification failed');
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;



// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) return res.status(401).json({ message: 'Access denied' });

//     if (isTokenBlacklisted(token)) return res.status(401).json({ message: 'Token is invalid' });

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) return res.status(403).json({ message: 'Token is not valid' });
//         req.user = user;
//         next();
//     });
// };
