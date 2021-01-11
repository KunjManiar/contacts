import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './components/Home/home';
// import BookView from './components/Books'
// import Login from './Screens/LoginScreen'
import NewLogin from './Screens/NewLoginScreen'
import ContactScreen from './Screens/ContactScreen'
// import ContactScreenTest from './Screens/ContactScreenTest'
import Loader from './components/UI/Loader'
// import IframeTestScreen from './Screens/IframeTestScreen'
// import User from './components/Admin'
// import AddReview from './containers/Admin/add'
// import UserPosts from './components/Admin/userPosts'
// import EditReview from './containers/Admin/edit';
// import Register from './containers/Admin/register';
// import Logout from './components/Admin/logout';

// import Layout from './hoc/layout'
// import Auth from './hoc/auth'

const Routes = () => {
    return (
        // <Layout>
            <Switch>
                {/* <Route path="/" exact component={Login}/> */}
                <Route path="/" exact component={NewLogin}/>
                <Route path="/contact" exact component={ContactScreen}/>
                {/* <Route path="/contactTest" exact component={ContactScreenTest}/> */}
                <Route path="/loading" exact component={Loader}/>
                {/* <Route path="/contactList" exact component={IframeTestScreen}/> */}
                {/* <Route path="/home" exact component={Auth(Home,false)}/> */}
                {/* <Route path="/logout" exact component={ Auth(Logout,true)}/> */}
                {/* <Route path="/user" exact component={Auth(User,true)}/> */}
                {/* <Route path="/user/add" exact component={Auth(AddReview,true)}/> */}
                {/* <Route path="/user/register" exact component={Auth(Register,true)}/> */}
                {/* <Route path="/user/edit-post/:id" exact component={Auth(EditReview,true)}/> */}
                {/* <Route path="/books/:id" exact component={Auth(BookView,null)}/> */}
                {/* <Route path="/user/user-reviews" exact component={Auth(UserPosts,true)}/> */}
            </Switch>
        // </Layout>
    );
};

export default Routes;