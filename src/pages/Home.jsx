import React from "react";
import {Link} from "react-router-dom";



export default function Home(){
	return(
		<div>홈!
			<Link to="/"><img src="../images/main.jpg" alt="" /></Link>
		</div>


	)
}