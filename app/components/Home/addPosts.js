/* Importing the node modules, child components, services and controllers used
   inside FivestarHeader component */
import React from 'react';
import {Link} from 'react-router-dom';
import PostService from '../../../services/postService';
import _ from 'lodash'
import $ from "jquery";
import Properties from '../properties/properties';
import Cars from '../cars/cars';
import CategoryModal from './categoryModal';
import DefaultFields from './defaultFields';
/* FivestarHeader Component initialization */
class AddPosts extends React.Component {
  /* Initializing objects of its FivestarHeader class */
  constructor(props) {
    super(props)

    this.state = {
      listimages: 0,
        addTitle: '',
        category: '',
        addDescription: '',
        images: '',
        location: '',
        name: '',
        phoneNumber: '',
        address: '',
        email: '',
        message: '',
        color: '',
        errorMessage: '',
        addTitleValid: '',
        phoneNumberValid: '',
        emailValid: '',
        val: '',
        subval: '',
        selectCategory: [],
        categoryItem: '',
        subcategoryItem: '',
        allCategorys: {category: '',subcategory: '',subofsub: ''},
        price: '',
        bedRoom: '',
        bathRoom: '',
        furnishing: '',
        Construction: '',
        listedBy: '',
        superBuiltArea: '',
        carpetArea: '',
        maintainance: '',
        totalFloors: '',
        floorNo: '',
        carParking: '',
        facing: '',
        projectName: '',
        facingSelect: ['Owner', 'Dealer', 'Builder'],
        bedRoomsSelect: ['1', '2', '3', '4+', ],
        bathRoomsSelect: ['1', '2', '3', '4+', ],
        carParkingSelect: ['1', '2', '3', '3+', ],
        furnishingSelect: ['Furnished', 'Unfurnished', 'Semi-Furnished'],
        constructionStatusSelect: ['Under Construction', 'Ready to Move', 'New Lunch'],
        listedBySelect: ['Owner', 'Dealer', 'Builder'],
        length: '',
        breadth: '',
        ploatArea: '',
        Washrooms: '',

        //
        modelSelect: [
          { name: 'Maruti Suzuki', category: ['1000', '800', 'A Star', 'Alto', 'Alto 800', 'Baleno', 'Celerio', 'Ciaz', 'Eeco', 'Ertiga', 'Esteem', 'Grand Vitara', 'Gypsy', 'Kizashi', 'Omni', 'Ritz', 'Swift', 'Swift Dzire', 'Sx4', 'Versa', 'Wagon R', 'Wagon R 1.0', 'Wagon R Stingray', 'Zen', 'Zen Estilo', 'Vitara Breeza', 'Others'] }
          , { name: 'Hyundai', category: ['Accent', 'Elantra', 'Elite I20', 'Eon', 'Getz', 'Getz Prime', 'Grand I 10', 'I10', 'I20', 'New Elantra', 'Santa Fe', 'Santro', 'Santro Xing', 'Sonata', 'Sonata Embera', 'Sonata Transform', 'Terracan', 'Tucson', 'Verna', 'Xcent', 'Others'] }
          , { name: 'Tata', category: ['Aria', 'Estate', 'Grande Dicor', 'Indica', 'Indica E V2', 'Indica EV2', 'IndicaV2', 'Indica V2 Turbo', 'Indica V2 Xeta', 'Indica Vista', 'Indicab', 'Indigo', 'Indigo Cs', 'Indigo Ecs', 'Indigo Marina', 'Indigo XI', 'Manza', 'Movus', 'Nano', 'Safari', 'Safari Strome', 'Sierra', 'Sumo', 'Sumo Gold', 'Sumo Grande', 'IT', 'Venture', 'Vista', 'Vista Tech', 'Winger', 'Xenon Xt', 'Zest', 'Others'] }
          , { name: 'Mahindra', category: ['Voyeger', 'Xuv500', 'Xylo', 'TUV', 'Armada', 'Bolero', 'E 20', 'Quanto', 'Reva', 'Scorpio', 'Thar', 'Verito', 'Verito Vibe Cs', 'Others'] }
          , { name: 'Toyota', category: ['Camry', 'Corolla', 'Corolla Altis', 'Etios', 'Etios Liva', 'Fortuner', 'Innova', 'Land Cruiser', 'Land Cruiser Prado', 'Prius', 'Qualis', 'Others'] }
          , { name: 'Honda', category: ['Accord', 'Amaze', 'Brio', 'City', 'City Zx', 'Civic', 'Civic Hybrid', 'Crv', 'Jazz', 'Mobilio', 'Others'] }
          , { name: 'Chevrolet', category: ['Aveo', 'Aveo U Va', 'Beat', 'Captiva', 'Cruze', 'Enjoy', 'Forester', 'Optra', 'Optra Magnum', 'Optr Srv', 'Sail', 'Sail Uva', 'Spark', 'Tavera', 'Others'] }
          , { name: 'Ford', category: ['Classic', 'Ecosport', 'Endeavour', 'Escort', 'Fiesta', 'Fiesta Classic', 'Forester', 'Figo', 'Fusion', 'Ikon', 'Mondeo', 'Figo Aspire', 'Others'] }
          , { name: 'Skoda', category: ['Fabia', 'Laura', 'Octavia', 'Octavia Combi', 'Rapid', 'Superb', 'Yeti', 'Others'] }
          , { name: 'Volkswagen', category: ['Passat', 'Phaeton', 'Polo', 'Touareg', 'Vento', 'Others', 'Beetle', 'Cross Polo', 'Jetta'] }
          , { name: 'Fiat', category: ['500', 'Adventure', 'Avvventura', 'Grand Punto', 'Linea', 'Palio', 'Palio D', 'Palio Nv', 'Palio Stile', 'Petra', 'Petra D', 'Punto Evo', 'Siena', 'Siena Weekend', 'Uno', 'Others'] }
          , { name: 'Nissan', category: ['370z', 'Evalia', 'Micra', 'Micra Active', 'Sunny', 'Teana', 'Terrano', 'X Trail', 'Datsun Redi Go', 'Others'] }
          , { name: 'Renault', category: ['Duster', 'Evalia', 'Fluence', 'Koleos', 'Pulse', 'Scala', 'Kwid', 'Lodgy', 'Others'] }
          , { name: 'Mitsubishi', category: ['Cedia', 'Lancer', 'Lancer Evolution', 'Montero', 'Outlander', 'Pajero', 'Pajero Sport', 'Others'] }
          , { name: 'Mercedes-Benz', category: ['A Class', 'B Class', 'C Class', 'Cla Class', 'Cls', 'Cls Class', 'E Class', 'G Class', 'Gl Class', 'M Class', 'Ml Class', 'R Class', 'S Class', 'Sdl', 'Sl Class', 'Slk Class', 'Sls Class', 'Viano', 'Others'] }
          , { name: 'Audi', category: ['A7', 'A8', 'A8 L', 'A8l', 'Q3', 'Q5', 'Q7', 'R8', 'Rs 5', 'Rs 7', 'S6', 'Tt', 'Others', 'A3', 'A4', 'A6'] }
          , { name: 'Mahindra Renault', category: ['Logan', 'Others'] }
          , { name: 'BMW', category: ['1 Series', '3 Series', '5 Series', '5 Series Gt', '6 Series', '7 Series', 'Gran Turismo', 'M3', 'M5', 'X5 M', 'M6', 'X6 M', 'Mini', 'X1', 'X3', 'X5'] }
          , { name: 'Hindustan Motors', category: ['Ambassador', 'Contessa', 'Others'] }

        
        ],
        year: '',
        fuel: '',
        kMDriven: '',
        model: '',
        modelId: 0

    }

  }
componentWillMount(){
  fetch('http://localhost:3000/select')
    .then(res => res.json())
    .catch(error => console.log('Error:', error))
    .then(response =>  { this.setState({selectCategory:response})})
   
}
  setValue(field, e)
   {
        var object = {};
        object[field] = e.target.value;
        this.setState(object);
        switch(field){
          
                      case 'addTitle':
                      field = e.target.value.match(/^[a-zA-Z]*$/) ?'':'Please Enter Only Characters';
                      var addTitleValid= field
                      break;
                      case 'phoneNumber':
                      field = e.target.value.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/)?'':'Please Enter Only Characters';
                      var phoneNumberValid= field
                      break;
                      case 'email':
                      field=e.target.value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)?'':'Please Enter Only Characters';
                      var emailValid= field
                      break;
                      default:
                      break;

   }

this.setState({message:field,color:'red',addTitleValid:addTitleValid,phoneNumberValid:phoneNumberValid,emailValid:emailValid})
  }
  async submitPost(){

    const _this = this
    const validationFields=['addTitle','category','addDescription','location','name','phoneNumber','address','email']
    let error = 0;
    _.forEach(validationFields, function(value) {
       if(_this.state[value] == ""){
         error++;
       }
   });
    if(error==0){
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
  if(Response.code=='200'){

  } else{

  }

}
  else{
      this.setState({color:'red',errorMessage:'Please Enter All The Fields'})
  }
  }
  onModalPopUp(data){
this.setState({val:'',categoryItem:'',subcategoryItem:''})

  jQuery(function ($) {
    $('#exampleModalCenter').modal({backdrop: 'static', keyboard: false, show: true});
}.bind(this));


}

  selectListModal(index,row,id){
    switch(id){
     case 1:
     this.setState({listimages:1,categoryItem:'',subcategoryItem:'',allCategorys:{
      category:'',
      subcategory:'',
      subofsub:''
    }})
     
     break;
     case 2:
     let allCategorys = Object.assign({}, this.state.allCategorys);    //creating copy of object
     allCategorys.category = row.name; 
     
     this.setState({allCategorys,val:Number(index),categoryItem:row.name,subval:'',subcategoryItem:''})
    
     break;
     case 3:
     var allCategorys = Object.assign({}, this.state.allCategorys);    //creating copy of object
     allCategorys.subcategory = row.name; 
     this.setState({allCategorys,subval:Number(index),subcategoryItem:row.name})
    
     break;
    }

  }
  close(){
    this.setState({listimages:'',val:'',subval:''})
  }
  alldata(row,index){
    
    let allCategorys = Object.assign({}, this.state.allCategorys);    //creating copy of object
    allCategorys.subofsub = row; 
 this.setState({allCategorys,listimages:'',val:'',subval:'',modelId:index})
 jQuery(function ($) {
  $('#exampleModalCenter').modal('toggle');
}.bind(this));
  }
  render() {

    return (
      <div className="container-ads">
        <div className="card my-3">
          <h5 className="card-header">Submit a Free classified Ad</h5>
          <div className="card-body my-3">
            <form className="form-horizontal" action="#">
              <p style={{color:this.state.color,textAlign:'center'}}>{this.state.errorMessage}</p>
              <div className="input-group">
                <label className="col-lg-3 text-right">Ad Title <span style={{color:'red'}}>*</span></label>
                <input
                  type="text"
                  className="form-control col-lg-6"
                  placeholder="Search for..."
                  value={this.state.addTitle}
                  onChange={this
                  .setValue
                  .bind(this, 'addTitle')}/>
              </div>
              {(this.state.addTitleValid !='' && this.state.addTitleValid !=undefined) ?<p style={{color:this.state.color,textAlign:'center'}}>{this.state.message}</p>:''}
              <div className="input-group my-3">
                <label className="text-right col-lg-3">Category <span style={{color:'red'}}>*</span></label>
                {this.state.allCategorys.category!=''?<div><p>{this.state.allCategorys.category} {this.state.allCategorys.subcategory==''?'':'>>'} {this.state.allCategorys.subcategory} {this.state.allCategorys.subofsub==''?'':'>>'} {this.state.allCategorys.subofsub}</p><button type="button" onClick={this.onModalPopUp.bind(this,1)}>Change</button></div>:<select onClick={this.onModalPopUp.bind(this,2)} className="form-control col-lg-4" placeholder="Search for..." value={this.state.category} >
               
              </select>}
              </div>

  {this.state.allCategorys.category=='Properties' && (this.state.allCategorys.subcategory=='For Sale'|| this.state.allCategorys.subcategory=='For Rent' ) ?<Properties {...this.state} type={this.state.allCategorys.subcategory=='For Rent' ?'1':'0'} setValue={this.setValue.bind(this)}/>:''}
  {this.state.allCategorys.category=='Cars' && (this.state.allCategorys.subcategory=='Cars') ?<Cars {...this.state}  setValue={this.setValue.bind(this)}/>:''}

             <DefaultFields  {...this.state} setValue={this.setValue.bind(this)} submitPost={this.submitPost.bind(this)}/>

            </form>
          </div>
             </div>
<CategoryModal {...this.state} alldata={this.alldata.bind(this)} close={this.close.bind(this)} selectListModal={this.selectListModal.bind(this)} />
      </div>
    );
  }
}
export default AddPosts;