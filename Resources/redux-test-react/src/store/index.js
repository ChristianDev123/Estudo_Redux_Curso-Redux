import { combineReducers, configureStore} from '@reduxjs/toolkit';
import task from './task';
import employee from './employee';
import logger from 'redux-logger';
import error from './middleware/error';
import api from './middleware/api';

const reducer = combineReducers({
    task,
    employee    
});

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware)=>[
        ...getDefaultMiddleware(),
        logger,
        error,
        api
    ]
});