'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/videodromm-logo.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            Contribute on <a href="https://github.com/videodromm">GitHub</a>
          </p>
        </footer>
      </div>
    );
  }
}
