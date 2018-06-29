/* Importing the node modules, child components, services and controllers used
   inside FivestarHeader component */
import React from 'react';
import {Link} from 'react-router-dom';
import $ from "jquery";
/* FivestarHeader Component initialization */
class Navigation extends React.Component {
    /* Initializing objects of its FivestarHeader class */
    constructor(props) {
        super(props)
        this.state = {}
    }
    closeNav(){
        console.log('closeNav')
        jQuery(function ($) {
            $("#mySidenav").css("width", "0px");
        }.bind(this));
        
       
    }
    openNav(){
        console.log('res')
 
                jQuery(function ($) {
                    $("#mySidenav").css("width", "250px");
                }.bind(this));
                
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
                        <li>
                            <Link  to="/">Home</Link>
                        </li>
                        <li>
                            <Link  to="/addposts">AddPosts</Link>
                        </li>
                        <li>
                            <Link to="/blogposts">Blog Posts</Link>
                        </li>
                        <li>
                            <Link to="/account">Accountn </Link>
                        </li>
                        
                        <li>
                            <Link to="/blogposts2">Blog Posts 2</Link>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </div>
                    <a className="navbar-brand col-lg-2" href="index.html">Mactosoft</a>
                    <span
                        style={{fontSize:'20px',cursor:'pointer',paddingRight:'20px'}}
                        onClick={this.openNav.bind(this)}>&#9776; Menu</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <form className="col-lg-6">
                            <input type="text" size="30"/>
                            <input type="submit" value="Search"/>
                        </form>
                        <div className="col-lg-4">
                            <div className="top-menu">

                                <li>
                                    <i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
                                    Mr.Niranjan</li>
                            </div>

                        </div>
                        <div className="text-right">
                            <button type="button" className="btn btn-danger">
                                <a href="add-post.html">Submit a Free Ad</a>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navigation;
