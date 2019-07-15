import * as THREE from "three";
import hexaLine from './hexahedronLine'

export default (domID) => {
    const rootDom   = document.getElementById(domID);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 5000 );
   
    camera.position.z =1500;
   
    const renderer = new THREE.WebGLRenderer( { 
      antialias: true,
      background:'#111111'
    });

    renderer.setSize( window.innerWidth, window.innerHeight );
    rootDom.appendChild( renderer.domElement );
   
   
    const geometry  = new THREE.Geometry();
   
    var i,j,k;
    for(i=-500;i<=500;i+=10){
        for(j=-500;j<=500;j+=10){
            for(k=-500;k<=500;k+=10){ 
                var randomInt = Math.floor(Math.random() * 100) + 1;
                if(randomInt>98){
                    geometry.vertices.push(new THREE.Vector3(i,j,k));
                    geometry.colors.push({
                        r:0.001*(i+500),
                        g:0.001*(j+500),
                        b:0.001*(k+500)
                    });
                }
            }
        }
    }
   
    const material = new THREE.PointsMaterial( { size: 1, vertexColors: THREE.VertexColors } );
   
    const mesh =  new THREE.Points();
   
    mesh.geometry=geometry;
    mesh.material=material;
    
    scene.add( mesh );
    scene.add( hexaLine );

    renderer.render(scene,camera)
}