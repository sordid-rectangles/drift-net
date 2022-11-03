<script>
	import Nav from "$lib/components/Nav.svelte";
    import { postMap } from "$lib/stores/stores";
	import Article from "../../../lib/components/Article.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    //console.log(data);


</script>

<Nav />
<Article htmlContent={data.post.html}/>