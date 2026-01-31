<div class="flex flex-col items-center gap-4 py-4">
	{#each extensions as extension (extension.link)}
		<a
			class="flex rounded-3xl bg-color-surface-container p-4 transition-colors hover:bg-color-surface-high"
			href={resolve(extension.link)}
			rel="noopener noreferrer"
		>
			<div class="flex max-w-64 flex-col gap-2 md:max-w-2xl md:flex-row">
				<div class="flex max-w-64 shrink-0">
					<img class="h-auto max-w-full rounded-2xl" alt="ext logo" src={extension.img} />
				</div>
				<div class="flex flex-col gap-4 p-4">
					<p class="text-xl">{extension.name}</p>
					<p class="text-color-on-surface-variant">{extension.description}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<script lang="ts">
import type { Pathname } from '$app/types';
import { resolve } from '$app/paths';
import translater_440x280 from '$lib/assets/translater_440x280.png';
import video_converter_440x280 from '$lib/assets/video-converter_440x280.png';

interface Extension {
	name: string
	description: string
	link: Pathname
	img: string
}

const extensions: Extension[] = [
	{
		name: 'Translater',
		description: 'Translate selected text with Google Translate on all web pages',
		link: '/extensions/translater',
		img: translater_440x280,
	},
	{
		name: 'Video Converter',
		description: 'Convert videos to MP4, MKV, MOV, WEBM, AVI – all locally in your browser. Fast, private, and easy to use. No uploads, no data leaks.',
		link: '/extensions/video-converter',
		img: video_converter_440x280,
	},
];
</script>
