import { postMap } from '$lib/stores/stores';

export const ssr = false;
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	var loadedMap = false;

	async function getPosts() {
		const response = await fetch('/api/fakeghost/posts/', {
			method: 'GET',
			mode: 'same-origin'
		});

		return await response.json();
	}

	let postsObj = (await getPosts()).posts;
	//console.log(postsObj);

	var postSlugs = new Map();

	postsObj.forEach((post, index) => {
		postSlugs.set(post.slug, post.id);
	});

	//console.log(postSlugs);

	loadedMap = true;

	return {
		postSlugs: postSlugs,
		loaded: loadedMap,
	};
};
