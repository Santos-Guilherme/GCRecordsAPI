import { Router } from "express";
import { buscarShowParaAcontecer, buscarShowPorId, buscarShowsPorArtista, buscarShowsPrincipais, cancelarShow, listarShows } from "../repository/showRepository.js";

let servidor = Router();

servidor.post('/show', async (req, resp) => {
    let show = req.body;

    let showInserido = await salvarAlbum(show);
    resp.send(showInserido);
})

servidor.get("/show", async(req, resp) => {
    let listaShows = await buscarShowParaAcontecer();
    resp.send(listaShows);
})

servidor.get('/show/todos', async (req, resp) => {
    let listaShows = await listarShows();
    resp.send(listaShows);
})

servidor.get("/show/principais", async(req, resp) => {
    let listaShows = await buscarShowsPrincipais();
    resp.send(listaShows);
})

servidor.get("/show/artista", async(req, resp) => {
    let show = req.body;

    let listaShows = await buscarShowsPorArtista(show.idArtista);
    resp.send(listaShows);
})

servidor.get('/show/id', async (req, resp) => {
    let show = req.body;
  
    let lista = await buscarShowPorId(show.id);
    resp.send(lista);
})

servidor.delete('/show/:id', async (req, resp) => {
    let id = req.params.id;
  
    let linhasAfetadas = await cancelarShow(id);
    if (linhasAfetadas == 0)
      resp.status(404).send();
    else
      resp.status(202).send();
})

export default servidor;