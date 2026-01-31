<header class="flex w-full items-center justify-center gap-4">
	<img class="size-12" alt="logo" src={video_converter_96}>
	<h1 class="text-3xl">Video Converter</h1>
</header>

<main class="flex size-full flex-col items-center gap-4">
	<p class="flex items-center gap-2 text-xl">
		<span>Welcome! Pin extension and click the icon</span>
		<img class="size-6" alt="logo" src={video_converter_96}>
		<span>to start.</span>
	</p>
	<img class="w-3xl rounded-xl shadow-xl" alt="onboarding" src={video_converter_onboarding}>
</main>

<svelte:head>
	<link href={video_converter_96} rel="icon" type="image/png">
	<title>Video Converter</title>
</svelte:head>

<script lang="ts">
import video_converter_96 from '$lib/assets/video-converter_96.png';
import video_converter_onboarding from '$lib/assets/video-converter-onboarding.png';
// import video_converter_onboarding_v2 from '$lib/assets/video-converter-onboarding-v2.png';
</script>
