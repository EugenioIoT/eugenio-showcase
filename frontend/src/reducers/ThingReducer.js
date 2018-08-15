import { THING_SENT, 
  THING_SUCCESS, 
  THING_ERROR } from '../actions/ThingActions';
import { MessageType } from '../component/Message';
const { I18n } = require('react-i18nify');

const initialState = {
  error: null,
  things: []
};

const thingReducer = (state=initialState, action) => {
  switch (action.type) {
  case THING_SENT:
    console.log('things sent');
    return {
      ...state,
      showMessage: false,
      messageType: ''
    };
  case THING_SUCCESS:
    console.log('things success');
    return {
      ...state, 
      messageType: MessageType.INFO,
      things: action.things
    };
  case THING_ERROR:
    console.log('things error');
    return {
      ...state, 
      messageTitle: I18n.t('ingestion.message.thingApiError'),
      specificmessageTitle: state.message,
      showMessage: true,
      messageType: MessageType.ERROR
    };

  default:
    return state;
  }
};

export default thingReducer;