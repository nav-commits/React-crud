import React ,{Fragment}from 'react';
import Input from "./Components/Input";
import Getdata from "./Components/Getdata";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Input/>
        <Getdata/>
      </Fragment>
    );
  }
}

export default App;
