<header>
	<h1 class="text-2xl flex items-center gap-4">
		<Icon d={mdiPuzzleOutline} size="40" />
		Browser Extensions
	</h1>
</header>

<main class="size-full flex flex-col items-center">
	<ExtensionsList />
</main>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon} />
	<title>Extensions</title>
</svelte:head>

<script lang="ts">
import favicon from '$lib/assets/favicon.png';
import Icon from '$lib/components/Icon.svelte';
import ExtensionsList from '$lib/components/ExtensionsList.svelte';
import { mdiPuzzleOutline } from '@mdi/js';
</script>
