import * as categoryMainRepository from '../repository/CategoryMainRepository.js';

export async function getList(req, res){
  const rows = await categoryMainRepository.getList();
  console.log(rows);
  res.json(rows);
}