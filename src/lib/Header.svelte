<script lang="ts">
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import { ChevronDownIcon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import LL from '$i18n/i18n-svelte';

	let navOpen = false;
	let catalogOpen = false;

	$: catalogs = [
		{ name: `${$LL.catalog_name.catalog1()}`, file: 'catalog/catalog_1.pdf' },
		{ name: `${$LL.catalog_name.catalog2()}`, file: 'catalog/catalog_2.pdf' }
	];

	// Eventlistener for outside clicking detection
	if (typeof window !== 'undefined') {
		window.addEventListener('click', (event) => {
			if (event && event.target instanceof Element && !event.target.closest('#dropdownCatalog')) {
				catalogOpen = false;
			}
		});
	}
</script>

<header>
	<!-- Navbar-->
	<nav class="flex mx-4 h-16 items-center justify-between bg-white">
		<!-- Screen < 640: Logo and Menu Icon-->
		<div class="flex items-center sm:hidden gap-8">
			<img src="/logo.svg" class="w-12" alt="logo" />
			<button class="menu-icon p-2" on:click={() => (navOpen = !navOpen)}
				><img class="w-8 h-8" src="/menubar.ico" alt="menu" />
			</button>
		</div>

		<!-- Logo and Navlinks-->
		<div class="items-center gap-8 hidden sm:flex">
			<img src="/logo.svg" class="w-12" alt="logo" />
			<div class="flex gap-4">
				<a class="hover:underline decoration-1" href="{base}/{$locale}/#home">{$LL.nav.home()}</a>
				<a class="hover:underline decoration-1" href="{base}/{$locale}/#features"
					>{$LL.nav.features()}</a
				>
				<a class="hover:underline decoration-1" href="{base}/{$locale}/#about">{$LL.nav.about()}</a>
				<a class="hover:underline decoration-1" href="{base}/{$locale}/#team">{$LL.nav.team()}</a>
			</div>
		</div>
		<div class="relative sm:flex hidden text-left items-center gap-4">
			<LocaleSwitcher />

			<div id="dropdownCatalog">
				<button
					class="bg-[#333] hover:bg-[#444] text-white py-2 px-4 rounded-lg"
					on:click={() => (catalogOpen = !catalogOpen)}
				>
					{$LL.nav.catalog()}
				</button>

				{#if catalogOpen}
					<div class="absolute mt-1 w-32 bg-white rounded shadow-lg border border-gray-200 z-10">
						{#each catalogs as catalog}
							<button
								class="block w-full text-left px-4 py-2 hover:bg-gray-100"
								on:click={() => {
									window.open(catalog.file, '_blank');
									catalogOpen = false;
								}}
							>
								{catalog.name}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</nav>

	<!--Mobile Menu-->
	{#if navOpen}
		<div transition:slide class="block sm:hidden bg-[#333] -z-10">
			<div
				class="flex flex-col justify-center space-y-1 px-2 py-3 gap-2 text-center flex-wrap items-center text-white"
			>
				<a class="p-2 rounded-lg hover:bg-[#666] transition" href="{base}/{$locale}/#home"
					>{$LL.nav.home()}</a
				>
				<a class="p-2 rounded-lg hover:bg-[#666] transition" href="{base}/{$locale}/#features"
					>{$LL.nav.features()}</a
				>
				<a class="p-2 rounded-lg hover:bg-[#666] transition" href="{base}/{$locale}/#about"
					>{$LL.nav.about()}</a
				>
				<a class="p-2 rounded-lg hover:bg-[#666] transition" href="{base}/{$locale}/#team"
					>{$LL.nav.team()}</a
				>
				<div class="ml-4 p-2 rounded-lg hover:bg-[#666] transition">
					<LocaleSwitcher />
				</div>
				<div class="flex justify-center w-full" id="dropdownCatalog">
					<button
						class="text-black p-2 w-full bg-white rounded-md hover:bg-gray-200 transition flex justify-center gap-2"
						on:click={() => (catalogOpen = !catalogOpen)}
						>{$LL.nav.catalog()} <ChevronDownIcon /></button
					>
					{#if catalogOpen}
						<div class="absolute mt-11 w-32 bg-white rounded shadow-lg border border-gray-200 z-50">
							{#each catalogs as catalog}
								<button
									class="block w-full text-black text-left px-4 py-2 hover:bg-gray-100"
									on:click={() => {
										window.open(catalog.file, '_blank');
										catalogOpen = false;
									}}
								>
									{catalog.name}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</header>
