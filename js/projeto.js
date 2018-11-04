/*Terceira entrega, Cena Simples com materiais e iluminacao*/

var camera, scene, renderer, clock; // variaveis gerais relativas a animacao

var camera1, camera2, camera3, camera4, camera5; // diferentes tipos de cameras

var geometry, material, mesh;

var airplane, lights, sun, light; // diferentes objetos a desenhar


function onResize() {
    'use strict';
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(20));

    airplane  = new Airplane(0, 0, 0);
    lights = new Lights(40,20,40);
    
    createCamera1();
    createCamera2();
    createCamera3();
    createCamera4();
    createCamera5();

    camera = camera1;

    // var geometry = new THREE.BoxGeometry( 100000, 1, 100000);
    // var material = new THREE.MeshBasicMaterial( {color: 0x2a000} );
    // var ground = new THREE.Mesh( geometry, material );
    // ground.position.x = 0;
    // ground.position.y = 0;
    // ground.position.z = 0;
    // scene.add( ground );


    scene.add(camera);
    scene.add(airplane);
    scene.add(lights)

    light = new THREE.AmbientLight( 0xffffff , 1); // soft white light
    scene.add( light );

    // var light = new THREE.PointLight( 0xffffff, 2 , 50); // soft white light
    // scene.add( light );

    // var light = new THREE.SpotLight( 0xffffff, 25); // soft white light
    // light.position.set(0,1,0);
    // scene.add( light );


}

function createCamera1() {
    'use strict';
    camera1 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 30,
        (window.innerHeight / - 10) + 30,
        -1000,
        1000
    );
    
    camera1.position.x = 0;
    camera1.position.y = 0;
    camera1.position.z = 40;
}

function createCamera2() {
    'use strict';
    camera2 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 30,
        (window.innerHeight / - 10) + 30,
        -1000,
        1000
    );
    
    camera2.position.x = 60;
    camera2.position.y = 20;
    camera2.position.z = 40;
}

function createCamera3() {
    'use strict';
    camera3 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 40,
        (window.innerHeight / - 10) + 40,
        -1000,
        1000
    );
    
    camera3.position.x = 40;
    camera3.position.y = 0;
    camera3.position.z = 0;
}

function createCamera4() {
    'use strict';
    camera4 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 20,
        (window.innerHeight / - 10) + 20,
        -1000,
        1000
    );
    
    camera4.position.x = 0;
    camera4.position.y = 40;
    camera4.position.z = 40;
}

function createCamera5() {
    'use strict';
    camera5 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10),
        (window.innerHeight / - 10),
        -1000,
        1000
    );
    
    camera5.position.x = 0;
    camera5.position.y = 20;
    camera5.position.z = 0;
}

function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 65: //A
    case 97: //a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    case 49: // 1
        camera=camera1;
        break;
    case 50: // 2
        camera=camera2;
        break;
    case 51: // 3
        camera=camera3;
        break;
    case 52: // 4
        camera=camera4;
        break;
    case 53: // 5
        camera=camera5;
        break;
    case 37:
        airplane.rotation.x += 0.1;
        break;
    case 39: 
        airplane.rotation.x -= 0.1;
        break;
    case 38:
        airplane.rotation.z +=0.1;
        break;
    case 40:
        airplane.rotation.z -=0.1;
        break;
    case 78:
        if( light.intensity == 1){
            light.intensity = 0.3;
        }
        else{
            light.intensity = 1;
        }
    }
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    createScene();

    render();

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
}

function animate() {
    'use strict';

    render();

    camera.lookAt( scene.position );

    requestAnimationFrame(animate);
}