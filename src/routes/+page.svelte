<script>
	import Nav from '../lib/components/Nav.svelte';
	import Canvas from '../lib/components/Canvas.svelte';
	import { postMap } from '$lib/stores/stores';

	/** @type {import('./$types').PageData} */
	export let data;
	//console.log(data);
</script>

<svelte:head>
	<title>Drift Net</title>
	<meta name="description" content="A loosely themed collaborative art project" />
</svelte:head>

<!-- <Nav /> -->
<Canvas loaded="{data.loaded}," postSlugs={data.postSlugs} />
