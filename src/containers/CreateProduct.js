import React, {
  Component, Fragment
} from 'react'; 
import  ImageUpload from '../components/ImageUpload'
import  InputForms from '../components/InputForms'
import axios from 'axios'
import { Redirect } from "react-router-dom"; 

class CreateProduct extends Component {
  constructor (props) {
    super(props);
    this.state ={
      file: null,
      form : {  },
      redirect:  false,
      preview: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.updateFile = this.updateFile.bind(this); 
  }
  onFormSubmit(){  
    const formData = new FormData();

    formData.append('myImage',this.state.file);
    formData.append('name',this.state.form.name);  
    formData.append('color',this.state.form.color);  
    formData.append('price',this.state.form.price);  
    formData.append('category',this.state.form.category);  
    formData.append('description',this.state.form.description);  
  
    const config = {
        headers: {
            'Content-Type': 'multipart/form-databoundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL'
            // 'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'application/json'
        }
    };
    // console.log(FormData);

    axios.post("http://localhost:9000/product/create",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
            this.setState({redirect:  true, preview: response.data.payload['_id']});
            console.log(response);
        })
        .catch((err) =>alert(err));
}
updateFile(e) {
    this.setState({file:e.target.files[0]});
}

updateForm(key,val) { 
    var form = this.state.form;
    form[key] = val;
    this.setState({
      form: form
    });
}
  render() { 
    if(this.state.redirect) {
   return ( <Redirect to={`/preview/${this.state.preview}`} /> )
    }else {
    return ( 
      <Fragment> 
      <div className="row">
        <div className="col-md-10 pl-5">
         <h3 className="ml-3">Create New Product </h3>
        </div>
        <div className="col-md-2 pr-5">
          <button className="btn btn-primary ImageUpload" onClick={this.onFormSubmit} >
            Save Product
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 b-r">
          <ImageUpload update={this.updateFile} backgroundImage={this.state.file} />
        </div>
        <div className="col-md-6">
         <InputForms update={this.updateForm} />
        </div>
      </div> 
      </Fragment>
    );
    }
  }
}

export default CreateProduct;