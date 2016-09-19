import { computed, observable } from "mobx"

class Shader {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export class ShaderStore {
  @observable shaders = []
  @observable filter = ""
  @computed get filteredShaders() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.shaders.filter(shader => !this.filter || matchesFilter.test(shader.value))
  }

  createShader(value) {
    this.shaders.push(new Shader(value))
  }

  clearComplete = () => {
    const incompleteShaders = this.shaders.filter(shader => !shader.complete)
    this.shaders.replace(incompleteShaders)
  }
}

export default new ShaderStore
