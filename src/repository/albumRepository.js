import con from "./connection.js";

export async function salvarAlbum(album) {
    let comando = `
      insert into tb_album (nome, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
                    values (?, ?, ?, "", ?)
    `;
  
    let resp = await con.query(comando, [album.nome, album.data, album.spotify, album.artista]);
    let info = resp[0];
  
    album.id = info.insertId;
    return album;
}

export async function inserirImagens(id, caminhoCapa) {
    let comando = `
        update tb_album set imgCapa = ?
                    where id = ?
    `;
  
    let resp = await con.query(comando, [caminhoCapa, id]);
    let info = resp[0];

    return info.affectedRows;
}

export async function listarAlbums() {
    let comando = `
      select *
        from tb_album
    `;
  
    let resp = await con.query(comando, []);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarAlbumPorArtista(id) {
    let comando = `
      select * from tb_album
       where fk_idArtista = ?
    `;
  
    let resp = await con.query(comando, [id]);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarAlbumPorId(id) {
    let comando = `
      select * from tb_album
       where id = ?
    `;
  
    let resp = await con.query(comando, [id]);
    let linhas = resp[0];
  
    return linhas;
}

export async function removerAlbum(id) {
    let comando = `
      delete from tb_album where id = ?
    `;
  
    let resp = await con.query(comando, [id]);
    let info = resp[0];
  
    return info.affectedRows;
}

export async function buscarUltimosDoisAlbunsPorArtista(id) {
    let comando = `
      select * from tb_album
       where fk_idArtista = ?
       order by dataLancamento desc
       limit 2
    `;
  
    let resp = await con.query(comando, [id]);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarUltimosAlbuns() {
  let comando = `
    select * from tb_album
     order by dataLancamento desc
     limit 4
  `;

  let resp = await con.query(comando);
  let linhas = resp[0];

  return linhas;
}