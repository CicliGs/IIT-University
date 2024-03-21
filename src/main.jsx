import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import Store from "./store/store.js";
import "./index.css";

const store = new Store()

export const Context = createContext({
  store
})

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Context.Provider value={{store}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>

);
