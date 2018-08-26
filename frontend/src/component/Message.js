import React, { Component } from 'react';
import '../css/eugenio-bootstrap.css';
const { I18n } = require('react-i18nify');

const MessageType = {
	ERROR: 'alert alert-danger',
	INFO: 'alert alert-info'
}

class Message extends Component {

	constructor() {
		super();
		this.state = { message: '', specificMessage: '', visible: false, messageType: MessageType.ERROR };
	}

	render() {
		return (
			<div>
				{
					this.props.visible ?
	              	<div className={this.props.messageType}>
	                	<strong>{this.props.message}</strong>
	                	{ this.props.specificMessage ? <p>{this.props.specificMessage}</p> : '' }
	              	</div>
		            :
		            ''
	        	}
	        </div>
		)
	}

}

export { MessageType };
export default Message;