import React, { Component } from 'react';
import '../css/eugenio-bootstrap.css';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
const { I18n } = require('react-i18nify');

function logout() {
  localStorage.removeItem('auth-token');
  localStorage.removeItem('auth-apikey');
  localStorage.removeItem('auth-tenant');
}

class Menu extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<ul className="nav navbar-pills">
				<li><Link to="/home" className="pure-menu-link">{ I18n.t('common.home') }</Link></li>
				<li><Link to="/ingestion" className="pure-menu-link">{ I18n.t('ingestion.title') }</Link></li>
				<li><Link to="/dataquery" className="pure-menu-link">{ I18n.t('query.title') }</Link></li>
				<li><Link to="/command" className="pure-menu-link">{ I18n.t('command.title') }</Link></li>
				<li><a href="" onClick={logout} className="pure-menu-link">{ I18n.t('common.logout') }</a></li>
			</ul>
		)
	}
}

export default Menu;