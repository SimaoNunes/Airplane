/*Terceira entrega, Cena Simples com materiais e iluminacao*/

var camera, scene, renderer, clock; // variaveis gerais relativas a animacao

var camera1, camera2, camera3, camera4, camera5, camera6, camera7, camera8; // diferentes tipos de cameras

var geometry, material, mesh;

var airplane, lights; // diferentes objetos a desenhar

var sun, light;

var up, down, left, right;  //flags a ser utilizadas na rotacao do aviao



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
    
    createCamera1();
    createCamera2();
    createCamera3();
    createCamera4();
    createCamera5();
    createCamera6();
    createCamera7();
    createCamera8();

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


function createCamera6() {
    'use strict';
    camera6 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10),
        (window.innerHeight / - 10),
        -1000,
        1000
    );
    
    camera6.position.x = -20;
    camera6.position.y = 0;
    camera6.position.z = 0;
}


function createCamera7() {
    'use strict';
    camera7 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 40,
        (window.innerHeight / - 10) + 40,
        -1000,
        1000
    );
    
    camera7.position.x = 60;
    camera7.position.y = 20;
    camera7.position.z = 40;
}


function createCamera8() {
    'use strict';
    camera8 = new THREE.PerspectiveCamera(90,window.innerWidth / window.innerHeight,20,1000);
    camera8.position.x = 57;
    camera8.position.y = 57;
    camera8.position.z = 57;
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
    case 49:    // 1
        camera=camera1;
        break;
    case 50:    // 2
        camera=camera2;
        break;
    case 51:    // 3
        camera=camera3;
        break;
    case 52:    // 4
        camera=camera4;
        break;
    case 53:    // 5
        camera=camera5;
        break;
    case 54:    // 6
        camera=camera6;
        break;
    case 55:    // 7
        camera=camera7;
        break;
    case 56:    // 8
        camera=camera8;
        break;
    case 37:    //LEFT
        left = true;
        break;
    case 39:    //RIGHT
        right = true;
        break;
    case 38:    //UP
        up = true;
        break;
    case 40:    //DOWN
        down = true;
        break;
    case 78:    //n
        if( light.intensity == 1){
            light.intensity = 0.3;
        }
        else{
            light.intensity = 1;
        }
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

    if(left){
        airplane.children[0].rotateZ(0.06);
        airplane.children[1].rotateY(0.06);
        airplane.children[2].rotateY(0.06);
        airplane.children[3].rotateY(0.06);
        airplane.children[4].rotateY(0.06);
        airplane.children[5].rotateY(0.06);
        airplane.children[6].rotateY(0.06);
        airplane.children[7].rotateY(0.06);
    }
    if(right){
        airplane.children[0].rotateZ(-0.06);
        airplane.children[1].rotateY(-0.06);
        airplane.children[2].rotateY(-0.06);
        airplane.children[3].rotateY(-0.06);
        airplane.children[4].rotateY(-0.06);
        airplane.children[5].rotateY(-0.06);
        airplane.children[6].rotateY(-0.06);
        airplane.children[7].rotateY(-0.06);
    }
    if(up){
        airplane.children[0].rotateY(0.06);
        airplane.children[1].rotateZ(-0.06);
        airplane.children[2].rotateZ(-0.06);
        airplane.children[3].rotateZ(-0.06);
        airplane.children[4].rotateZ(-0.06);
        airplane.children[5].rotateZ(-0.06);
        airplane.children[6].rotateZ(-0.06);
        airplane.children[7].rotateZ(-0.06);
    }
    if(down){
        airplane.children[0].rotateY(-0.06);
        airplane.children[1].rotateZ(0.06);
        airplane.children[2].rotateZ(0.06);
        airplane.children[3].rotateZ(0.06);
        airplane.children[4].rotateZ(0.06);
        airplane.children[5].rotateZ(0.06);
        airplane.children[6].rotateZ(0.06);
        airplane.children[7].rotateZ(0.06);
    }

    render();

    camera.lookAt( scene.position );

    requestAnimationFrame(animate);
}