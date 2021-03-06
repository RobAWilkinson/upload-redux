
import React from 'react';
import ReactDOM from 'react-dom';
import Baby from 'babyparse';


class ReadableFile extends React.Component{
  read() {
    var data = this.refs.myFile.files;
    var reader = new FileReader();
    reader.addEventListener('load', function(event) {
      this.props.uploadFile(Baby.parse(event.target.result, {header: true}).data);
      this.props.setHeaders(Object.keys(Baby.parse(event.target.result, {header: true}).data[0]));
    }.bind(this));
    reader.readAsText(data[0]);
  }

  getFileName() {
    return ReactDOM.findDOMNode(this).files[0].name;
  }

  hasFile() {
    return ReactDOM.findDOMNode(this).files.length > 0;
  }

  onChange() {
    if (this.props.onChange) this.props.onChange(this);
  }

  render() {
    return (
        <div>
          <input type='file' ref="myFile" name={this.props.name} onChange={this.onChange.bind(this)} accept={this.props.accept} />
          <button onClick={this.read.bind(this)}>Click</button>
        </div>
        )
  }
} 
export default ReadableFile;
