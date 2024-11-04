import React from 'react';
import PropTypes from 'prop-types';

class Greet extends React.Component {
  render() {
    return (
      <div>
        <h1 className='App'>Hello, {this.props.name}</h1>
        <h1>Age: {this.props.age}</h1>
      </div>
    )
  }
}

Greet.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

Greet.defaultProps = {
  name: 'World'
};

export default Greet;