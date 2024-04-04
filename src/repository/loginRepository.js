import con from "./connection.js";

export async function salvarLogin(login) {
  let comando = `
    insert into tbLogin (nomeUsuario, senhaUsuario) 
                  values (?, ?)
  `

  let resp = await con.query(comando, [login.user, login.senha])
  let info = resp[0];

  login.id = info.insertId;
  return login;
}

export async function listarLogins() {
  let comando = `
    select *
      from tbLogin
  `

  let resp = await con.query(comando, []);
  let linhas = resp[0];

  return linhas;
}