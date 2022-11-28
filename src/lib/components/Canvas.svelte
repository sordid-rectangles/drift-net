<script>
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { createScene } from '$lib/scene.js';
	import { postMap, articleNet, loadedArticles } from '$lib/stores/stores.js';

	export let loaded;
	export let postSlugs;

	//console.log(postSlugs);
	let canvas_main;

	onMount(() => {

		if ($loadedArticles) {
			$articleNet = createScene(canvas_main, postSlugs, $articleNet);
			$loadedArticles = true;
			console.log('Reloaded Article Net');
			console.log($articleNet);
		} else {
			$articleNet = createScene(canvas_main, postSlugs);
			$loadedArticles = true;
			console.log('Loaded New Article Net');
			console.log($articleNet);
		}
		
	});
</script>

<canvas class="canvas" bind:this={canvas_main} />

<style>
	.canvas {
		/* background-color: rgb(125, 125, 125); */
		position: relative;
		margin: 0em;
		padding: 0%;
		align-self: center center;
		/* box-sizing: border-box; */
	}
</style>
