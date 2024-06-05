import con from "./connection.js";

export async function salvarArtista(artista) {
    let comando = `
      insert into tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let resp = await con.query(comando, [artista.nome, artista.biografia, artista.instagram, artista.tiktok, artista.twitter, artista.youtube, artista.spotify, "", ""])
    let info = resp[0];

    artista.id = info.insertId;
    return artista;
}

export async function inserirImagens(id, caminhoCapa, caminhoSelfie) {
    let comando = `
        update tb_artista set imgCapa = ?, imgSelfie = ? 
                    where id_artista = ?
    `;

    let resp = await con.query(comando, [caminhoCapa, caminhoSelfie, id])

    return resp;
}

export async function listarArtistas() {
    let comando = `
      select id_artista         id, 
             nm_artista         nome, 
             descBiografia      biografia, 
             linkInstagram      instagram,
             linkTiktok         tiktok,
             linkTwitter        twitter,
             linkYoutube        youtube,
             linkSpotify        spotify,
             imgCapa            capa,
             imgSelfie          selfie
        from tb_artista
        order by nm_artista
    `;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function filtrarArtistaPorNome(nome) {
    let comando = `
      select id_artista         id, 
            nm_artista          nome, 
            descBiografia       biografia, 
            linkInstagram       instagram,
            linkTiktok          tiktok,
            linkTwitter         twitter,
            linkYoutube         youtube,
            linkSpotify         spotify,
            imgCapa             capa,
            imgSelfie           selfie
        from tb_artista
       where nm_artista like ?
    `;

    let resp = await con.query(comando, [`%${nome}%`]);
    let linhas = resp[0];

    return linhas;
}

export async function buscarArtistaPorNome(nome) {
    let comando = `
      select id_artista         id, 
            nm_artista          nome
        from tb_artista
       where nm_artista = ?
    `;

    let [linhas] = await con.query(comando, [nome]);

    return linhas.length > 0 ? linhas[0] : null;
}

export async function buscarArtistaPorId(id) {
    let comando = `
      select id_artista as      id, 
            nm_artista as             nome, 
            descBiografia       biografia, 
            linkInstagram       instagram,
            linkTiktok          tiktok,
            linkTwitter         twitter,
            linkYoutube         youtube,
            linkSpotify         spotify,
            imgCapa             capa,
            imgSelfie           selfie
        from tb_artista
       where id_artista = ?
    `;

    let resp = await con.query(comando, [id]);
    let linhas = resp[0];
    if (linhas.length > 0) {
        return linhas[0];
    } else {
        return null;
    }
}

export async function removerArtista(id) {
    let comando = `
      delete from tb_artista where id_artista = ?
    `;

    let resp = await con.query(comando, [id]);
    let info = resp[0];

    return info.affectedRows;
}

export async function atualizarArtista(id, artista) {
    let comando = `
        UPDATE tb_artista
        SET nm_artista = ?, 
            descBiografia = ?, 
            linkInstagram = ?, 
            linkTiktok = ?, 
            linkTwitter = ?, 
            linkYoutube = ?, 
            linkSpotify = ?
        WHERE id_artista = ?
    `;

    let resp = await con.query(comando, [
        artista.nome,
        artista.biografia,
        artista.instagram,
        artista.tiktok,
        artista.twitter,
        artista.youtube,
        artista.spotify,
        id
    ]);

    return resp[0].affectedRows > 0;
}

export async function atualizarImagemCapa(id, caminhoCapa) {
    let comando = `
        UPDATE tb_artista
        SET imgCapa = ?
        WHERE id_artista = ?
    `;

    let resp = await con.query(comando, [caminhoCapa, id]);

    return resp[0].affectedRows > 0;
}

export async function atualizarImagemSelfie(id, caminhoSelfie) {
    let comando = `
        UPDATE tb_artista
        SET imgSelfie = ?
        WHERE id_artista = ?
    `;

    let resp = await con.query(comando, [caminhoSelfie, id]);

    return resp[0].affectedRows > 0;
}
