import React from 'react';

class DefaultFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    
      }
      setValue(field, e) {
        var object = {};
        object[field] = e.target.value;
        this.props.setValue(object);
    }
    submitPost(){
        this.props.submitPost();
    }
      render() {
        return (
            <div>
                <div className="input-group my-3">
                <label className="col-lg-3 text-right">Ad Description <span style={{color:'red'}}>*</span></label>
                <textarea rows="4" cols="50" className="form-control col-lg-6" placeholder="Search for..."value={this.props.addDescription} onChange={this.setValue.bind(this,'addDescription')}></textarea>
              </div>

              <div className="input-group">
                <label className="col-lg-3 text-right">Upload Images</label>
                <input type="file" name="img" multiple/>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Location</label>
                <input type="text" className="form-control col-lg-4" placeholder="Location" value={this.props.location} onChange={this.setValue.bind(this,'location')}/>
              </div>
              <hr/>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Name<span style={{color:'red'}}>*</span></label>
                <input
                  type="text"
                  className="form-control col-lg-4"
                  placeholder="Name" value={this.props.name} onChange={this.setValue.bind(this,'name')}/>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Phone Number<span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="+91-" value={this.props.phoneNumber} onChange={this.setValue.bind(this,'phoneNumber')}/>
                {this.props.phoneNumberValid !='' && this.props.phoneNumberValid !=undefined?<p style={{color:this.props.color,textAlign:'center'}}>{this.props.message}</p>:''}
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">E-mail<span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="Email" value={this.props.email} onChange={this.setValue.bind(this,'email')}/>
                {(this.props.emailValid !='' && this.props.emailValid !=undefined)?<p style={{color:this.props.color,textAlign:'center'}}>{this.props.message}</p>:''}
              </div>
              {this.props.category=='Real Estate'?
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">City<span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="+91-" value={this.props.address} onChange={this.setValue.bind(this,'address')}/>
              </div>:''}
       
              <hr/>
              <div className="row">
                <div className=" col-lg-6">
                  <input type="checkbox" className="col-lg-1"/>I agree to our Terms of Use & Posting Rules
                </div>
                <div className="text-right col-lg-6">
                  <button type="button" className="btn btn-danger" onClick={this.submitPost.bind(this)}>Preview</button>
                </div>
              </div>
         
            </div>
        )
    }
}

export default DefaultFields;