<script>
	import Head from './component/Head.svelte';
	import Foot from './component/Foot.svelte';
	import Home from './page/Home.svelte';
	import Blog from './page/Blog.svelte';
	import Contact from './page/Contact.svelte';

	import { onMount } from 'svelte';

	let currentPage = 'home';
	
	onMount(() => {
		currentPage = window.location.hash.slice(1) || 'home';
		
		window.addEventListener('hashchange', () => {
			currentPage = window.location.hash.slice(1) || 'home';
		});
	});
</script>

<Head />
<main>
	{#if currentPage === 'home'}
		<Home />
	{:else if currentPage === 'blog'}
		<Blog />
	{:else if currentPage === 'contact'}
		<Contact />
	{/if}
</main>
<Foot />
