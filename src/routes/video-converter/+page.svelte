<script lang="ts">
import { goto } from '$app/navigation';
import { resolve } from '$app/paths';

$effect.pre(() => {
	goto(resolve('/extensions/video-converter'));
});
</script>
