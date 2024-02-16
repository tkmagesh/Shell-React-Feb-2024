import { applyMiddleware } from "redux";
/* 
import loggerMiddleware from "./loggerMiddleware";
import asyncMiddleware from "./asyncMiddleware";
import promiseMiddleware from "./promiseMiddleware";

const appMiddleware = applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware) 
*/

import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import promiseMiddleware from "./promiseMiddleware";
console.log(thunk);

const appMiddleware = applyMiddleware(logger, thunk, promiseMiddleware) 

export default appMiddleware;