<script lang="ts">
import { goto } from '$app/navigation';

$effect.pre(() => {
	goto('/extensions/translater');
});
</script>
