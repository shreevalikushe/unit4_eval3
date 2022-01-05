import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default AllRoutes;
