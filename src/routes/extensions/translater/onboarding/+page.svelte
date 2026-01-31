<header class="flex w-full items-center justify-center gap-4">
	<img class="size-12" alt="logo" src={translater_96}>
	<h1 class="text-3xl">Translater</h1>
</header>

<main class="flex size-full flex-col items-center gap-10">
	<div class="flex flex-col gap-4">
		<h2 class="text-xl">1. Welcome! Pin the extension to start.</h2>
		<img class="w-3xl rounded-xl shadow-xl" alt="onboarding" src={translater_pin}>
	</div>

	<h2 class="flex w-3xl items-center gap-2 text-xl">
		<span>2. Select text and click</span>
		<img class="size-7 rounded-md" alt="logo" src={translater_button}>
		<span>to translate.</span>
	</h2>

	<div class="flex flex-col gap-4">
		<h2 class="text-xl">
			3. To translate PDFs, select text, right-click, and choose Translater.
			<span class="text-color-on-surface-variant">*</span>
		</h2>
		<img class="w-3xl rounded-xl shadow-xl" alt="onboarding" src={translater_pdf}>
	</div>

	<div class="flex flex-col gap-4">
		<h2 class="text-xl">
			4. To translate local PDFs, enable "Allow access to file URLs":
			<span class="text-color-on-surface-variant">*</span>
		</h2>
		<div class="flex items-center gap-2">
			<button
				class={[
					'rounded-sm px-3 py-1 text-sm transition-colors',
					'bg-color-surface-container hover:bg-color-surface-high active:bg-color-surface-highest',
				]}
				onclick={copyExtensionsUrl}
				title="Copy link"
				type="button"
			>
				chrome://extensions/
			</button>
			<span class="text-sm">-> Translater -> Details</span>
		</div>
		<img class="w-3xl rounded-xl shadow-xl" alt="onboarding" src={translater_allow_urls}>
	</div>

	<p class="text-sm text-color-on-surface-variant">* PDF features may not be available in all browsers.</p>
</main>

<Toaster position="bottom-center" theme="system" />

<svelte:head>
	<link href={translater_96} rel="icon" type="image/png">
	<title>Translater</title>
</svelte:head>

<script lang="ts">
import { Toaster, toast } from 'svelte-sonner';
import translater_96 from '$lib/assets/translater_96.png';
import translater_pin from '$lib/assets/translater-pin.png';
import translater_button from '$lib/assets/translater-button.png';
import translater_pdf from '$lib/assets/translater-pdf.png';
import translater_allow_urls from '$lib/assets/translater-allow-urls.png';

async function copyExtensionsUrl() {
	await navigator.clipboard.writeText('chrome://extensions/');
	toast.success('Link copied');
}
</script>
