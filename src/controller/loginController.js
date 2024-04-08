import multer from "multer";
import { salvarLogin, listarLogins } from "../repository/loginRepository.js";

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

export default servidor;