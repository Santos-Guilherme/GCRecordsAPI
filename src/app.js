import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import loginController from './controller/loginController.js';
import artistaController from './controller/artistaController.js';
import albumController from './controller/albumController.js'
import showController from './controller/showController.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(loginController);
servidor.use(artistaController);
servidor.use(albumController);
servidor.use(showController);

let port = process.env.PORT;
servidor.listen(port, () => console.log("API SUBIU!")); 