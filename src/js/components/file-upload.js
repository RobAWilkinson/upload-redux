import React from 'react';
import ReadableFile from './readable-file';

class FileUpload extends React.Component {
  render() {
    return (
    <div>
      <ReadableFile uploadFile={this.props.uploadFile} />
    </div>
    );
  }
}
export default FileUpload;
