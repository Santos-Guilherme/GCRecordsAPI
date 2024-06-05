import { salvarLogin, listarLogins, buscarUsuario } from "../repository/loginRepository.js";
import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const servidor = Router();
const JWT_SECRET = process.env.JWT_SECRET;

servidor.post('/login', async (req, resp) => {
    let login = req.body;

        let loginInserido = await salvarLogin(login);
        resp.send(loginInserido);
});

servidor.get('/login', async (req, resp) => {
    try {
        let lista = await listarLogins();
        resp.send(lista);
    } catch (error) {
        resp.status(500).send({ error: 'Erro ao listar logins' });
    }
});

servidor.post('/login/entrar', async (req, resp) => {
    const login = req.body;
    const loginBuscado = await buscarUsuario(login);
    
    if (loginBuscado) {
        const token = jwt.sign({ id: loginBuscado.id }, JWT_SECRET, { expiresIn: '1h' });
        resp.send({ login: loginBuscado, token });
    } else {
        resp.status(401).send({ error: 'Usuário ou senha inválidos' });
    }
});


export default servidor;
