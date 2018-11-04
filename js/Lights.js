class Lights extends THREE.Object3D{
    
    addLampHead(x, y, z) {
        'use strict';
        var geometry = new THREE.ConeGeometry(15, 20, 20);
        var material = new THREE.MeshLambertMaterial({ color: 0x474747, wireframe: true });
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

    addAmbientLight(){
        light = new THREE.AmbientLight( 0xffffff , 1); // soft white light
        scene.add( light );
    }

    addspotlightmoonlightshawtylookgoodinthemoonlight(x,y,z){

        spotLight1 = new THREE.SpotLight( 0xffffff, 0 );
        spotLight1.position.set( x, y+63, z );
        spotLight1.castShadow = true;
        scene.add( spotLight1 );

        spotLight2 = new THREE.SpotLight( 0xffffff, 0 );
        spotLight2.position.set( -x, y+63, z );
        spotLight2.castShadow = true;
        scene.add( spotLight2 );

        spotLight3 = new THREE.SpotLight( 0xffffff, 0 );
        spotLight3.position.set( x, y+63, -z );
        spotLight3.castShadow = true;
        scene.add( spotLight3 );

        spotLight4 = new THREE.SpotLight( 0xffffff, 0 );
        spotLight4.position.set( -x, y+63, -z );
        spotLight4.castShadow = true;
        scene.add( spotLight4 );
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

        this.addAmbientLight();
        this.addspotlightmoonlightshawtylookgoodinthemoonlight(x,y,z);
    }
}