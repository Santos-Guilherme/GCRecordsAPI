import con from "./connection.js";

export async function salvarShow(show) {
    let comando = `
      insert into tb_show (nome, descEndereco, dataShow, blFestival, blFinalizado, fk_idArtista) 
                    values (?, ?, ?, ?, ?, ?)
    `
  
    let resp = await con.query(comando, [show.nome, show.endereco, show.data, show.festival, show.finalizado, show.artista])
    let info = resp[0];
  
    show.id = info.insertId;
    return show;
}

export async function listarShows() {
    let comando = `
      select *
        from tb_show
    `
  
    let resp = await con.query(comando, []);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarShowParaAcontecer() {
    let comando = `
      select * from tb_show
       where blFinalizado = false
    `
  
    let resp = await con.query(comando, []);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarShowsPrincipais() {
    let comando = `
        SELECT s.*, a.nome AS nomeArtista, a.imgSelfie AS imagemArtista
        FROM tb_show s
        JOIN tb_artista a ON s.fk_idArtista = a.id
        WHERE s.blFestival = true
    `;
  
    let resp = await con.query(comando, []);
    let linhas = resp[0];
  
    return linhas;
}


export async function buscarShowsPorArtista(id) {
    let comando = `
        select * from tb_show
        where fk_idArtista = ?
    `
  
    let resp = await con.query(comando, [id]);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarShowPorId(id) {
    let comando = `
        select * from tb_show
        where id = ?
    `
  
    let resp = await con.query(comando, [id]);
    let linhas = resp[0];
  
    return linhas;
}

export async function buscarShowsPorArtistaEData(album) {
    let comando = `
        select * from tb_show
        where fk_idArtista = ? and dataShow = ?
    `
  
    let resp = await con.query(comando, [album.idArtista, album.data]);
    let linhas = resp[0];
  
    return linhas;
}

export async function mudarLocal(show) {
    let comando = `
      update tb_show set descEndereco = ? 
        where id = ?
    `
  
    let resp = await con.query(comando, [show.endereco, show.id])
    let info = resp[0];
  
    show.id = info.insertId;
    return show;
}

export async function cancelarShow(id) {
    let comando = `
      delete from tb_show where id = ?
    `
  
    let resp = await con.query(comando, [id]);
    let info = resp[0];
  
    return info.affectedRows;
}
  