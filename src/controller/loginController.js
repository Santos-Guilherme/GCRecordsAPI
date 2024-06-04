import { salvarLogin, listarLogins, buscarUsuario } from "../repository/loginRepository.js";
import { Router } from "express";

const servidor = Router();

servidor.post('/login', async (req, resp) => {
    let login = req.body;

    try {
        let loginInserido = await salvarLogin(login);
        resp.status(201).send(loginInserido);
    } catch (error) {
        resp.status(500).send({ error: 'Erro ao salvar login' });
    }
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
    let login = req.body;
    let loginBuscado = await buscarUsuario(login);
    if (loginBuscado) {
        resp.send(loginBuscado);
    } else {
        resp.status(401).send({ error: 'Usuário ou senha inválidos' });
    }
});

export default servidor;
