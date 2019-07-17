import * as THREE from "three";

const geometryLine = new THREE.Geometry();
geometryLine.vertices.push(new THREE.Vector3(100,100,100))
geometryLine.vertices.push(new THREE.Vector3(100,100,-100))
geometryLine.vertices.push(new THREE.Vector3(100,-100,-100))
geometryLine.vertices.push(new THREE.Vector3(100,-100,100))
geometryLine.vertices.push(new THREE.Vector3(100,100,100))

geometryLine.vertices.push(new THREE.Vector3(-100,100,100))
geometryLine.vertices.push(new THREE.Vector3(-100,100,-100))
geometryLine.vertices.push(new THREE.Vector3(-100,-100,-100))
geometryLine.vertices.push(new THREE.Vector3(-100,-100,100))
geometryLine.vertices.push(new THREE.Vector3(-100,100,100))

geometryLine.vertices.push(new THREE.Vector3(-100,-100,100))
geometryLine.vertices.push(new THREE.Vector3(100,-100,100))

geometryLine.vertices.push(new THREE.Vector3(100,-100,-100))
geometryLine.vertices.push(new THREE.Vector3(-100,-100,-100))

geometryLine.vertices.push(new THREE.Vector3(-100,100,-100))
geometryLine.vertices.push(new THREE.Vector3(100,100,-100))

const materialLine = new THREE.LineBasicMaterial({
    color: 0xffffff
})

const hexahedronLine = new THREE.Line(geometryLine,materialLine);

export default hexahedronLine;