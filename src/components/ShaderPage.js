'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ShadersMenu from './ShadersMenu';
import Uniform from './Uniform';
import Flag from './Flag';
import shaders from '../data/shaders';

export default class ShaderPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const shader = shaders.filter((shader) => shader.id === id)[0];
    if (!shader) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${shader.cover})` };
    return (
      <div className="shader-full">
        <ShadersMenu/>
        <div className="shader">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${shader.image}`}/>
            <h2 className="name">{shader.name}</h2>
          </div>
          <section className="description">
             <strong><Flag code={shader.status} showName="true"/></strong>,
            source: {shader.text} From <a href={shader.link} target="_blank">{shader.link}</a>.
          </section>
          <section className="uniforms">
            <p><strong>{shader.uniforms.length}</strong> uniforms:</p>
            <ul>{
              shader.uniforms.map((uniform, i) => <Uniform key={i} {...uniform}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
