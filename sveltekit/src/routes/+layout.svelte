<script lang="ts">
	import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		<Header></Header>
		<div class="flex flex-col min-h-screen gap-8 bg-base-100 text-base-content pt-48 pb-28 px-4 lg:px-28 relative">
			{@render children()}
		</div>
		<div class="invisible lg:visible fixed top-36 left-16 flex items-center justify-center">
			<div class="w-12 h-0.5 bg-base-content absolute"></div>
			<div class="w-0.5 h-12 bg-base-content absolute"></div>
		</div>
		<div class="invisible lg:visible fixed top-36 right-16 flex items-center justify-center">
			<div class="w-12 h-0.5 bg-base-content absolute"></div>
			<div class="w-0.5 h-12 bg-base-content absolute"></div>
		</div>
		<div class="invisible lg:visible fixed bottom-16 left-16 flex items-center justify-center">
			<div class="w-12 h-0.5 bg-base-content absolute"></div>
			<div class="w-0.5 h-12 bg-base-content absolute"></div>
		</div>
		<div class="invisible lg:visible fixed bottom-16 right-16 flex items-center justify-center">
			<div class="w-12 h-0.5 bg-base-content absolute"></div>
			<div class="w-0.5 h-12 bg-base-content absolute"></div>
		</div>
	</main>
</div>

<style>
	html,
	body {
		margin: 0;
		width: 100%;
		height: 100%;
	}

	* {
		font-family: "Poppins";
	}
</style>
