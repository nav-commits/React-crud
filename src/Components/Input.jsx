import React ,{Fragment}from 'react';
import "../App.css";
import axios from'axios';


class Input extends React.Component {
  state={
    title:''
  }
  handleSubmit = (event)=> {
    event.preventDefault();
    const data ={
      title: this.state.title
    }
    axios.post('https://jsonplaceholder.typicode.com/posts',data)
    .then(response =>{
      console.log(response);
    });
   
  }
  render() {
    return (
      <Fragment>
        <h1 className="text-center mt-5">Please Fill out the form</h1>
        <form className="d-flex mt-5" onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" value={this.state.title} onChange={(event)=>{this.setState({title:event.target.value})}}/>
          <button className="btn btn-success">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default Input;