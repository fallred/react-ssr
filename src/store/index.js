import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import serverRequest from '../server/request';
import clientRequest from '../client/request';
import reducers from './reducers';

export function getServerStore(){
    return createStore(reducers,applyMiddleware(thunk.withExtraArgument(serverRequest),logger));
}

export function getClientStore(){
    let initState = window.context.state;
    return createStore(reducers, initState, applyMiddleware(thunk.withExtraArgument(clientRequest),logger));
}