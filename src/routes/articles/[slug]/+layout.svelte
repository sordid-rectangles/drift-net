<script>
	import HudOverlay from "$lib/components/HudOverlay.svelte";
	import Nav from "$lib/components/Nav.svelte";


    // import  '../app.css';

</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"> 
</head>
 
    <Nav/>
    <slot/>



<style>
    .body{
       width: auto;
       height: auto; 
       padding: 0em;
       /* remove margin later for fullscreen canvas */
       margin: 0; 
       overflow: scroll;
       background-color: white;
       /* box-sizing: border-box; */

       font-family: 'Source Code Pro', monospace;
    }

    :global(figure) {
        max-width: 100px;
    }

    /* main {
        position: absolute;
        width: inherit;
        height: inherit;
        margin: 0em;
        padding: 0em;
        border: 0em;
        box-sizing: border-box;
        background-color: antiquewhite;
    } */
    /* .mainContainer {
        
        position: fixed;
        height: inherit;
        width: inherit;
        margin: 0% auto;
        box-sizing: border-box;
        background-color: antiquewhite;

    } */
</style>