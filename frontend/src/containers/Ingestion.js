import React, { Component } from 'react';
import {connect} from 'react-redux';
import IngestionView from '../component/IngestionView';
import {fetchIngestion, clearIngestion} from '../actions/IngestionActions';
import {findAllSchemas} from '../actions/SchemaActions';
import { bindActionCreators } from 'redux';
import { MessageType } from '../component/Message';
const { I18n } = require('react-i18nify');

class IngestionContainer extends Component {
  state = {
    schema: null,
    jsonSchema: '',
  };

  onChange = (newSchema) => this.setState({ jsonSchema: newSchema });

  ingestion = (query) => {
    this.props.fetchIngestion(this.state.schema, this.state.jsonSchema);
  };

  getResources = () => {
    return this.props.findAllSchemas();
  };

  setSchema = (event) => {
    const index = event.target.value;
    const selectedSchema = this.props.schemas[index];
    this.setState({ 
      schema: selectedSchema,
      jsonSchema: JSON.stringify(selectedSchema.fields, null, "\t"),
    });
  }

  render() {
    return (
      <IngestionView 
        {...this.props}
        schemas={this.props.schemas}
        onSubmit={this.ingestion}
        clearIngestion={this.props.clearIngestion}
        getResources={this.getResources}
        setSchema={this.setSchema}
        schema={this.state.schema}
        jsonSchema={this.state.jsonSchema}
        onChange={this.onChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const ingestionState = state.ingestion;
  const schemaState = state.schema;
  return {
    result: ingestionState.result,
    schemas: schemaState.schemas,
    messageTitle: ingestionState.messageTitle,
    specificmessageTitle: ingestionState.specificmessageTitle,
    showMessage: ingestionState.showMessage,
    messageType: ingestionState.messageType,
    showLoading: ingestionState.showLoading || schemaState.showLoading
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchIngestion,
  findAllSchemas,
  clearIngestion,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IngestionContainer);
