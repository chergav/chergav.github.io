<div class="size-full min-h-screen p-6 flex flex-col items-center gap-6">
	{@render children()}
</div>

<svelte:head>
	<meta name="google-site-verification" content="fWzN9AzbnwTevGQxF-RtwiQvpQ3qPbjc5u-EANfYpYU" />
</svelte:head>

<script lang="ts">
import type { LayoutProps } from './$types';
import '../app.css';
import '@fontsource-variable/inter';

let { children }: LayoutProps = $props();
</script>
