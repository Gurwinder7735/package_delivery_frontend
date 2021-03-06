import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
// import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

// Inner Authentication
// import Login1 from "../pages/AuthenticationInner/Login";
// import Register1 from "../pages/AuthenticationInner/Register";
// import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import AddUser from "../pages/Users/AddUser";
import Users from "../pages/Users/UserListing";
import CMS from "../pages/CMS";
import ViewUser from "../pages/Users/ViewUser";
import Bids from "../pages/Bids/Listing";
import Posts from "../pages/Posts/Listing";
import ViewPost from "../pages/Posts/ViewPost";
import ViewBid from "../pages/Bids/ViewBid";

const authProtectedRoutes = [

	{ path: "/dashboard", component: Dashboard },
	{ path: "/users", component: Users },
	{ path: "/deliveryPersons", component: Users },
	{ path: "/addUser", component: AddUser },
	{ path: "/cms", component: CMS },
	{ path: "/viewUser/:id", component: ViewUser },
	{ path: "/bids", component: Bids },
	{ path: "/viewBid/:id", component: ViewBid },
	{ path: "/posts", component: Posts },
	{ path: "/viewPost/:id", component: ViewPost },
	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
	
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },

	{ path: "/register", component: Register },
	{ path: "/lock-screen", component: AuthLockScreen },

	// Authentication Inner
	

];

export { authProtectedRoutes, publicRoutes };
