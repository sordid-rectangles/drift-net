import * as THREE from 'three';         

const scene1 = new THREE.Scene();
const cam1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geo1 = new THREE.SphereGeometry(15,15,10);
//const geo2 = new THREE.WireframeGeometry({geometry: geo1})

const mat1 = new THREE.MeshBasicMaterial({color: 0x6195E7});
const mat2 = new THREE.MeshPhongMaterial({color: 0x6195E7, wireframe:true});

const sph1 = new THREE.Mesh(geo1, mat2);

const light1 = new THREE.PointLight(0xff0000, 2, 200);

light1.position.set(5, 5, 10);
cam1.position.z = 5;

scene1.add(sph1);
scene1.add(light1);

let renderer1
/**
 * Animate Scene
 * 
 */
const animate = () => {
    requestAnimationFrame(animate);
    sph1.rotation.y += 0.001;
    // if (sph1.rotation.x <= 0.5 && sph1.rotation.x >= -0.5 ){
    //     sph1.rotation.x += -0.001;
    //     console.log(sph1.rotation.x);
    // } else {
    //     sph1.rotation.x += 0.01; 
    //     console.log("going up")
    // }
    
    
    renderer1.render(scene1, cam1);
};

/**
 * Resize Scene
 * 
 */
const resize = () => {
    renderer1.setSize(window.innerWidth, window.innerHeight);
    renderer1.setPixelRatio(window.devicePixelRatio);
    cam1.aspect = window.innerWidth/window.innerHeight;
    cam1.updateProjectionMatrix();
};

/**
 * Create Main Scene
 * @param { HTMLElement } canvas element
 */
export const createScene = (el) => {
    renderer1 = new THREE.WebGLRenderer( {antialias: true, alpha: true, canvas: el, })

    resize();
    animate();
}

window.addEventListener('resize', resize);