import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import "./../assets/scss/App.scss";
import Home from './Home';
import LoginForm from './LoginForm';
import About from './About';

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
        	<Router>
	            <div className="app">
				    <header>
				      <Link to="/">Home</Link>
				      <Link to="/about-us">About</Link>
				    </header>

				    <main>
				    	<Route exact path="/" component={LoginForm} />
				    	<Route exact path="/home" component={Home} />
	      				<Route exact path="/about-us" component={About} />
		                <h1>Hello World! try this great djdjd</h1>
		                <p>Foo to the barz</p>
		                <img src={reactLogo} height="480"/>
				    </main>
	            </div>
	         </Router>    
        );
    }
}
