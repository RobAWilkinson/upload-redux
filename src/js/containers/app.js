import React from 'react';
import {connect} from 'react-redux';
import ReadableFile from '../components/readable-file';
import { startUpload, changeHeader, changeKey, parseData, initialParse, setHeaders } from '../actions';
import FileUpload from '../components/file-upload';
import HeaderMatcher from '../components/header-matcher';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const { dispatch, headers, data, upload } = this.props;
    return (
        <div>
          <h1>
            Hello
          </h1>
          <FileUpload
          uploadFile={fileData =>
            dispatch(parseData(fileData))
          }
         setHeaders={givenHeaders =>
          dispatch(setHeaders(givenHeaders))
         } />
          <HeaderMatcher
            headers={headers}
            changeHeader={function(needed, given) {
              dispatch(changeHeader(needed, given));
            }}
            changeKey={function(needed, given) {
              dispatch(changeKey(needed, given));
            }}
            visitors={data}
            />

        </div>

        );
  }
}

export default connect(function(state){
  return state;
})(App);
