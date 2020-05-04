import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
//Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const  App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);

  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route excat path="/register" component={Register} />
            <Route excat path="/login" component={Login} />
            <Route excat path="/profiles" component={Profiles} />
            <Route exact path="/profile/:id" component={Profile} />
            <PrivateRoute excat path="/dashboard" component={Dashboard} />
            <PrivateRoute excat path="/create-profile" component={CreateProfile} />
            <PrivateRoute excat path="/edit-profile" component={EditProfile} />
            <PrivateRoute excat path="/add-experience" component={AddExperience} />
            <PrivateRoute excat path="/add-education" component={AddEducation} />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/posts/:id" component={Post} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)};


export default App;
