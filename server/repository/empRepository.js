import {db} from '../db/database.js';

export async function getList(){
  const sql = `
          select row_number() over(order by emp_id) rno, 
          e.emp_id, 
              e.emp_name, 
              left(e.hire_date,10) as hire_date,
              d.dept_name as dept_id,
              e.phone,
              e.email 
          from employee e, department d 
          where e.dept_id = d.dept_id
  `;

  return db.
        execute(sql)
        .then((rows) => rows[0]);
}