const jwt = require('jsonwebtoken');
const track = require('../services/tracking');
const accessTokenSecret = 'myownkey';

const authenticate = (req, res, next) => {
    const header = req.headers.authorization;
    
    if (header && header.startsWith('Bearer')) {
        const token = header.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err) => {
            if(err){
                track(req, 403, {});
                return res.sendStatus(403);
            }
            next();
        });
    }
    else {
        track(req, 401, {});
        res.sendStatus(401);
    }
};

module.exports = authenticate;