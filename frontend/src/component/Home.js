import React, { Component } from 'react';
import { I18n }  from 'react-i18nify';

class Home extends Component {

	render() {
		return (
			<div>
              <div className="header">
                <h1>Home</h1>
              </div>
              <div className="content" id="content">
              	{I18n.t('common.welcome')}
			  </div>
			</div>
		)
	}

}

export default Home;