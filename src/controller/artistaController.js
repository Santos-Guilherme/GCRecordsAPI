import multer from "multer";

import { removerArtista, buscarArtistaPorId, buscarArtistaPorNome, inserirImagens, listarArtistas, salvarArtista } from "../repository/artistaRepository.js";
import { Router } from "express";

let servidor = Router();

const upload = multer({ dest: 'storage/aluno' })


servidor.post('/artista', async (req, resp) => {
    let artista = req.body;

    let artistaInserido = await salvarArtista(artista);
    resp.send(artistaInserido);
})

servidor.put('/artista/imagens/:id', upload.fields([
    { name: 'imagemCapa', maxCount: 1 },
    { name: 'imagemSelfie', maxCount: 1 }
]), async (req, resp) => {
    let id = req.params.id;
    let caminhoCapa = req.files['imagemCapa'][0].path;
    let caminhoSelfie = req.files['imagemSelfie'][0].path;

    let linhasAfetadas = await inserirImagens(id, caminhoCapa, caminhoSelfie);
    if (linhasAfetadas == 0)
    resp.status(404).send();
    else
    resp.status(202).send();
})

servidor.get("/artista", async(req, resp) => {
    let listaArtistas = await listarArtistas();
    resp.send(listaArtistas);
})

servidor.get('/artistaPorNome', async (req, resp) => {
    let artista = req.body;
    let nome = '%'+artista.nome+"%";
  
    let lista = await buscarArtistaPorNome(nome);
    resp.send(lista);
})


servidor.get('/artistaPorId', async (req, resp) => {
    let artista = req.body;
  
    let lista = await buscarArtistaPorId(artista.id);
    resp.send(lista);
})

servidor.delete('/artista/:id', async (req, resp) => {
    let id = req.params.id;
  
    let linhasAfetadas = await removerArtista(id);
    if (linhasAfetadas == 0)
      resp.status(404).send();
    else
      resp.status(202).send();
})

export default servidor;