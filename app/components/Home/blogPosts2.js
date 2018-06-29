/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';

   /* FivestarHeader Component initialization */
   class BlogPosts2 extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
          
           this.state = {
     
         }
   
       }

omponentDidMount() {
       }
       render() {
           return (
            // <!-- Page Content -->
            <div className="container">
                <div  className="my-3 col-lg-12 ads">		
                    <h4>Big Banner Ads</h4>			
                </div>
              <div className="row">
                {/* <!-- Left Sidebar --> */}
                <div className="col-lg-3">
        
                  {/* <!-- Search Widget --> */}
                  <div className="card my-4">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                          <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                      </div>
                    </div>
                  </div>
        
                  {/* <!-- Categories Widget --> */}
                  <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <a href="#">Web Design</a>
                            </li>
                            <li>
                              <a href="#">HTML</a>
                            </li>
                            <li>
                              <a href="#">Freebies</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <a href="#">JavaScript</a>
                            </li>
                            <li>
                              <a href="#">CSS</a>
                            </li>
                            <li>
                              <a href="#">Tutorials</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* <!-- Side Widget --> */}
                  <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <div className="card-body">
                      You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
                  </div>
        
                </div>
                {/* <!-- Post Content Column --> */}
                <div className="col-lg-6 poll-post">
        
                  {/* <!-- Title --> */}
                  <h3 className="mt-3">Who is the Best CM in below</h3>
                        <form>
                            <div className="col-lg-12"><input type="radio" name="poll-ans"/><label for="male">Chandra babu</label></div>
                            
                            <div className="col-lg-12"><input type="radio" name="poll-ans"/><label for="male">Chandra babu</label></div>
                            
                            <div className="col-lg-12"><input type="radio" name="poll-ans"/><label for="male">Chandra babu</label></div>
                            
                            <div className="col-lg-12"><input type="radio" name="poll-ans"/><label for="male">Chandra babu</label></div>
                            <div className="col-lg-6"><input type="submit" value="Vote"/></div>
                        </form>
                  
        
                      {/* <!-- Author --> */}
                      <p className="lead">
                        by
                        <a href="#">Start Bootstrap</a>
                      </p>
        
                      <hr/>
        
                      {/* <!-- Date/Time --> */}
                      <p>Posted on January 1, 2018 at 12:00 PM</p>
        
                      <hr/>
        
        
        
         
        
        
                </div>
        
                {/* <!-- Sidebar Widgets Column --> */}
                <div className="col-lg-3">
                  {/* <!-- Search Widget --> */}
                  <div className="card my-4">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                          <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                      </div>
                    </div>
                  </div>
        
                  {/* <!-- Categories Widget --> */}
                  <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <a href="#">Web Design</a>
                            </li>
                            <li>
                              <a href="#">HTML</a>
                            </li>
                            <li>
                              <a href="#">Freebies</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <a href="#">JavaScript</a>
                            </li>
                            <li>
                              <a href="#">CSS</a>
                            </li>
                            <li>
                              <a href="#">Tutorials</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="card-body">
                      You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
                  {/* <!-- Side Widget --> */}
                  <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <div className="card-body">
                      You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
                  </div>
        
                </div>
        
              </div>
              {/* <!-- /.row --> */}
        
            </div>
           
               );
       }
   }
   export default BlogPosts2;