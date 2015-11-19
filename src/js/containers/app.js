import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    return (
        <h1>
          Hello
        </h1>
        );
  }
}

export default connect(function(state){
  return state;
})(App);
