<script>
	import style from '../assets/styles/main.css';

	import { fade, fly } from 'svelte/transition'

	const { data } = $props();

</script>

{#key data.url}
<div in:fly="{{ duration: 300, x: -1000, opacity: 1 }}">
	<slot />
</div>
{/key}