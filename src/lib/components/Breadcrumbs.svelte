<nav aria-label="Breadcrumb">
	<ul class="flex list-none items-center text-color-on-surface-variant capitalize">
		<li>
			<a class="hover:underline" href={resolve('/')}>Home</a>
		</li>

		{#each segments as { label, href }, i (i)}
			<li class="flex items-center">
				<Icon d={mdiChevronRight} size="20" />
				{#if i === segments.length - 1}
					<span class="text-color-on-surface" aria-current="page">{label}</span>
				{:else}
					<a class="hover:underline" href={resolve(href)}>{label}</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<script lang="ts">
import type { Pathname } from '$app/types';
import { page } from '$app/state';
import { resolve } from '$app/paths';
import Icon from '$lib/components/Icon.svelte';
import { mdiChevronRight } from '@mdi/js';

interface Segment {
	label: string
	href: Pathname
}

const segments: Segment[] = $derived(
	page.url.pathname
		.split('/')
		.filter(Boolean)
		.map((segment, i, arr) => ({
			label: segment.replaceAll('-', ' '),
			href: '/' + arr.slice(0, i + 1).join('/') as Pathname,
		})),
);
</script>
