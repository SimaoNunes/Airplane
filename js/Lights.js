class Lights extends THREE.Object3D{
    
    addLampHead(x, y, z) {
        'use strict';
        var geometry = new THREE.ConeGeometry(15, 20, 20);
        var material = new THREE.MeshLambertMaterial({ color: 0x474747, wireframe: false });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+63, z);
        this.add(mesh);
    }

    addLampBall(x, y, z){
        'use strict';
        var geometry = new THREE.SphereGeometry( 5, 32, 32 );
        var material = new THREE.MeshLambertMaterial({ color: 0xfaffaa, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+63, z);
        this.add( mesh );
    }

    constructor(x,y,z){
        super();
    
        'use strict';

        this.addLampHead(x,y,z);
        this.addLampBall(x,y,z);

        this.addLampHead(-x,y,z);
        this.addLampBall(-x,y,z);
        
        this.addLampHead(x,y,-z);
        this.addLampBall(x,y,-z);
        
        this.addLampHead(-x,y,-z);
        this.addLampBall(-x,y,-z);
    }
}