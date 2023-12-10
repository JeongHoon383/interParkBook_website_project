
import {db} from '../db/database.js';

export async function getList(){
  return db
        .execute('select * from book')
        .then((rows) => rows[0]);
}