import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ComponentOne} />
          <Route exact path="/second" component={ComponentTwo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
