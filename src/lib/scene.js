import * as THREE from 'three';
import * as UTIL from './util.js';

//import fragment from "$lib/shader/fragment.glsl";
//import fragment1 from "./shader/fragment1.glsl";
//import vertex from "$lib/shader/vertex.glsl";
//import vertex1 from "./shader/vertex1.glsl";

const scene1 = new THREE.Scene();
const cam1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geo1 = new THREE.SphereGeometry(15, 15, 10);
//const geo2 = new THREE.WireframeGeometry({geometry: geo1})

const mat1 = new THREE.MeshBasicMaterial({ color: 0x6195e7 });
const mat2 = new THREE.MeshPhongMaterial({ color: 0x6195e7, wireframe: true });

const sph1 = new THREE.Mesh(geo1, mat2);

var articles = new THREE.Group();

//const roundedBox = createBoxWithRoundedEdges(0.5, 0.5, 0.5, 0.2, 10);
const articleBox = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//var articleBox =roundedBox;

const light1 = new THREE.PointLight(0xff0000, 2, 200);

light1.position.set(5, 5, 10);
cam1.position.z = 5;

scene1.add(sph1);
scene1.add(light1);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

export let hoveredArticle;


let renderer1;

/**
 * Animate Scene
 *
 */
const animate = () => {
	requestAnimationFrame(animate);
	sph1.rotation.y += 0.001;
	articles.rotation.y += -0.001;

	raycaster.setFromCamera(pointer, cam1);
	const intersects = raycaster.intersectObjects(articles.children);
	if (intersects.length > 0) {
		hoveredArticle = intersects[0];
		hoveredArticle.object.material.color.set(0x00ff00);
	} else if (hoveredArticle) {
		hoveredArticle.object.material.color.set(0x00ffff);
		hoveredArticle = null;
	}
	//hoveredArticle = null;
	//requestAnimationFrame(animate);
	renderer1.render(scene1, cam1);
};

/**
 * Re-render Visited Network
 *
 */
const redrawVisited = (current) => {

};

/**
 * Resize Scene
 *
 */
const resize = () => {
	renderer1.setSize(window.innerWidth, window.innerHeight);
	renderer1.setPixelRatio(window.devicePixelRatio);
	cam1.aspect = window.innerWidth / window.innerHeight;
	cam1.updateProjectionMatrix();
};

/**
 * Pointer Update
 *
 */
const onPointerMove = (event) => {
	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

/**
 * Custom Article Click Event
 * 
 */
//const articleClicked = new CustomEvent( 'articleSelected', {bubbles: true, detail: hoveredArticle.object.userData.Slug});

/**
 * Mousedown Handler
 *
 */
const onMouseDown = (event) => {
	event.preventDefault();
	if (hoveredArticle) {
		// window.open(hoveredArticle.object.userData.URL, "_self");
		console.log(hoveredArticle.object.userData.Slug);
		const articleClicked = new CustomEvent( 'articleSelected', {bubbles: true, detail: "test"});
		canvas_main.dispatchEvent(articleClicked)
		
		//window.location.replace('/articles/' + hoveredArticle.object.userData.Slug);

	}
};

// Returns the absolute value of n-mid*mid*mid
function diff(n, mid) {
	if (n > mid * mid * mid) return n - mid * mid * mid;
	else return mid * mid * mid - n;
}

// Returns cube root of a no n
function cubicRoot(n) {
	// Set start and end for binary search
	let start = 0,
		end = n;

	// Set precision
	let e = 0.0000001;

	while (true) {
		let mid = (start + end) / 2;
		let error = diff(n, mid);

		// If error is less than e then mid is
		// our answer so return mid
		if (error <= e) return mid;

		// If mid*mid*mid is greater than n set
		// end = mid
		if (mid * mid * mid > n) end = mid;
		// If mid*mid*mid is less than n set
		// start = mid
		else start = mid;
	}
}

/**
 * Create Main Scene
 * @param { HTMLElement } el Main canvas element
 * @param { JSON } map Grabbed post map from the backend format slug:id
 */
export const createScene = (el, map, articleNet) => {
	renderer1 = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: el });

	if (articleNet) {
		if (map) {
			articles = new THREE.Group();
			articles = articleNet;
			console.log("rendering");
			scene1.add(articles);
		}
	} else {
		articles = new THREE.Group();
		//Mesh group is globally instantiated, refresh it so we don't double populate ect.

		resize();

		if (map) {
			var columns = 5;
			var index = 0;
			var boxParameter = Math.floor(cubicRoot(map.size));

			for (var [slug, id] of map.entries()) {
				// console.log(index + "]" + " " + id + ' : ' + slug);
				// let x = -10 + (index % columns) * 5;
				// let y = 3 - Math.floor(index / columns) * 4;
				// const articleCube = new THREE.Mesh(articleBox, new THREE.MeshLambertMaterial({color: 0x00ffff}));
				// articleCube.position.set(x, y, -5);
				// articleCube.userData = {
				//     ID: id,
				//     Slug: slug };
				// scene1.add(articleCube);
				// index +=1;

				const articleCube = new THREE.Mesh(
					articleBox,
					new THREE.MeshBasicMaterial({ color: 0x000000 })
				);

				var boxConstraint = Math.random() * 4 - 2;
				articleCube.position.x = Math.random() * 4 - 2;
				articleCube.position.y = Math.random() * 4 - 2 - 0.5;
				articleCube.position.z = Math.random() * 4 - 2 - 0.5;

				articleCube.userData = {
					ID: id,
					Slug: slug
				};

				articles.add(articleCube);
				index += 1;
			}

			scene1.add(articles);
		}

		animate();
	}

	window.addEventListener('pointermove', onPointerMove);
	window.addEventListener('mousedown', onMouseDown);
	window.addEventListener('aricleSelected', (e)=>{console.log("hit")});
	return articles;
};

window.addEventListener('resize', resize); //maybe move into createscene...

function createBoxWithRoundedEdges(width, height, depth, radius0, smoothness) {
	let shape = new THREE.Shape();
	let eps = 0.00001;
	let radius = radius0 - eps;
	shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
	shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
	shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
	shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
	let geometry = new THREE.ExtrudeGeometry(shape, {
		amount: depth - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	});

	geometry.center();

	return geometry;
}
