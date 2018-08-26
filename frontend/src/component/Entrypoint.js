import React, { Component } from 'react';
import { IndexRoute, BrowserRouter, Router, Route, Link, browserHistory } from "react-router";
import App from '../App';
import Login from '../containers/Login';
import DataQuery from '../containers/DataQuery';
import Home from './Home';
import Ingestion from '../containers/Ingestion';
import ThingsInvoke from '../containers/ThingsInvoke';

function verifyAuthentication(nextStep, replace) {
  if (localStorage.getItem('auth-token') === null) {
    replace('/');
  }
}

class Entrypoint extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route exact path="/" component={Login} />
				<Route exact path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/ingestion" component={Ingestion} onEnter={verifyAuthentication}/>
					<Route path="/dataquery" component={DataQuery} onEnter={verifyAuthentication}/>
					<Route path="/command" component={ThingsInvoke} onEnter={verifyAuthentication}/>
					<Route path="/home" component={Home} onEnter={verifyAuthentication}/>
				</Route>
			</Router>
		)
	}
}

export default Entrypoint;