<header class="flex w-full flex-col items-center gap-6">
	<img class="h-44 rounded-2xl" alt="logo" src={translator_440x280}>
	<h2 class="text-xl">Translate selected text with Google Translate on all web pages</h2>
</header>

<main class="flex size-full grow flex-col items-center gap-4">
	<div class="flex flex-col items-center gap-1 md:flex-row">
		<a href="https://chrome.google.com/webstore/detail/abebconmjhhbcjofpchjkbbimgkhdmbe" target="_blank">
			<img class="h-14" alt="Chrome web store" src={chrome_web_store}>
		</a>
		<a href="https://microsoftedge.microsoft.com/addons/detail/ohcoejhlajaopflplmckddjcfecgleij" target="_blank">
			<img class="h-14" alt="Microsoft Edge Add-ons" src={edge_add_ons}>
		</a>
		<a href="https://addons.mozilla.org/firefox/addon/translater-gt" target="_blank">
			<img class="h-14" alt="FireFox Add-ons" src={firefox_add_ons}>
		</a>
	</div>

	<div class="flex flex-col gap-2">
		<a
			class="flex items-center gap-1"
			href="https://chrome.google.com/webstore/detail/abebconmjhhbcjofpchjkbbimgkhdmbe"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img alt="Chrome Web Store Version" src="https://img.shields.io/chrome-web-store/v/abebconmjhhbcjofpchjkbbimgkhdmbe?logo=googlechrome&logoColor=4285F4">
			<img alt="Chrome Web Store Rating" src="https://img.shields.io/chrome-web-store/rating/abebconmjhhbcjofpchjkbbimgkhdmbe">
			<img alt="Chrome Web Store Users" src="https://img.shields.io/chrome-web-store/users/abebconmjhhbcjofpchjkbbimgkhdmbe">
		</a>
		<a
			class="flex items-center gap-1"
			href="https://microsoftedge.microsoft.com/addons/detail/ohcoejhlajaopflplmckddjcfecgleij"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img alt="Microsoft Addons Version" src="https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/ohcoejhlajaopflplmckddjcfecgleij&logo=microsoftedge&logoColor=0078D7">
			<img alt="Microsoft Addons Rating" src="https://img.shields.io/badge/dynamic/json?label=rating&suffix=/5&query=%24.averageRating&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fohcoejhlajaopflplmckddjcfecgleij">
			<img alt="Microsoft Addons Users" src="https://img.shields.io/badge/dynamic/json?label=users&query=%24.activeInstallCount&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fohcoejhlajaopflplmckddjcfecgleij">
		</a>
		<a
			class="flex items-center gap-1"
			href="https://addons.mozilla.org/firefox/addon/translater-gt"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img alt="Firefox Addons Version" src="https://img.shields.io/amo/v/translater-gt?logo=firefoxbrowser&logoColor=FF7139">
			<img alt="Firefox Addons Rating" src="https://img.shields.io/amo/rating/translater-gt">
			<img alt="Firefox Addons Users" src="https://img.shields.io/amo/users/translater-gt">
		</a>
	</div>

	<div>
		<ul class="list-inside list-disc">
			<li>Select-and-translate: highlight text and click the button to get a translation</li>
			<li>Quick pop-up translation via keyboard shortcut or browser-bar button</li>
			<li>Support for 100+ languages and alternative translations</li>
			<li>Dictionary: definitions and examples for single words or phrases</li>
			<li>One-click reverse translation, plus history with quick navigation</li>
			<li>Text-to-speech with selectable voices (if supported by browser)</li>
			<li>Light and dark themes</li>
		</ul>
	</div>
</main>

<footer>
	<div class="flex flex-col items-center gap-1 text-sm">
		<a
			class="flex items-center gap-2 hover:underline"
			href="https://github.com/chergav/translater"
			rel="noopener noreferrer"
			target="_blank"
		>
			<Icon d={mdiGithub} />
			<span>Translator</span>
		</a>
		<a
			class="flex items-center gap-2 hover:underline"
			href={resolve('/extensions/translater/privacy-policy')}
		>
			<span>Privacy Policy</span>
		</a>
	</div>
</footer>

<svelte:head>
	<link href={translator_96} rel="icon" type="image/png">
	<title>Translator</title>
</svelte:head>

<script lang="ts">
import { resolve } from '$app/paths';
import translator_96 from '$lib/assets/translator_96.png';
import translator_440x280 from '$lib/assets/translator_440x280.png';
import chrome_web_store from '$lib/assets/chrome-web-store.png';
import edge_add_ons from '$lib/assets/edge-add-ons.svg';
import firefox_add_ons from '$lib/assets/firefox-add-ons.svg';
import Icon from '$lib/components/Icon.svelte';
import { mdiGithub } from '@mdi/js';
</script>
