<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/icon.png';
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

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href="https://adityaps-portofolio.my.id/" />
	<meta
		name="description"
		content="Portofolio Aditya Parama Sandya, frontend developer dari Probolinggo, Indonesia. Membangun website dengan SvelteKit, TypeScript, HTML, CSS, Node.js, REST API, chatbot WhatsApp, dan AI."
	/>
	<meta
		name="keywords"
		content="Aditya Parama Sandya, portofolio developer, frontend developer Probolinggo, SvelteKit developer, TypeScript, HTML, CSS, Node.js, REST API, chatbot WhatsApp, artificial intelligence"
	/>
	<meta name="author" content="Aditya Parama Sandya" />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#A3E635" />

	<meta property="og:type" content="profile" />
	<meta property="og:title" content="Aditya Parama Sandya | Frontend Developer" />
	<meta
		property="og:description"
		content="Portofolio Aditya Parama Sandya, frontend developer dari Probolinggo yang membangun website simpel namun bagus dengan SvelteKit, Node.js, dan teknologi web modern."
	/>
	<meta property="og:url" content="https://adityaps-portofolio.my.id/" />
	<meta property="og:site_name" content="Aditya Parama Sandya" />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:image" content="https://adityaps-portofolio.my.id/1.jpg" />
	<meta property="og:image:alt" content="Aditya Parama Sandya, frontend developer" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Aditya Parama Sandya | Frontend Developer" />
	<meta
		name="twitter:description"
		content="Lihat portofolio, proyek, sertifikat, dan tech stack Aditya Parama Sandya dari Probolinggo, Indonesia."
	/>
	<meta name="twitter:image" content="https://adityaps-portofolio.my.id/1.jpg" />

	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'ProfilePage',
					url: 'https://adityaps-portofolio.my.id',
					name: 'Aditya Parama Sandya | Frontend Developer',
					description:
						'Portofolio personal Aditya Parama Sandya, frontend developer dari Probolinggo, Indonesia.',
					inLanguage: 'id-ID',
					mainEntity: {
						'@type': 'Person',
						name: 'Aditya Parama Sandya',
						url: 'https://adityaps-portofolio.my.id',
						jobTitle: 'Frontend Developer'
					}
				},
				{
					'@type': 'WebSite',
					url: 'https://adityaps-portofolio.my.id',
					name: 'Aditya Parama Sandya | Frontend Developer',
					description:
						'Portofolio personal Aditya Parama Sandya yang berbasis di Probolinggo, Indonesia.',
					inLanguage: 'id-ID',
					publisher: {
						'@type': 'Person',
						name: 'Aditya Parama Sandya',
						url: 'https://adityaps-portofolio.my.id',
						jobTitle: 'Frontend Developer'
					}
				},
				{
					'@type': 'Person',
					name: 'Aditya Parama Sandya',
					url: 'https://adityaps-portofolio.my.id',
					image: 'https://adityaps-portofolio.my.id/1.jpg',
					jobTitle: 'Frontend Developer',
					description:
						'Frontend developer dari Probolinggo, Indonesia yang membangun website dengan SvelteKit, TypeScript, HTML, CSS, dan Node.js.',
					homeLocation: {
						'@type': 'Place',
						name: 'Probolinggo, Indonesia'
					},
					knowsAbout: [
						'SvelteKit',
						'TypeScript',
						'HTML',
						'CSS',
						'Node.js',
						'REST API',
						'WhatsApp Bot',
						'Artificial Intelligence',
						'Rust',
						'Arduino'
					],
					email: 'mailto:adityaparama119@gmail.com',
					contactPoint: {
						'@type': 'ContactPoint',
						contactType: 'professional inquiries',
						telephone: '+62-823-3165-6027',
						availableLanguage: ['Indonesian', 'English']
					},
					hasOccupation: {
						'@type': 'Occupation',
						name: 'Frontend Developer',
						occupationLocation: {
							'@type': 'City',
							name: 'Probolinggo'
						}
					}
				},
				{
					'@type': 'CreativeWork',
					name: 'Personal Portofolio Aditya Parama Sandya',
					description:
						'Website yang menampilkan informasi dan data pengguna untuk publik.',
					url: 'https://adityaps-portofolio.my.id',
					creator: {
						'@type': 'Person',
						name: 'Aditya Parama Sandya',
						url: 'https://adityaps-portofolio.my.id'
					},
					programmingLanguage: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
					keywords:
						'portofolio, SvelteKit, TypeScript, TailwindCSS, Node.js, Lenis, frontend developer',
					codeRepository: 'https://github.com/NusanHuh/Portofolio',
				},
				{
					'@type': 'ItemList',
					name: 'Sertifikat dan pelatihan Aditya Parama Sandya',
					description: 'Daftar sertifikat dan pelatihan teknologi yang ditampilkan di portofolio.',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Pelatihan LATIKA UPT.TIKP'
						},
						{
							'@type': 'ListItem',
							position: 2,
							name: 'Pelatihan BINUS Bahasa C'
						},
						{
							'@type': 'ListItem',
							position: 3,
							name: 'AI Ready ASEAN'
						},
						{
							'@type': 'ListItem',
							position: 4,
							name: 'FreeCodeCamp Microsoft C#'
						},
						{
							'@type': 'ListItem',
							position: 5,
							name: 'Kuliah Umum UMM'
						},
						{
							'@type': 'ListItem',
							position: 6,
							name: 'Tech & Social Summit 2026'
						}
					]
				}
			]
		})}
	</script>
</svelte:head>
{@render children()}
