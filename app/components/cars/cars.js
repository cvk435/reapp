import React from 'react';

class Cars extends React.Component {
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

         <div className="input-group my-3">
                <label className="col-lg-3 text-right">Price <span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="₹" value={this.props.Price} onChange={this.setValue.bind(this,'Price')}/>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Model <span style={{color:'red'}}>*</span></label>
                <select className="form-control col-lg-4" placeholder="Search for..." value={this.props.model} onChange={this.setValue.bind(this,'model')}>
                {this.props.modelSelect[this.props.modelId].category.map((row, index) => {
                   return(
                    <option value={row} key={index}>{row}</option>
                   )
                 })}
              </select>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Year <span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="₹" value={this.props.year} onChange={this.setValue.bind(this,'year')}/>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">Fuel <span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="₹" value={this.props.fuel} onChange={this.setValue.bind(this,'fuel')}/>
              </div>
              <div className="input-group my-3">
                <label className="col-lg-3 text-right">KM Driven <span style={{color:'red'}}>*</span></label>
                <input type="text" className="form-control col-lg-4" placeholder="₹" value={this.props.kMDriven} onChange={this.setValue.bind(this,'kMDriven')}/>
              </div>
            </div>
        )
    }
}

export default Cars;