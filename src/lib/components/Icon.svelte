<svg
	class="{sizes[size]} {klass}"
	fill="currentColor"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path {d} />
</svg>

<script lang="ts">
interface Props {
	d: string
	size?: '16' | '18' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '128'
	class?: string
}

let { d, size = '24', class: klass = '' }: Props = $props();

const sizes: { [index: string]: string } = {
	16: 'size-4',
	18: 'size-[18px]',
	20: 'size-5',
	24: 'size-6',
	28: 'size-7',
	32: 'size-8',
	36: 'size-9',
	40: 'size-10',
	44: 'size-11',
	48: 'size-12',
	128: 'size-32',
};
</script>
