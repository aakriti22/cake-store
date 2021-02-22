import React from 'react';
import ferns from './Images/ferns.jpg';

class HomePage extends React.Component{
	render(){
		return(
			<div style={{width:"1110px"}}>
				<h1 className="HeaderStyle"> The Cake Shop </h1>
				<img src={ferns} width="1100px" height="400px" />
				<div className="CakeText">
					<i>Buy cakes, pastries, gifts, flowers, and much more at best and affordable prices</i>.
				</div>
			</div>		
		)
	}
}

export default HomePage;