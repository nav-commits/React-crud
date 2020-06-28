
import "../App.css";
import React ,{Fragment}from 'react';
import axios from'axios';


class Getdata extends React.Component {

state ={
    posts: []
}

componentDidMount (){
axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
.then(response =>{
   this.setState({posts: response.data});
});
}

deletedata = (id) =>{
axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response =>{
const alldata = this.state.posts;
for(let i = 0; i < alldata.length; i++){
  if(alldata[i].id === id){
    alldata.splice(i,1);
    this.setState({posts:alldata});
  }
}
});
}
updatedata = () =>{
  const data = {
    "userId": 13444,
    "id": 12333,
    "title": "its cool",
    "body": "BOBB"

  }
  axios.put(`https://jsonplaceholder.typicode.com/posts/1/`,data)
  .then(response =>{
    console.log(response)
  }) 
  }
  render() {
    return (
      <Fragment>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">body</th>
      <th scope="col">id</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {this.state.posts.map(allposts =>(
        <tr key={allposts.id}>
        <td>{allposts.title}</td>
        <td>{allposts.body}</td>
        <td>{allposts.id}</td>
        <td><button className="btn btn-primary" onClick={this.updatedata}>edit</button></td>
        <td><button className="btn btn-danger" onClick={this.deletedata.bind(this,allposts.id)}>delete</button></td>
        </tr>
    ))}
  </tbody>
</table>
      </Fragment>
    );
  }
}

export default Getdata;