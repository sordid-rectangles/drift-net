

/** @type {import('./$types').PageLoad} */
export const load = async ({fetch, params}) => { 

    async function getPosts() {
        const response = await fetch('/api/fakeghost/posts/', {
            method: 'GET',
            mode: 'same-origin',
        });

        return await response.json();
    }

    let postsObj = (await getPosts()).posts;
    let hmtlContent;

    postsObj.forEach( (post, index) => {
        //console.log(post.slug);
        //console.log(params.slug);
        if (post.slug == params.slug) {
            hmtlContent = post.html;
        }
    });

    return {
        loaded: true,
        post: {
            html: hmtlContent,
        }
    };

};