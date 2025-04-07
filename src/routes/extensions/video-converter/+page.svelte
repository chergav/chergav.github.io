<header class="w-full flex flex-col items-center gap-6">
	<nav class="w-full">
		<ul>
			<li>
				<a
					href="/extensions"
					class="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
				>
					<Icon d={mdiArrowLeft} size="20" />
					<span>All extensions</span>
				</a>
			</li>
		  </ul>
	</nav>
	<img src={video_converter_440x280} alt="logo" class="h-44 rounded-3xl">
	<h2 class="text-xl text-center">
		<p>Convert videos to MP4, MKV, MOV, WEBM, AVI – all locally in your browser.</p>
		<p>Fast, private, and easy to use. No uploads, no data leaks.</p>
	</h2>
</header>

<main class="size-full flex flex-col items-center gap-4">
	<div class="flex flex-col md:flex-row items-center gap-1">
		<a href="https://chrome.google.com/webstore/detail/baimnjhjfdpinakbmjajondbamkaaail" target="_blank">
			<img src={chrome_web_store} alt="Chrome web store" class="h-14">
		</a>
	</div>

	<div class="flex flex-col gap-2">
		<a
			href="https://chrome.google.com/webstore/detail/baimnjhjfdpinakbmjajondbamkaaail"
			class="flex items-center gap-1"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img alt="Chrome Web Store Version" src="https://img.shields.io/chrome-web-store/v/baimnjhjfdpinakbmjajondbamkaaail?logo=googlechrome&logoColor=4285F4">
			<img alt="Chrome Web Store Rating" src="https://img.shields.io/chrome-web-store/rating/baimnjhjfdpinakbmjajondbamkaaail">
			<img alt="Chrome Web Store Users" src="https://img.shields.io/chrome-web-store/users/baimnjhjfdpinakbmjajondbamkaaail">
		</a>
	</div>

	<div class="whitespace-pre-line">
		🎬 Video Converter – fast, private, and local!

		Convert your videos directly in Chrome – no uploads, no waiting, no spying.
		Everything happens right on your device, so your files stay private and safe. 🔐

		🎞️ Supported output formats:
		MP4, MKV, MOV, WEBM, AVI – pick the one you need!

		⚙️ Two modes to fit your needs:
		- Fast Mode (Copy) – super quick if your video is already compatible.
		- Full Mode (Transcode) – converts everything for maximum compatibility.
		Don’t worry, the app chooses the best option for you – but you’re always in control.

		🎧 Choose what you keep:
		Want just the video? Remove unwanted audio or subtitle tracks with a click.

		🌗 Light and Dark themes – because your eyes deserve comfort too.

		No internet? No problem. No trackers? Definitely. Just pure, local video magic. 🪄
	</div>
</main>

<svelte:head>
	<link rel="icon" type="image/png" href={video_converter_96}>
	<title>Video Converter</title>
</svelte:head>

<script lang="ts">
import video_converter_96 from '$lib/assets/video-converter_96.png';
import video_converter_440x280 from '$lib/assets/video-converter_440x280.png';
import chrome_web_store from '$lib/assets/chrome-web-store.png';
import Icon from '$lib/components/Icon.svelte';
import { mdiArrowLeft } from '@mdi/js';
</script>
