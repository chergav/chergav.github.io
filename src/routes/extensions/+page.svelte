<header>
	<h1 class="text-2xl">Extensions</h1>
</header>

<main class="size-full flex flex-col items-center">
	<div class="py-4 flex flex-col gap-4">
		{#each extensions as extension (extension.link)}
			<a
				href="/extensions/{extension.link}"
				class="
					flex
					items-center
					gap-2
					hover:underline
				"
				rel="noopener noreferrer"
			>
				<img alt="ext logo" src={extension.img} class="size-12" />
				<span class="text-lg">{extension.name}</span>
			</a>
		{/each}
	</div>
</main>

<svelte:head>
	<title>Extensions</title>
</svelte:head>

<script lang="ts">
import translater_96 from '$lib/assets/translater_96.png';
import video_converter_96 from '$lib/assets/video-converter_96.png';

const extensions = [
	{
		name: 'Translater',
		link: 'translater',
		img: translater_96,
	},
	{
		name: 'Video Converter',
		link: 'video-converter',
		img: video_converter_96,
	},
];
</script>
