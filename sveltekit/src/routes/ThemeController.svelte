<script lang="ts">
	import Cookies from "js-cookie";
	import { Sun, Moon } from "radix-svelte-icons";

	export let lightTheme: boolean = true
</script>

<label class="swap swap-rotate btn btn-square btn-ghost hover:bg-base-200">
	<input
		type="checkbox"
		class="theme-controller hidden"
		value={"light"}
		bind:checked={lightTheme}
		on:change={() => {
			Cookies.set("theme", lightTheme ? "light" : "dark");
		}}
	/>

	<Sun class="swap-on fill-current" size={24} />
	<Moon class="swap-off fill-current" size={24} />
</label>