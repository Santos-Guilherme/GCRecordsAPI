import { salvarLogin, listarLogins, buscarUsuario } from "../repository/loginRepository.js";

import { Router } from "express";
let servidor = Router();

servidor.post('/login', async (req, resp) => {
    let login = req.body;

    let loginInserido = await salvarLogin(login);
    resp.send(loginInserido);
})

servidor.get('/login', async (req, resp) => {
    let lista = await listarLogins();
    resp.send(lista);
})

servidor.get('/entrar', async (req, resp) => {
    let login = req.body;
    let loginBuscado = await buscarUsuario(login);
    resp.send(loginBuscado);
})

export default servidor;