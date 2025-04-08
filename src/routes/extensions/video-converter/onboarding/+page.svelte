<header class="w-full flex items-center justify-center gap-4">
	<img src={video_converter_96} alt="logo" class="size-12">
	<h1 class="text-3xl">Video Converter</h1>
</header>

<main class="size-full flex flex-col items-center gap-4">
	<p class="flex items-center gap-2 text-2xl">
		<span>Welcome! Pin extension and click the icon</span>
		<img src={video_converter_96} alt="logo" class="size-6">
		<span>to start.</span>
	</p>
	<img src={video_converter_onboarding} alt="onboarding" class="w-4xl rounded-2xl shadow-xl">
</main>

<svelte:head>
	<link rel="icon" type="image/png" href={video_converter_96}>
	<title>Video Converter</title>
</svelte:head>

<script lang="ts">
import video_converter_96 from '$lib/assets/video-converter_96.png';
import video_converter_onboarding from '$lib/assets/video-converter-onboarding.png';
</script>
