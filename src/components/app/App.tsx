import * as React from "react";
import { connect } from 'react-redux';
import {isUndefined} from 'lodash';
import { createStore, bindActionCreators } from 'redux';

import {isLoggedIn, setCurrentUser} from './actions';

import "./App.scss";
import "../../assets/scss/App.scss";
import * as _ from 'lodash';     
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../Home';
import LoginForm from '../LoginForm';
import About from '../About';
import Builder from '../Builder';
import Environments from '../Environments';


import {Api} from '../../services/api';

export interface AppProps {
}

let store = connect((state) => {
    console.log("in App State diya : ", state);
    return {
        setCurrentUser: state.setCurrentUser
    }
}, (dispatch) => {
    console.log("dispatch : ", dispatch(setCurrentUser({email: "hiteshbal91@gmail.com"})));
    return bindActionCreators({
        setCurrentUser: setCurrentUser
    }, dispatch)
});

// Log the initial state
// console.log(store);
const reactLogo = require("../../assets/img/react_logo.svg");

export interface AppProps {
}

async function apicalls(){
	let api = await Api.contentTypes();
    console.log("api",api);
}
apicalls();

export default class App extends React.Component<AppProps, undefined> {
    render() {
    	return (
        	<Router>
	            <div className="app">
				    <header>
				      <Link to="/">Home</Link>
				      <Link to="/about-us">About</Link>
				      <Link to="/builder">Builder</Link>
				      <Link to="/environments">Environments</Link>
				    </header>

				    <main>
				    	<Route exact path="/" component={LoginForm} />
				    	<Route exact path="/home" component={Home} />
	      				<Route exact path="/about-us" component={About} />
	      				<Route exact path="/builder" component={Builder} />
	      				<Route exact path="/environments" component={Builder} />
		                <h1>Hello World! try this great dcdcdcdcdcdcdcdcjdjd</h1>
		                <p>Foo to the barz</p>
		                <img src="#" height="480"/>
				    </main>
	            </div>
	         </Router>    
        );
    }
}
