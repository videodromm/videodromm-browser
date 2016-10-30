'use strict';

import React from 'react';
import { Link } from 'react-router';
import shaders from '../data/shaders';

export default class ShadersMenu extends React.Component {
  render() {
    return (
      <nav className="shaders-menu">
        {shaders.map(menuShader => {
          return <Link key={menuShader.id} to={`/shader/${menuShader.id}`} activeClassName="active">
            {menuShader.name}
          </Link>;
        })}
      </nav>
    );
  }
}
