<script lang="ts">
	import { lenisStore } from '$lib/lenis.svelte';

	let header: HTMLElement;
	let headerHeight = $state(0);

	let showModal = $state(false);
	let isidata: typeof oneproyek | undefined = $state();

	let viewall = $state(false);

	let openmenuMobile = $state(false);

	let upt = $state(false);
	let binus = $state(false);
	let asean = $state(false);
	let freecode = $state(false);
	let umm = $state(false);
	let tech = $state(false);

	let teksunduh = $state('CV');

	$effect(() => {
		if (!header) return;

		const observer = new ResizeObserver(([entry]) => {
			headerHeight = entry.contentRect.height + 80;
		});

		observer.observe(header);

		return () => observer.disconnect();
	});

	const texts = [
		'Portofolio',
		'Whatsapp Bot',
		'Artificial Intelligence',
		'Rest API',
		'NodeJS',
		'Cascading Style Sheet',
		'HTML',
		'Java Script'
	];

	const text2 = [
		'Java Script',
		'HTML',
		'Cascading Style Sheet',
		'NodeJS',
		'Rest API',
		'Artificial Intelligence',
		'Whatsapp Bot',
		'Portofolio'
	];

	const oneproyek = {
		infoawal: 'PROYEK GABUT',

		judul: 'PERSONAL PORTOFOLIO',

		deskripsi:
			'Suatu website yang menampilkan informasi, data pengguna yang dapat dibaca semua orang.',

		linkweb: 'https://adityaps-portofolio.netlify.app',
		linkrepo: 'https://github.com/NusanHuh/Portofolio',

		fitur: ['Menampilkan data untuk publik', 'Menyampaikan informasi', 'Dan lainnya'],
		fungsi: ['Menyampaikan informasi pribadi', 'Sebagai bio data kecil'],

		techstack: ['SVELTE', 'TYPESCRIPT', 'TAILWINDCSS', 'NODE.JS', 'LENIS']
	};

	$effect(() => {
		if (showModal) {
			lenisStore.instance?.stop();
			document.body.style.overflow = 'hidden';
		} else {
			lenisStore.instance?.start();
			document.body.style.overflow = '';
		}
	});

	$effect(() => {
		if (openmenuMobile) {
			lenisStore.instance?.stop();
			document.body.style.overflow = 'hidden';
		} else {
			lenisStore.instance?.start();
			document.body.style.overflow = '';
		}
	});

	function datanya(nama: string) {
		if (nama === 'dataone') {
			isidata = oneproyek;
		}

		showModal = true;
	}

	async function downloadCV() {
		try {
			teksunduh = 'Mengunduh';

			const response = await fetch(
				'https://raw.githubusercontent.com/NusanHuh/WebCSP/main/cvcv.pdf'
			);

			if (!response.ok) {
				console.error('Gagal mengambil file:', response.status);
				return;
			}

			const blob = await response.blob();
			const url = URL.createObjectURL(blob);

			const link = document.createElement('a');
			link.href = url;
			link.download = 'CV-Aditya-Parama-Sandya.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			URL.revokeObjectURL(url);

			teksunduh = 'CV';
		} catch (error) {
			console.error('Gagal mengunduh CV:', error);
		}
	}
</script>

<header
	bind:this={header}
	class="fixed top-0 left-0 z-1000 flex h-auto w-full items-center justify-start bg-transparent px-7.5 py-5"
>
	<p
		class="flex h-10 items-center justify-center rounded-[10px] bg-[#FAF9F6] px-4 font-space text-[14.5px] font-semibold tracking-widest text-[#000000]"
	>
		PARAMA
	</p>

	<button
		onclick={() => {
			openmenuMobile = true;
		}}
		class="absolute right-7.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#000000] bg-[#FAF9F6] sm:hidden"
	>
		<svg class="w-4 fill-[#000000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
			><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
				d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
			/></svg
		></button
	>

	<div
		class="saeblas absolute left-1/2 flex h-10 -translate-x-1/2 items-center justify-center overflow-hidden rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.13)] max-sm:hidden"
	>
		<button
			onclick={() => lenisStore.instance?.scrollTo('#tentang', { offset: -100 })}
			class="h-full cursor-pointer items-center justify-center rounded-[10px] px-6 font-space text-[13px] font-semibold tracking-widest text-[#00000099] transition-all duration-150 ease-in-out hover:bg-[#00000009] hover:text-[#000000]"
			>TENTANG</button
		>
		<button
			onclick={() => lenisStore.instance?.scrollTo('#proyek', { offset: -100 })}
			class="h-full cursor-pointer items-center justify-center rounded-[10px] px-6 font-space text-[13px] font-semibold tracking-widest text-[#00000099] transition-all duration-150 ease-in-out hover:bg-[#00000009] hover:text-[#000000]"
			>PROYEK</button
		>
		<button
			onclick={() => lenisStore.instance?.scrollTo('#sertifikat', { offset: -100 })}
			class="h-full cursor-pointer items-center justify-center rounded-[10px] px-6 font-space text-[13px] font-semibold tracking-widest text-[#00000099] transition-all duration-150 ease-in-out hover:bg-[#00000009] hover:text-[#000000]"
			>SERTIFIKAT</button
		>
		<button
			onclick={() => lenisStore.instance?.scrollTo('#stack', { offset: -100 })}
			class="h-full cursor-pointer items-center justify-center rounded-[10px] px-6 font-space text-[13px] font-semibold tracking-widest text-[#00000099] transition-all duration-150 ease-in-out hover:bg-[#00000009] hover:text-[#000000]"
			>STACK</button
		>
		<button
			onclick={() => lenisStore.instance?.scrollTo('#skill', { offset: -100 })}
			class="h-full cursor-pointer items-center justify-center rounded-[10px] px-6 font-space text-[13px] font-semibold tracking-widest text-[#00000099] transition-all duration-150 ease-in-out hover:bg-[#00000009] hover:text-[#000000]"
			>SKILL</button
		>
	</div>

	<button
		onclick={() => {
			window.location.href = 'https://wa.me/6282331656027';
		}}
		class="absolute right-7.5 flex h-10 cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-[#FAF9F6] bg-[#000000] px-4 font-space text-[14px] font-semibold text-[#ffffff] max-sm:hidden"
		>Mulai bertanya <div
			class="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#A3E635]"
		>
			<svg class="w-3 -rotate-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
				><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
					d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
				/></svg
			>
		</div></button
	>
</header>

<main>
	<div
		class="relative flex min-h-screen w-full flex-col items-center justify-start bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18)_0%,rgba(163,230,53,0.08)_35%,rgba(163,230,53,0.02)_65%,transparent_100%),linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-size-[100%_100%,48px_48px,48px_48px] px-7.5 pb-13"
		style={`padding-top: ${headerHeight}px`}
	>
		<div class="flex h-fit w-fit items-center justify-center">
			<p class="font-space text-[12px] font-semibold tracking-widest text-[#000000]">
				BASED IN INDONESIA
			</p>
		</div>

		<h1
			class="mt-7 w-full max-w-fit items-center justify-center text-center font-space text-[180px] leading-45 font-bold max-sm:text-[70px] max-sm:leading-17.5"
		>
			ADITYA<br />
			<span class="border-[#000000] text-transparent [-webkit-text-stroke:3px_#000000]">PARAMA</span
			>
		</h1>

		<p class="mt-4 w-full text-center font-space text-[30px] font-semibold text-[#000000]">
			Membangun yang <span class="rounded-[10px] bg-[#A3E63570] px-3 py-2">mudah</span> saja<span
				class="text-[#A3E635]">.</span
			>
		</p>

		<p class="mt-5 w-full max-w-150 text-center font-space text-[#000000] max-sm:mt-10">
			SvelteKIT, HTML, JS, CSS, NodeJS adalah bahasa favorit developer wnx untuk membangun suatu hal
			yang menarik.
		</p>

		<div class="z-2 mt-7.5 flex h-fit w-fit items-center justify-center gap-5">
			<button
				onclick={() => lenisStore.instance?.scrollTo('#proyek', { offset: -100 })}
				class="group flex cursor-pointer items-center justify-center gap-2 bg-[#000000] px-5 py-3 font-space text-[13px] font-semibold tracking-widest text-[#ffffff] transition-all duration-150 ease-in-out hover:bg-[#A3E635] hover:text-[#000000]"
				>PROYEK
				<svg
					class="w-4 -rotate-30 fill-[#ffffff] transition-all duration-150 ease-in-out group-hover:fill-[#000000]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
					/></svg
				></button
			>

			<button
				onclick={downloadCV}
				class="group flex cursor-pointer items-center justify-center gap-2 border-3 border-[#000000] bg-transparent px-5 py-3 font-space text-[13px] font-semibold tracking-widest text-[#000000] transition-all duration-150 ease-in-out hover:border-none hover:bg-[#000000] hover:text-[#A3E635]"
				>{teksunduh}
				<svg
					class="w-4 -rotate-30 fill-[#000000] transition-all duration-150 ease-in-out group-hover:fill-[#A3E635]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"
					/></svg
				>
			</button>
		</div>

		<div
			class="absolute bottom-0 z-1 h-20 w-full bg-linear-to-t from-[#FAF9F6] to-transparent"
		></div>
	</div>

	<div
		class="mt-10 mb-10 flex h-fit w-full scale-[1.02] rotate-[-0.70deg] flex-col items-start justify-start"
	>
		<div class="relative flex h-17 w-full items-center overflow-hidden bg-[#000000]">
			<div class="marquee flex w-max">
				<div class="flex shrink-0">
					{#each texts as text, i (i)}
						<span class="mx-8 font-space text-[21px] font-medium text-[#A3E635]">
							{text}
						</span>
					{/each}
				</div>

				<div class="flex shrink-0">
					{#each texts as text, i (i)}
						<span class="mx-8 font-space text-[20px] font-medium text-[#A3E635]">
							{text}
						</span>
					{/each}
				</div>
			</div>

			<div
				class="pointer-events-none absolute inset-y-0 left-0 z-10 w-32
			bg-linear-to-r from-black to-transparent"
			></div>

			<div
				class="pointer-events-none absolute inset-y-0 right-0 z-10 w-32
			bg-linear-to-l from-black to-transparent"
			></div>
		</div>

		<div class="relative flex h-13 w-full items-center overflow-hidden bg-[#A3E635]">
			<div class="marquee2 flex w-max">
				<div class="flex shrink-0">
					{#each text2 as text, i (i)}
						<span class="mx-8 font-space text-[17px] font-medium text-[#000000]">
							{text}
						</span>
					{/each}
				</div>

				<div class="flex shrink-0">
					{#each text2 as text, i (i)}
						<span class="mx-8 font-space text-[17px] font-medium text-[#000000]">
							{text}
						</span>
					{/each}
				</div>
			</div>

			<div
				class="pointer-events-none absolute inset-y-0 left-0 z-10 w-32
			bg-linear-to-r from-[#A3E635] to-transparent"
			></div>

			<div
				class="pointer-events-none absolute inset-y-0 right-0 z-10 w-32
			bg-linear-to-l from-[#A3E635] to-transparent"
			></div>
		</div>
	</div>

	<div
		id="tentang"
		class="mx-auto flex h-fit w-full max-w-330 flex-col items-start justify-start pb-13"
	>
		<div
			class="mt-20 flex h-fit w-full items-center justify-start gap-2 px-13 font-space text-[13px] font-semibold"
		>
			<svg class="w-2.5 fill-[#A3E635]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
				><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
					d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
				/></svg
			>
			1.<span class="tracking-widest text-[#00000099]">TENTANG</span>
			<hr class="ml-2.5 h-px w-full border border-[#00000010]" />
		</div>

		<div
			class="mt-10 grid h-fit w-full grid-cols-[430px_1fr] gap-30 px-13 max-sm:grid-cols-1 max-sm:gap-10 max-sm:px-7.5"
		>
			<div class="flex h-fit w-fit flex-col items-start justify-start">
				<div class="relative h-130 w-full overflow-hidden">
					<img class="h-full w-full object-cover" src="/1.jpg" alt="imagae-adit" />

					<div
						class="absolute bottom-0 flex h-30 w-full flex-col items-start justify-center bg-linear-to-t from-[#00000099] to-transparent px-7 font-space text-[11px] font-semibold tracking-widest text-[#ffffff80]"
					>
						<p class="mt-7">NAME</p>
						<p class="mt-1 text-[15px]! text-[#ffffff]!">Aditya Parama Sandya</p>
					</div>
				</div>

				<div class="mt-4 flex h-fit w-full flex-col items-start justify-start gap-4">
					<div class="grid h-fit w-full grid-cols-2 gap-4">
						<div class="flex flex-col items-start justify-start gap-1.5 bg-[#ffffff] p-4">
							<p class="font-space text-[11px] font-semibold tracking-widest text-[#00000090]">
								STATUS
							</p>

							<p
								class="flex items-center justify-start gap-2 font-space text-[14px] font-semibold tracking-widest text-[#000000]"
							>
								<svg
									class="w-2.5 fill-[#A3E635]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
									/></svg
								> Siswa
							</p>
						</div>

						<div class="flex flex-col items-start justify-start gap-1.5 bg-[#ffffff] p-4">
							<p class="font-space text-[11px] font-semibold tracking-widest text-[#00000090]">
								LOKASI
							</p>

							<p
								class="flex items-center justify-start gap-2 font-space text-[14px] font-semibold tracking-widest text-[#000000]"
							>
								<svg
									class="w-3.5 fill-[#000000]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
									/></svg
								>
								Prob, ID
							</p>
						</div>
					</div>

					<div class="grid h-fit w-full grid-cols-3 gap-4">
						<div class="flex flex-col items-center justify-center bg-[#ffffff] p-4">
							<h2 class="font-space text-[23px] font-semibold text-[#000000]">BOT</h2>
							<p class="text-center font-space text-[8px] leading-2.5">
								Otomatisasi<br />whatsapp
							</p>
						</div>

						<div class="flex flex-col items-center justify-center bg-[#ffffff] p-4">
							<h2 class="font-space text-[23px] font-semibold text-[#000000]">WEB</h2>
							<p class="text-center font-space text-[8px] leading-2.5">
								Menggunakan svelte untuk membangun
							</p>
						</div>

						<div class="flex flex-col items-center justify-center bg-[#ffffff] p-4">
							<h2 class="font-space text-[23px] font-semibold text-[#000000]">BUILD</h2>
							<p class="text-center font-space text-[8px] leading-2.5">
								VITE adalah<br />yang terbaik
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="flex h-fit w-full flex-col items-start justify-start">
				<div
					class="flex w-full items-center justify-start gap-2 font-space text-[13px] font-semibold"
				>
					<p class="text-[10px] tracking-[3px] text-[#00000050]">BASED IN PROBOLINGGO</p>
				</div>

				<h1
					class="mt-5 w-full text-left font-space text-[75px] leading-18.75 font-semibold max-sm:text-[60px] max-sm:leading-15"
				>
					Frontend<br />Developer
				</h1>

				<p
					class="mt-2 w-full text-left font-space text-[30px] leading-7.5 font-semibold text-[#00000090] max-sm:text-[27px] max-sm:leading-7"
				>
					Membuat website simpel namun bagus
				</p>

				<div
					class="mt-5 mb-5 flex w-full items-center justify-start gap-2 font-space text-[13px] font-semibold"
				>
					<p class="text-[10px] tracking-[3px] text-[#00000050]">NODEJS - SVELTEKIT - CSS - HTML</p>
				</div>

				<p class="h-fit w-full text-justify font-space text-[#00000099]">
					Halo, aku <span class="font-semibold text-[#000000]">Aditya Parama Sandya</span>. Aku
					adalah developer bagian frontend atau lebih tepatnya bagian tampilan websitenya, aku suka
					mendesain dan menirukan website orang lain sebagai refrensi proyek saya untuk kedepannya.
					Namun selain sebagai developer frontend aku juga ada sedikit skill untuk developer backend
					di dalam bahasa NodeJS, dan juga aku suka menggunakan Rust namun pada bahasa itu belum aku
					kuasai secara 100% lalu aku juga bisa menggunakan AI untuk membantu aku dalam membuat
					suatu proyek yang ingin aku buat.
				</p>

				<p class="mt-5 h-fit w-full text-justify font-space text-[#00000099]">
					Hobiku selain coding yaitu bersepeda dan berenang jadi terkadang aku meluangkan waktu saat
					liburan untuk berenang bersama teman-teman atau bersepeda bersama dan ngopi pagi biar mata
					melek. Ohh iya aku juga bersekolah di <span class="font-semibold text-[#000000]"
						>SMA Negeri 1 Dringu Kab. Probolinggo</span
					>, dan aku mempunyai banyak teman di sana.
				</p>

				<hr class="mt-7 mb-7 h-px w-full border border-[#00000010]" />

				<p class="text-[9px] tracking-[3px] text-[#000000]">FOKUS STACK</p>

				<div class="mt-5 grid h-fit w-full grid-cols-4 gap-5">
					<div
						class="flex items-center justify-center border border-[#00000030] bg-transparent px-3 py-2 font-space text-[11.5px] font-semibold text-[#00000099]"
					>
						NodeJS
					</div>

					<div
						class="flex items-center justify-center border border-[#00000030] bg-transparent px-3 py-2 font-space text-[11.5px] font-semibold text-[#00000099]"
					>
						SVELTE
					</div>

					<div
						class="flex items-center justify-center border border-[#00000030] bg-transparent px-3 py-2 font-space text-[11.5px] font-semibold text-[#00000099]"
					>
						HTML
					</div>

					<div
						class="flex items-center justify-center border border-[#00000030] bg-transparent px-3 py-2 font-space text-[11.5px] font-semibold text-[#00000099]"
					>
						CSS
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="proyek" class="h-fit w-full bg-[#000000]">
		<div
			class="mx-auto flex h-fit w-full max-w-330 flex-col items-start justify-start px-13 pt-13 pb-13 max-sm:px-7.5"
		>
			<div
				class="flex w-full items-center justify-start gap-2 font-space text-[13px] font-semibold text-[#ffffff]"
			>
				<svg class="w-2.5 fill-[#A3E635]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
					/></svg
				>
				2.<span class="tracking-widest text-[#ffffff99]">PROYEK</span>
				<hr class="ml-2.5 h-px w-full border border-[#ffffff30]" />
			</div>

			<div
				class="mt-10 flex h-fit w-full shrink-0 scrollbar-thin scrollbar-thumb-[#A3E635] scrollbar-track-[#000000] flex-row items-center justify-start gap-20 overflow-x-auto overflow-y-hidden pb-7"
			>
				<div class="flex shrink-0 flex-col items-start justify-center gap-4">
					<h1
						class="font-space text-[100px] leading-25 font-semibold text-[#ffffff] max-sm:text-[70px] max-sm:leading-17.5"
					>
						WNX<br /><span class="text-[#A3E635]">PROYEK</span>
					</h1>

					<p class="font-space text-[20px] text-[#ffffff]">
						Mewujutkan ide sederhana<br />menjadi menyataan
					</p>

					<svg
						class="mt-5 w-20 -rotate-45 fill-[#A3E635]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
							d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
						/></svg
					>
				</div>

				<button
					onclick={() => datanya('dataone')}
					class="group relative h-fit w-150 shrink-0 cursor-pointer overflow-hidden rounded-[10px]"
				>
					<img
						class="w-full transition-transform duration-500 group-hover:scale-110"
						src="/2.png"
						alt="imageproyek"
					/>

					<div
						class="absolute bottom-0 flex h-30 w-full flex-col items-start justify-center bg-linear-to-t from-[#00000099] to-transparent px-7 font-space text-[11px] font-semibold tracking-widest text-[#ffffff99]"
					>
						<p class="mt-7 flex items-center justify-start gap-2">
							<svg
								class="w-2.5 fill-[#A3E635]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 640"
								><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
									d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
								/></svg
							>PORTOFOLIO
						</p>
						<p class="mt-1 text-[15px]! text-[#ffffff]!">Personal Portofolio</p>
					</div>

					<div
						class="absolute right-7 bottom-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#000000] bg-[#A3E635]"
					>
						<svg
							class="w-4 -rotate-45 fill-[#000000]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
							/></svg
						>
					</div>
				</button>
			</div>
		</div>
	</div>

	<div
		id="sertifikat"
		class="mx-auto h-fit max-h-full w-full max-w-330 bg-[#FAF9F6] px-13 py-13 max-sm:px-7.5"
	>
		<div
			class="flex h-fit w-full items-center justify-start gap-2 font-space text-[13px] font-semibold"
		>
			<svg class="w-2.5 fill-[#A3E635]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
				><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
					d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
				/></svg
			>
			3.<span class="tracking-widest text-[#00000099]">SERTIFIKAT</span>
			<hr class="ml-2.5 h-px w-full border border-[#00000010]" />
		</div>

		<div class="mt-7 grid h-fit w-full grid-cols-[500px_1fr] gap-10 max-sm:grid-cols-1">
			<div class="flex w-full flex-col items-start justify-start">
				<h1 class="font-space text-[60px] leading-17.5 font-bold text-[#000000]">
					SERTIFIKAT<br /><span>ADITYA</span>
				</h1>

				<p
					class="mt-3 w-full max-w-87 text-left font-space text-[17px] font-normal text-[#00000099]"
				>
					Role sebagai frontend dan sedikit juga sebagai backend untuk proyek WNX yang simpel saja.
				</p>
			</div>

			<div
				class="relative flex {viewall
					? 'h-fit'
					: 'h-100'} w-full flex-col items-start justify-start gap-5 overflow-hidden"
			>
				<button
					onclick={() => {
						upt = !upt;
					}}
					class="relative flex h-fit w-full cursor-pointer flex-col items-start justify-start border border-[#00000020] bg-[#ffffff] p-6"
				>
					<div
						class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]"
					>
						<svg
							class="w-4 fill-[#ffffff] {upt
								? '-rotate-90'
								: 'rotate-90'} transition-all duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
							/></svg
						>
					</div>

					<div
						class="flex h-fit w-fit items-center justify-center gap-2 border border-[#00000020] px-4 py-2.5 font-space text-[14px] text-[#00000099]"
					>
						<svg
							class="w-4 fill-[#00000099]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
							/></svg
						>

						28 Oktober 2025
					</div>

					<h1
						class="mt-5 w-full text-left font-space text-[27px] leading-8.25 font-bold text-[#000000]"
					>
						PELATIHAN LATIKA UPT.TIKP
					</h1>

					<p
						class="mt-2 flex flex-row items-center justify-start gap-2 font-space text-[10px] text-[#00000090]"
					>
						<svg
							class="w-3.5 fill-[#00000090]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M32 256C32 220.7 60.7 192 96 192L160 192L287.9 76.9C306.2 60.5 333.9 60.5 352.1 76.9L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256zM256 440L256 528L384 528L384 440C384 417.9 366.1 400 344 400L296 400C273.9 400 256 417.9 256 440zM144 448C152.8 448 160 440.8 160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448zM160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320C152.8 320 160 312.8 160 304zM528 448C536.8 448 544 440.8 544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448zM544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320C536.8 320 544 312.8 544 304zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
							/></svg
						> SEKOLAH
					</p>

					<p class="mt-7 text-justify font-space text-[15px] text-[#00000090]">
						UPT.TIKP Jawa Timur mengadakan Pelatihan Teknologi Informasi dan Komunikasi Bagi Murid,
						dan saya mengikutinya dengan lumayan baik di sana.
					</p>
				</button>

				{#if upt}
					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/UPT.png" alt="UPT" />
					</div>
				{/if}

				<button
					onclick={() => {
						binus = !binus;
					}}
					class="relative flex h-fit w-full cursor-pointer flex-col items-start justify-start border border-[#00000020] bg-[#ffffff] p-6"
				>
					<div
						class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]"
					>
						<svg
							class="w-4 fill-[#ffffff] {binus
								? '-rotate-90'
								: 'rotate-90'} transition-all duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
							/></svg
						>
					</div>

					<div
						class="flex h-fit w-fit items-center justify-center gap-2 border border-[#00000020] px-4 py-2.5 font-space text-[14px] text-[#00000099]"
					>
						<svg
							class="w-4 fill-[#00000099]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
							/></svg
						>

						24 Januari 2026
					</div>

					<h1
						class="mt-5 w-full text-left font-space text-[27px] leading-8.25 font-bold text-[#000000]"
					>
						PELATIHAN BINUS BAHASA C
					</h1>

					<p
						class="mt-2 flex flex-row items-center justify-start gap-2 font-space text-[10px] text-[#00000090]"
					>
						<svg
							class="w-3.5 fill-[#00000090]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M32 256C32 220.7 60.7 192 96 192L160 192L287.9 76.9C306.2 60.5 333.9 60.5 352.1 76.9L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256zM256 440L256 528L384 528L384 440C384 417.9 366.1 400 344 400L296 400C273.9 400 256 417.9 256 440zM144 448C152.8 448 160 440.8 160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448zM160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320C152.8 320 160 312.8 160 304zM528 448C536.8 448 544 440.8 544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448zM544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320C536.8 320 544 312.8 544 304zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
							/></svg
						> MANDIRI
					</p>

					<p class="mt-7 text-justify font-space text-[15px] text-[#00000090]">
						Melakukan pelatihan dengan materi yang sudah disediakan oleh pihak BINUS untuk belajar
						bahasa C.
					</p>
				</button>

				{#if binus}
					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/Binus1.png" alt="BINUS" />
					</div>

					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/Binus2.png" alt="BINUS" />
					</div>
				{/if}

				<button
					onclick={() => {
						asean = !asean;
					}}
					class="relative flex h-fit w-full cursor-pointer flex-col items-start justify-start border border-[#00000020] bg-[#ffffff] p-6"
				>
					<div
						class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]"
					>
						<svg
							class="w-4 fill-[#ffffff] {asean
								? '-rotate-90'
								: 'rotate-90'} transition-all duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
							/></svg
						>
					</div>

					<div
						class="flex h-fit w-fit items-center justify-center gap-2 border border-[#00000020] px-4 py-2.5 font-space text-[14px] text-[#00000099]"
					>
						<svg
							class="w-4 fill-[#00000099]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
							/></svg
						>

						21 Juli 2026
					</div>

					<h1
						class="mt-5 w-full text-left font-space text-[27px] leading-8.25 font-bold text-[#000000]"
					>
						AI READY ASEAN
					</h1>

					<p
						class="mt-2 flex flex-row items-center justify-start gap-2 font-space text-[10px] text-[#00000090]"
					>
						<svg
							class="w-3.5 fill-[#00000090]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M32 256C32 220.7 60.7 192 96 192L160 192L287.9 76.9C306.2 60.5 333.9 60.5 352.1 76.9L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256zM256 440L256 528L384 528L384 440C384 417.9 366.1 400 344 400L296 400C273.9 400 256 417.9 256 440zM144 448C152.8 448 160 440.8 160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448zM160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320C152.8 320 160 312.8 160 304zM528 448C536.8 448 544 440.8 544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448zM544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320C536.8 320 544 312.8 544 304zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
							/></svg
						> SEKOLAH
					</p>

					<p class="mt-7 text-justify font-space text-[15px] text-[#00000090]">
						Melakukan pelatihan dengan materi yang sudah ada dan melakukan quiz untuk menilai
						pengetahuan.
					</p>
				</button>

				{#if asean}
					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/AI1.png" alt="AI" />
					</div>

					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/AI2.png" alt="AI" />
					</div>
				{/if}

				<button
					onclick={() => {
						freecode = !freecode;
					}}
					class="relative flex h-fit w-full cursor-pointer flex-col items-start justify-start border border-[#00000020] bg-[#ffffff] p-6"
				>
					<div
						class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]"
					>
						<svg
							class="w-4 fill-[#ffffff] {freecode
								? '-rotate-90'
								: 'rotate-90'} transition-all duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
							/></svg
						>
					</div>

					<div
						class="flex h-fit w-fit items-center justify-center gap-2 border border-[#00000020] px-4 py-2.5 font-space text-[14px] text-[#00000099]"
					>
						<svg
							class="w-4 fill-[#00000099]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
							/></svg
						>

						06 Desember 2025
					</div>

					<h1
						class="mt-5 w-full text-left font-space text-[27px] leading-8.25 font-bold text-[#000000]"
					>
						FREECODECAMP MICROSOFT C#
					</h1>

					<p
						class="mt-2 flex flex-row items-center justify-start gap-2 font-space text-[10px] text-[#00000090]"
					>
						<svg
							class="w-3.5 fill-[#00000090]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M32 256C32 220.7 60.7 192 96 192L160 192L287.9 76.9C306.2 60.5 333.9 60.5 352.1 76.9L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256zM256 440L256 528L384 528L384 440C384 417.9 366.1 400 344 400L296 400C273.9 400 256 417.9 256 440zM144 448C152.8 448 160 440.8 160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448zM160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320C152.8 320 160 312.8 160 304zM528 448C536.8 448 544 440.8 544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448zM544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320C536.8 320 544 312.8 544 304zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
							/></svg
						> FREECODECAMP
					</p>

					<p class="mt-7 text-justify font-space text-[15px] text-[#00000090]">
						Memahami materi untuk bahasa C# dan mengerjakan soal yang sudah di sediakan oleh
						FreeCodeCamp dan Microsoft.
					</p>
				</button>

				{#if freecode}
					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/freecode.png" alt="Free" />
					</div>
				{/if}

				<button
					onclick={() => {
						umm = !umm;
					}}
					class="relative flex h-fit w-full cursor-pointer flex-col items-start justify-start border border-[#00000020] bg-[#ffffff] p-6"
				>
					<div
						class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]"
					>
						<svg
							class="w-4 fill-[#ffffff] {umm
								? '-rotate-90'
								: 'rotate-90'} transition-all duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
							/></svg
						>
					</div>

					<div
						class="flex h-fit w-fit items-center justify-center gap-2 border border-[#00000020] px-4 py-2.5 font-space text-[14px] text-[#00000099]"
					>
						<svg
							class="w-4 fill-[#00000099]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
							/></svg
						>

						03 Februari 2025
					</div>

					<h1
						class="mt-5 w-full text-left font-space text-[27px] leading-8.25 font-bold text-[#000000]"
					>
						KULIAH UMUM UMM
					</h1>

					<p
						class="mt-2 flex flex-row items-center justify-start gap-2 font-space text-[10px] text-[#00000090]"
					>
						<svg
							class="w-3.5 fill-[#00000090]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M32 256C32 220.7 60.7 192 96 192L160 192L287.9 76.9C306.2 60.5 333.9 60.5 352.1 76.9L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256zM256 440L256 528L384 528L384 440C384 417.9 366.1 400 344 400L296 400C273.9 400 256 417.9 256 440zM144 448C152.8 448 160 440.8 160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448zM160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320C152.8 320 160 312.8 160 304zM528 448C536.8 448 544 440.8 544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448zM544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320C536.8 320 544 312.8 544 304zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
							/></svg
						> SEKOLAH & UMM
					</p>

					<p class="mt-7 text-justify font-space text-[15px] text-[#00000090]">
						Membuat proyek dan membuat skripsi lalu di kumpulkan untuk mendapatkan hasil IPK dan
						sertifikat.
					</p>
				</button>

				{#if umm}
					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/umm1.png" alt="umm" />
					</div>

					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/umm2.png" alt="umm" />
					</div>
				{/if}

				<button
					onclick={() => {
						tech = !tech;
					}}
					class="relative flex h-fit w-full cursor-pointer flex-col items-start justify-start border border-[#00000020] bg-[#ffffff] p-6"
				>
					<div
						class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]"
					>
						<svg
							class="w-4 fill-[#ffffff] {tech
								? '-rotate-90'
								: 'rotate-90'} transition-all duration-150 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
							/></svg
						>
					</div>

					<div
						class="flex h-fit w-fit items-center justify-center gap-2 border border-[#00000020] px-4 py-2.5 font-space text-[14px] text-[#00000099]"
					>
						<svg
							class="w-4 fill-[#00000099]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
							/></svg
						>

						08 Maret 2026
					</div>

					<h1
						class="mt-5 w-full text-left font-space text-[27px] leading-8.25 font-bold text-[#000000]"
					>
						TECH & SOCIAL SUMMIT 2026
					</h1>

					<p
						class="mt-2 flex flex-row items-center justify-start gap-2 font-space text-[10px] text-[#00000090]"
					>
						<svg
							class="w-3.5 fill-[#00000090]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
								d="M32 256C32 220.7 60.7 192 96 192L160 192L287.9 76.9C306.2 60.5 333.9 60.5 352.1 76.9L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256zM256 440L256 528L384 528L384 440C384 417.9 366.1 400 344 400L296 400C273.9 400 256 417.9 256 440zM144 448C152.8 448 160 440.8 160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448zM160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320C152.8 320 160 312.8 160 304zM528 448C536.8 448 544 440.8 544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448zM544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320C536.8 320 544 312.8 544 304zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
							/></svg
						> KOMUNITAS IMPHNEN
					</p>

					<p class="mt-7 text-justify font-space text-[15px] text-[#00000090]">
						Belajar sambil cari pahala bersama Tech & Social Summit 2026.
					</p>
				</button>

				{#if tech}
					<div class="h-fit w-full border-2 border-[#00000020] bg-transparent p-6">
						<img class="w-full" src="/Tech.png" alt="Tech" />
					</div>
				{/if}

				<button
					onclick={() => {
						viewall = false;
					}}
					class="h-10 w-full cursor-pointer bg-[#000000] text-center font-space text-[14px] font-semibold text-[#ffffff]"
					>Lebih sedikit</button
				>

				<button
					onclick={() => {
						viewall = true;
					}}
					class="absolute bottom-0 h-50 w-full cursor-pointer flex-row items-center justify-center gap-2 bg-linear-to-t from-[#FAF9F6] to-transparent pt-45 font-space font-semibold text-[#000000] {viewall
						? 'hidden'
						: 'flex'}"
				>
					<svg
						class="w-4 rotate-90 fill-[#000000]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
							d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
						/></svg
					> Lihat lebih banyak</button
				>
			</div>
		</div>
	</div>

	<div id="stack" class="h-fit w-full bg-[#000000]">
		<div class="mx-auto h-fit max-h-full w-full max-w-330 px-13 py-13 max-sm:px-7.5">
			<div
				class="flex h-fit w-full items-center justify-start gap-2 font-space text-[13px] font-semibold text-[#ffffff]"
			>
				<svg class="w-2.5 fill-[#A3E635]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
					/></svg
				>
				4.<span class="tracking-widest text-[#ffffff99]">STACK</span>
				<hr class="ml-2.5 h-px w-full border border-[#ffffff30]" />
			</div>

			<div class="mt-7 grid h-fit w-full grid-cols-[500px_1fr] gap-10 max-sm:grid-cols-1">
				<div class="flex w-full flex-col items-start justify-start">
					<h1 class="font-space text-[60px] leading-17.5 font-bold text-[#ffffff]">
						TECH<br /><span class="text-[#A3E635]">STACK</span>
					</h1>

					<p
						class="mt-3 w-full max-w-87 text-left font-space text-[17px] font-normal text-[#ffffff99]"
					>
						Berikut adalah tech stack yang bisa ku kuasai walaupun tidak semua 100% bisa ku kuasai.
					</p>
				</div>

				<div
					class="relative flex h-fit w-full flex-col items-start justify-start gap-0 overflow-hidden"
				>
					<div
						class="grid h-fit w-full grid-cols-[200px_1fr] items-center justify-start gap-5 border-t-2 border-[#ffffff30] py-7 max-sm:grid-cols-1"
					>
						<div class="h-fit w-full">
							<h1 class="font-space text-[30px] font-semibold text-[#ffffff]">FRONTEND</h1>
							<p class="mt-1 font-space text-[13px] tracking-widest text-[#ffffff99]">
								// TAMPILAN WEBSITE
							</p>
						</div>

						<div class="flex h-fit w-full flex-wrap items-center justify-start gap-5">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M298.1 90.4C364.9 47.8 457.4 67.7 504.2 134.7C515.3 150.2 523.2 167.8 527.4 186.5C531.6 205.2 532.1 224.4 528.7 243.2C525.5 261.2 518.6 278.3 508.6 293.5C523.2 321.4 528.2 353.5 522.6 384.5C519.3 402.9 512.2 420.5 501.7 436C491.2 451.5 477.6 464.7 461.8 474.7L344.3 549.6C277.5 592.2 185 572.3 138.2 505.4C127.1 489.9 119.2 472.2 115 453.6C110.8 435 110.3 415.7 113.7 396.9C116.9 378.9 123.8 361.8 133.8 346.6C119.1 318.7 114.2 286.6 119.8 255.5C123.1 237.1 130.2 219.5 140.7 204C151.2 188.5 164.8 175.3 180.6 165.3L298.1 90.4zM411.6 131.2C393.7 124.6 374.2 123.6 355.7 128.4C347.3 130.7 339.2 134.2 331.9 138.9L214.5 213.7C205 219.7 196.8 227.6 190.5 237C184.2 246.4 180 256.8 178 267.9C176 279.2 176.3 290.8 178.8 302C181.3 313.2 186.1 323.8 192.7 333.2C203.6 348.9 219 360.8 236.9 367.5C254.8 374.2 274.3 375.1 292.8 370.3C301.2 368 309.3 364.5 316.6 359.8L361.4 331.2C363.6 329.8 366.1 328.7 368.6 328C374.2 326.6 380 326.8 385.4 328.8C390.8 330.8 395.4 334.4 398.7 339.1C400.7 341.9 402.2 345.1 402.9 348.5C403.6 351.9 403.8 355.4 403.2 358.8C402.6 362.1 401.3 365.3 399.4 368.1C397.5 370.9 395 373.3 392.2 375.1L274.8 450.1C272.6 451.5 270.1 452.6 267.6 453.3C262 454.7 256.2 454.5 250.8 452.5C245.4 450.5 240.8 446.9 237.5 442.2C233.9 437.1 232.2 431 232.8 424.8L233.2 420.4L228.9 419.1C212.4 414.1 196.8 406.4 183 396.2L177 391.8L174.8 398.5C173.6 402.1 172.7 405.8 172 409.5C170 420.8 170.3 432.4 172.8 443.6C175.3 454.8 180.1 465.4 186.7 474.7C197.6 490.4 213 502.3 230.9 509C248.8 515.7 268.3 516.6 286.7 511.8C295.1 509.5 303.2 506 310.6 501.3L427.9 426.5C437.4 420.5 445.6 412.6 451.9 403.2C458.2 393.8 462.5 383.3 464.5 372.2C466.5 360.9 466.3 349.3 463.7 338.1C461.1 326.9 456.4 316.3 449.7 307C438.8 291.3 423.4 279.4 405.5 272.7C387.6 266 368.1 265.1 349.6 269.9C341.2 272.2 333.1 275.7 325.8 280.4L281 308.8C278.8 310.2 276.4 311.3 273.8 312C268.2 313.4 262.3 313.2 257 311.2C251.7 309.2 247 305.6 243.7 300.9C241.7 298.1 240.3 294.9 239.5 291.5C238.7 288.1 238.6 284.6 239.3 281.2C239.9 277.9 241.2 274.7 243.1 271.9C245 269.1 247.5 266.7 250.3 264.9L367.7 190.1C369.9 188.7 372.4 187.6 374.9 186.9C380.5 185.5 386.3 185.8 391.7 187.8C397.1 189.8 401.7 193.4 405 198.1C408.6 203.2 410.2 209.4 409.7 215.5L409.3 219.9L413.7 221.2C430.2 226.2 445.7 234 459.6 244.2L465.6 248.6L467.8 241.8C469 238.2 469.9 234.5 470.6 230.8C472.6 219.5 472.4 207.9 469.8 196.7C467.2 185.5 462.5 174.9 455.8 165.6C444.9 149.9 429.5 138 411.6 131.3z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M320 128C234.7 128 181.3 170.7 160 256C192 213.3 229.3 197.3 272 208C296.3 214.1 313.7 231.8 333 251.3C364.4 283.1 400.7 320 480 320C565.3 320 618.7 277.3 640 192C608 234.7 570.7 250.7 528 240C503.7 233.9 486.3 216.2 467 196.7C435.6 164.9 399.3 128 320 128zM160 320C74.7 320 21.3 362.7 0 448C32 405.3 69.3 389.3 112 400C136.3 406.1 153.7 423.8 173 443.3C204.4 475.1 240.7 512 320 512C405.3 512 458.7 469.3 480 384C448 426.7 410.7 442.7 368 432C343.7 425.9 326.3 408.2 307 388.7C275.6 356.9 239.3 320 160 320z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M96 96L96 544L544 544L544 96L96 96zM339.8 445.4C339.8 489 314.2 508.9 276.9 508.9C243.2 508.9 223.7 491.5 213.7 470.4L248 449.7C254.6 461.4 260.6 471.3 275.1 471.3C288.9 471.3 297.7 465.9 297.7 444.8L297.7 301.7L339.8 301.7L339.8 445.4zM439.4 508.9C400.3 508.9 375 490.3 362.7 465.9L397 446.1C406 460.8 417.8 471.7 438.5 471.7C455.9 471.7 467.1 463 467.1 450.9C467.1 436.5 455.7 431.4 436.4 422.9L425.9 418.4C395.5 405.5 375.4 389.2 375.4 354.9C375.4 323.3 399.5 299.3 437 299.3C463.8 299.3 483 308.6 496.8 333L464 354C456.8 341.1 449 336 436.9 336C424.6 336 416.8 343.8 416.8 354C416.8 366.6 424.6 371.7 442.7 379.6L453.2 384.1C489 399.4 509.1 415.1 509.1 450.3C509.1 488.1 479.3 508.9 439.4 508.9z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M128 96L162.9 491.8L319.5 544L477.1 491.8L512 96L128 96zM436.2 223.9L252.4 223.9L256.5 273.3L432.1 273.3L418.5 421.7L320.6 448.7L320.6 449L319.5 449L220.8 421.7L214.8 345.9L262.5 345.9L266 384L319.5 398.5L373.2 384L379.2 321.8L212.3 321.8L199.5 176.2L440.6 176.2L436.2 223.9z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M472.3 96L96 96L96 472.3C96 491.3 103.6 509.5 117 523C130.4 536.5 148.7 544 167.7 544L472.3 544C491.3 544 509.5 536.4 523 523C536.5 509.6 544 491.3 544 472.3L544 167.7C544 148.7 536.4 130.5 523 117C509.6 103.5 491.3 96 472.3 96zM428.4 495.4C420.7 486.9 416.7 474.7 416.4 458.8L447.7 458.8C447.9 472.9 452.8 479.9 462.5 479.9C467.4 479.9 470.9 478.3 473 475.2C475 472.1 476 467.2 476 460.4C476 455 474.7 450.5 472 447C468.5 442.8 463.9 439.5 458.8 437.5L447.2 432C436.9 427.1 429.4 421.2 424.7 414.4C420.2 407.6 418 398.1 418 386C418 372.4 422 361.4 429.8 352.9C437.9 344.4 448.9 340.2 463 340.2C476.6 340.2 487.1 344.4 494.5 352.7C502 361.1 506 373 506.3 388.6L476.2 388.6C476.4 383.5 475.3 378.4 473.2 373.8C471.5 370.4 468.2 368.7 463.2 368.7C454.4 368.7 450 373.9 450 384.4C450 389.7 451.1 393.8 453.2 397C456.3 400.5 460.2 403.2 464.6 404.8L475.7 409.7C487.2 415 495.4 421.4 500.5 429.1C505.6 436.8 508.1 447.1 508.1 460.1C508.1 475.6 504.1 487.5 495.8 495.8C487.6 504.1 476.3 508.3 461.7 508.3C447.1 508.3 436.1 504.1 428.3 495.6zM327.4 495.4C319.7 486.9 315.7 474.7 315.4 458.8L346.7 458.8C346.9 472.9 351.8 479.9 361.5 479.9C366.4 479.9 369.9 478.3 371.9 475.2C373.9 472.1 374.9 467.2 374.9 460.4C374.9 455 373.6 450.5 371 447C367.5 442.8 362.9 439.5 357.8 437.5L346.2 432C335.9 427.1 328.4 421.2 323.7 414.4C319.2 407.6 317 398.1 317 386C317 372.4 321 361.4 328.8 352.9C336.9 344.4 347.9 340.2 362 340.2C375.6 340.2 386.1 344.4 393.4 352.7C401 361.1 404.9 373 405.3 388.6L375.2 388.6C375.4 383.5 374.3 378.4 372.2 373.8C370.5 370.4 367.2 368.7 362.2 368.7C353.4 368.7 349 373.9 349 384.4C349 389.7 350.1 393.8 352.2 397C355.3 400.5 359.2 403.2 363.6 404.8L374.7 409.7C386.2 415 394.4 421.4 399.5 429.1C404.6 436.8 407.1 447.1 407.1 460.1C407.1 475.6 403 487.5 394.8 495.8C386.6 504.1 375.3 508.3 360.7 508.3C346.1 508.3 335.1 504.1 327.3 495.6zM221.8 496.5C213.4 488.8 209.3 477.3 209.3 462L209.3 386.6C209.3 371.4 213.7 359.9 222.5 352C231.4 344.2 243.2 340.2 257.7 340.2C271.8 340.2 282.9 344.2 291.1 352.2C299.4 360.2 303.6 372.2 303.6 388.1L303.6 394.1L270.5 394.1L270.5 388.3C270.5 382.2 269.2 377.6 266.5 374.7C265.4 373.2 263.9 372 262.2 371.2C260.5 370.4 258.7 370 256.8 370.1C251.4 370.1 247.6 371.9 245.4 375.7C243.1 380.9 242.1 386.5 242.4 392.1L242.4 457.6C242.4 471.3 247.2 478.2 256.8 478.4C261.3 478.4 264.7 476.8 267 473.6C269.5 469.5 270.7 464.8 270.5 460L270.5 455.1L303.6 455.1L303.6 460.2C303.6 470.8 301.5 479.7 297.4 486.8C293.4 493.7 287.5 499.3 280.3 502.8C272.6 506.5 264.2 508.3 255.7 508.1C241.5 508.1 230.2 504.2 221.9 496.5z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M112.8 96L527.2 96C536.5 96 544 103.5 544 112.8L544 527.2C544 536.5 536.5 544 527.2 544L112.8 544C103.5 544 96 536.5 96 527.2L96 112.8C96 103.5 103.5 96 112.8 96zM345 334.3L345 297.6L185.6 297.6L185.6 334.3L242.5 334.3L242.5 497.9L287.8 497.9L287.8 334.3L345 334.3zM363.1 493.6C370.4 497.3 379 500.1 389 502C399 503.9 409.5 504.8 420.5 504.8C431.3 504.8 441.5 503.8 451.2 501.7C460.9 499.6 469.4 496.3 476.7 491.6C484 486.9 489.8 480.7 494.1 473.2C498.4 465.7 500.5 456.2 500.5 445C500.5 436.9 499.3 429.8 496.8 423.7C494.3 417.6 490.9 412.2 486.3 407.4C481.7 402.6 476.2 398.4 469.8 394.6C463.4 390.8 456.1 387.3 448.1 383.9C442.2 381.5 436.9 379.1 432.2 376.8C427.5 374.5 423.5 372.2 420.3 369.8C417.1 367.4 414.5 364.9 412.7 362.3C410.9 359.7 410 356.6 410 353.3C410 350.2 410.8 347.5 412.4 345C414 342.5 416.2 340.4 419.1 338.6C422 336.8 425.6 335.5 429.8 334.5C434 333.5 438.7 333 443.9 333C447.6 333 451.6 333.3 455.8 333.8C460 334.3 464.2 335.2 468.4 336.4C472.6 337.6 476.7 339 480.7 340.8C484.7 342.6 488.4 344.6 491.7 346.9L491.7 305.1C484.9 302.5 477.4 300.6 469.3 299.3C461.2 298 451.9 297.4 441.4 297.4C430.7 297.4 420.6 298.5 411 300.8C401.4 303.1 393 306.6 385.8 311.5C378.6 316.4 372.8 322.5 368.6 330C364.4 337.5 362.3 346.5 362.3 356.9C362.3 370.2 366.2 381.6 373.9 391C381.6 400.4 393.4 408.4 409.1 414.9C415.3 417.4 421 419.9 426.4 422.3C431.8 424.7 436.4 427.2 440.2 429.8C444 432.4 447.2 435.2 449.4 438.3C451.6 441.4 452.8 444.9 452.8 448.8C452.8 451.7 452.1 454.4 450.7 456.8C449.3 459.2 447.2 461.4 444.3 463.2C441.4 465 437.9 466.4 433.6 467.5C429.3 468.6 424.3 469 418.6 469C408.9 469 399.2 467.3 389.7 463.9C380.2 460.5 371.3 455.4 363.1 448.6L363.1 493.3z"
									/></svg
								>
							</div>
						</div>
					</div>

					<div
						class="grid h-fit w-full grid-cols-[200px_1fr] items-center justify-start gap-5 border-t-2 border-[#ffffff30] py-7 max-sm:grid-cols-1"
					>
						<div class="h-fit w-full">
							<h1 class="font-space text-[30px] font-semibold text-[#ffffff]">BACKEND</h1>
							<p class="mt-1 font-space text-[13px] tracking-widest text-[#ffffff99]">
								// FUNGSI INTI
							</p>
						</div>

						<div class="flex h-fit w-full flex-wrap items-center justify-start gap-5">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M572.5 313.8L550.7 300.3C550.5 298.3 550.4 296.4 550.2 294.4L568.9 276.9C569.8 276 570.5 275 570.9 273.8C571.3 272.6 571.4 271.3 571.1 270.1C570.8 268.9 570.3 267.7 569.5 266.8C568.7 265.9 567.7 265.1 566.5 264.7L542.5 255.7C542 253.8 541.4 251.9 540.8 250.1L555.8 229.3C556.5 228.3 557 227.1 557.1 225.9C557.2 224.7 557.1 223.4 556.6 222.2C556.1 221 555.4 220 554.4 219.3C553.4 218.6 552.3 218 551 217.8L525.6 213.6C524.7 211.9 523.8 210.2 522.9 208.4L533.6 185C534.1 183.9 534.3 182.6 534.2 181.4C534.1 180.2 533.7 179 533 177.9C532.3 176.8 531.4 176 530.2 175.4C529 174.8 527.8 174.6 526.6 174.6L500.8 175.5C499.6 174 498.4 172.6 497.2 171.1L503 145.8C503.3 144.6 503.3 143.3 502.9 142.1C502.5 140.9 501.9 139.8 501 138.9C500.1 138 499 137.4 497.8 137C496.6 136.6 495.3 136.6 494.1 136.9L469 142.9C467.6 141.7 466.1 140.5 464.6 139.3L465.5 113.5C465.6 112.2 465.3 111 464.7 109.9C464.1 108.8 463.3 107.8 462.2 107.1C461.1 106.4 460 106 458.7 105.9C457.4 105.8 456.2 106 455 106.5L431.7 117.2C430 116.3 428.3 115.4 426.6 114.5L422.4 89.1C422.2 87.9 421.7 86.7 420.9 85.7C420.1 84.7 419.1 84 418 83.5C416.9 83 415.6 82.8 414.3 83C413 83.2 411.9 83.6 410.9 84.3L390 99.3C388.1 98.7 386.2 98.2 384.4 97.6L375.4 73.6C375 72.4 374.2 71.4 373.3 70.6C372.4 69.8 371.2 69.2 370 69C368.8 68.8 367.5 68.8 366.3 69.2C365.1 69.6 364 70.3 363.2 71.2L345.6 89.9C343.6 89.7 341.7 89.5 339.7 89.4L326.3 67.5C325.6 66.4 324.7 65.6 323.6 64.9C322.5 64.2 321.3 64 320 64C318.7 64 317.5 64.3 316.4 64.9C315.3 65.5 314.4 66.4 313.7 67.5L300.2 89.3C298.2 89.5 296.3 89.6 294.3 89.9L276.9 71.1C276 70.2 275 69.5 273.8 69.1C272.6 68.7 271.3 68.6 270.1 68.9C268.9 69.2 267.7 69.7 266.8 70.5C265.9 71.3 265.1 72.3 264.7 73.5L255.7 97.5C253.8 98.1 251.9 98.6 250 99.2L229.2 84.2C228.2 83.5 227 83 225.8 82.9C224.6 82.8 223.3 82.9 222.1 83.4C220.9 83.9 219.9 84.6 219.2 85.6C218.5 86.6 217.9 87.7 217.7 89L213.5 114.4C211.8 115.3 210.1 116.2 208.3 117.1L184.9 106.6C183.8 106.1 182.5 105.9 181.2 106C179.9 106.1 178.7 106.5 177.7 107.2C176.7 107.9 175.8 108.9 175.2 110C174.6 111.1 174.4 112.4 174.4 113.6L175.3 139.4C173.8 140.6 172.3 141.8 170.9 143L145.8 137C144.6 136.7 143.3 136.7 142.1 137.1C140.9 137.5 139.8 138.1 138.9 139C138 139.9 137.4 141 137 142.2C136.6 143.4 136.6 144.7 136.9 145.9L142.9 171C141.7 172.4 140.5 173.9 139.3 175.4L113.5 174.5C112.2 174.5 111 174.7 109.9 175.3C108.8 175.9 107.8 176.7 107.1 177.7C106.4 178.7 106 179.9 105.9 181.2C105.8 182.5 106 183.7 106.5 184.8L117.2 208.2C116.3 209.9 115.4 211.6 114.5 213.4L89.1 217.5C87.9 217.7 86.7 218.2 85.7 219C84.7 219.8 84 220.8 83.5 221.9C83 223 82.8 224.3 83 225.6C83.2 226.9 83.6 228 84.3 229L99.3 249.8C98.7 251.7 98.2 253.6 97.6 255.5L73.6 264.5C72.4 264.9 71.4 265.7 70.6 266.6C69.8 267.5 69.2 268.7 69 269.9C68.8 271.1 68.8 272.4 69.2 273.6C69.6 274.8 70.3 275.9 71.2 276.7L89.9 294.2C89.7 296.2 89.5 298.1 89.3 300.1L67.5 313.8C66.4 314.5 65.6 315.4 64.9 316.5C64.2 317.6 64 318.8 64 320.1C64 321.4 64.3 322.6 64.9 323.7C65.5 324.8 66.4 325.7 67.5 326.4L89.3 339.9C89.5 341.9 89.6 343.8 89.9 345.8L71.1 363.1C70.2 364 69.5 365 69.1 366.2C68.7 367.4 68.6 368.7 68.9 369.9C69.2 371.1 69.7 372.3 70.5 373.2C71.3 374.1 72.3 374.9 73.5 375.3L97.5 384.3C98.1 386.2 98.6 388.1 99.2 389.9L84.2 410.7C83.5 411.7 83 412.9 82.9 414.1C82.8 415.3 82.9 416.6 83.4 417.8C83.9 419 84.6 420 85.6 420.7C86.6 421.4 87.7 422 89 422.2L114.4 426.4C115.3 428.1 116.2 429.8 117.1 431.5L106.6 455.1C106.1 456.2 105.9 457.5 106 458.7C106.1 459.9 106.5 461.2 107.2 462.2C107.9 463.3 108.8 464.1 109.9 464.7C111 465.3 112.3 465.5 113.5 465.5L139.3 464.6C140.5 466.1 141.7 467.5 142.9 469L137 494.2C136.7 495.4 136.7 496.7 137.1 497.9C137.5 499.1 138.1 500.2 139 501.1C139.9 502 141 502.6 142.2 503C143.4 503.4 144.7 503.4 145.9 503.1L171.1 497.2C172.6 498.4 174 499.6 175.5 500.8L174.6 526.6C174.6 527.9 174.8 529.1 175.4 530.2C176 531.3 176.8 532.3 177.9 533C179 533.7 180.1 534.1 181.4 534.2C182.7 534.3 183.9 534.1 185 533.6L208.4 522.9C210.1 523.8 211.8 524.7 213.5 525.6L217.7 551C217.9 552.2 218.4 553.4 219.2 554.4C220 555.4 221 556.2 222.1 556.6C223.2 557 224.5 557.3 225.8 557.1C227.1 556.9 228.2 556.5 229.2 555.8L250 540.8C251.9 541.4 253.8 541.9 255.6 542.5L264.6 566.5C265 567.7 265.8 568.7 266.7 569.5C267.6 570.3 268.8 570.9 270 571.1C271.2 571.3 272.5 571.3 273.7 570.9C274.9 570.5 276 569.8 276.8 568.9L294.3 550.2C296.3 550.4 298.2 550.6 300.2 550.8L313.7 572.6C314.4 573.7 315.3 574.5 316.4 575.2C317.5 575.9 318.7 576.1 320 576.1C321.3 576.1 322.5 575.8 323.6 575.2C324.7 574.6 325.6 573.7 326.3 572.6L339.8 550.8C341.8 550.6 343.7 550.5 345.7 550.2L363.2 568.9C364.1 569.8 365.1 570.5 366.3 570.9C367.5 571.3 368.8 571.4 370 571.1C371.2 570.8 372.4 570.3 373.3 569.5C374.2 568.7 375 567.7 375.4 566.5L384.4 542.5C386.3 541.9 388.2 541.4 390 540.8L410.8 555.8C411.8 556.5 413 557 414.2 557.1C415.4 557.2 416.7 557.1 417.9 556.6C419.1 556.1 420.1 555.4 420.8 554.4C421.5 553.4 422.1 552.3 422.3 551L426.5 525.6C428.2 524.7 429.9 523.8 431.6 522.9L455 533.6C456.1 534.1 457.4 534.3 458.6 534.2C459.8 534.1 461 533.7 462.1 533C463.2 532.3 464 531.4 464.6 530.2C465.2 529 465.4 527.8 465.4 526.6L464.5 500.8C466 499.6 467.4 498.4 468.9 497.2L494.1 503.1C495.3 503.4 496.6 503.4 497.8 503C499 502.6 500.1 502 501 501.1C501.9 500.2 502.5 499.1 502.9 497.9C503.3 496.7 503.3 495.4 503 494.2L497.1 469C498.3 467.6 499.5 466.1 500.7 464.6L526.5 465.5C527.8 465.6 529 465.3 530.1 464.7C531.2 464.1 532.2 463.3 532.9 462.2C533.6 461.2 534 460 534.1 458.7C534.2 457.4 534 456.2 533.5 455.1L522.8 431.7C523.7 430 524.6 428.3 525.5 426.6L550.9 422.4C552.1 422.2 553.3 421.7 554.3 420.9C555.3 420.1 556.1 419.1 556.5 418C556.9 416.9 557.2 415.6 557 414.3C556.8 413 556.4 411.9 555.7 410.9L540.7 390.1C541.3 388.2 541.8 386.3 542.4 384.5L566.4 375.5C567.6 375.1 568.6 374.3 569.4 373.4C570.2 372.5 570.8 371.3 571 370.1C571.2 368.9 571.2 367.6 570.8 366.4C570.4 365.2 569.7 364.1 568.8 363.3L550.1 345.8C550.3 343.9 550.5 341.9 550.7 339.9L572.5 326.4C573.6 325.7 574.4 324.8 575.1 323.7C575.8 322.6 576 321.4 576 320.1C576 318.8 575.7 317.6 575.1 316.5C574.5 315.4 573.6 314.5 572.5 313.8L572.5 313.8zM421.5 442.9C417.9 442.1 414.1 442.8 411 444.8C407.9 446.8 405.7 450 405 453.6L397.4 489.3C372.8 500.4 346.1 506.1 319.1 506C292.1 505.9 265.5 499.9 241 488.6L233.4 452.9C233 451.1 232.3 449.4 231.3 447.9C230.3 446.4 228.9 445.1 227.4 444.1C225.9 443.1 224.2 442.4 222.4 442.1C220.6 441.8 218.8 441.8 217 442.2L185.5 449C179.7 443 174.2 436.5 169.2 429.8L322.4 429.8C324.1 429.8 325.3 429.5 325.3 427.9L325.3 373.7C325.3 372.1 324.1 371.8 322.4 371.8L277.6 371.8L277.6 337.4L326.1 337.4C330.5 337.4 349.8 338.7 355.9 363.3C357.8 370.8 362.1 395.4 365 403.3C367.9 412.1 379.6 429.8 392.1 429.8L471.1 429.8C465.8 436.9 460 443.6 453.8 449.9L421.7 443zM447.3 477.4C447.3 480.4 446.4 483.4 444.7 485.9C443 488.4 440.7 490.4 437.9 491.5C435.1 492.6 432.1 493 429.1 492.4C426.1 491.8 423.4 490.4 421.3 488.2C419.2 486 417.7 483.4 417.1 480.4C416.5 477.4 416.8 474.4 417.9 471.6C419 468.8 421 466.4 423.5 464.7C426 463 428.9 462.1 432 462.1L432.4 462.1C436.4 462.2 440.1 463.9 442.9 466.7C445.7 469.5 447.2 473.4 447.2 477.3L447.3 477.3zM221.7 476.7C221.7 479.7 220.8 482.7 219.1 485.2C217.4 487.7 215 489.7 212.3 490.8C209.6 491.9 206.5 492.3 203.5 491.7C200.5 491.1 197.8 489.7 195.7 487.5C193.6 485.3 192.1 482.7 191.5 479.7C190.9 476.7 191.2 473.7 192.4 470.9C193.6 468.1 195.5 465.7 198 464.1C200.5 462.5 203.4 461.5 206.5 461.5L207 461.5C211 461.6 214.7 463.3 217.5 466.1C220.3 468.9 221.8 472.8 221.8 476.7L221.9 476.7zM133.6 298.2L166.4 283.6C168.1 282.9 169.6 281.8 170.8 280.5C172 279.2 173 277.6 173.7 275.9C174.4 274.2 174.7 272.4 174.6 270.6C174.5 268.8 174.1 267 173.4 265.3L166.6 250.1L193.2 250.1L193.2 369.8L139.6 369.8C133 346.6 130.9 322.2 133.5 298.2zM122.3 262.1C122.3 260.1 122.7 258.1 123.5 256.3C124.3 254.5 125.4 252.8 126.8 251.4C128.2 250 129.9 248.9 131.7 248.1C133.5 247.3 135.5 246.9 137.5 246.9L138 246.9C141 247 143.9 247.9 146.3 249.7C148.7 251.5 150.6 253.8 151.7 256.6C152.8 259.4 153 262.4 152.4 265.4C151.8 268.4 150.3 271 148.1 273.1C145.9 275.2 143.2 276.6 140.3 277.2C137.4 277.8 134.3 277.4 131.6 276.3C128.9 275.2 126.5 273.2 124.8 270.7C123.1 268.2 122.3 265.3 122.3 262.3L122.3 262.3zM277.5 286.6L277.5 251.3L340.8 251.3C344.1 251.3 363.9 255.1 363.9 269.9C363.9 282.2 348.7 286.6 336.2 286.6L277.5 286.6zM463 370.7C453.2 371.8 442.4 366.6 441 360.6C435.2 328.1 425.6 321.2 410.4 309.2C429.3 297.2 448.9 279.6 448.9 255.9C448.9 230.4 431.4 214.3 419.5 206.4C402.7 195.4 384.2 193.2 379.2 193.2L180.3 193.2C207.8 162.5 244.7 141.7 285.2 134L308.7 158.6C310 159.9 311.5 161 313.1 161.7C314.7 162.4 316.6 162.8 318.4 162.9C320.2 163 322 162.6 323.7 162C325.4 161.4 326.9 160.3 328.3 159.1L354.6 134.1C381.4 139.1 406.7 149.9 428.9 165.7C451.1 181.5 469.5 201.9 483 225.6L465 266.2C463.5 269.6 463.5 273.4 464.8 276.8C466.1 280.2 468.7 283 472.1 284.5L506.7 299.8C507.8 310.6 507.9 321.5 507.1 332.3L487.8 332.3C485.9 332.3 485.1 333.6 485.1 335.4L485.1 344.2C485.1 365 473.4 369.5 463.1 370.7zM304 124.2C304 120.2 305.6 116.3 308.5 113.5C311.4 110.7 315.2 109 319.2 109L319.6 109C322.6 109.1 325.5 110 328 111.8C330.5 113.6 332.3 115.9 333.4 118.7C334.5 121.5 334.7 124.5 334.1 127.5C333.5 130.5 332 133.1 329.8 135.2C327.6 137.3 324.9 138.7 322 139.2C319.1 139.7 316 139.4 313.3 138.3C310.6 137.2 308.2 135.2 306.5 132.7C304.8 130.2 304 127.3 304 124.3zM500.8 278C498.8 278 496.8 277.6 495 276.8C493.2 276 491.5 274.9 490.1 273.5C488.7 272.1 487.6 270.4 486.8 268.6C486 266.8 485.6 264.8 485.6 262.8C485.6 260.8 486 258.8 486.8 257C487.6 255.2 488.7 253.5 490.1 252.1C491.5 250.7 493.2 249.6 495 248.8C496.8 248 498.8 247.6 500.8 247.6L501.2 247.6C505.2 247.7 509.1 249.3 511.9 252.2C514.7 255.1 516.3 259 516.2 263C516.1 267 514.5 270.9 511.6 273.7C508.7 276.5 504.8 278.1 500.8 278z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M316.3 516C314.2 516 312.1 515.4 310.2 514.4L291 503C288.1 501.4 289.5 500.8 290.5 500.5C294.3 499.2 295.1 498.9 299.2 496.5C299.6 496.3 300.2 496.4 300.6 496.6L315.4 505.4C315.9 505.7 316.7 505.7 317.2 505.4L375 472C375.5 471.7 375.9 471.1 375.9 470.4L375.9 403.7C375.9 403 375.6 402.4 375 402.1L317.2 368.8C316.7 368.5 316 368.5 315.4 368.8L257.6 402.1C257 402.4 256.7 403.1 256.7 403.7L256.7 470.4C256.7 471 257.1 471.6 257.6 471.9L273.4 481C282 485.3 287.3 480.2 287.3 475.2L287.3 409.3C287.3 408.4 288 407.6 289 407.6L296.3 407.6C297.2 407.6 298 408.3 298 409.3L298 475.2C298 486.7 291.8 493.2 280.9 493.2C277.6 493.2 274.9 493.2 267.6 489.6L252.4 480.9C248.7 478.7 246.3 474.7 246.3 470.4L246.3 403.7C246.3 399.4 248.6 395.3 252.4 393.2L310.2 359.8C313.9 357.7 318.7 357.7 322.3 359.8L380.1 393.2C383.8 395.4 386.2 399.4 386.2 403.7L386.2 470.4C386.2 474.7 383.9 478.8 380.1 480.9L322.3 514.3C320.6 515.4 318.5 516 316.3 516zM363 450.2C363 437.7 354.6 434.4 336.8 432C318.8 429.6 317 428.4 317 424.2C317 420.7 318.5 416.1 331.8 416.1C343.7 416.1 348.1 418.7 349.9 426.7C350.1 427.5 350.7 428 351.5 428L359 428C359.5 428 359.9 427.8 360.2 427.5C360.5 427.1 360.7 426.7 360.6 426.2C359.4 412.4 350.3 406 331.8 406C315.3 406 305.5 413 305.5 424.6C305.5 437.3 315.3 440.7 331.1 442.3C350 444.2 351.5 446.9 351.5 450.6C351.5 457.1 346.3 459.8 334.1 459.8C318.8 459.8 315.4 456 314.3 448.4C314.2 447.6 313.5 447 312.6 447L305.1 447C304.2 447 303.4 447.7 303.4 448.7C303.4 458.4 308.7 470 334 470C352.5 470 363 462.8 363 450.2zM417.5 400.1C417.5 406.2 412.5 411.2 406.4 411.2C400.3 411.2 395.3 406.2 395.3 400.1C395.3 393.8 400.5 389 406.4 389C412.4 388.9 417.5 393.8 417.5 400.1zM415.7 400.1C415.7 394.9 411.5 390.8 406.3 390.8C401.2 390.8 397 394.9 397 400.1C397 405.3 401.2 409.5 406.3 409.5C411.5 409.4 415.7 405.2 415.7 400.1zM411.2 406.3L408.6 406.3C408.5 405.7 408.1 402.5 408.1 402.4C407.9 401.7 407.7 401.3 406.8 401.3L404.6 401.3L404.6 406.3L402.2 406.3L402.2 393.8L406.5 393.8C408 393.8 410.9 393.8 410.9 397.1C410.9 399.4 409.4 399.9 408.5 400.2C410.2 400.3 410.3 401.4 410.6 403C410.7 404 410.9 405.7 411.2 406.3zM408.4 397.5C408.4 395.8 407.2 395.8 406.6 395.8L404.6 395.8L404.6 399.3L406.5 399.3C408.1 399.3 408.4 398.2 408.4 397.5zM137.3 255C137.3 252.3 135.9 249.9 133.6 248.6L72.3 213.3C71.3 212.7 70.1 212.4 68.9 212.3L68.3 212.3C67.1 212.3 66 212.7 64.9 213.3L3.7 248.6C1.4 249.9 0 252.4 0 255L.1 350C.1 351.3 .8 352.5 1.9 353.2C3 353.9 4.4 353.9 5.6 353.2L42 332.3C44.3 330.9 45.7 328.5 45.7 325.9L45.7 281.5C45.7 278.9 47.1 276.4 49.4 275.1L64.9 266.2C66.1 265.5 67.3 265.2 68.6 265.2C69.9 265.2 71.2 265.5 72.3 266.2L87.8 275.1C90.1 276.4 91.5 278.9 91.5 281.5L91.5 325.9C91.5 328.5 92.9 331 95.2 332.3L131.6 353.2C132.7 353.9 134.2 353.9 135.3 353.2C136.4 352.6 137.1 351.3 137.1 350L137.3 255zM472.5 151.3L472.5 327.7C472.5 330.3 471.1 332.8 468.8 334.1L407.5 369.5C405.2 370.8 402.4 370.8 400.1 369.5L338.8 334.1C336.5 332.8 335.1 330.3 335.1 327.7L335.1 256.9C335.1 254.3 336.5 251.8 338.8 250.5L400.1 215.1C402.4 213.8 405.2 213.8 407.5 215.1L422.8 223.9C424.5 224.9 426.7 223.6 426.7 221.7L426.7 127.7C426.7 124.9 429.7 123.1 432.2 124.5L468.7 144.9C471 146.1 472.5 148.6 472.5 151.3zM426.5 280.2C426.5 279.5 426.1 278.9 425.6 278.6L404.6 266.4C404 266.1 403.3 266.1 402.7 266.4L381.7 278.6C381.1 278.9 380.8 279.5 380.8 280.2L380.8 304.5C380.8 305.2 381.2 305.8 381.7 306.1L402.7 318.2C403.3 318.5 404 318.5 404.5 318.2L425.5 306.1C426.1 305.8 426.4 305.2 426.4 304.5L426.4 280.2L426.5 280.2zM636.3 279.5C638.6 278.2 640 275.7 640 273.1L640 256C640 253.4 638.6 250.9 636.3 249.6L575.4 214.2C573.1 212.9 570.3 212.9 568 214.2L506.7 249.6C504.4 250.9 503 253.4 503 256L503 326.8C503 329.5 504.4 331.9 506.7 333.2L567.6 367.9C569.8 369.2 572.6 369.2 574.9 367.9L611.7 347.4C614.2 346 614.2 342.4 611.7 341L550 305.6C548.8 304.9 548.1 303.7 548.1 302.4L548.1 280.2C548.1 278.9 548.8 277.7 550 277L569.2 265.9C570.3 265.2 571.8 265.2 572.9 265.9L592.1 277C593.2 277.7 594 278.9 594 280.2L594 297.6C594 300.4 597.1 302.2 599.6 300.8L636.3 279.5zM559 283C558.6 283.3 558.3 283.7 558.3 284.2L558.3 297.8C558.3 298.3 558.6 298.8 559 299L570.8 305.8C571.2 306.1 571.8 306.1 572.2 305.8L584 299C584.4 298.7 584.7 298.3 584.7 297.8L584.7 284.2C584.7 283.7 584.4 283.2 584 283L572.2 276.2C571.8 275.9 571.2 275.9 570.8 276.2L559 283zM304.8 326.5L304.8 256.1C304.8 253.5 303.2 251 300.9 249.7L239.8 214.5C237.7 213.3 234.8 213.1 232.4 214.5L171.3 249.7C169 251 167.4 253.4 167.4 256.1L167.4 326.5C167.4 329.3 169.3 331.7 171.4 332.9L232.6 368.1C235 369.5 237.8 369.4 240 368.1L301 332.9C302.8 331.9 304.1 330.2 304.6 328.2C304.7 327.7 304.8 327.1 304.8 326.5zM230.5 201.6L229.7 202.1L230.8 202.1L230.5 201.6zM306.7 331.8L306.3 331.1L306.3 332L306.7 331.8z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M283.8 235.3C287.7 235.8 296.9 238 296.1 243.8C295.3 249.7 286.9 252.9 281.9 252.2C277.2 251.5 268.7 246.1 269.6 240.1L269.9 238C274.1 238 278.2 234.5 283.8 235.3zM451.9 231.9C462.7 234.5 450.8 245.4 445.1 246.2C440.8 246.8 433 244 432.3 238.8C431.3 231.4 448 230.9 452 231.9zM429.9 91.1C465.6 90.8 511.2 100.5 544.2 142.8C551.4 152 554.2 166.8 553.9 183.7C553.1 233.3 527.9 313.1 483.2 381.1C487.7 384 500.8 388.5 534.3 381.6C539.9 380.4 547 379.4 551.9 383.2C570.1 397.1 532.3 418.3 523.5 422.4C510.3 428.6 488.7 431.9 472.3 431.1C470.2 430.9 468 430.9 466 430.5C460.9 429.4 458.6 429.5 457.7 429.8C456.6 430.1 456.3 432.7 456.1 433.6C453.3 458.5 448.4 498.3 445.4 515.6C442.6 531.9 437.7 544.9 428.2 554.8C418.7 564.7 405.4 570.5 387.6 574.3C365.3 579.1 349.7 574.2 338.9 565.2C328.6 556.5 323.7 544.8 320.9 537.8C319.1 533.3 317.9 526.3 316.9 518C314.6 498.2 313.6 467.6 313.9 434.7C289.3 456.8 258.9 451.9 245.7 448.6C235.2 446 212.7 432.5 228.2 419.9C240.1 410.2 258.5 414.4 270.4 404.9C272.8 403 281.8 394.3 281.8 391.4C271.8 391.1 262.2 388.5 253.7 383.9C240.2 398.4 227.3 413.4 214.4 428.5C206.1 438.4 197 444.3 187 444.7C177.1 445.1 168.3 440.1 160.9 432.9C153.6 425.8 146.8 415.7 140.5 403.9C121.5 368.4 107.3 317.8 98.2 277.5C92.2 250.8 88.6 228.4 88.1 218.5C85.9 174.2 96.1 144.4 114.1 125.3C132 106.3 156.5 99.3 180.2 97.9C215.8 95.9 251.2 106.4 266.8 111.7L271.8 113.5C287.7 102.7 307.9 96.1 333.5 96.5C346.7 96.7 359 98.7 370.2 100.7C388.8 93.6 410 91.2 429.6 91zM333.9 111.6C309.2 111.2 291 118.1 277.3 128.4C276.5 129 275.5 129.4 274.5 129.6C260.1 141.4 250.6 157.6 244.2 174.4C237 193.5 234.2 212.9 233.1 225.9C240.7 221.6 251 217.2 261.8 214.7C272.3 212.3 284.2 211.5 294.5 215.5C305.4 219.7 313.5 228.8 316.7 243.6C324.2 278.3 323.4 301.8 319.4 319.5C314.6 340.5 302.6 359 297.5 379.9C301 379 304.6 379.3 307.3 380L314.5 382.9C322.2 387.3 327.3 395.9 328.5 404.6C330.5 410.6 328.6 418.9 328.5 425.2C335.2 441.5 335.7 461.3 335.2 478.5C334.5 503.5 334.2 518.7 338.4 530.2C341.3 538.1 343.1 546.6 348.8 553C351.4 556 354.9 558.5 359.7 559.8C378.2 564.9 403.7 555.1 416.3 541.6C424 533.4 428.6 522.3 429.7 507.7C430.8 494.1 433.9 480.1 436 466.6L438.9 457.8C440.6 443 442.3 428.2 443.9 413.4C443.5 404.3 444.8 397.3 447.8 391.9C450.9 386.2 455.4 383 459.6 381.1C461.4 380.3 463.5 379.9 465.2 379.1C463.6 376.7 461.6 374.5 459.9 372.3C451.7 361.9 446.6 350 440.2 338.5C431.7 323.3 416.4 296.3 410.1 271C406 254.6 405.2 236.5 416.1 224C425.9 212.8 443 208.5 468 211C464.6 201 456.6 183.5 443.2 166.3C425.2 143.3 397.5 120.4 357.5 113.2C350.2 112.3 342.3 111.7 333.9 111.5zM301.7 393.6C293.7 394.3 286.2 411.8 280 416.7C273.8 421.6 265.5 424.3 250 427.4C245.5 428.3 242.3 429.3 240.3 430.2C262.6 446 298.6 433.4 312.9 413.4C314.6 411 315 407.4 313.4 403.2C311.7 398.7 307 393.1 301.5 393.6zM181.6 113.2C160 114.4 139.6 120.7 125.2 136C110.8 151.2 101 176.6 103.1 218.5C103.5 227 106.9 248.5 112.9 275.1C121.8 314.9 136.6 365.4 153.5 397.3C159.5 408.4 170.9 430.3 186.3 429.6C190.7 429.4 196.4 426.8 203.3 418.6C215.9 403.8 228.5 389.1 241.8 374.9C223.9 359.5 213.3 334.6 217 307.7C220.4 283.4 217.5 259.5 218.2 235.2C218.6 223.3 220.5 196.5 230.8 169.4C236.7 153.9 245.3 138.1 258.2 125.2C241.8 119.8 211.1 111.7 181.6 113.3zM469.1 392.9C465.3 394 462.4 395.1 460.4 398.7C459.1 401.1 457.9 405.4 458.2 412.9C463 416.8 472.3 416.2 478 416.1C491.9 415.9 507.9 413 517.3 408.6C525.2 404.9 532 400.3 536.3 396.4C498.1 404.1 480.9 398.5 473.1 391.6C471.8 392 470.2 392.5 469.2 392.8zM289.3 228.9C273.9 223 253.9 230.7 240.4 238.3C236.8 240.3 233.9 242.3 232.5 243.5C232.9 252.3 235.3 279.6 231.1 309.8C226 346.4 252.8 376.4 283.6 376.5C288.7 355.7 300.6 337.3 305.4 316.4C308.9 301.1 309.9 279.8 302.7 246.7C300.4 236.2 295.3 231.3 289.3 229zM434.1 106.2C418.9 106 405.3 107.9 394.9 110C420.9 121.8 440.5 139.7 454.5 157.6C471.9 179.8 480.8 201.7 483.5 212.6C484.2 215.3 484.8 218.3 484 221C484.6 239.9 480 252.3 479.4 270.2C479 283.1 482.3 298.3 483.1 314.9C483.9 330.6 482.1 347.4 471.9 364.4C472.7 365.4 473.5 366.5 474.3 367.5C501.1 325.3 520.3 278.9 530.6 239C536.1 217.6 539 198.3 539.3 182.9C539.5 167.7 537.3 157.5 533.5 152.5C505.2 116.4 466.7 106.7 434.2 106.3zM469.7 225.7C444.4 222.5 432.4 227.2 426.9 233.4C420.9 240.2 420.1 251.9 424 267.5C429.7 290.1 444.1 316.1 452.7 331.5C456.3 337.9 459.1 344.6 462.7 350.9C468.2 339.2 469.3 327.4 468.7 315.4C468 300.4 464.5 285.1 465 269.6L465.4 262.2C466.6 247.9 469.5 237.6 469.6 225.7z"
									/></svg
								>
							</div>
						</div>
					</div>

					<div
						class="grid h-fit w-full grid-cols-[200px_1fr] items-center justify-start gap-5 border-t-2 border-b-2 border-[#ffffff30] py-7 max-sm:grid-cols-1"
					>
						<div class="h-fit w-full">
							<h1 class="font-space text-[30px] font-semibold text-[#ffffff]">ALAT</h1>
							<p class="mt-1 font-space text-[13px] tracking-widest text-[#ffffff99]">
								// ALAT PENGEMBANGAN
							</p>
						</div>

						<div class="flex h-fit w-full flex-wrap items-center justify-start gap-5">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M320 400C364.2 400 400 364.2 400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400zM476.8 352C462 425 397.4 480 320 480C242.6 480 178 425 163.2 352L64 352C46.3 352 32 337.7 32 320C32 302.3 46.3 288 64 288L163.2 288C178 215 242.6 160 320 160C397.4 160 462 215 476.8 288L576 288C593.7 288 608 302.3 608 320C608 337.7 593.7 352 576 352L476.8 352z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M535.6 300.1L340 104.5C334.6 99 327.2 96 319.6 96C312 96 304.6 99 299.2 104.4L258.5 145L310 196.5C337.1 187.4 362.7 213.3 353.4 240.2L403.1 289.9C437.3 278.1 464.3 320.9 438.6 346.6C412.1 373.1 368.4 343.7 382.6 309.3L336.3 263L336.3 384.9C361.6 397.4 358.6 426.7 345.4 439.9C339 446.3 330.2 450 321.1 450C312 450 303.3 446.4 296.8 439.9C279.2 422.3 285.7 393 308 383.9L308 260.9C287.2 252.4 283.4 230.2 289.4 215.9L238.6 165L104.5 299.1C99 304.6 96 311.9 96 319.5C96 327.1 99 334.5 104.5 339.9L300.1 535.6C305.5 541 312.8 544 320.5 544C328.2 544 335.5 541 340.9 535.6L535.6 340.9C541 335.5 544 328.1 544 320.5C544 312.9 541 305.5 535.6 300.1z"
									/></svg
								>
							</div>

							<div
								class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#ffffff50] bg-transparent"
							>
								<svg
									class="w-5.5 fill-[#ffffff70]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
										d="M349.9 300.3L283.8 300.3L283.8 240.9L349.9 240.9L349.9 300.3zM349.9 96L283.8 96L283.8 156.7L349.9 156.7L349.9 96zM428.1 240.8L362 240.8L362 300.2L428.1 300.2L428.1 240.8zM271.8 168.7L205.7 168.7L205.7 228.8L271.8 228.8L271.8 168.7zM349.9 168.7L283.8 168.7L283.8 228.8L349.9 228.8L349.9 168.7zM626.7 268.7C612.3 259 579.1 255.5 553.6 260.3C550.3 236.3 536.9 215.4 512.5 196.6L498.5 187.3L489.2 201.3C470.8 229.1 465.8 274.9 485.5 305.1C476.8 309.8 459.7 316.2 437.1 315.8L2.4 315.8C-6.3 366.6 8.2 432.6 46.4 477.9C83.5 521.8 139.1 544.1 211.8 544.1C369.2 544.1 485.7 471.6 540.2 339.9C561.6 340.3 607.8 340 631.5 294.7C633 292.2 638.1 281.5 640 277.6L626.7 268.7zM115.6 240.8L49.6 240.8L49.6 300.2L115.7 300.2L115.7 240.8L115.6 240.8zM193.7 240.8L127.6 240.8L127.6 300.2L193.7 300.2L193.7 240.8zM271.8 240.8L205.7 240.8L205.7 300.2L271.8 300.2L271.8 240.8zM193.7 168.7L127.6 168.7L127.6 228.8L193.7 228.8L193.7 168.7z"
									/></svg
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="skill" class="h-fit w-full bg-[#FAF9F6]">
		<div class="mx-auto h-fit max-h-full w-full max-w-330 px-13 py-13 max-sm:px-7.5">
			<div
				class="flex h-fit w-full items-center justify-center gap-2 font-space text-[13px] font-semibold"
			>
				<hr class="mr-10 h-px w-full border border-[#00000010]" />
				5.<span class="tracking-widest text-[#00000099]">SKILL</span>
				<hr class="ml-10 h-px w-full border border-[#00000010]" />
			</div>

			<div class="flex h-fit w-full items-center justify-center">
				<h1
					class="mt-15 h-fit w-full text-center font-space text-[100px] leading-25 font-bold text-[#000000] max-sm:text-[60px] max-sm:leading-15"
				>
					DEV<br /><span class="text-[#00000080]">SKILL</span>
				</h1>
			</div>

			<div class="mt-20 grid h-fit w-full grid-cols-4 max-sm:mt-15 max-sm:grid-cols-1">
				<div
					class="broder-[#000000] relative flex h-auto w-full flex-col items-start justify-start border-2 p-6"
				>
					<p
						class="absolute top-6 left-6 font-space text-[12px] font-bold tracking-widest text-[#000000]"
					>
						01
					</p>

					<svg
						class="absolute top-6 right-6 w-5 fill-[#000000]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
							d="M128 96C92.7 96 64 124.7 64 160L64 400L128 400L128 160L512 160L512 400L576 400L576 160C576 124.7 547.3 96 512 96L128 96zM19.2 448C8.6 448 0 456.6 0 467.2C0 509.6 34.4 544 76.8 544L563.2 544C605.6 544 640 509.6 640 467.2C640 456.6 631.4 448 620.8 448L19.2 448z"
						/></svg
					>

					<h3 class="mt-10 font-space text-[25px] leading-6.25 font-bold">
						Frontend<br />Developer
					</h3>

					<p class="mt-4 h-fit w-full border-l-2 border-[#000000] pl-3 font-space text-[15px]">
						Svelte KIT, NodeJS, Tailwind CSS untuk membuat UI simpel dan interaktif.
					</p>
				</div>

				<div
					class="broder-[#000000] relative flex h-auto w-full flex-col items-start justify-start border-2 p-6"
				>
					<p
						class="absolute top-6 left-6 font-space text-[12px] font-bold tracking-widest text-[#000000]"
					>
						02
					</p>

					<svg
						class="absolute top-6 right-6 w-5 fill-[#000000]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
							d="M128 96C92.7 96 64 124.7 64 160L64 400L128 400L128 160L512 160L512 400L576 400L576 160C576 124.7 547.3 96 512 96L128 96zM19.2 448C8.6 448 0 456.6 0 467.2C0 509.6 34.4 544 76.8 544L563.2 544C605.6 544 640 509.6 640 467.2C640 456.6 631.4 448 620.8 448L19.2 448z"
						/></svg
					>

					<h3 class="mt-10 font-space text-[25px] leading-6.25 font-bold">
						Backend<br />Developer
					</h3>

					<p class="mt-4 h-fit w-full border-l-2 border-[#000000] pl-3 font-space text-[15px]">
						Rust, NodeJS, Postgres SQL untuk menciptakan fitur sederhana dan simpel.
					</p>
				</div>

				<div
					class="broder-[#000000] relative flex h-auto w-full flex-col items-start justify-start border-2 p-6"
				>
					<p
						class="absolute top-6 left-6 font-space text-[12px] font-bold tracking-widest text-[#000000]"
					>
						03
					</p>

					<svg
						class="absolute top-6 right-6 w-5 fill-[#000000]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
							d="M128 96C92.7 96 64 124.7 64 160L64 400L128 400L128 160L512 160L512 400L576 400L576 160C576 124.7 547.3 96 512 96L128 96zM19.2 448C8.6 448 0 456.6 0 467.2C0 509.6 34.4 544 76.8 544L563.2 544C605.6 544 640 509.6 640 467.2C640 456.6 631.4 448 620.8 448L19.2 448z"
						/></svg
					>

					<h3 class="mt-10 font-space text-[25px] leading-6.25 font-bold">
						Artificial<br />Intelligence
					</h3>

					<p class="mt-4 h-fit w-full border-l-2 border-[#000000] pl-3 font-space text-[15px]">
						Memahami penggunaan AI untuk kebutuhan proyek yang ingin WNX buat.
					</p>
				</div>

				<div
					class="broder-[#000000] relative flex h-auto w-full flex-col items-start justify-start border-2 p-6"
				>
					<p
						class="absolute top-6 left-6 font-space text-[12px] font-bold tracking-widest text-[#000000]"
					>
						04
					</p>

					<svg
						class="absolute top-6 right-6 w-5 fill-[#000000]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
							d="M128 96C92.7 96 64 124.7 64 160L64 400L128 400L128 160L512 160L512 400L576 400L576 160C576 124.7 547.3 96 512 96L128 96zM19.2 448C8.6 448 0 456.6 0 467.2C0 509.6 34.4 544 76.8 544L563.2 544C605.6 544 640 509.6 640 467.2C640 456.6 631.4 448 620.8 448L19.2 448z"
						/></svg
					>

					<h3 class="mt-10 font-space text-[25px] leading-6.25 font-bold">
						Hardware<br />Arduino
					</h3>

					<p class="mt-4 h-fit w-full border-l-2 border-[#000000] pl-3 font-space text-[15px]">
						Arduino IDE C++, Atmega 328P untuk membuat proyek hardware nyata.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="h-fit w-full bg-[#000000]">
		<div
			class="mx-auto grid h-fit max-h-full w-full max-w-330 grid-cols-2 px-13 py-13 max-sm:grid-cols-1 max-sm:gap-10 max-sm:px-7.5"
		>
			<h1
				class="h-fit w-full font-space text-[100px] leading-25 font-bold text-[#ffffff] max-sm:text-[60px] max-sm:leading-15"
			>
				LET`S<br /><span class="text-[#A3E635]">CONNECT</span>
			</h1>

			<div class="flex h-fit w-full flex-col items-start justify-start">
				<p class="border-l-2 border-[#A3E635] pl-3 font-space text-[12px] text-[#ffffff80]">
					CONNECT
				</p>

				<button
					onclick={() => {
						window.location.href = 'https://wa.me/6282331656027';
					}}
					class="mt-5 w-30 cursor-pointer border-2 border-[#ffffff40] bg-transparent px-6 py-2 text-left font-space text-[14px] text-[#ffffff]"
					>Whatsapp</button
				>

				<button
					onclick={() => {
						window.location.href = 'https://discordapp.com/users/1366348108438700092';
					}}
					class="mt-3 w-30 cursor-pointer border-2 border-[#ffffff40] bg-transparent px-6 py-2 text-left font-space text-[14px] text-[#ffffff]"
					>Discord</button
				>

				<button
					onclick={() => {
						window.location.href = 'mailto:adityaparama119@gmail.com';
					}}
					class="mt-3 w-30 cursor-pointer border-2 border-[#ffffff40] bg-transparent px-6 py-2 text-left font-space text-[14px] text-[#ffffff]"
					>Email</button
				>
			</div>
		</div>

		<div class="mx-auto grid h-fit max-h-full w-full max-w-330 px-13 pb-13">
			<div
				class="flex h-fit w-fit flex-row items-center justify-start gap-7 border-t-2 border-[#A3E635] pt-3"
			>
				<p class="font-space text-[17px] leading-5 font-bold text-[#ffffff]">
					Dari<br />komunitas
				</p>
				<img class="w-20" src="https://imphnen.dev/logo.webp" alt="imphnen" />
			</div>
		</div>
	</div>
</main>

<!--MENUMOBILE-->
{#if openmenuMobile}
	<div class="bbgbbg fixed top-0 left-0 z-3000 h-screen w-full p-7.5">
		<div class="flex h-10 w-full flex-row items-center justify-end">
			<button
				onclick={() => {
					openmenuMobile = false;
				}}
				class="absolute right-7.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#000000] bg-[#FAF9F6]"
			>
				<svg class="w-4 fill-[#000000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
					/></svg
				></button
			>
		</div>

		<div class="relative mt-10 h-fit w-full border-b border-[#ffffff50] pb-3">
			<p class="font-space text-[13px] font-semibold text-[#ffffff70]">NAVIGASI MOBILE</p>
		</div>

		<button
			onclick={() => {
				openmenuMobile = false;
				lenisStore.instance?.start();
				lenisStore.instance?.scrollTo('#tentang', { offset: -100 });
			}}
			class="relative mt-10 flex w-full cursor-pointer flex-row items-center justify-start border-b border-[#ffffff50] pb-3"
		>
			<p class="font-space text-[12px] text-[#ffffff70]">01</p>
			<p class="ml-5 font-space text-[20px] font-semibold text-[#ffffff]">TENTANG</p>

			<div
				class="absolute right-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#ffffff70] bg-transparent"
			>
				<svg
					class="w-4 rotate-45 fill-[#ffffff]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"
					/></svg
				>
			</div>
		</button>

		<button
			onclick={() => {
				openmenuMobile = false;
				lenisStore.instance?.start();
				lenisStore.instance?.scrollTo('#proyek', { offset: -100 });
			}}
			class="relative mt-5 flex w-full cursor-pointer flex-row items-center justify-start border-b border-[#ffffff50] pb-3"
		>
			<p class="font-space text-[12px] text-[#ffffff70]">02</p>
			<p class="ml-5 font-space text-[20px] font-semibold text-[#ffffff]">PROYEK</p>

			<div
				class="absolute right-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#ffffff70] bg-transparent"
			>
				<svg
					class="w-4 rotate-45 fill-[#ffffff]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"
					/></svg
				>
			</div>
		</button>

		<button
			onclick={() => {
				openmenuMobile = false;
				lenisStore.instance?.start();
				lenisStore.instance?.scrollTo('#sertifikat', { offset: -100 });
			}}
			class="relative mt-5 flex w-full cursor-pointer flex-row items-center justify-start border-b border-[#ffffff50] pb-3"
		>
			<p class="font-space text-[12px] text-[#ffffff70]">03</p>
			<p class="ml-5 font-space text-[20px] font-semibold text-[#ffffff]">SERTIFIKAT</p>

			<div
				class="absolute right-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#ffffff70] bg-transparent"
			>
				<svg
					class="w-4 rotate-45 fill-[#ffffff]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"
					/></svg
				>
			</div>
		</button>

		<button
			onclick={() => {
				openmenuMobile = false;
				lenisStore.instance?.start();
				lenisStore.instance?.scrollTo('#stack', { offset: -100 });
			}}
			class="relative mt-5 flex w-full cursor-pointer flex-row items-center justify-start border-b border-[#ffffff50] pb-3"
		>
			<p class="font-space text-[12px] text-[#ffffff70]">04</p>
			<p class="ml-5 font-space text-[20px] font-semibold text-[#ffffff]">STACK</p>

			<div
				class="absolute right-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#ffffff70] bg-transparent"
			>
				<svg
					class="w-4 rotate-45 fill-[#ffffff]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"
					/></svg
				>
			</div>
		</button>

		<button
			onclick={() => {
				openmenuMobile = false;
				lenisStore.instance?.start();
				lenisStore.instance?.scrollTo('#skill', { offset: -100 });
			}}
			class="relative mt-5 flex w-full cursor-pointer flex-row items-center justify-start border-b border-[#ffffff50] pb-3"
		>
			<p class="font-space text-[12px] text-[#ffffff70]">05</p>
			<p class="ml-5 font-space text-[20px] font-semibold text-[#ffffff]">SKILL</p>

			<div
				class="absolute right-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#ffffff70] bg-transparent"
			>
				<svg
					class="w-4 rotate-45 fill-[#ffffff]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
						d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"
					/></svg
				>
			</div>
		</button>

		<button
			onclick={() => {
				window.location.href = 'https://wa.me/6282331656027';
			}}
			class="mt-10 h-10 w-full cursor-pointer bg-[#ffffff] font-space text-[15px] font-semibold text-[#000000]"
			>Mulai bertanya</button
		>
	</div>
{/if}
<!--MENUMOBILE-->

<!-- MAIN MENU BESAR -->
{#if showModal && isidata}
	{@const data = isidata}
	<div
		class="bbgbbg fixed top-0 left-0 z-2000 flex h-screen w-full items-center justify-center p-10 max-sm:p-0"
	>
		<div class="mx-auto h-full max-h-full w-full max-w-330">
			<div
				data-lenis-prevent
				class="relative h-full max-h-[calc(100vh-5rem)] w-full scrollbar-none overflow-x-hidden overflow-y-auto rounded-[20px] bg-[#FAF9F6] p-15 [-ms-overflow-style:none] max-sm:max-h-full! max-sm:rounded-none max-sm:p-7.5 [&::-webkit-scrollbar]:hidden"
			>
				<button
					onclick={() => (showModal = false)}
					class="absolute top-10 right-10 flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border border-[#00000020] bg-[#ffffff] px-5 py-2 font-space text-[13px] font-semibold text-[#000000]"
					><svg
						class="w-4 -rotate-180 fill-[#000000]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><path
							d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
						/></svg
					>TUTUP
				</button>

				<div class="mt-20 flex h-fit w-full flex-col items-center justify-start">
					<!-- INFO AWAL -->
					<p class="w-full text-center font-space text-[12px] font-semibold text-[#00000050]">
						{data.infoawal}
					</p>

					<!-- JUDUL -->
					<h1
						class="mt-5 w-full text-center font-space text-[85px] leading-21.25 font-semibold text-[#000000] max-sm:text-[40px] max-sm:leading-11.25"
					>
						{data.judul.split(' ')[0]}
						{#if data.judul.split(' ').length > 1}
							<br />
							<span class="text-transparent [-webkit-text-stroke:2px_#000000]">
								{data.judul.split(' ').slice(1).join(' ')}
							</span>
						{/if}
					</h1>

					<!-- DESKRIPSI -->
					<p
						class="mt-5 w-full max-w-170 text-center font-space text-[20px] leading-7 font-normal text-[#00000099] max-sm:text-[17px]"
					>
						{data.deskripsi}
					</p>

					<!-- LINK -->
					<div class="mt-10 flex h-fit w-full items-center justify-center gap-5">
						{#if data.linkweb}
							<button
								onclick={() => window.open(data.linkweb, '_blank', 'noopener,noreferrer')}
								class="cursor-pointer bg-[#A3E635] px-6 py-2 font-space text-[15px] text-[#000000]"
							>
								Lihat
							</button>
						{/if}

						{#if data.linkrepo}
							<button
								onclick={() => window.open(data.linkrepo, '_blank', 'noopener,noreferrer')}
								class="cursor-pointer bg-[#00000099] px-6 py-2 font-space text-[15px] text-[#ffffff]"
							>
								Repositori
							</button>
						{/if}
					</div>

					<hr class="mt-30 mb-15 ml-2.5 h-px w-full border border-[#00000010]" />

					<!-- FITUR & TUJUAN -->
					<div class="grid h-fit w-full grid-cols-2 gap-10 max-sm:grid-cols-1">
						<!-- FITUR -->
						<div class="flex h-fit w-full flex-col items-start justify-start">
							<p class="font-space text-[13px] font-semibold tracking-widest text-[#00000050]">
								FITUR
							</p>

							<div class="mt-10 flex h-fit w-full flex-col items-start justify-start gap-2.5">
								{#each data.fitur as item, i (i)}
									<div
										class="grid h-fit w-full grid-cols-[10px_1fr] items-start justify-start gap-3"
									>
										<svg
											class="mt-1 w-2.5 shrink-0 fill-[#A3E635]"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 640 640"
										>
											<path
												d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
											/>
										</svg>

										<p class="font-space text-[15px] text-[#000000]">
											{item}
										</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- TUJUAN -->
						<div class="flex h-fit w-full flex-col items-start justify-start">
							<p class="font-space text-[13px] font-semibold tracking-widest text-[#00000050]">
								TUJUAN
							</p>

							<div class="mt-10 flex h-fit w-full flex-col items-start justify-start gap-2.5">
								{#each data.fungsi as item, i (i)}
									<div
										class="grid h-fit w-full grid-cols-[10px_1fr] items-start justify-start gap-3"
									>
										<svg
											class="mt-1 w-2.5 shrink-0 fill-[#A3E635]"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 640 640"
										>
											<path
												d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
											/>
										</svg>

										<p class="font-space text-[15px] text-[#000000]">
											{item}
										</p>
									</div>
								{/each}
							</div>
						</div>
					</div>

					<hr class="mt-15 mb-15 ml-2.5 h-px w-full border border-[#00000010]" />

					<!-- TECH STACK -->
					<div class="flex h-fit w-full flex-col items-start justify-start">
						<p class="font-space text-[13px] font-semibold tracking-widest text-[#00000050]">
							TECH STACK
						</p>

						<div class="mt-5 flex w-full flex-wrap gap-3">
							{#each data.techstack as tech, i (i)}
								<div
									class="bg-[#00000010] px-5 py-2 font-space text-[12px] font-semibold tracking-widest text-[#000000]"
								>
									{tech}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- MAIN MENU BESAR -->

<style>
	.saeblas {
		background: rgba(255, 255, 255, 0.71);
		backdrop-filter: blur(8.1px);
		-webkit-backdrop-filter: blur(8.1px);
	}

	.bbgbbg {
		background-color: #00000050;
		backdrop-filter: blur(13.5px);
		-webkit-backdrop-filter: blur(13.5px);
	}

	.marquee {
		animation: marquee 50s linear infinite;
	}

	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}

	.marquee2 {
		animation: marquee2 50s linear infinite;
	}

	@keyframes marquee2 {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0%);
		}
	}
</style>
