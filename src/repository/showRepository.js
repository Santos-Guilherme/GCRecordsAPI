import con from "./connection.js";

export async function salvarShow(show) {
    let comando = `
      insert into tb_show (nm_show, descEndereco, dataShow, blFestival, fk_idArtista) 
                    values (?, ?, ?, ?, ?)
    `;

    let resp = await con.query(comando, [show.nome, show.endereco, show.data, show.festival, show.artista])
    let info = resp[0];

    show.id = info.insertId;
    return show;
}

export async function listarShows() {
    let comando = `
        SELECT s.id_show AS id,
               s.nm_show AS nome,
               s.descEndereco AS endereco,
               s.dataShow AS data,
               s.blFestival AS festival,
               s.fk_idArtista AS artistaId,
               a.nm_artista AS nomeArtista
        FROM tb_show s
        INNER JOIN tb_artista a ON s.fk_idArtista = a.id_artista
    `;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function verificarShowExistente(artistaId, dataHora) {
    let comando = `
        SELECT COUNT(*) AS count
        FROM tb_show
        WHERE fk_idArtista = ?
          AND dataShow = ?
    `;

    let resp = await con.query(comando, [artistaId, dataHora]);
    let linhas = resp[0];

    return linhas[0].count > 0;
}

export async function buscarShowsPrincipais() {
    let comando = `
        select s.id_show       id,
        s.nm_show       nome,
        s.descEndereco  endereco,
        s.dataShow      data,
        s.blFestival    festival,
        s.fk_idArtista  artista, a.nm_artista nomeArtista, a.imgSelfie imagemArtista
        FROM tb_show s
        JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.blFestival = true
        AND dataShow >= CURRENT_DATE
        order by dataShow
    `;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function buscarShowsPorArtista(id) {
    let comando = `
        SELECT s.id_show AS id,
               s.nm_show AS nome,
               s.descEndereco AS endereco,
               s.dataShow AS data,
               s.blFestival AS festival,
               a.nm_artista AS nomeArtista
        FROM tb_show s
        INNER JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.fk_idArtista = ?
        ORDER BY s.dataShow
    `;

    let resp = await con.query(comando, [id]);
    let linhas = resp[0];

    return linhas;
}

export async function buscarShowPorId(id) {
    let comando = `
        SELECT s.id_show AS id,
               s.nm_show AS nome,
               s.descEndereco AS endereco,
               s.dataShow AS data,
               s.blFestival AS festival,
               a.nm_artista AS nomeArtista
        FROM tb_show s
        INNER JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.id_show = ?
    `;

    let resp = await con.query(comando, [id]);
    let linhas = resp[0];

    return linhas;
}

export async function ConsultarShowsData(dataInicio, dataFim) {
    let comando = `
        SELECT s.id_show AS id,
               s.nm_show AS nome,
               s.descEndereco AS endereco,
               s.dataShow AS data,
               s.blFestival AS festival,
               a.nm_artista AS nomeArtista
        FROM tb_show s
        INNER JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.dataShow BETWEEN ? AND ?
        ORDER BY s.dataShow
    `;

    let resp = await con.query(comando, [dataInicio, dataFim]);
    return resp[0];
}

export async function ConsultarShowsPrincipaisData(dataInicio, dataFim) {
    let comando = `
        SELECT s.id_show AS id,
               s.nm_show AS nome,
               s.descEndereco AS endereco,
               s.dataShow AS data,
               s.blFestival AS festival,
               a.nm_artista AS nomeArtista
        FROM tb_show s
        INNER JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.blFestival = true AND s.dataShow BETWEEN ? AND ?
        ORDER BY s.dataShow
    `;

    let resp = await con.query(comando, [dataInicio, dataFim]);
    return resp[0];
}

export async function ConsultarShowsPorArtistaeData(artistaId, dataInicio, dataFim) {
    let comando = `
        SELECT s.id_show AS id,
               s.nm_show AS nome,
               s.descEndereco AS endereco,
               s.dataShow AS data,
               s.blFestival AS festival,
               a.nm_artista AS nomeArtista
        FROM tb_show s
        INNER JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.fk_idArtista = ? AND s.dataShow BETWEEN ? AND ?
        ORDER BY s.dataShow
    `;

    let resp = await con.query(comando, [artistaId, dataInicio, dataFim]);
    return resp[0];
}

export async function ConsultarShowsArtistaPrincipaisData(artistaId, dataInicio, dataFim) {
    let comando = `
        SELECT s.id_show AS id,
               s.nm_show AS nome,
               s.descEndereco AS endereco,
               s.dataShow AS data,
               s.blFestival AS festival,
               a.nm_artista AS nomeArtista
        FROM tb_show s
        INNER JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.fk_idArtista = ? AND s.blFestival = true AND s.dataShow BETWEEN ? AND ?
        ORDER BY s.dataShow
    `;

    let resp = await con.query(comando, [artistaId, dataInicio, dataFim]);
    return resp[0];
}

export async function atualizarShow(show) {
    let comando = `
      update tb_show set dataShow = ? 
        where id_show = ?
    `;

    let resp = await con.query(comando, [show.dataShow, show.id])
    let info = resp[0];

    show.id = info.insertId;
    return show;
}

export async function cancelarShow(id) {
    let comando = `
      delete from tb_show where id_show = ?
    `;

    let resp = await con.query(comando, [id]);
    let info = resp[0];

    return info.affectedRows;
}
