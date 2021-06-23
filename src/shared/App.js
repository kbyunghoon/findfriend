import react from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { history } from "redux/configureStore";
import Signup from "page/signup";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Signup} />
      </ConnectedRouter>
    </>
  );
}

export default App;
