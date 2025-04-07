<div class="size-full flex flex-col items-center gap-6 grow">
	{#if /\/extensions\/.+/.test(page.url.pathname)}
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
	{/if}
	{@render children()}
</div>

<script lang="ts">
import type { LayoutProps } from '../$types';
import { page } from '$app/state';
import Icon from '$lib/components/Icon.svelte';
import { mdiArrowLeft } from '@mdi/js';

let { children }: LayoutProps = $props();
</script>
