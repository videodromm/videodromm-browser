'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ShaderPreview extends React.Component {
  render() {
    return (
      <Link to={`/shader/${this.props.id}`}>
        <div className="shader-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="uniforms-count"><img src="/img/uniform.png"/> {this.props.uniforms.length}</span>
        </div>
      </Link>
    );
  }
}
