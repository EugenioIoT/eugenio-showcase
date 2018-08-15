import { INGESTION_SENT, 
  INGESTION_SUCCESS, 
  INGESTION_ERROR,
  INGESTION_CLEAR
} from '../actions/IngestionActions';
import { MessageType } from '../component/Message';
const { I18n } = require('react-i18nify');

const initialState = {
  error: null
};

const ingestionReducer = (state=initialState, action) => {
  switch (action.type) {
  case INGESTION_SENT:
    console.log('ingestion sent');
    return {
      ...state,
      showMessage: false,
      messageType: '',
      error: undefined,
      showLoading: action.showLoading,
      result: []
    };
  case INGESTION_SUCCESS:
    console.log('ingestion success');
    return {
      ...state, 
      messageTitle: I18n.t('ingestion.message.successMessage'),
      specificmessageTitle: state.message,
      showMessage: true,
      messageType: MessageType.INFO,
      result: action.result,
      showLoading: action.showLoading
    };
  case INGESTION_ERROR:
    console.log('ingestion error');
    return {
      ...state, 
      messageTitle: I18n.t('ingestion.message.errorApi'),
      specificmessageTitle: action.error.message,
      showMessage: true,
      messageType: MessageType.ERROR,
      showLoading: action.showLoading
    };
  case INGESTION_CLEAR:
    console.log('ingestion clear');
    return {
      ...state, 
      messageTitle: '',
      specificmessageTitle: '',
      showMessage: false,
      messageType: '',
      showLoading: action.showLoading
    };

  default:
    return state;
  }
};

export default ingestionReducer;