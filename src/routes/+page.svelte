<header>
	<div class="flex flex-col items-center gap-2">
		<img alt="bender" src={bender} class="size-64 rounded-full" />
		<h1 class="text-3xl">chergav</h1>
	</div>
</header>

<main class="size-full flex flex-col items-center grow">
	<div class="py-4 flex flex-col items-center gap-4 text-lg">
		<a
			href="/extensions"
			class="
				flex
				items-center
				gap-2
				hover:underline
			"
		>
			<Icon d={mdiPuzzleOutline} />
			<span>Browser Extensions</span>
		</a>
	</div>
</main>

<footer>
	<div>
		<a
			href="https://github.com/chergav"
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
	<title>chergav</title>
</svelte:head>

<script lang="ts">
import bender from '$lib/assets/bender_300х300.jpg';
import Icon from '$lib/components/Icon.svelte';
import { mdiGithub, mdiPuzzleOutline } from '@mdi/js';
</script>
