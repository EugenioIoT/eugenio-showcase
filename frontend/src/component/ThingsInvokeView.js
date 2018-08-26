import React, { Component } from 'react';
import Message from '../component/Message';
import { ButtonLoading } from '../component/ButtonLoading';
const { I18n } = require('react-i18nify');

class ThingsInvokeView extends Component {

	state = {
	}

	constructor() {
		super();
	}

	componentDidMount() {
		this.props.clearThingsInvoke();
		this.props.getResources();
		this.setState({ json: JSON.stringify(JSON.parse('{"method":"", "payload":"", "timeout":0}'), null, "\t")});
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">{ I18n.t('thingsInvoke.title') }</h3>
				</div>

				<div className="panel-body">
					<div className="form-group">
						<label htmlFor="device">{ I18n.t('common.device') }</label>
						<select name="device" className="form-control" onChange={(e) => this.setState({ thing: this.props.things[e.target.value].deviceId })}>
							<option value="">--</option>
							{
								this.props.things.map(function(device, index) {
									return (<option key={device.deviceId} value={index}>{device.tags.deviceName}</option>);
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="json">{ I18n.t('thingsInvoke.value') }</label>
						<textarea id="json" className="form-control" 
							name="json" rows="10" cols="50" 
							value={this.state.json} onChange={(e) => this.setState({ json: e.target.value })}>
						</textarea>
					</div>
					<div className="form-group">
						<ButtonLoading type="button" onClick={() => this.props.onSubmit(this.state.thing, this.state.json)} label={ I18n.t('thingsInvoke.send') } showLoading={this.props.showLoading} className="btn btn-primary" />
					</div>
		            <Message message={this.props.messageTitle}
		              specificMessage={this.props.specificmessageTitle}
		              visible={this.props.showMessage}
		              messageType={this.props.messageType} />
				</div>
			</div>
		)
	}
}

export default ThingsInvokeView;