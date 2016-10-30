'use strict';

import React from 'react';
import ShaderPreview from './ShaderPreview';
import shaders from '../data/shaders';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="shaders-selector">
          {shaders.map(shaderData => <ShaderPreview key={shaderData.id} {...shaderData} />)}
        </div>
      </div>
    );
  }
}
