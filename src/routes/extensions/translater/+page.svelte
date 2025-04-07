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
	<img src={translater_440x280} alt="logo" class="h-44 rounded-3xl">
	<h2 class="text-xl">Translate selected text with Google Translate on all web pages</h2>
</header>

<main class="size-full flex flex-col items-center gap-4">
	<div class="flex flex-col md:flex-row items-center gap-1">
		<a href="https://chrome.google.com/webstore/detail/abebconmjhhbcjofpchjkbbimgkhdmbe" target="_blank">
			<img src={chrome_web_store} alt="Chrome web store" class="h-14">
		</a>
		<a href="https://microsoftedge.microsoft.com/addons/detail/ohcoejhlajaopflplmckddjcfecgleij" target="_blank">
			<img src={egde_add_ons} alt="Microsoft Edge Add-ons" class="h-14">
		</a>
		<a href="https://addons.mozilla.org/firefox/addon/translater-gt" target="_blank">
			<img src={firefox_add_ons} alt="FireFox Add-ons" class="h-14">
		</a>
	</div>

	<div class="flex flex-col gap-2">
		<a
			href="https://chrome.google.com/webstore/detail/abebconmjhhbcjofpchjkbbimgkhdmbe"
			class="flex items-center gap-1"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img alt="Chrome Web Store Version" src="https://img.shields.io/chrome-web-store/v/abebconmjhhbcjofpchjkbbimgkhdmbe?logo=googlechrome&logoColor=4285F4">
			<img alt="Chrome Web Store Rating" src="https://img.shields.io/chrome-web-store/rating/abebconmjhhbcjofpchjkbbimgkhdmbe">
			<img alt="Chrome Web Store Users" src="https://img.shields.io/chrome-web-store/users/abebconmjhhbcjofpchjkbbimgkhdmbe">
		</a>
		<a
			href="https://microsoftedge.microsoft.com/addons/detail/ohcoejhlajaopflplmckddjcfecgleij"
			class="flex items-center gap-1"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img alt="Microsoft Addons Version" src="https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/ohcoejhlajaopflplmckddjcfecgleij&logo=microsoftedge&logoColor=0078D7">
			<img alt="Microsoft Addons Rating" src="https://img.shields.io/badge/dynamic/json?label=rating&suffix=/5&query=%24.averageRating&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fohcoejhlajaopflplmckddjcfecgleij">
			<img alt="Microsoft Addons Users" src="https://img.shields.io/badge/dynamic/json?label=users&query=%24.activeInstallCount&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fohcoejhlajaopflplmckddjcfecgleij">
		</a>
		<a
			href="https://addons.mozilla.org/firefox/addon/translater-gt"
			class="flex items-center gap-1"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img alt="Firefox Addons Version" src="https://img.shields.io/amo/v/translater-gt?logo=firefoxbrowser&logoColor=FF7139">
			<img alt="Firefox Addons Rating" src="https://img.shields.io/amo/rating/translater-gt">
			<img alt="Firefox Addons Users" src="https://img.shields.io/amo/users/translater-gt">
		</a>
	</div>

	<div>
		<ul class="list-inside" style="list-style-type: '✅ '">
			<li>Translate selected text. Simply select the text and click the translate button.</li>
			<li>Auto-translate when editing the source text.</li>
			<li>Translate any text by writing or pasting from the clipboard.</li>
			<li>All Google Translate languages are supported (over 100).</li>
			<li>Display dictionary, definition and examples when translating a single word or phrase.</li>
			<li>One-click reverse translation.</li>
			<li>Translation history.</li>
			<li>Quickly navigate through history.</li>
			<li>Copy original and translated text to the clipboard.</li>
			<li>Text voicing.</li>
			<li>Selecting a voice for text voicing (when available in the browser).</li>
			<li>Light and dark themes.</li>
		</ul>
	</div>
</main>

<footer>
	<div>
		<a
			href="https://github.com/chergav/translater"
			class="
				flex
				items-center
				gap-2
				hover:underline
			"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon d={mdiGithub} />
			<span>Github</span>
		</a>
	</div>
</footer>

<svelte:head>
	<link rel="icon" type="image/png" href={translater_96}>
	<title>Translater</title>
</svelte:head>

<script lang="ts">
import translater_96 from '$lib/assets/translater_96.png';
import translater_440x280 from '$lib/assets/translater_440x280.png';
import chrome_web_store from '$lib/assets/chrome-web-store.png';
import egde_add_ons from '$lib/assets/egde-add-ons.svg';
import firefox_add_ons from '$lib/assets/firefox-add-ons.svg';
import Icon from '$lib/components/Icon.svelte';
import { mdiGithub, mdiArrowLeft } from '@mdi/js';
</script>
