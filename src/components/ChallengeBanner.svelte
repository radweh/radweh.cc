<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string;
	export let badge: string;
</script>

<div class="rounded-lg border border-base-300 bg-base-200 px-6 lg:px-12 py-4 lg:py-8 flex flex-col lg:flex-row gap-6 relative overflow-hidden hover:bg-base-300 cursor-pointer transition-colors">
	<img src={badge} class="absolute -top-12 -right-16 rotate-[15deg] w-64 opacity-35">
	<img src={icon} class="w-16">
	<div class="flex flex-col gap-2 z-10">
		<h4 class="text-xl font-semibold">{title}</h4>
		<p class="text-base-content text-opacity-75 max-w-[80%]">{description}</p>
	</div>
</div>