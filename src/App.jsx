import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes/Config";
import store, { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <RouterConfig />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
