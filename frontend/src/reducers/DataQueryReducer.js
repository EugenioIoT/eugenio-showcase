import { DATAQUERY_SENT, DATAQUERY_SUCCESS, DATAQUERY_ERROR, DATAQUERY_CLEAR } from '../actions/DataQueryActions';
import { MessageType } from '../component/Message';
const { I18n } = require('react-i18nify');

const initialState = {
  error: null,
};

const dataQueryReducer = (state=initialState, action) => {
  switch (action.type) {
  case DATAQUERY_SENT:
    return {
      ...state,
      showMessage: false,
      messageType: '',
      result: [],
      error: undefined,
      showLoading: action.showLoading
    };
  case DATAQUERY_SUCCESS:
    return {
      ...state, 
      messageTitle: I18n.t('query.message.topten'),
      specificmessageTitle: state.message,
      showMessage: true,
      messageType: MessageType.INFO,
      result: action.result,
      showLoading: action.showLoading
    };
  case DATAQUERY_ERROR:
    return {
      ...state, 
      messageTitle: I18n.t('query.message.errorApi'),
      specificmessageTitle: action.error.message,
      showMessage: true,
      messageType: MessageType.ERROR,
      showLoading: action.showLoading
    };
  case DATAQUERY_CLEAR:
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

export default dataQueryReducer;