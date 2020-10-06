import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import List from "./components/List";
import Input from "./components/Input";

const store = createStore(
  rootReducer,
  { itemActions: { todos: [] } }, // sets initial state
  composeWithDevTools() // makes debugging through Redux Dev Tools possible
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">hello world</div>
      <Input />
      <List />
    </Provider>
  );
}

export default App;
