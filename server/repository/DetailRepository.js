import { db } from "../db/database.js";

export async function getDetail(id) {
  const sql = `SELECT * FROM book WHERE isbn = ?`;
  return db.execute(sql, [id]).then((row) => row[0][0]);
}

export async function insertReview(id, isbn, title, content, point) {
  const sql = `INSERT review (id,isbn,title,content,point,rdate)value(?,?,?,?,?,curdate())`;
  return db.execute(sql, [id, isbn, title, content, point]).then((row) => "ok");
}

export async function getReview(id) {
  const sql = `SELECT *,(SELECT AVG(point) FROM review r2 WHERE r2.isbn = r1.isbn) AS avg_point FROM review r1 WHERE isbn = ?`;
  return db.execute(sql, [id]).then((row) => row[0]);
}
