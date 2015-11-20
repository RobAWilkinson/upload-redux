import React from 'react';

export default class HeaderSelect extends React.Component {
  callChangeHeader(e) {
    this.props.changeHeader(this.props.header.needed, e.target.value);
  }
  render() {
    const { header, changeHeader, options } = this.props;
    var d = '';
      if(this.props.visitors.length) {
           d = (<ul>
              {this.props.visitors[0].data.map( dataPoint =>
                  (<li>{dataPoint}</li>)
              )}
            </ul>);
      }
    console.log(this.props.visitors);
    return (
        <p>
          {header.needed}
          <select onChange={this.callChangeHeader.bind(this)} selected={header.needed} >
           {options.map(option =>
               (<option value={option}>{option}</option>)
               )}
           </select>
           {d}
         </p>
        );
  }
}
