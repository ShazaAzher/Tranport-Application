const { getEmail } = require("../service/auth");

function checkAuth(req, res, next) {
    const authHeaderValue = req.headers["authorization"];
    req.user = null
    if(!authHeaderValue || !authHeaderValue.startsWith('Bearer')) return next();

    const token = authHeaderValue.split("Bearer ");
    const user = getEmail(user);

    req.user = user;
    return next();
}

function restrictTo(roles = []) {
    return function(req, res, next){
        if(!req.user) return res.redirect("/login");
        if(!roles.includes(req.user.userType)) return res.end("Not Admin");
        return next();
    }
}

// async function logInrestriction(req, res, next) {
//     const email = req.cookies?.uid;
//     console.log(email);
//     if(!email){
//         return res.redirect("/")
//     }
//     const user = getEmail(email)
//     if(!user){
//         return res.redirect("/")
//     }
//     req.user = user;
//     next()
// }

// async function checkLogin() {
//     const email = req.cookies?.uid;
//     const user = getEmail(email)
//     req.user = user;
//     next()
// }
module.exports = {checkAuth, restrictTo}