const jwt = require('jsonwebtoken');
const accessTokenSecret = 'myownkey';

const authenticate = (req, res, next) => {
    const header = req.headers.authorization;
    
    if (header && header.startsWith('Bearer')) {
        const token = header.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err) => {
            if(err){
                return res.sendStatus(403);
            }
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};

module.exports = authenticate;