import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/ShowPanel";
import { Theme } from "./style/CreateTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
