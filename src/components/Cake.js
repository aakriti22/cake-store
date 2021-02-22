import React from 'react';
import Cake1 from './Images/Cake1.jpg';
import { connect } from 'react-redux';
import { CakeAction } from '../redux/CakeAction';

class Cake extends React.Component{
	render(){
		return(
			<div style={{width:"1110px", height:"100%"}}>
				<h1 className="HeaderStyle">Cake</h1>
				<div className="CakeClass">
				  <div className="InnerCake">
				  	<img src={Cake1} alt="Cake1" width="250px" height="200px" />
				  </div>
				  <div className="InnerCake">
					<div className="PriceDiv">
						Rs 880
					</div>
					<div className="PriceDiv">
						Quantity: {this.props.CakeCount}
					</div>
					<button className="BuyCake" onClick={this.props.DecrementCakeCount}> Buy Cake </button>
				  </div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		CakeCount: state.count
	}
}


const mapDispatchToProps = dispatch => {
	return {
		DecrementCakeCount: () => dispatch(CakeAction())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cake);