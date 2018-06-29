import React from 'react';

class CategoryModal extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
         
        }
    
      }
alldata(row,index){
    this.props.alldata(row,index);
}
close(){
    this.props.close();
}
selectListModal(index,row,id){
    this.props.selectListModal(index,row,id);
}
   

      render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Select category</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close.bind(this)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                <div className="d-flex" style={{minHeight:'300px',display: 'none'}}>
                      <div className="p-3 flex-fill bg-light">
                        <div className="text-view">
                            <h1>Category</h1>
                     
                            <div className="category-list">
                              <ul>
                              {this.props.selectCategory.map((row, index) => {
                              return(
                                <li key={index} onClick={row.categoryActive=="0"?this.alldata.bind(this,row.name):this.selectListModal.bind(this,index,row,2)}><img src={"./assets/images/"+row.imageName} alt="Avatar" className="avatar" />{row.name} {row.categoryActive=="1"?'>':''}</li>
                              )
                            })}
                              </ul>
                            </div>
                        </div>
                      </div>
          
                      <div className="p-3 flex-fill">
                          <div className="text-view">
                              <h1>{this.props.categoryItem}</h1>
                              <div className="category-list">
                                  <ul>
                                  {this.props.selectCategory[this.props.val]==undefined?'':this.props.selectCategory[this.props.val].category.map((row, index) => {
                              return(
                                <li key={index} onClick={row.subcategoryActive=="0"?this.alldata.bind(this,row.name):this.selectListModal.bind(this,index,row,3)}>{row.name} {row.subcategoryActive=="1"?'>':''}</li>
                              )
                            })}
                                  </ul>
                                </div>
                          </div>
                        </div>
          
                        <div className="p-3 flex-fill">
                            <div className="text-view">
                                <h1>{this.props.subcategoryItem}</h1>
                                <div className="category-list">
                                    <ul>
                                    {this.props.selectCategory[this.props.val]==undefined ||this.props.selectCategory[this.props.val].category[this.props.subval]==undefined?'':this.props.selectCategory[this.props.val].category[this.props.subval].subcategory.map((row, index) => {
                              return(
                                <li key={index} onClick={this.alldata.bind(this,row,index)}>{row}</li>
                              )
                            })}
                                    </ul>
                                  </div>
                            </div>
                          </div>
                    </div>
          
          
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default CategoryModal;