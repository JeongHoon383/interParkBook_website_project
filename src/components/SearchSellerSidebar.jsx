import React from "react";
import { useState } from "react";
import '../css/Search.css'

export default function SearchSellerSidebar (){
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () =>{
		setSidebarOpen(!isSidebarOpen)
	}
	return(
		<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
			<button onclick={toggleSidebar}>Toggle Sidebar</button>
			카테고리

		</div>
	)
}