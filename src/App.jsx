import React from "react";
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BookContainer />
    </Provider>
  );
};

export default App;
