/*Terceira entrega, Cena Simples com materiais e iluminacao*/

var camera, scene, renderer, clock; // variaveis gerais relativas a animacao

var cameras, camera1, camera2, camera3, camera4, camera5, camera6, camera7, camera8; // diferentes tipos de cameras

var airplane, lights; // diferentes objetos a desenhar

var  light, spotLight1, spotLight2, spotLight3, spotLight4; // diferentes luzes

var up, down, left, right;  // flags a ser utilizadas na rotacao do aviao

var mesh;

var basicMaterial   = new THREE.MeshBasicMaterial({color: 0x6286f4, wireframe: false});
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0x6286f4, wireframe: false});
var phongMaterial   = new THREE.MeshPhongMaterial({color: 0x6286f4, wireframe: false});
var currentMaterial = lambertMaterial;
var basicFLAG = false;


function applyMaterial(material){
    for(var i=1; i<8; i++){
        airplane.children[i].material = material;
    }
}

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

    airplane  = new Airplane(0, 0, 0);
    lights = new Lights(40,20,40);
    cameras = new Cameras();
   
    camera = camera8;

    scene.add(camera);
    scene.add(airplane);
    scene.add(lights);

}


function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 65: // A
    case 97: // a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 80: // P
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    case 81:    // Q
        camera=camera1;
        break;
    case 87:    // W
        camera=camera2;
        break;
    case 69:    // E
        camera=camera3;
        break;
    case 82:    // R
        camera=camera4;
        break;
    case 84:    // T
        camera=camera5;
        break;
    case 89:    // Y
        camera=camera6;
        break;
    case 85:    // U
        camera=camera7;
        break;
    case 56:    // 8
        camera=camera8;
        break;
    case 37:    // LEFT
        left = true;
        break;
    case 39:    // RIGHT
        right = true;
        break;
    case 38:    // UP
        up = true;
        break;
    case 40:    // DOWN
        down = true;
        break;
    case 71:    // G
        if(currentMaterial == lambertMaterial){
            currentMaterial = phongMaterial;
            applyMaterial(currentMaterial);
            break;
        }
        currentMaterial = lambertMaterial;
        applyMaterial(lambertMaterial);
        break;
    case 76:    //L
        if(basicFLAG){
            applyMaterial(currentMaterial);
            basicFLAG = false;
            break;
        }
        applyMaterial(basicMaterial);
        basicFLAG = true;
        break;
    case 78:    // N
        if( light.intensity == 1.5){
            light.intensity = 0.2;
            break;
        }
        light.intensity = 1.5;
        break;
    case 49:    // 1
        if( spotLight1.intensity == 1){
            spotLight1.intensity = 0;
            break;
        }
        spotLight1.intensity = 1;
        break;
    case 50:    // 2
        if( spotLight2.intensity == 1){
            spotLight2.intensity = 0;
            break;
        }
        spotLight2.intensity = 1;
        break;
    case 51:    // 3
        if( spotLight3.intensity == 1){
            spotLight3.intensity = 0;
            break;
        }
        spotLight3.intensity = 1;
        break;
    case 52:    // 4
        if( spotLight4.intensity == 1){
            spotLight4.intensity = 0;
            break;
        }
        spotLight4.intensity = 1;
        break;
    }
}


function onKeyUp(e) {
    'use strict';
    switch (e.keyCode) {
    case 37:    //LEFT
        left = false;
        break;
    case 39:    //RIGHT
        right = false;
        break;
    case 38:    //UP
        up = false;
        break;
    case 40:    //DOWN
        down = false;
        break;
    }
}


function render() {
    'use strict';
    renderer.render(scene, camera);
}


function init() {
    'use strict';

    up = 0;
    down = 0;
    left = 0;
    right = 0;

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    createScene();

    render();

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
}


function animate() {
    'use strict';
    var p;

    if(left){
        airplane.children[0].rotateZ(0.06);
        for(p=1; p<8; p++){
            airplane.children[p].rotateY(0.06);
        }
    }
    if(right){
        airplane.children[0].rotateZ(-0.06);
        for(p=1; p<8; p++){
            airplane.children[p].rotateY(-0.06);
        }
    }
    if(up){
        airplane.children[0].rotateY(0.06);
        for(p=1; p<8; p++){
            airplane.children[p].rotateZ(-0.06);
        }
    }
    if(down){
        airplane.children[0].rotateY(-0.06);
        for(p=1; p<8; p++){
            airplane.children[p].rotateZ(0.06);
        }
    }

    render();

    camera.lookAt( scene.position );

    requestAnimationFrame(animate);
}