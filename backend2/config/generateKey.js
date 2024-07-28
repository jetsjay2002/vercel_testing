const crypto = require('crypto');
const key = crypto.randomBytes(32).toString('base64');
console.log(key);

const token = jwt.sign({ username: user.username, role: user.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
