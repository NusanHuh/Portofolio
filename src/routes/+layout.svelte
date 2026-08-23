<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';
	import { lenisStore } from '$lib/lenis.svelte';

	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});

		lenisStore.instance = lenis;

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			lenisStore.instance = undefined;
		};
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
