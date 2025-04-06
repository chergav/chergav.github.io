<div class="size-full p-6 flex flex-col items-center gap-6">
	{@render children()}
</div>

<script lang="ts">
import type { LayoutProps } from './$types';
import '../app.css';
import '@fontsource-variable/inter';

let { children }: LayoutProps = $props();
// console.log(data);
</script>
