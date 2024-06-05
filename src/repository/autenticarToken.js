import 'dotenv/config'
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function autenticarToken(req, resp, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return resp.status(401).send({ error: 'Token não fornecido' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return resp.status(403).send({ error: 'Token inválido' });
        }
        req.user = user;
        next();
    });
}