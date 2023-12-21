import React from "react";
import styled from "styled-components";

const Bookcheckboxes = styled.div`
position:absolute;
left:-1px;
width: 15px;
height: 15px;
`

export default function Bookcheckbox(){
	return(
		

		<Bookcheckboxes>
			<input type="checkbox" />
		</Bookcheckboxes>
		



	)
}