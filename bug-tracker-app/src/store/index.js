import { createStore} from 'redux'
import appMiddleware from './middlewares';
import rootReducer from './reducers';

const store = createStore(rootReducer, appMiddleware);

export default store;