import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home/Home';
import Navbar from './components/Navbar';
import Services from './pages/Home/Services/Services';
import Order from './pages/Order/Order';
import AddService from './pages/AddService/AddService';
import MyOrder from './pages/MyOrder/MyOrder';
import ManageAllServices from './pages/ManageServices/ManageServices';
import UpdateService from './pages/UpdateService/UpdateService';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/AddService">
            <AddService />
          </Route>
          <Route path="/manageAllServices">
            <ManageAllServices />
          </Route>
          <Route path="/update/:serviceId">
            <UpdateService />
          </Route>
          <PrivateRoute path="/myOrder">
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute path="/order/:serviceId">
            <Order />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
