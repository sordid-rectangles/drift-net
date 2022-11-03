import { writable } from "svelte/store";


var postSlugMap = new Map()
postSlugMap.set( 'init', 'initSlug' );
var travelMap = new Map()

export const postMap = writable( {
    postSlugs: postSlugMap,
    mapLoaded: false,
    userTravelMap: travelMap,
} );

export const testStore = writable({
    flag: false,
})

