<div class="flex size-full grow flex-col items-center gap-6">
	<div class="w-full">
		<Breadcrumbs />
	</div>
	{@render children()}
</div>

<script lang="ts">
import type { LayoutProps } from '../$types';
import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

let { children }: LayoutProps = $props();
</script>
