import express from 'express';
import * as repository from '../repository/MemberRepository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function insertMember(req, res) {
  const { id, password, name, email, phone } = req.body;
  console.log(req.body);
  const hashPass = bcrypt.hashSync(password, 10);
  console.log(req.body);
  const result = await repository.insertMember(id, hashPass, name, email, phone);
  res.json(result);
}

export async function selectMember(req, res) {
  const { id, password } = req.body;
  const result = await repository.selectMember(id);
  result.login_result = false;
  if (result.count === 1) {
    if (await bcrypt.compare(password, result.password)) {
      result.login_result = true; // 로그인 성공
      //jwt 토큰 생성
      const rememberUserInfo = jwt.sign({ id: id }, 'ikbHR397&7YP');
      result.rememberUserInfo = rememberUserInfo;
    }
    res.json(result);
  }
}
