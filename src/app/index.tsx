import { Routing } from "pages";
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import { store } from "./store";
import "./App.css";

const queryClient = new QueryClient();

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <Routing />
          </HashRouter>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}
