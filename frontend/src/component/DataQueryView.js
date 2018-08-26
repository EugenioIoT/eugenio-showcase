import React, { Component } from 'react';
import '../css/eugenio-bootstrap.css';
import JsonTable from 'ts-react-json-table';
import Message from '../component/Message';
import ReactLoading from "react-loading";
import { ButtonLoading } from '../component/ButtonLoading';
const { I18n } = require('react-i18nify');

class DataQueryView extends Component {
	state = {
		query: ''
	}

	componentDidMount() {
		this.props.clearDataQuery();
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">{ I18n.t('query.title') }</h3>
				</div>
				<div className="panel-body">
					<div className="form-group">
						<label htmlFor="query">{ I18n.t('query.sql') }</label>
						<textarea id="query" 
							className="form-control" 
							name="query" rows="5" 
							cols="50" value={this.state.query} 
							onChange={(e) => this.setState({ query: e.target.value })}
							placeholder="SELECT r.* FROM {organization}_sandbox.v_{schema}">
						</textarea>
					</div>
					<div className="form-group">
						<ButtonLoading type="button" onClick={() => this.props.onSubmit(this.state.query)} label={ I18n.t('query.execute') } showLoading={this.props.showLoading} className="btn btn-primary" />
					</div>
					<div className="form-group">
			            <Message message={this.props.messageTitle}
			              specificMessage={this.props.specificmessageTitle}
			              visible={this.props.showMessage}
			              messageType={this.props.messageType} />
			        </div>

					<div className="col-md-12">
						<JsonTable className="table" rows={this.props.result} noRowsMessage={ I18n.t('query.message.norow') } />
					</div>
				</div>
			</div>
		)
	}
}

export default DataQueryView;