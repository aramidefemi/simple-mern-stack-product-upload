import React, { Component, Fragment } from 'react'; 
import axios from 'axios'

class PreviewProduct extends Component {
  state = {
    product : {}
  }
  componentDidMount() {
    const { match: { params } } = this.props;
  
    axios.get(`http://localhost:9000/product/detail/${params.id}`)
      .then((res)=>{
        this.setState({
          product: res.data.payload
        })
      })
      .catch(err=>alert(err))
  }
  render() {
    const data = this.state.product
    return (
      <Fragment> 
      <div className="row">
        <div className="col-md-10 pl-5">
         <h3 className="ml-3">Preview Product -- {data.name} </h3>
        </div>
        <div className="col-md-2 pr-5">
          {/* <button className="btn btn-primary ImageUpload" onClick={this.onFormSubmit} >
            Save Product
          </button> */}
        </div>
      </div>
        <div className="row">
         <div className="col-md-6" >
         <div
        className="p-5" 
        style={{   backgroundColor: data.color }}
      >
        <div className="platform"  style={{ backgroundImage: `url(http://localhost:9000/${data.image})`, backgroundColor: data.color }}>
           
        </div>
      </div>
         </div>
         <div className="col-md-6">
         <h3> {data.name} </h3>
         <strong className="text-success">{data.price}</strong>
         <h5>{data.category}</h5>
         <p className="mt-5"> {data.description} </p> 
         </div>
        </div>
      </Fragment>
    );
  }
}

export default PreviewProduct;
