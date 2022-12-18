import { Routing } from "pages";
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";
import { Provider } from "react-redux";

import { store } from "./store";
import "./App.css";

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <HashRouter>
          <Routing />
        </HashRouter>
      </Provider>
    </ErrorBoundary>
  );
}
