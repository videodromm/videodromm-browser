import React from "react"
import { observer } from "mobx-react"


@observer
export default class ShaderList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createShader(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(shader) {
    shader.complete = !shader.complete
  }

  render() {
    const { clearComplete, filter, filteredShaders, shaders } = this.props.store

    const shaderLis = filteredShaders.map(shader => (
      <li key={shader.id}>
       <input type="checkbox" onChange={this.toggleComplete.bind(this, shader)} value={shader.complete} checked={shader.complete} />
       <span>{shader.value}</span>
      </li>
    ))
    return <div>
      <h1>shaders</h1>
      <input className="new" onKeyPress={this.createNew.bind(this)} />
      <input className="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{shaderLis}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>
  }
}
