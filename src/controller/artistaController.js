import multer from "multer";

import { removerArtista, buscarArtistaPorId, filtrarArtistaPorNome, inserirImagens, listarArtistas, salvarArtista, buscarArtistaPorNome, atualizarArtista } from "../repository/artistaRepository.js";
import { Router } from "express";

let servidor = Router();

const upload = multer({ dest: 'storage/artista' })


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

servidor.get('/artista/filtro/:nome', async (req, resp) => {
    let nome = req.params.nome;
    let artista = '%'+nome+"%";
  
    let lista = await filtrarArtistaPorNome(artista);
    resp.send(lista);
})

servidor.get("/artista", async(req, resp) => {
    let listaArtistas = await listarArtistas();
    resp.send(listaArtistas);
})


servidor.get('/artista/:id', async (req, resp) => {
    let idArtista = req.params.id;
  
    let artista = await buscarArtistaPorId(idArtista);
    
    resp.send(artista);
})

servidor.get('/artista/nome/:nome', async (req, res) => {
    const nome = req.params.nome;
    const artista = await buscarArtistaPorNome(nome);
    if (!artista) {
        return res.status(404).send({ error: 'Artista não encontrado' });
    }
    res.send(artista);
});

servidor.delete('/artista/:id', async (req, resp) => {
    let id = req.params.id;
  
    let linhasAfetadas = await removerArtista(id);
    if (linhasAfetadas == 0)
      resp.status(404).send();
    else
      resp.status(202).send();
})

servidor.put('/artista/:id', async (req, resp) => {
    let id = req.params.id;
    let artista = req.body;
  
    let resultado = await atualizarArtista(id, artista);
    if (resultado.affectedRows == 0)
        resp.status(404).send();
    else
        resp.status(202).send();
});

export default servidor;