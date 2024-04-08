import con from "./connection.js";

export async function salvarLogin(login) {
    let comando = `
    insert into tb_filme (nm_filme, ds_genero, vl_avaliacao, dt_lancamento, bt_ativo, img_filme)
    values (?, ?, ?, ?, ?, ?);
    `

    let resp = await con.query(comando, [login.nome, login.genero, login.avaliacao, login.data_lancamento, login.ativo, login.img])
    let info = resp[0];


    login.id = inso.inserId;
    return login;
}

export async function listarLogins() {
    let comando = `
        select * from tb_login
    `

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}