<script lang="ts">
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import Header from '$lib/Header.svelte';
	import type { LayoutData } from './$types';

	import Footer from '$lib/Footer.svelte';
	import '../app.css';

	export let data: LayoutData;

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);
	console.info($LL.log({ fileName: '+layout.svelte' }));
</script>

<Header />

<main class="border-y-2 border-gray-200">
	<slot />
</main>

<Footer />
