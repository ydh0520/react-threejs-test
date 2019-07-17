
import React, { Component } from "react";
import threeEntryPoint from './components/threeEntryPoint'
import "./App.css"
export default class App extends Component {
  
  componentDidMount() {
    const fileinput= document.getElementById("fileinput");
    
    fileinput.addEventListener('change',function(e){
      const file = fileinput.files[0];
      const reader = new FileReader();
      reader.onload=function(e){
        const rawData = new Float32Array(reader.result);        
        threeEntryPoint("canvas",rawData)
      }
      reader.readAsArrayBuffer(file)
    })
  }

  render() {
    return (
      <div>
        <input type="file" id="fileinput"/>
        <div id="canvas"/>
      </div>
    )
  }
}