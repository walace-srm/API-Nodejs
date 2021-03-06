const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token_header = req.headers.auth;
    if (!token_header) return res.send({ error: 'Token não enviado' });

    jwt.verify(token_header, 'batatafrita2019', (err, decoded) => {
        res.locals.auth_data = decoded;
        if (err) return res.send({ error: 'Token inválido' });
        return next();
    });
}

module.exports = auth;