import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./rootReducer";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist"; // session
import storage from "redux-persist/lib/storage"; // session

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
// const store = createStore(reducer, enhancer);
// export default store;

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
