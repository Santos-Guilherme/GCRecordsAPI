import con from "./connection.js";

export async function salvarArtista(artista) {
    let comando = `
      insert into tb_artista (nome, descBibliografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
                    values (?, ?, ?, ?, ?, ?, ?, "", "")
    `
  
    let resp = await con.query(comando, [artista.nome, artista.descBibliografia, artista.linkInstagram, artista.linkTiktok, artista.linkTwitter, artista.linkYoutube, artista.linkSpotify])
    let info = resp[0];
  
    artista.id = info.insertId;
    return artista;
}

export async function inserirImagens(id, caminhoCapa, caminhoSelfie) {
    let comando = `
        update tb_artista set imgCapa = ?, imgSelfie = ? 
                    where id = ?
    `
  
    let resp = await con.query(comando, [caminhoCapa, caminhoSelfie, id])

    return resp;
}

export async function listarArtistas() {
    let comando = `
      select *
        from tb_artista
    `
  
    let resp = await con.query(comando, []);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarArtistaPorNome(nome) {
    let comando = `
      select * from tb_artista
       where nome like ?
    `
  
    let resp = await con.query(comando, [nome]);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarArtistaPorId(id) {
    let comando = `
      select * from tb_artista
       where id = ?
    `
  
    let resp = await con.query(comando, [id]);
    let linhas = resp;
    if (linhas.length > 0) {
        return linhas[0];
    } else {
        return null;
    }
}

export async function removerArtista(id) {
    let comando = `
      delete from tb_artista where id = ?
    `
  
    let resp = await con.query(comando, [id]);
    let info = resp[0];
  
    return info.affectedRows;
}
  