import React, { Component } from 'react';
import {connect} from 'react-redux';
import ThingsInvokeView from '../component/ThingsInvokeView';
import {fetchThingsInvoke, clearThingsInvoke} from '../actions/ThingsInvokeActions';
import {findAllThings} from '../actions/ThingActions';
import { bindActionCreators } from 'redux';
import { MessageType } from '../component/Message';
const { I18n } = require('react-i18nify');

class ThingsInvokeContainer extends Component {
  state = {
    thing: null,
    json: '',
  };

  onChange = (newJson) => this.setState({ json: newJson });

  thingsInvoke = (deviceId, json) => {
    this.props.fetchThingsInvoke(deviceId, json);
  };

  getResources = () => {
    return this.props.findAllThings();
  };

  clearThingsInvoke = () => {
    this.props.clearThingsInvoke();
  }

  setThing = (event) => {
    const index = event.target.value;
    const selectedThing = this.props.things[index];
    this.setState({ 
      thing: selectedThing,
      json: JSON.stringify(JSON.parse('{"method":"", "payload":"", "timeout":0}'), null, "\t")
    });
  }

  render() {
    return (
      <ThingsInvokeView 
        {...this.props}
        things={this.props.things}
        onSubmit={this.thingsInvoke}
        clearThingsInvoke={this.clearThingsInvoke}
        getResources={this.getResources}
        setThing={this.setThing}
        thing={this.state.thing}
        json={this.state.json}
        onChange={this.onChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const thingsInvokeState = state.thingsInvoke;
  const thingstate = state.thing;
  return {
    things: thingstate.things,
    messageTitle: thingsInvokeState.messageTitle,
    specificmessageTitle: thingsInvokeState.specificmessageTitle,
    showMessage: thingsInvokeState.showMessage,
    messageType: thingsInvokeState.messageType,
    showLoading: thingsInvokeState.showLoading
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchThingsInvoke,
  findAllThings,
  clearThingsInvoke
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThingsInvokeContainer);
