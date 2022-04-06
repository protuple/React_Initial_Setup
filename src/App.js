import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              title={route.title}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
