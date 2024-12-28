import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const initialState = {};

const placeholderReducer = (state = initialState, action : any) => {
    switch (action.type) {
        default:
            return state;
    }
};


const combinedReducers = combineReducers({
    user : placeholderReducer
});

export const persistedReducer = persistReducer(persistConfig, combinedReducers);
