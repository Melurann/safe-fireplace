<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import LL, { locale, setLocale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { ChevronDownIcon } from 'lucide-svelte';
	import { replaceLocaleInUrl } from '../utils.js';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again
		invalidateAll();
	};

	// update `lang` attribute
	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}

	let langOpen = false;

	// Eventlistener for outside clicking detection
	if (typeof window !== 'undefined') {
		window.addEventListener('click', (event) => {
			if (event && event.target instanceof Element && !event.target.closest('#dropdownLang')) {
				langOpen = false;
			}
		});
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />
<div id="dropdownLang">
	<button
		class="flex gap-0.5 items-center hover:underline decoration-1"
		on:click={() => (langOpen = !langOpen)}
	>
		{$LL.nav.lang()}
		<ChevronDownIcon />
	</button>

	{#if langOpen}
		<ul class="absolute mt-4 bg-white rounded shadow-lg border border-gray-200 z-10 text-black">
			{#each locales as l}
				<li>
					<a
						class="flex items-center justify-between gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
						class:active={l === $locale}
						href={replaceLocaleInUrl($page.url, l)}
					>
						{l}
						<img class="w-8" src={`/flags/${l}.svg`} alt={`${l} Flag`} />
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
