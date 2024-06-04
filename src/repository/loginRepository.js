import con from "./connection.js";

export async function salvarLogin(login) {
    let comando = `
    insert into tb_login (nomeUsuario, senha)
    values (?, ?);
    `;

    let resp = await con.query(comando, [login.nome, login.senha])
    let info = resp[0];


    login.id = inso.inserId;
    return login;
}

export async function listarLogins() {
    let comando = `
        select * from tb_login
    `;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function buscarUsuario(login) {
    let comando = `
        select * from tb_login where nomeUsuario = ? and senha = ?
    `;

    let resp = await con.query(comando, [login.nome, login.senha]);
    let linha = resp[0];

    return linha;
}