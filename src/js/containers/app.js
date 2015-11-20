import React from 'react';
import {connect} from 'react-redux';
import ReadableFile from '../components/readable-file';
import { startUpload, changeHeader, changeKey, parseData, initialParse } from '../actions';
import FileUpload from '../components/file-upload';
import HeaderMatcher from '../components/header-matcher';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    const { dispatch, headers, data, upload } = this.props;
    return (
        <div>
          <h1>
            Hello
          </h1>
          <FileUpload 
          uploadFile={fileData =>
            dispatch(parseData(fileData))
          } />
          <HeaderMatcher headers={headers} changeHeader={function(needed, given) { 
            dispatch(changeHeader(needed, given));
          }}/>

        </div>

        );
  }
}

export default connect(function(state){
  return state;
})(App);
