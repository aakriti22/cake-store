import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import './components/ApplicationCss.css';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Cake from './components/Cake';
import { createStore } from 'redux';
import CakeReducer from './redux/CakeReducer';
import { Provider } from 'react-redux';

function App() {
  const store = createStore(CakeReducer);
  return (
   <Provider store={store}>
    <div className="App">
      	<BrowserRouter>
		<div className="NavLeft">
			<nav>
				<ul>
				<li>
					<Link to="/"> Home Page </Link>
				</li>
				<li>
					<Link to="/cake"> Buy Cake </Link>
				</li>
				</ul>
			</nav>
		</div>
		<div className="RightBar">
			<Switch>
				<Route exact path="/">
				  <HomePage />
				</Route>
				<Route exact path="/cake">
				  <Cake />
				</Route>
			</Switch>
		</div>
	</BrowserRouter>
    </div>
  </Provider>
  );
}

export default App;
