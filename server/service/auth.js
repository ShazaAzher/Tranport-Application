const jwt = require('jsonwebtoken');
const secret = "secret";

function setEmail(email) {
    return jwt.sign(email, secret);
}
function getEmail(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
    
}

module.exports = { setEmail, getEmail }