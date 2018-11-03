class Airplane extends THREE.Object3D{
    
    addAirplaneFuselage(x,y,z) {
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-50,5,0),
                                new THREE.Vector3(-50,-10,0),
                                new THREE.Vector3(50,-10,0));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeBoundingSphere();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }

    addAirplaneBack1(x,y,z) {
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-50,5,-10),
                                new THREE.Vector3(-50,-10,-10),
                                new THREE.Vector3(-50,-10,10));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeBoundingSphere();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }


    addAirplaneBack2(x,y,z) {
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-50,5,10),
                                new THREE.Vector3(-50,-10,10),
                                new THREE.Vector3(-50,5,-10));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeBoundingSphere();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }


    addWing1(x,y,z){
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(10,-5,10),
                                new THREE.Vector3(-10,-5,10),
                                new THREE.Vector3(-25,-5,60));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeBoundingSphere();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }

    addWing2(x,y,z){
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(10,-5,-10),
                                new THREE.Vector3(-10,-5,-10),
                                new THREE.Vector3(-25,-5,-60));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeBoundingSphere();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }

    addFrontLine(x,y,z){
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(50,-10,-10),
                                new THREE.Vector3(50,-10,10),
                                new THREE.Vector3(50,-10,10));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeBoundingSphere();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }

    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        this.addAirplaneFuselage(0, 0, -10);
        this.addAirplaneFuselage(0, 0, 10);

        this.addAirplaneBack1(0,0,0);
        this.addAirplaneBack2(0,0,0);

        this.addWing1(0,0,0);
        this.addWing2(0,0,0);

        this.addFrontLine(0,0,0);


    }
}