/* Importing the node modules, child components, services and controllers used
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   import PostService from '../../../services/postService';
   /* FivestarHeader Component initialization */
   class Account extends React.Component {
     /* Initializing objects of its FivestarHeader class */
     constructor(props) {
       super(props)
   
       this.state = {
         addTitle: '',
         category: '',
         addDescription: '',
         images: '',
         location: '',
         name: '',
         phoneNumber: '',
         address: '',
         email: '',
         selectCategory: [
           {
             name: "Real Estate"
           }, {
             name: "Jobs"
           }, {
             name: "Cars"
           }, {
             name: "Furniture"
           }, {
             name: "Mobiles"
           }, {
             name: "Bikes"
           }, {
             name: "Services"
           }
         ]
       }
   
     }
   
     setValue(field, e) {
       var object = {};
       object[field] = e.target.value;
       this.setState(object);
   
     }
     async submitPost(){
       const addpost={
         addTitle:this.state.addTitle,
         category:this.state.category,
         addDescription:this.state.addDescription,
         location: this.state.location,
         name: this.state.name,
         phoneNumber: this.state.phoneNumber,
         address: this.state.address,
         email: this.state.email,
       }
   
       const Response=await PostService.addPost(addpost)
     }
     render() {
       return (
         <div className="container-ads">
           <div className="card my-3">
             <h5 className="card-header">Submit a Free classified Ad</h5>
             <div className="card-body my-3">
               <form className="form-horizontal" action="#">
   
                 <div className="input-group">
                   <label className="col-lg-3 text-right">Ad Title</label>
                   <input
                     type="text"
                     className="form-control col-lg-6"
                     placeholder="Search for..."
                     value={this.state.addTitle}
                     onChange={this
                     .setValue
                     .bind(this, 'addTitle')}/>
                 </div>
   
                 <div className="input-group my-3">
                   <label className="text-right col-lg-3">Category</label>
                   <select className="form-control col-lg-4" placeholder="Search for..." value={this.state.category} onChange={this.setValue.bind(this,'category')}>
                   {this.state.selectCategory.map((row, index) => {
   
                      return(
                       <option value={row.name} key={index}>{row.name}</option>
                       
                      )
                    })}
                 </select>
                 </div>
   
                 <div className="input-group my-3">
                   <label className="col-lg-3 text-right">Ad Description</label>
                   <textarea
                     rows="4"
                     cols="50"
                     className="form-control col-lg-6"
                     placeholder="Search for..."
                     value={this.state.addDescription} onChange={this.setValue.bind(this,'addDescription')}></textarea>
   
                 </div>
   
                 <div className="input-group">
                   <label className="col-lg-3 text-right">Upload Images</label>
                   <input type="file" name="img" multiple/>
                 </div>
                 <div className="input-group my-3">
                   <label className="col-lg-3 text-right">Location</label>
                   <input type="text" className="form-control col-lg-4" placeholder="Location" value={this.state.location} onChange={this.setValue.bind(this,'location')}/>
                 </div>
                 <hr/>
                 <div className="input-group my-3">
                   <label className="col-lg-3 text-right">Name</label>
                   <input
                     type="text"
                     className="form-control col-lg-4"
                     placeholder="Search for..." value={this.state.name} onChange={this.setValue.bind(this,'name')}/>
                 </div>
                 <div className="input-group my-3">
                   <label className="col-lg-3 text-right">Phone Number</label>
                   <input type="text" className="form-control col-lg-4" placeholder="+91-" value={this.state.phoneNumber} onChange={this.setValue.bind(this,'phoneNumber')}/>
                 </div>
                 <div className="input-group my-3">
                   <label className="col-lg-3 text-right">Address</label>
                   <input type="text" className="form-control col-lg-4" placeholder="+91-" value={this.state.address} onChange={this.setValue.bind(this,'address')}/>
                 </div>
                 <div className="input-group my-3">
                   <label className="col-lg-3 text-right">E-mail</label>
                   <input type="text" className="form-control col-lg-4" placeholder="+91-" value={this.state.email} onChange={this.setValue.bind(this,'email')}/>
                 </div>
                 <hr/>
                 <div className="row">
                   <div className=" col-lg-6">
                     <input type="checkbox" className="col-lg-1"/>I agree to our Terms of Use & Posting Rules
                   </div>
                   <div className="text-right col-lg-6">
                     <button type="button" className="btn btn-danger" onClick={this.submitPost.bind(this)}>Preview</button>
                   </div>
                 </div>
   
               </form>
   
             </div>
             <div className="card-footer">
               <ul className="">
                 <li className="share">
                   <i className="fa fa-share-alt" aria-hidden="true"></i>
                   Share</li>
               </ul>
             </div>
           </div>
   
         </div>
       );
     }
   }
   export default Account;