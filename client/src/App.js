import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Add, Edit } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/items/add" component={Add}></Route>
        <Route path="/items/:id/edit" component={Edit}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
