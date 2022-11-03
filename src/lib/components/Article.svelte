<script>
    // your script goes here
    import {onMount} from 'svelte';

    export let htmlContent;
</script>

<main class="article">
    {@html htmlContent}
</main>


<style>
    .article {
        padding-top: 10em;
        padding-left: 10em;
        padding-right: 10em;
    }
    /* your styles go here */

</style>