<div class="flex size-full min-h-screen flex-col items-center gap-6 p-6">
	{@render children()}
</div>

<svelte:head>
	<meta name="google-site-verification" content="fWzN9AzbnwTevGQxF-RtwiQvpQ3qPbjc5u-EANfYpYU" />
</svelte:head>

<script lang="ts">
import type { LayoutProps } from './$types';
import '../tailwind.css';
import '@fontsource-variable/inter';

let { children }: LayoutProps = $props();
</script>
