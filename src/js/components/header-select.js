import React from 'react';

export default class HeaderSelect extends React.Component {
  callChangeHeader(e) {
    this.props.changeHeader(this.props.header.needed, e.target.value);
  }
  render() {
    const { header, changeHeader, options } = this.props;
    return(
        <p>
        {header.needed}
        <select onChange={this.callChangeHeader.bind(this)} selected={header.needed} >
         {options.map(option =>
             (<option value={option}>{option}</option>)
             )}
         </select>
         </p>
        )
  }
}
