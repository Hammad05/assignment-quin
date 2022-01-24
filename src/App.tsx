import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryConfig = {
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry(failureCount: number, error: any) {
        if (error.status === 404) return false;
        else if (failureCount < 2) return true;
        else return false;
      },
    },
  },
};
const queryClient = new QueryClient(queryConfig);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
