import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';

import Layout from './layout/reducer';
import { alertsReducer } from './alerts/reducer';
import { cmsReducer } from './cms/reducer';
import { commonReducer } from './common/reducer';


const rootReducer = combineReducers({
    // public
    Layout,
    auth: authReducer,
    alert: alertsReducer,
    common: commonReducer,
    cms: cmsReducer,
});

export default rootReducer;