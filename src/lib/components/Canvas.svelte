<script>

    import { browser } from '$app/environment';
    import { onDestroy, onMount } from 'svelte';
    import { createScene } from '$lib/scene.js';
    import { postMap } from "$lib/stores/stores.js";
    
    export let loaded;
    export let postSlugs;

    console.log(postSlugs);
    let canvas_main    

    onMount(() => {

        // if(browser) {
        //     canvas_main.width = window.innerWidth
        //     canvas_main.height = window.innerHeight
        // } else {
        //     console.log("not in browser! no canvas to be had here! yuck!")
        // }
        createScene(canvas_main, postSlugs);

    });
</script>

<canvas class="canvas" bind:this={canvas_main} />

<style>
    .canvas{
        /* background-color: rgb(125, 125, 125); */
        position: relative;
        margin: 0em;
        padding: 0%;
        align-self: center center;
        /* box-sizing: border-box; */
    }
</style>