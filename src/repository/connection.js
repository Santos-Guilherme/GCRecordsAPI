import mysql from 'mysql2/promise';


const con = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'GCrecords'
});

console.log('Conexão com BD realizada');

export default con;