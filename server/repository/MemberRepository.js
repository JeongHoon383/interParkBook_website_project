import { db } from '../db/database.js';

export async function insertMember(id, password, name, email, phone) {
  const sql = 'insert into member(id, password, name, email, phone) value(?,?,?,?,?)';
  return db.execute(sql, [id, password, name, email, phone]).then((result) => 'success');
}

export async function selectMember(id) {
  const sql = 'select count(password) as count, ANY_VALUE(password) as password from member where id = ?';
  return db.execute(sql, [id]).then((result) => result[0][0]);
}
