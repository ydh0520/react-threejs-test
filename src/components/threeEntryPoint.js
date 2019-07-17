import * as THREE from "three";
import hexaLine from './hexahedronLine'

export default (domID,data) => {
    const rootDom   = document.getElementById(domID);
    if(rootDom.hasChildNodes()){
        rootDom.removeChild(rootDom.firstChild)
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 200 );

    camera.position.z =80;
    console.log(camera)
    const renderer = new THREE.WebGLRenderer( { 
      //alpha:true,
    });

    renderer.setSize( window.innerWidth, window.innerHeight );

    rootDom.appendChild( renderer.domElement );

    const geometry  = new THREE.Geometry();

    for(let i=0;i<data.length;i+=4){
        geometry.vertices.push(new THREE.Vector3(data[i],data[i+1],data[i+2]));
        const colorvalue = (data[i+2]+5)*0.1
        geometry.colors.push(new THREE.Color(colorvalue,1-colorvalue,1))
    }

    const material = new THREE.PointsMaterial( { size: 0.1, vertexColors: THREE.VertexColors } );

    const mesh =  new THREE.Points();
   
    mesh.geometry=geometry;
    mesh.material=material;

    scene.add( mesh );
    mesh.rotation.x+=5;
    
    const animation = function(){

        requestAnimationFrame(animation);
        mesh.rotation.z+=0.005;
        //mesh.rotation.y+=0.002;
        renderer.render(scene,camera)
    }

    animation()

    renderer.render(scene,camera)
}