import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import { ThemeProvider } from "styled-components";
import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/index.scss');
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
