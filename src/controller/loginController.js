import multer from "multer";
import { salvarLogin, listarLogins, buscarUsuario } from "../repository/loginRepository.js";

import { Router } from "express";
let servidor = Router();

const upload = multer({ dest: 'storage/filmes' })

servidor.post('/login', async (req, resp) => {
    let login = req.body;

    let loginInserido = await salvarLogin(login);
    resp.send(loginInserido);
})

servidor.get('/login', async (req, resp) => {
    let listaLogin = await listarLogins();
    resp.send(listaLogin);
})

servidor.get('/entrar', async (req, resp) => {
    let sucesso = await buscarUsuario();
    if(sucesso == true)
        resp.send(true);
    else
        resp.send(false);
})

export default servidor;