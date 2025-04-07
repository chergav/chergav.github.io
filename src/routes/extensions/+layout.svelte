<div class="size-full min-h-full flex flex-col items-center gap-6">
	{@render children()}
</div>

<script lang="ts">
import type { LayoutProps } from '../$types';

let { children }: LayoutProps = $props();
</script>
