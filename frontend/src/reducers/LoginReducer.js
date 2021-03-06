import { LOGIN_SENT, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/LoginActions';
const { I18n } = require('react-i18nify');

const initialState = {
  error: null,
};

const loginReducer = (state=initialState, action) => {
  switch (action.type) {
  case LOGIN_SENT:
    return {
      ...state, 
      error: undefined,
      showLoading: action.showLoading
    };
  case LOGIN_SUCCESS:
    return {
      ...state, 
      showLoading: action.showLoading
    };
  case LOGIN_ERROR:
    return {
      ...state, 
      showLoading: action.showLoading,
      error: action.error.error,
    };
  default:
    return state;
  }
};

export default loginReducer;