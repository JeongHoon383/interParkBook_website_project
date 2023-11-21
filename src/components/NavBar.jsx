import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
	return (
		<div className="container">
			<div className="navbar">
				<div className="navbar_left">
					<Link to='/'>홈</Link>
					<Link to='/tour'>투어</Link>
					<Link to='/ticket'>티켓</Link>
					<Link to='/shopping'>쇼핑</Link>
					<Link to='/book'>도서</Link>
				</div>

				<div className="navbar_right">
					<Link to='/login'>로그인</Link>
					<Link to='/signup'>회원가입</Link>
					<Link to='/bookcart'>북카트</Link>
					<Link to='/mypage'>마이페이지</Link>
					<Link to='/bookpinion'>북피니언</Link>
					<Link to='/customer'>고객센터</Link>

				</div>
			</div>
		</div>
	)
}