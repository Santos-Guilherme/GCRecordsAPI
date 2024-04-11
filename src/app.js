import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import loginController from './controller/loginController.js';
import artistaController from './controller/artistaController.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(loginController);
servidor.use(artistaController);

let port = process.env.PORT;
servidor.listen(port, () => console.log("API SUBIU!")); 