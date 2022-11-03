
import { postMap } from "$lib/stores/stores";

export const ssr = false;
export const prerender = true;



/** @type {import('./$types').PageLoad} */
export const load = async ({fetch}) => {

    var loadedMap = false;
    
    async function getPosts() {
        const response = await fetch('/api/fakeghost/posts/', {
            method: 'GET',
            mode: 'same-origin',
        });

        return await response.json();
    }

    let postsObj = (await getPosts()).posts;
    //console.log(postsObj);

    var postSlugs = new Map();

    postsObj.forEach( (post, index) => {
        postSlugs.set( post.slug, post.id)
    });
    
    //console.log(postSlugs);

    loadedMap = true;

    return {
        postSlugs: postSlugs,
        loaded: loadedMap,
    }

    // try {

    //     postObj = getPostMap();
    //     console.log(postObj)

    //     postObj.forEach((post, index) => {
    //         {$postMap.postSlugs.set(index, post.slug)}
            
    //     });

    //     $postMap.mapLoaded = true;

    //     return {
    //         loaded: true,
    //         postMap: $postMap,
    //     };

    // } catch (error) {
    //     console.log(error)
    //     $postMap.mapLoaded = false;

    //     return {
    //         loaded: false,
    //     };
    // }

  };