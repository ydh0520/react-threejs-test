import * as THREE from "three";
import cp from './cloudPoint'
import hexaline from "./hexahedronLine"

export default (domID,data) => {
    const rootDom   = document.getElementById(domID);

    if(rootDom.hasChildNodes()){
        rootDom.removeChild(rootDom.firstChild)
    }

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer( { 
      //alpha:true,
    });

    let size=window.innerHeight-100;
    if(window.innerWidth<window.innerHeight-100){
        size=window.innerWidth
    }
    renderer.setSize(size, size );

    const camera = new THREE.PerspectiveCamera( 60, 1, 2, 500 );
    camera.position.z =73.5;

    rootDom.appendChild( renderer.domElement );
    
    const cloudPoint = cp.createCloudeopint(data);
    scene.add( cloudPoint);

    const raycaster = new THREE.Raycaster();


    scene.add(hexaline)
    renderer.render(scene,camera)


    const render=()=>{
        renderer.render(scene,camera)
    }
    //-------------------------------------------//
    const rotateScene = (movementX,movementY) => {
        scene.rotation.z+=movementX*0.01
        scene.rotation.x+=movementY*0.01;
        renderer.render(scene,camera)
    }

    const zoom = (wheelDelta) => {
        camera.position.z -=wheelDelta;
        if(camera.position.z<10)
            camera.position.z=10

        console.log(camera.position.z)
        renderer.render(scene,camera)
    }

    const mousehandle=function(e){
        rotateScene(e.movementX,e.movementY)
    }
    
    const whellhandle=function(e){
        zoom(e.wheelDelta/120)
    }
    //-------------------------------------------//
    renderer.domElement.addEventListener('mouseup',function(){      
        renderer.domElement.removeEventListener("mousemove",mousehandle)
    })
    renderer.domElement.addEventListener('mousedown',function(e){

        const clickX = ( e.offsetX / renderer.domElement.width );
        const clickY = ( e.offsetY / renderer.domElement.height );
        const clickPoint = new THREE.Vector3(clickX,clickY,0);
        raycaster.setFromCamera(clickPoint,camera)
        console.log(raycaster.near)

        renderer.domElement.addEventListener('mousemove',mousehandle)  
    })
    renderer.domElement.addEventListener('mousewheel',whellhandle)

    window.addEventListener('resize',function(){
        let size=window.innerHeight-100;
        if(window.innerWidth<window.innerHeight-100){
            size=window.innerWidth
        }
        renderer.setSize(size, size );
        camera.aspect=size/size;
        renderer.render(scene,camera)
    })
    //-------------------------------------------//
}