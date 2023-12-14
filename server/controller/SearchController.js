import * as repository from '../repository/SearchRepository.js';


/* 도서 검색 */
export async function getSearchBook(req, res) {
	const searchBook = req.body.sname;  // 데이터 하나 받을래
	console.log(`controller 요청 받은 데이터 ${searchBook}`)
	const result = await repository.getSearchBook(searchBook)
	// console.log(result);
	console.log(`controller 결과 받은 데이터 ${result}`)
	res.json(result);
}