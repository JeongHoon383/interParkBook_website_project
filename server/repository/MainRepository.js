import { db } from '../db/database.js';

export async function getNew() {
  const sql =
    "select cover, substring_index(author,'(',1) as author, substring_index(title,'-',1) as title from itemnewall limit 10;";
  return db.execute(sql).then((result) => result[0]);
}

export async function getBestSeller() {
  const sql =
    "select cover, bestRank, substring_index(title,'-',1) as title from bestseller where mallType='BOOK' order by bestRank limit 10;";
  return db.execute(sql).then((result) => result[0]);
}

export async function getField(searchCategoryId) {
  const sql = 'select cover, title, priceSales, searchCategoryId from editor_recommend where searchCategoryId=?;';
  return db.execute(sql, [searchCategoryId]).then((result) => result[0]);
}
