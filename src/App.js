import './App.css';
import 'swiper/swiper.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CategoryDetailPage from './Components/CategoryDetailPage/CategoryDetailPage';
import NewsDetail from './Components/Home/NewsDetail/NewsDetail';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import React, { createContext, useState } from "react";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/category/:categoryName">
            <CategoryDetailPage></CategoryDetailPage>
          </Route>
          <Route path="/category/:categoryName">
            <CategoryDetailPage></CategoryDetailPage>
          </Route>
          <Route path="/detail/:newsId">
            <NewsDetail></NewsDetail>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;