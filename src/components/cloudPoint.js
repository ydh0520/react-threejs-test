import * as THREE from "three";

function createCloudeopint(data){
    
    const geometry  = new THREE.Geometry();

    for(let i=0;i<data.length;i+=4){
        geometry.vertices.push(new THREE.Vector3(data[i],data[i+1],data[i+2]));
        const colorvalue = (data[i+2]+5)*0.1
        geometry.colors.push(new THREE.Color(1-colorvalue,colorvalue,1))
    }
    const material = new THREE.PointsMaterial( { size: 0.05, vertexColors: THREE.VertexColors } );

    const mesh =  new THREE.Points();
    mesh.geometry=geometry;
    mesh.material=material;

    return mesh
}

export default{createCloudeopint}