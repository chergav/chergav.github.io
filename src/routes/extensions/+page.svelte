<header>
	<h1 class="flex items-center gap-4 text-2xl">
		<Icon d={mdiPuzzleOutline} size="40" />
		Browser Extensions
	</h1>
</header>

<main class="flex size-full flex-col items-center">
	<ExtensionsList />
</main>

<svelte:head>
	<link href={favicon} rel="icon" type="image/png" />
	<title>Extensions</title>
</svelte:head>

<script lang="ts">
import favicon from '$lib/assets/favicon.png';
import Icon from '$lib/components/Icon.svelte';
import ExtensionsList from '$lib/components/ExtensionsList.svelte';
import { mdiPuzzleOutline } from '@mdi/js';
</script>
