import multer from "multer";

import { Router } from "express";
import { buscarAlbumPorArtista, buscarAlbumPorId, buscarUltimosAlbuns, buscarUltimosDoisAlbunsPorArtista, inserirImagens, listarAlbums, removerAlbum, salvarAlbum } from "../repository/albumRepository.js";

let servidor = Router();

const upload = multer({ dest: 'storage/album' })


servidor.post('/album', async (req, resp) => {
    let album = req.body;

    let albumInserido = await salvarAlbum(album);
    resp.send(albumInserido);
})

servidor.put('/album/imagens/:id', upload.single('imagemCapa'), async (req, resp) => {
    let id = req.params.id;
    let imagem = req.file.path;

    let linhasAfetadas = await inserirImagens(id, imagem);
    if (linhasAfetadas == 0)
    resp.status(404).send();
    else
    resp.status(202).send();
})

servidor.get("/album", async(req, resp) => {
    let listaAlbums = await listarAlbums();
    resp.send(listaAlbums);
})

servidor.get('/album/artista/:id', async (req, resp) => {
    let idArtista = req.params.id;
  
    let lista = await buscarAlbumPorArtista(idArtista);
    resp.send(lista);
})

servidor.get('/album/lancamentos/:id', async (req, resp) => {
    let idArtista = req.params.id;
  
    let lista = await buscarUltimosDoisAlbunsPorArtista(idArtista);
    resp.send(lista);
})

servidor.get('/album/lancamentos', async (req, resp) => {  
    let lista = await buscarUltimosAlbuns();
    resp.send(lista);
})


servidor.get('/album/:id', async (req, resp) => {
    let album = req.params.id;
  
    let lista = await buscarAlbumPorId(album);
    resp.send(lista);
})

servidor.delete('/album/:id', async (req, resp) => {
    let id = req.params.id;
  
    let linhasAfetadas = await removerAlbum(id);
    if (linhasAfetadas == 0)
      resp.status(404).send();
    else
      resp.status(202).send();
})

export default servidor;