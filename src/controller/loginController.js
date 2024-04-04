import { salvarLogin, listarLogins} from "../repository/loginRepository.js";

import { Router } from "express";
let servidor = Router();


servidor.post('/entrar', async (req, resp) => {
  let login = req.body;
  
  let loginInserido = await salvarLogin(login);
  resp.send(loginInserido);
})


servidor.get('/entrar', async (req, resp) => {
  let listaUser = await listarLogins();
  resp.send(listaUser);
})




export default servidor;