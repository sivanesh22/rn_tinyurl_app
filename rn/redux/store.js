

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer";
import mySaga from "../saga/sagas";
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' defaults to localStorage for web
import AsyncStorage from '@react-native-async-storage/async-storage'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// export default store;
let persistor = persistStore(store)
export default { store, persistor }

// render the application