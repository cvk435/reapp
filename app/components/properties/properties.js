import React from 'react';

class Properties extends React.Component {
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
      render() {
        return (
            <div>
      
               {(this.props.allCategorys.subofsub=='Shops & Offices'||this.props.allCategorys.subofsub=='Apartments' || this.props.allCategorys.subofsub=='Houses & Villas' || this.props.allCategorys.subofsub=='Builder Floors' ||this.props.type=='1')? <div><div className="input-group my-3">
                <label className="col-lg-3 text-right">Price <span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="₹" value={this.props.Price} onChange={this.setValue.bind(this,'Price')}/>
              </div>
{this.props.allCategorys.subofsub!='Shops & Offices'?
<div>
               <div className="input-group my-3">
                <label className="text-right col-lg-3">Bedrooms <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.bedRoom} onChange={this.setValue.bind(this,'bedRoom')}>
                {this.props.bedRoomsSelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Bathrooms <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.bathRoom} onChange={this.setValue.bind(this,'bathRoom')}>
                {this.props.bedRoomsSelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>  </div>:''}
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Furnishing<span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.furnishing} onChange={this.setValue.bind(this,'furnishing')}>
                {this.props.furnishingSelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>

             {this.props.type !='1' ? <div className="input-group my-3">
                <label className="text-right col-lg-3">Construction Status <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.Construction} onChange={this.setValue.bind(this,'Construction')}>
                {this.props.constructionStatusSelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>:''}
            
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Listed By <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.listedBy} onChange={this.setValue.bind(this,'listedBy')}>
                {this.props.listedBySelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Super Builtup area</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.superBuiltArea} onChange={this.setValue.bind(this,'superBuiltArea')}/>
                ft2 </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Carpet Area</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.carpetArea} onChange={this.setValue.bind(this,'carpetArea')}/>
                ft2</div>
                {this.props.type=='1'?<div className="input-group my-3">
                <label className="col-lg-3 text-right">Bachelors Allowed*</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.carpetArea} onChange={this.setValue.bind(this,'carpetArea')}/>
                ft2</div>:''}
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Maintenance (Monthly)</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.maintainance} onChange={this.setValue.bind(this,'maintainance')}/>
                ₹</div>
                {this.props.allCategorys.subofsub !='Shops & Offices'?
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Total Floors</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.totalFloors} onChange={this.setValue.bind(this,'totalFloors')}/>
              </div>:''}
              {(this.props.allCategorys.subofsub!='Houses & Villas' && this.props.allCategorys.subofsub!='Shops & Offices')?<div className="input-group my-3">
                <label className="col-lg-3 text-right">Floor No</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.floorNo} onChange={this.setValue.bind(this,'floorNo')}/>
              </div>:''}
             {this.props.allCategorys.subofsub=='Shops & Offices'? <div className="input-group my-3">
                <label className="col-lg-3 text-right">Washrooms</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.washrooms} onChange={this.setValue.bind(this,'washrooms')}/>
              </div>:''}
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Car Parking <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.carParking} onChange={this.setValue.bind(this,'carParking')}>
                {this.props.carParkingSelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div> 
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Listed By <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.listedBy} onChange={this.setValue.bind(this,'listedBy')}>
                {this.props.listedBySelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Facing <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.facing} onChange={this.setValue.bind(this,'facing')}>
                {this.props.facingSelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>
              {this.props.allCategorys.subofsub!='Houses & Villas' ? <div className="input-group my-3">
                <label className="col-lg-3 text-right">Project Name</label>
                <input type="text" className="form-control col-lg-4" placeholder="Location" value={this.state.projectName} onChange={this.setValue.bind(this,'projectName')}/>
              </div>:''}

</div>:''}

       {(this.props.allCategorys.subofsub=='Land & Plots')?
       <div>
         <div className="input-group my-3">
                <label className="col-lg-3 text-right">Price <span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="₹" value={this.props.Price} onChange={this.setValue.bind(this,'Price')}/>
              </div>

              <div className="input-group my-3">
                <label className="text-right col-lg-3">Listed By <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.listedBy} onChange={this.setValue.bind(this,'listedBy')}>
                {this.props.listedBySelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Plot Area</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.ploatArea} onChange={this.setValue.bind(this,'ploatArea')}/>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Length</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.floorNo} onChange={this.setValue.bind(this,'floorNo')}/>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Breadth</label>
                <input type="text" className="form-control col-lg-4"  value={this.props.floorNo} onChange={this.setValue.bind(this,'floorNo')}/>
              </div>
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Facing <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.facing} onChange={this.setValue.bind(this,'facing')}>
                {this.props.facingSelect.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Project Name</label>
                <input type="text" className="form-control col-lg-4" placeholder="Location" value={this.state.projectName} onChange={this.setValue.bind(this,'projectName')}/>
              </div>
              
               </div>:''}
           
            </div>
        )
    }
}

export default Properties;