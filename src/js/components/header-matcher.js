import React from 'react';


export default class HeaderMatcher extends React.Component {
  render() {
    return (
        <div>
    {this.props.headers.map(header =>
        (<p>{header.needed}
         <select name="test" selected={header.given}>
         {this.props.headers.map( e =>
           (<option value={e.given} >{e.given}</option>)
         )}
           </select>
         </p>)
        )}
    </div>
    );

  }
}
