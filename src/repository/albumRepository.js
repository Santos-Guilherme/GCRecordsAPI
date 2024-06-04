import con from "./connection.js";

export async function salvarAlbum(album) {
  let comando = `
      insert into tb_album (nm_album, dataLancamento, linkSpotify, fk_idArtista, imgCapa) 
                    values (?, ?, ?, ?, ?)
    `;

  let resp = await con.query(comando, [album.nome, album.lancamento, album.spotify, album.artista, ""]);
  let info = resp[0];

  album.id = info.insertId;
  return album;
}

export async function inserirImagens(id, caminhoCapa) {
  let comando = `
        update tb_album set imgCapa = ?
                    where id_album = ?
    `;

  let resp = await con.query(comando, [caminhoCapa, id]);
  let info = resp[0];

  return info.affectedRows;
}

export async function listarAlbums() {
  let comando = `
    select 
        a.id_album       as id, 
        a.nm_album       as nome, 
        a.dataLancamento as lancamento, 
        a.linkSpotify    as spotify, 
        a.imgCapa        as capa, 
        a.fk_idArtista   as artistaId,
        ar.nm_artista    as artista
    from tb_album a
    inner join tb_artista ar on a.fk_idArtista = ar.id_artista
    order by a.dataLancamento desc
  `;

  let resp = await con.query(comando, []);
  let linhas = resp[0];

  return linhas;
}

export async function buscarAlbumPorArtista(id) {
  let comando = `
    select 
        a.id_album       as id, 
        a.nm_album       as nome, 
        a.dataLancamento as lancamento, 
        a.linkSpotify    as spotify, 
        a.imgCapa        as capa, 
        a.fk_idArtista   as artistaId,
        ar.nm_artista    as artista
    from tb_album a
    inner join tb_artista ar on a.fk_idArtista = ar.id_artista
    where a.fk_idArtista = ?
    order by a.dataLancamento desc
  `;

  let resp = await con.query(comando, [id]);
  let linhas = resp[0];

  return linhas;
}

export async function buscarAlbumPorNome(nome) {
  let comando = `
      select 
          a.id_album       as id, 
          a.nm_album       as nome, 
          a.dataLancamento as lancamento, 
          a.linkSpotify    as spotify, 
          a.imgCapa        as capa, 
          a.fk_idArtista   as artistaId,
          ar.nm_artista    as artista
      from tb_album a
      inner join tb_artista ar on a.fk_idArtista = ar.id_artista
      where a.nm_album like ?
      order by a.dataLancamento desc
  `;

  let filtroComWildcard = `%${nome}%`;
  let resp = await con.query(comando, [filtroComWildcard]);
  return resp[0];
}

export async function buscarAlbumPorId(id) {
  let comando = `
    select 
        a.id_album       as id, 
        a.nm_album       as nome, 
        a.dataLancamento as lancamento, 
        a.linkSpotify    as spotify, 
        a.imgCapa        as capa, 
        a.fk_idArtista   as artistaId,
        ar.nm_artista    as artista
    from tb_album a
    inner join tb_artista ar on a.fk_idArtista = ar.id_artista
    where a.id_album = ?
  `;

  let resp = await con.query(comando, [id]);
  let linhas = resp[0];

  return linhas[0];
}

export async function removerAlbum(id) {
  let comando = `
      delete from tb_album where id_album = ?
    `;

  let resp = await con.query(comando, [id]);
  let info = resp[0];

  return info.affectedRows;
}

export async function buscarUltimosDoisAlbunsPorArtista(id) {
  let comando = `
    select id_album     id, 
    nm_album            nome, 
    dataLancamento      lancamento, 
    linkSpotify         spotify, 
    imgCapa             capa, 
    fk_idArtista        artista
    from tb_album
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
    select id_album     id, 
    nm_album            nome, 
    dataLancamento      lancamento, 
    linkSpotify         spotify, 
    imgCapa             capa, 
    fk_idArtista        artista
    from tb_album
    order by dataLancamento desc
    limit 4
  `;

  let resp = await con.query(comando);
  let linhas = resp[0];

  return linhas;
}

export async function atualizarAlbum(album) {
  let comando = `
    UPDATE tb_album
    SET nm_album = ?, 
        dataLancamento = ?, 
        linkSpotify = ?, 
        fk_idArtista = ?, 
        imgCapa = ?
    WHERE id_album = ?
  `;

  let resp = await con.query(comando, [
    album.nome,
    album.lancamento,
    album.spotify,
    album.artista,
    album.imgCapa,
    album.id
  ]);

  return resp[0].affectedRows > 0;
}