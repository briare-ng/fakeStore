import "./App.css";
import Router from "./Components/Router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartDetails from "../src/reducers/cartDetails";

function App() {
  const store = configureStore({
    reducer: { cartDetails },
  });

  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
