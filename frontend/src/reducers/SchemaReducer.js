import { SCHEMA_SENT, 
  SCHEMA_SUCCESS, 
  SCHEMA_ERROR } from '../actions/SchemaActions';
import { MessageType } from '../component/Message';
const { I18n } = require('react-i18nify');

const initialState = {
  error: null,
  schemas: []
};

const schemaReducer = (state=initialState, action) => {
  switch (action.type) {
  case SCHEMA_SENT:
    console.log('schemas sent');
    return {
      ...state,
      showMessage: false,
      messageType: ''
    };
  case SCHEMA_SUCCESS:
    console.log('schemas success');
    return {
      ...state, 
      messageType: MessageType.INFO,
      schemas: action.schemas
    };
  case SCHEMA_ERROR:
    console.log('schemas error');
    return {
      ...state, 
      messageTitle: I18n.t('ingestion.message.schemaApiError'),
      specificmessageTitle: state.message,
      showMessage: true,
      messageType: MessageType.ERROR
    };

  default:
    return state;
  }
};

export default schemaReducer;