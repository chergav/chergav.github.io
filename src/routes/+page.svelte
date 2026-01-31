<header>
	<div class="flex flex-col items-center gap-2">
		<img class="size-48 rounded-full" alt="bender" src={bender} />
		<h1 class="text-2xl">chergav</h1>
	</div>
</header>

<main class="flex size-full grow flex-col items-center">
	<div class="flex flex-col items-center gap-4 py-4 text-lg">
		<a
			class="flex items-center gap-2 hover:underline"
			href={resolve('/extensions')}
		>
			<Icon d={mdiPuzzleOutline} size="32" />
			<span>Browser Extensions</span>
		</a>
	</div>
</main>

<footer>
	<div>
		<a
			class="flex items-center gap-2 hover:underline"
			href="https://github.com/chergav"
			rel="noopener noreferrer"
			target="_blank"
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
import { resolve } from '$app/paths';
import bender from '$lib/assets/bender_300х300.jpg';
import Icon from '$lib/components/Icon.svelte';
import { mdiGithub, mdiPuzzleOutline } from '@mdi/js';
</script>
