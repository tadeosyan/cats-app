import configureStore from "@redux/configureStore";
import { Router } from "Router";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
