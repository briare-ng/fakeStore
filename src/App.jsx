import "./App.css";
import Router from "./Components/Router";
import { Provider } from "react-redux";
import cartDetails from "../src/reducers/cartDetails";

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({ cartDetails });
const persistConfig = { key: 'fakeStore', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 
const persistor = persistStore(store);

function App() {
  // const store = configureStore({
  //   reducer: { cartDetails },
  // });

  return (
    <>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
