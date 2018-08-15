import React, { Component } from 'react';
import {connect} from 'react-redux';
import DataQueryView from '../component/DataQueryView';
import {fetchDataQuery, clearDataQuery} from '../actions/DataQueryActions';
import { bindActionCreators } from 'redux';

class DataQueryContainer extends Component {
  dataQuery = (query) => {
    console.log('action query container');
    this.props.fetchDataQuery(query);
    console.warn(query);
  };

  render() {
    return (
      <DataQueryView 
        {...this.props}
        clearDataQuery={this.props.clearDataQuery}
        onSubmit={this.dataQuery}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const dataQueryState = state.dataQuery;
  return {
    result: dataQueryState.result,
    messageTitle: dataQueryState.messageTitle,
    specificmessageTitle: dataQueryState.specificmessageTitle,
    showMessage: dataQueryState.showMessage,
    messageType: dataQueryState.messageType,
    showLoading: dataQueryState.showLoading
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchDataQuery,
  clearDataQuery
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataQueryContainer);
