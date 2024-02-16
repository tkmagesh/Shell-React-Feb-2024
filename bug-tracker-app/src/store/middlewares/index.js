import { applyMiddleware } from "redux";
import loggerMiddleware from "./loggerMiddleware";

const appMiddleware = applyMiddleware(loggerMiddleware)

export default appMiddleware;