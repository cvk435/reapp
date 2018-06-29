/* Importing the node modules, child components, services and controllers used
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   
   /* FivestarHeader Component initialization */
   class Footer extends React.Component {
       /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           this.state = {}
       }
       closeNav(){
           document.getElementById("mySidenav").style.width = "250px";
       }
       openNav(){
           document.getElementById("mySidenav").style.width = "0"; 
       }
       render() {
           return (
            <footer>
            <div className="container">
                  <div  className="my-3 col-lg-12">		
                      <p className="m-0 text-left">Copyright &copy; Your Website 2018</p>	
                  </div>
            </div>
       
          </footer>
           );
       }
   }
   export default Footer;
   