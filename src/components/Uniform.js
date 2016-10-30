'use strict';

import React from 'react';

const typeMap = {
  'F': 'float',
  '2': 'vec2',
  '3': 'vec3'
};

export default class Uniform extends React.Component {
  render() {
    return (
      <li className="uniform">
        <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
        <span className="name">{this.props.name}</span>
      </li>
    );
  }
}
