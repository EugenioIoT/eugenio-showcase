import { THINGSINVOKE_SENT, THINGSINVOKE_SUCCESS, THINGSINVOKE_ERROR, THINGSINVOKE_CLEAR } from '../actions/ThingsInvokeActions';
import { MessageType } from '../component/Message';
const { I18n } = require('react-i18nify');

const initialState = {
  error: null,
};

const thingsInvokeReducer = (state=initialState, action) => {
  switch (action.type) {
  case THINGSINVOKE_SENT:
    return {
      ...state,
      showMessage: false,
      messageType: '',
      result: [],
      error: undefined,
      showLoading: action.showLoading
    };
  case THINGSINVOKE_SUCCESS:
    return {
      ...state, 
      messageTitle: I18n.t('thingsInvoke.message.topten'),
      specificmessageTitle: state.message,
      showMessage: true,
      messageType: MessageType.INFO,
      result: action.result,
      showLoading: action.showLoading
    };
  case THINGSINVOKE_ERROR:
    return {
      ...state, 
      messageTitle: I18n.t('thingsInvoke.message.errorApi'),
      specificmessageTitle: action.error,
      showMessage: true,
      messageType: MessageType.ERROR,
      showLoading: action.showLoading
    };
  case THINGSINVOKE_CLEAR:
    return {
      ...state, 
      messageTitle: '',
      specificmessageTitle: '',
      showMessage: false,
      messageType: '',
      result: [],
      showLoading: action.showLoading
    };
  default:
    return state;
  }
};

export default thingsInvokeReducer;