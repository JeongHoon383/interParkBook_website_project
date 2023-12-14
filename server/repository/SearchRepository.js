import { db } from '../db/database.js';

/* SearchBook : 책 상품리스트 조회 */

export async function getSearchBook(searchBook) {
  const sql = `select * from book where title like ?`; 

  return db
    // .execute(sql)
    .execute(sql, [`%${searchBook}%`])
    .then((rows) => rows[0] );  
  }
