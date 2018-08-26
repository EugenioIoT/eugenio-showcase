import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DataQueryReducer from './DataQueryReducer';
import IngestionReducer from './IngestionReducer';
import SchemaReducer from './SchemaReducer';
import ThingReducer from './ThingReducer';
import ThingsInvokeReducer from './ThingsInvokeReducer';

export default combineReducers({
    login: LoginReducer,
    dataQuery: DataQueryReducer,
    ingestion: IngestionReducer,
    schema: SchemaReducer,
    thing: ThingReducer,
    thingsInvoke: ThingsInvokeReducer
});