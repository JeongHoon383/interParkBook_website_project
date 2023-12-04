import * as empRepository from '../repository/empRepository.js';

export async function getList(req, res){
  const rows = await empRepository.getList();
  // console.log(rows);
  res.json(rows);
}