<div class="py-4 flex flex-col items-center gap-4">
	{#each extensions as extension (extension.link)}
		<a
			href="/extensions/{extension.link}"
			class="
				p-4
				flex
				bg-gray-100
				hover:bg-gray-200
				dark:bg-gray-900
				dark:hover:bg-gray-800
				rounded-3xl
				transition-colors
			"
			rel="noopener noreferrer"
		>
			<div class="max-w-64 md:max-w-2xl flex flex-col md:flex-row gap-2">
				<div class="max-w-64 flex">
					<img alt="ext logo" src={extension.img} class="max-w-full h-auto rounded-2xl" />
				</div>
				<div class="p-4 flex flex-col gap-4">
					<p class="text-xl">{extension.name}</p>
					<p class="text-gray-700 dark:text-gray-300">{extension.description}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<script lang="ts">
import translater_440x280 from '$lib/assets/translater_440x280.png';
import video_converter_440x280 from '$lib/assets/video-converter_440x280.png';

const extensions = [
	{
		name: 'Translater',
		description: 'Translate selected text with Google Translate on all web pages',
		link: 'translater',
		img: translater_440x280,
	},
	{
		name: 'Video Converter',
		// description: 'Convert videos to MP4, MKV, MOV, WEBM, AVI – all locally in your browser. Fast, private, and easy to use. No uploads, no data leaks.',
		description: 'Convert videos to MP4, MKV, MOV, WEBM, AVI – all locally in your browser.',
		link: 'video-converter',
		img: video_converter_440x280,
	},
];
</script>
