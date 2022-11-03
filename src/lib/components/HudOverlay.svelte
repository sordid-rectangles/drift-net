<script>
	import Nav from '$lib/components/Nav.svelte';

	export let currentMetaText = 'Meta text goes here';
</script>

<div class="hud-overlay">
	<Nav />
	<div class="hud-decorations">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100vw" height="100vh">
			<line x1="-100" y1="10" x2="25" y2="10" stroke="black" />
			<line x1="75" y1="10" x2="200" y2="10" stroke="black" />
		</svg>
	</div>
	<div class="meta-text">
		<p>{currentMetaText}</p>
	</div>
</div>

<style>
	.hud-overlay {
		top: 0;
		left: 0;
		position: fixed;
		z-index: 8;
		width: 100%;
		height: 100%;
	}

	.hud-decorations {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.meta-text {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 5vh 5vw;
	}
</style>
