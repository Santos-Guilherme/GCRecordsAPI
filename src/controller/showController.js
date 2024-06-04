import { Router } from "express";
import {
    salvarShow,
    buscarShowPorId,
    buscarShowsPorArtista,
    buscarShowsPrincipais,
    cancelarShow,
    listarShows,
    ConsultarShowsData,
    ConsultarShowsPrincipaisData,
    ConsultarShowsPorArtistaeData,
    ConsultarShowsArtistaPrincipaisData,
    verificarShowExistente,
    atualizarShow
} from "../repository/showRepository.js";

let servidor = Router();

servidor.post('/show', async (req, resp) => {
    let show = req.body;

    let showInserido = await salvarShow(show);
    resp.send(showInserido);
});

servidor.put('/show', async (req, resp) => {
    let show = req.body;

    let showAtualizado = await atualizarShow(show);
    resp.send(showAtualizado);
});

servidor.get("/show", async(req, resp) => {
    let listaShows = await listarShows();
    resp.send(listaShows);
});

servidor.get("/show/principais", async(req, resp) => {
    let listaShows = await buscarShowsPrincipais();
    resp.send(listaShows);
});

servidor.get("/show/artista/:id", async(req, resp) => {
    let id = req.params.id;

    let listaShows = await buscarShowsPorArtista(id);
    resp.send(listaShows);
});

servidor.get('/show/:id', async (req, resp) => {
    let show = req.params.id;
  
    let lista = await buscarShowPorId(show);
    resp.send(lista);
});

servidor.delete('/show/:id', async (req, resp) => {
    let id = req.params.id;
  
    let linhasAfetadas = await cancelarShow(id);
    if (linhasAfetadas == 0)
        resp.status(404).send();
    else
        resp.status(202).send();
});

servidor.get("/show/data/:dataInicio/:dataFim", async (req, resp) => {
    let { dataInicio, dataFim } = req.params;
    let shows = await ConsultarShowsData(dataInicio, dataFim);
    resp.send(shows);
});

servidor.get("/show/principais/data/:dataInicio/:dataFim", async (req, resp) => {
    let { dataInicio, dataFim } = req.params;
    let shows = await ConsultarShowsPrincipaisData(dataInicio, dataFim);
    resp.send(shows);
});

servidor.get("/show/artista/:id/data/:dataInicio/:dataFim", async (req, resp) => {
    let { id, dataInicio, dataFim } = req.params;
    let shows = await ConsultarShowsPorArtistaeData(id, dataInicio, dataFim);
    resp.send(shows);
});

servidor.get("/show/artista/:id/principais/data/:dataInicio/:dataFim", async (req, resp) => {
    let { id, dataInicio, dataFim } = req.params;
    let shows = await ConsultarShowsArtistaPrincipaisData(id, dataInicio, dataFim);
    resp.send(shows);
});

servidor.get('/show/verificar/:id/data/:dataHora', async (req, resp) => {
    try {
        let { id, dataHora} = req.params;
        const existe = await verificarShowExistente(id, dataHora);
        resp.send({ existe });
    } catch (error) {
        console.error('Erro ao verificar show existente:', error);
        resp.status(500).send('Erro ao verificar show existente');
    }
});

export default servidor;