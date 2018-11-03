class Airplane extends THREE.Object3D{
    
    addAirplaneFuselage(x,y,z) {
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-10,10,0),
                                new THREE.Vector3(-10,-10,0),
                                new THREE.Vector3(10,-10,0));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeFaceNormals();
        var diffuseColour = new THREE.Color(0.2,0.2,0.3);
        var specularColour = new THREE.Color(0.2,0.2,0.3);
        var lightColour = new THREE.Color(0.2,0.2,0.3);
        var phongMaterial = new THREE.MeshPhongMaterial({ color: diffuseColour, specular: specularColour, shininess: 2 });
        var light = THREE.DirectionalLight({color: lightColour});
        mesh = new THREE.Mesh(geometry, phongMaterial);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.add(light);
    }

    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        this.addAirplaneFuselage(0, 0, 0);
    }
}