import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../css/Admin.css'
import Table from 'react-bootstrap/Table';

export default function AdminPage() {
	return (
		<div className="adminpagetab">

			<Tabs className="adminpageta" defaultActiveKey="profile" id="uncontrolled-tab-example"
				classname="mb-3">

				<Tab eventKey="home" title="Members">



				<div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>회원 </th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      


    </div>
				</Tab>
				
				



				<Tab eventKey="profile" title="Book Info">
				<div className="adminpagebookbox">
					<div className="isbn"> <input type="text" placeholder="ISBN"/></div>
					<div className="title"> <input type="text" placeholder="TITLE"/></div>
					<div className="author"> <input type="text" placeholder="AUTHOR"/></div>
					<div className="p_date"> <input type="text" placeholder="P_DATE"/></div>
					<div className="description"> <input type="text" placeholder="DESCRIPTION"/></div>
					<div className="pricesales"> <input type="text" placeholder="PRICESALES"/></div>
					<div className="pricestandard"> <input type="text" placeholder="PRICESTANDARD"/></div>
					<div className="malltype"> <input type="text" placeholder="MALLTYPE"/></div>
					<div className="mileage"> <input type="text" placeholder="MILEAGE"/></div>
					<div className="cover"> <input type="text" placeholder="COVER"/></div>
					<div className="publisher"> <input type="text" placeholder="PUBLISHER"/></div>
					<div className="salespoint"> <input type="text" placeholder="SALESPOINT"/></div>
					<div className="sort"> <input type="text" placeholder="SORT"/></div>
					<div className="bestrank"> <input type="text" placeholder="BESTRANK"/></div>
					<div className="categoryid"> <input type="text" placeholder="CATEGORYID"/></div>

					<button className="adminpageinsertbtn">INSERT</button>
				</div>
				</Tab>
		
			</Tabs>


		</div>
	)
}