class Airplane extends THREE.Object3D{
    
    addAirplaneFuselage(x,y,z) {
        'use strict';
        var material = new THREE.MeshBasicMaterial({color: 0x6286f4, wireframe: false });
        var i;
        var c = 0;

        var bottom = new THREE.Geometry();              //Parte de tras da fuselagem
        for(i=-40; i<40; i+=2){
            bottom.vertices.push(   new THREE.Vector3(i,0,10),
                                    new THREE.Vector3(i,0,-10),
                                    new THREE.Vector3(i+2,0,-10));
            bottom.faces.push(new THREE.Face3(c,c+1,c+2));
            bottom.vertices.push(   new THREE.Vector3(i,0,10),
                                    new THREE.Vector3(i+2,0,-10),
                                    new THREE.Vector3(i+2,0,10));
            bottom.faces.push(new THREE.Face3(c+3,c+4,c+5));
            bottom.computeFaceNormals();
            c+=6;
        }
        mesh = new THREE.Mesh(bottom, material);
        mesh.position.set(x, y, z);
        this.add(mesh);


        var back = new THREE.Geometry();                    //Parte de baixo da fuselagem
        c = 0;
        for(i=-10; i<10; i+=2){
            back.vertices.push( new THREE.Vector3(-40,0,i),
                                new THREE.Vector3(-40,20,i),
                                new THREE.Vector3(-40,0,i+2));
            back.faces.push(new THREE.Face3(c+1,c,c+2));
            back.vertices.push( new THREE.Vector3(-40,20,i+2),
                                new THREE.Vector3(-40,20,i),
                                new THREE.Vector3(-40,0,i+2));
            back.faces.push(new THREE.Face3(c+3,c+4,c+5));
            back.computeFaceNormals();
            c+=6;
        }
        mesh = new THREE.Mesh(back, material);
        mesh.position.set(x, y, z);
        this.add(mesh);


        var top = new THREE.Geometry();                     //Parte de cima da fuselagem
        top.vertices.push(  new THREE.Vector3(-40,20,10),
                            new THREE.Vector3(-40,20,-10),
                            new THREE.Vector3(40,0,10));
        top.faces.push(new THREE.Face3(0,2,1));
        top.vertices.push(  new THREE.Vector3(40,0,-10),
                            new THREE.Vector3(-40,20,-10),
                            new THREE.Vector3(40,0,10));
        top.faces.push(new THREE.Face3(3,4,5));
        top.computeFaceNormals();
        mesh = new THREE.Mesh(top, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        

        var side = new THREE.Geometry();                        //Lados da fuselagem
        side.vertices.push( new THREE.Vector3(-40,0,10),
                            new THREE.Vector3(-40,20,10),
                            new THREE.Vector3(40,0,10));
        side.faces.push(new THREE.Face3(1,0,2));
        side.vertices.push( new THREE.Vector3(-40,0,-10),
                            new THREE.Vector3(-40,20,-10),
                            new THREE.Vector3(40,0,-10));
        side.faces.push(new THREE.Face3(3,4,5));
        side.computeFaceNormals();
        mesh = new THREE.Mesh(side, material);
        mesh.position.set(x, y, z);
        this.add(mesh);


    }


    addWingRight(x,y,z){
        'use strict';
        var material = new THREE.MeshBasicMaterial({ color: 0x6286f4, wireframe: false });
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(15,4,10),          //Asa de cima
                                new THREE.Vector3(-5,4,10),
                                new THREE.Vector3(-20,4,60));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.vertices.push( new THREE.Vector3(-25,4,60),
                                new THREE.Vector3(-5,4,10),
                                new THREE.Vector3(-20,4,60));
        geometry.faces.push(new THREE.Face3(4,3,5));
        geometry.vertices.push( new THREE.Vector3(15,2,10),         //Asa de baixo
                                new THREE.Vector3(-5,2,10),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(7,6,8));
        geometry.vertices.push( new THREE.Vector3(-25,2,60),
                                new THREE.Vector3(-5,2,10),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(9,10,11));
        geometry.vertices.push( new THREE.Vector3(-20,4,60),        //Ponta da asa
                                new THREE.Vector3(-25,4,60),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(12,13,14));
        geometry.vertices.push( new THREE.Vector3(-25,4,60),
                                new THREE.Vector3(-25,2,60),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(15,16,17));
        geometry.vertices.push( new THREE.Vector3(15,4,10),        //Lados
                                new THREE.Vector3(-20,4,60),
                                new THREE.Vector3(15,2,10));
        geometry.faces.push(new THREE.Face3(18,19,20));
        geometry.vertices.push( new THREE.Vector3(-20,4,60),
                                new THREE.Vector3(-20,2,60),
                                new THREE.Vector3(15,2,10));
        geometry.faces.push(new THREE.Face3(21,22,23));
        geometry.vertices.push( new THREE.Vector3(-20,4,60),
                                new THREE.Vector3(-20,2,60),
                                new THREE.Vector3(15,2,10));
        geometry.faces.push(new THREE.Face3(21,22,23));

        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }


    addWingLeft(x,y,z){
        'use strict';
        var material = new THREE.MeshBasicMaterial({ color: 0x6286f4, wireframe: false });
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(15,4,-10),            //Asa de cima
                                new THREE.Vector3(-5,4,-10),
                                new THREE.Vector3(-20,4,-60));
        geometry.faces.push(new THREE.Face3(0,2,1));
        geometry.vertices.push( new THREE.Vector3(-5,4,-10),
                                new THREE.Vector3(-20,4,-60),
                                new THREE.Vector3(-25,4,-60));
        geometry.faces.push(new THREE.Face3(3,4,5));
        geometry.vertices.push( new THREE.Vector3(15,2,-10),            //Asa de baixo
                                new THREE.Vector3(-5,2,-10),
                                new THREE.Vector3(-20,2,-60));
        geometry.faces.push(new THREE.Face3(8,6,7));
        geometry.vertices.push( new THREE.Vector3(-5,2,-10),
                                new THREE.Vector3(-20,2,-60),
                                new THREE.Vector3(-25,2,-60));
        geometry.faces.push(new THREE.Face3(10,9,11));
        geometry.vertices.push( new THREE.Vector3(-20,4,-60),        //Ponta da asa
                                new THREE.Vector3(-25,4,-60),
                                new THREE.Vector3(-20,2,-60));
        geometry.faces.push(new THREE.Face3(13,12,14));
        geometry.vertices.push( new THREE.Vector3(-25,4,-60),
                                new THREE.Vector3(-25,2,-60),
                                new THREE.Vector3(-20,2,-60));
        geometry.faces.push(new THREE.Face3(16,15,17));
        geometry.computeFaceNormals();
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

        this.add(new THREE.AxisHelper(10));

        this.addAirplaneFuselage(0, 0, 0);

        this.addWingRight(0,0,0);
        this.addWingLeft(0,0,0);


    }
}