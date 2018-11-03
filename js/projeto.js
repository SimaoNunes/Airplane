/*Terceira entrega, Cena Simples com materiais e iluminacao*/

var camera, scene, renderer, clock; // variaveis gerais relativas a animacao

var camera1; // diferentes tipos de cameras

var geometry, material, mesh;

var airplane, lights; // diferentes objetos a desenhar


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

    airplane  = new Airplane(0, 37, 0);
    lights = new Lights(40,30,40);
    
    createCamera1();

    camera = camera1;

    scene.add(camera);
    scene.add(airplane);
    scene.add(lights)
}

function createCamera1() {
    'use strict';
    camera1 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 50,
        (window.innerHeight / - 10) + 50,
        -1000,
        1000
    );
    
    camera1.position.x = 0;
    camera1.position.y = 0;
    camera1.position.z = 40;
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
    case 50: // 1
        camera = camera1;
        camera1.position.x = 60;
        camera1.position.y = 20;
        camera1.position.z = 40;
        break;
    case 49: 
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 40;
        break;
    case 51:
        camera.position.x = 40;
        camera.position.y = 0;
        camera.position.z = 0;
        break;
    case 52:
        camera.position.x = 0;
        camera.position.y = 40;
        camera.position.z = 40;
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