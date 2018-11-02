class Airplane extends THREE.Object3D{
    
    addAirplaneFuselage() {
        'use strict';
        geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-10,10,0),
                                new THREE.Vector3(-10,-10,0),
                                new THREE.Vector3(10,-10,0));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeFaceNormals();
    }

    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });

        this.addAirplaneFuselage(0, 0, 0);
    }
}