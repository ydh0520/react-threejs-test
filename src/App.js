
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

    const csvinput=document.getElementById("csvinput");
    csvinput.addEventListener('change',function(e){
      const  file =csvinput.files;

      console.log(file.length)


      for(let i=0;i<file.length;i++){
        const reader =new FileReader(); 
        reader.onload=function(e){
          console.log(e.target.result)
        }
        reader.readAsText(file[i]);
      }

    })
  }

  render() {
    return (
      <div>
        <input type="file" id="fileinput"/>
        <input type="file" id="csvinput" webkitdirectory="true" directory='true' />
        <div id="canvas"/>
      </div>
    )
  }
}