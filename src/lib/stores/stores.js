import { writable } from 'svelte/store';
import * as THREE from 'three';

var postSlugMap = new Map();
postSlugMap.set('init', 'initSlug');
var travelMap = new Map();

export const postMap = writable({
	postSlugs: postSlugMap,
	mapLoaded: false,
	userTravelMap: travelMap
});

export const loadedArticles = writable(false);

var articleGroup = new THREE.Object3D();
export const articleNet = writable(articleGroup);
