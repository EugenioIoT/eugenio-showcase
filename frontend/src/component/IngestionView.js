import React, { Component } from 'react';
import Message, { MessageType } from '../component/Message';
import { ButtonLoading } from '../component/ButtonLoading';
const { I18n } = require('react-i18nify');

class IngestionView extends Component {
	state = {
		error: null
	}

	componentWillMount() {
		this.props.getResources();
		this.props.clearIngestion();
	}

	onChange = (e) => {
		this.props.onChange(e.target.value);
	}

	onClick = () => {
		this.props.onSubmit(this.props.schema, this.props.jsonSchema);
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">{ I18n.t('ingestion.title') }</h3>
				</div>

				<div className="panel-body">
					<div className="form-group">
						<label htmlFor="schema">{ I18n.t('common.schema') }</label>
						<select name="schema" className="form-control" onChange={(e) => this.props.setSchema(e)}>
							<option value="">--</option>
							{
								this.props.schemas.map(function(schema, index) {
									return (<option key={schema.name} value={index}>{schema.name}</option>);
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="jsonSchema">{ I18n.t('ingestion.value') }</label>
						<textarea id="jsonSchema" className="form-control" 
							name="jsonSchema" rows="10" cols="50" 
							value={this.props.jsonSchema} onChange={this.onChange}>
						</textarea>
					</div>
					<div className="form-group">
						<ButtonLoading type="button" onClick={this.onClick} label={ I18n.t('ingestion.send') } showLoading={this.props.showLoading} className="btn btn-primary" />
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

export default IngestionView;