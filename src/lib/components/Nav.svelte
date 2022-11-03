<script>
    // your script goes here
    import {onMount} from 'svelte';
	import DriftLogo from './DriftLogo.svelte';

    //TODO: Check for Mobile & adapt.
    let show_mobile = false;
    
  

</script>

<nav>
    <h1 class="logo"><DriftLogo logo_height_scale={0.3} logo_width_scale={0.3}/> <span><a href="/">DriftNet</a></span></h1>
    <ul class="navBar">
        <li><a href="/articles">articles</a></li>
        <li><a href="/visuals">visuals</a></li>
        <li><a href="/usermesh">user_mesh</a></li>
        <li><a href="/">drift_mode</a></li>
    </ul>
    <span></span>
    <span></span>

</nav>

<style>
    nav{
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: space-between;
        padding-top: 40px;
        padding-left: 10%;
        padding-right: 10%;
        /* background-color: aqua; */
        box-sizing: border-box;
        position: fixed;
        z-index: 8;
    }
    nav span a{ 
        color: black;
        text-decoration: none;
        font-weight: bold;
        
    }
    nav ul li { 
        list-style-type: none;
        display: inline-block;
        padding: 10px 20px;
    }
    nav ul li a{ 
        color: black;
        text-decoration: none;
        font-weight: bold;
        
    }

    .navBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0%;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-style: italic;
        font-weight: bolder;
    }


</style>
