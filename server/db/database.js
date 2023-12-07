import mysql from "mysql2";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "ww1041960!",
  database: "book2023",
});

export const db = pool.promise();
