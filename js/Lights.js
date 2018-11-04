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
        var geometry = new THREE.SphereGeometry(5, 32, 32);
        var material = new THREE.MeshLambertMaterial({ color: 0xfaffaa, wireframe: false });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+63, z);
        this.add( mesh );
    }

    addAmbientLight(){
        light = new THREE.DirectionalLight(0xffffff, 1.5); // soft white light
        light.castShadow = true;
        scene.add(light);
    }

    addspotlightmoonlightshawtylookgoodinthemoonlight(x,y,z){

        spotLight1 = new THREE.SpotLight(0xffffff, 0 );
        spotLight1.position.set(x, y+63, z);
        spotLight1.castShadow = true;
        scene.add(spotLight1);
        scene.add(spotLight1.target);
        spotLight1.target.position.x = x;
        spotLight1.target.position.y = y;
        spotLight1.target.position.z = z;

        spotLight2 = new THREE.SpotLight(0xffffff, 0 );
        spotLight2.position.set(-x, y+63, z);
        spotLight2.castShadow = true;
        scene.add(spotLight2);
        scene.add(spotLight2.target);
        spotLight2.target.position.x = -x;
        spotLight2.target.position.y = y;
        spotLight2.target.position.z = z;

        spotLight3 = new THREE.SpotLight(0xffffff, 0 );
        spotLight3.position.set(x, y+63, -z);
        spotLight3.castShadow = true;
        scene.add(spotLight3);
        scene.add(spotLight3.target);
        spotLight3.target.position.x = x;
        spotLight3.target.position.y = y;
        spotLight3.target.position.z = -z;

        spotLight4 = new THREE.SpotLight(0xffffff, 0 );
        spotLight4.position.set(-x, y+63, -z);
        spotLight4.castShadow = true;
        scene.add(spotLight4);
        scene.add(spotLight4.target);
        spotLight4.target.position.x = -x;
        spotLight4.target.position.y = y;
        spotLight4.target.position.z = -z;
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