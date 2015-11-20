import React from 'react';


export default class HeaderMatcher extends React.Component {
  render() {
    return(
        <div>
    {this.props.headers.map(header =>
        (<p>{header.needed}{header.given}</p>)
        )}
    </div>
    );

  }
}
