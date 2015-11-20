import React from 'react';

export default class HeaderSelect extends React.Component {
  render() {
    const { header, changeHeader, options } = this.props;
    return(
        <p>
        {header.needed}
        <select selected={header.needed} >
         {options.map(option =>
             (<option value={option}>{option}</option>)
             )}
         </select>
         </p>
        )
  }
}
