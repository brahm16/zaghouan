import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Login from './screens/Login';
import Register from './screens/Register';
import Activate from './screens/Activate';
import Private from './screens/Private';
import Admin from './screens/Admin';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import "./i18nextConf"

import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';
import HomeUser from './screens/HomeUser';
import Home from './screens/Home';
import About from './screens/headerItems/About';
import Contact from './screens/headerItems/Contact';
import Places from './screens/headerItems/Places';
import Place from '../src/screens/headerItems/Place';
import DashboardAdmin from './screens/Dashboard/Admin/DashboardAdmin';
import OwnerDashboard from './screens/Dashboard/Owner/OwnerDashboard';
import OwnerRoute from './Routes/OwnerRoute';
import ProfileAdmin from './screens/Dashboard/Admin/ProfileAdmin';
import ProfileOwner from './screens/Dashboard/Owner/ProfileOwner';
import DashboardUser from './screens/Dashboard/User/DashboardUser';
import Events from './screens/mainItems/Events';

import ProfileUser from './screens/Dashboard/User/ProfileUser';
import HeaderAdmins from './screens/Dashboard/HeaderAdmins';
import SidebarAdmins from './screens/Dashboard/SidebarAdmins';
import { MENU_ADMIN } from './screens/Dashboard/dashboardMenu/adminMenu';
import { MENU_USER } from './screens/Dashboard/dashboardMenu/userMenu';
import { MENU_OWNER } from './screens/Dashboard/dashboardMenu/ownerMenu';
import Header from './screens/Item/Header';
import Footer from './screens/Item/Footer';
import Gastro from './screens/mainItems/Gastro';
import Excursions from './screens/mainItems/Excursions';
import Store from './screens/mainItems/Store';
import Services from './screens/headerItems/Services';
import Dashboard from './screens/Dashboard/Dashboard';
import Sidebar from './screens/Dashboard/Main/Sidebar';
import Navbar from './screens/Dashboard/Main/Navbar';
import MainAdmin from './screens/Dashboard/Admin/MainAdmin';
import MainOwner from './screens/Dashboard/Owner/MainOwner';
import MainUser from './screens/Dashboard/User/MainUser';
import Join from './screens/Discussion/Join/Join';
import Chat from './screens/Discussion/Chat/Chat';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
const DashAdmin = ({match}) => {
  return(
    <>
    <Sidebar menu={MENU_ADMIN} />
    <div className="relative md:ml-64 ">
      <Navbar />

    <Switch>
        <Route path={match.path} exact={true} component={MainAdmin} />

       <Route path={`${match.path}/me`} exact={true} component={ProfileAdmin} />
 
    </Switch>
    </div>
    </>
  

  );
};
const DashOwner = ({match}) => {
  return(
    <>
    <Sidebar menu={MENU_OWNER} />
    <div className="relative md:ml-64 ">
      <Navbar />

    <Switch>
        <Route path={match.path} exact={true} component={MainOwner} />

       <Route path={`${match.path}/me`} exact={true} component={ProfileOwner} />
 
    </Switch>
    </div>
    </>

  );
};
const Items= ({match}) => {
  return(
    <>
     <Header />

<Switch>
  <Route path={`${match.path}/excursions`} exact={true} component={Excursions} />

    <Route path={`${match.path}/gastro`} exact={true} component={Gastro} />

    <Route path={`${match.path}/stores`} exact={true} component={Store} />

   <Route path={`${match.path}/events`} exact={true} component={Events} />

</Switch>
<Footer />
    </>
  
    

  );
};
const DashUser = ({match}) => {
  return(
    
    <>
    <Sidebar menu={MENU_USER} />
    <div className="relative md:ml-64 ">
      <Navbar />

    <Switch>
        <Route path={match.path} exact={true} component={MainUser} />

       <Route path={`${match.path}/me`} exact={true} component={ProfileUser} />
 
    </Switch>
    </div>
    </>
   
  );
};
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/join" component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/services' exact render={props => <Services {...props} />} />
      <Route path="/mydash" component={Dashboard}   />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/home' exact render={props => <HomeUser {...props}  />} />
      <Route path='/users/me' exact render={props => <Home {...props} />} />
      <Route path='/about' exact render={props => <About {...props}  />} />
      <Route path='/contact' exact render={props => <Contact {...props}  />} />
      <Route path='/places' exact render={props => <Places {...props}  />} />
      <Route path="/place/:id" exact render={props => <Place {...props}  />}/>
      <OwnerRoute path='/owner' component={DashOwner}  /> 
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path="/main" component={Items} />
      <PrivateRoute path="/subscriber" component={DashUser} />
       <AdminRoute path="/admin"  component={DashAdmin} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
