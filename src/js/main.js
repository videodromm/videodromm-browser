import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import ShaderStore from "./ShaderStore"
import ShaderList from "./ShaderList"

const app = document.getElementById("app")

ReactDOM.render(<ShaderList store={ShaderStore} />, app)

