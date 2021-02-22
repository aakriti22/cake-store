import CakeAction from './CakeAction';

const initialState = {
	count: 100
}

const CakeReducer = (state = initialState, action) => {
	switch(action.type){
		case "buy_cake": return{
			count: state.count-1
		}
		default: return state
	}
}

export default CakeReducer;