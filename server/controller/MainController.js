import * as repository from '../repository/MainRepository.js';

export async function getNew(req, res) {
  const result = await repository.getNew();
  res.json(result);
}

export async function getBestSeller(req, res) {
  const result = await repository.getBestSeller();
  res.json(result);
}

export async function getField(req, res) {
  const searchCategoryId = req.params.searchCategoryId;
  const result = await repository.getField(searchCategoryId);
  res.json(result);
}
