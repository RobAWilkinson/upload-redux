import React from 'react';
import HeaderSelect from './header-select';

export default class HeaderMatcher extends React.Component {
  render() {
    var options = this.props.headers.map(header =>
        header.given
        );

    return (
      <div>
        {this.props.headers.map(header =>
        (<HeaderSelect
          options={options}
          header={header}
          visitors={this.props.visitors.filter(e => e.key === header.given)}
          changeHeader={this.props.changeHeader}
          changeKey={this.props.changeKey}
        />)
      )}
    </div>
    );

  }
}
