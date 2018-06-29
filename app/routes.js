'use strict'
/* Importing the node modules, child components, services and controllers used */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Home from './components/Home/home';
import AddPosts from './components/Home/addPosts';
import Account from './components/Home/account';
import BlogPosts from './components/Home/blogPosts';
import BlogPosts2 from './components/Home/blogPosts2';
import Navigation from './common/navigation';
import Footer from './common/footer';


export default <Router history={browserHistory}>
				    <div>
				    <Navigation/>
					  <Route exact path="/" component={Home}></Route>
					  <Route exact path="/account" component={Account}></Route>
					  <Route exact path="/addposts" component={AddPosts}></Route>
						<Route exact path="/blogposts" component={BlogPosts}></Route>
						<Route exact path="/blogposts2" component={BlogPosts2}></Route>
						<Footer/>
				    </div>
				</Router>