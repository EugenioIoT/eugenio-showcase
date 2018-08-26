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
    return {
      ...state,
      showMessage: false,
      messageType: '',
      showLoading: action.showLoading
    };
  case THING_SUCCESS:
    return {
      ...state, 
      messageType: MessageType.INFO,
      things: action.things,
      showLoading: action.showLoading
    };
  case THING_ERROR:
    return {
      ...state, 
      messageTitle: I18n.t('thing.message.errorApi'),
      specificmessageTitle: state.message,
      showMessage: true,
      messageType: MessageType.ERROR,
      showLoading: action.showLoading
    };

  default:
    return state;
  }
};

export default thingReducer;