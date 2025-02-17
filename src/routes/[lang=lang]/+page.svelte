<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import Carousel from '$lib/Carousel.svelte';
	import EmployeeCard from '$lib/EmployeeCard.svelte';
	import {
		GemIcon,
		LeafIcon,
		MonitorIcon,
		PaletteIcon,
		ShieldIcon,
		WrenchIcon
	} from 'lucide-svelte';

	const icons = [GemIcon, LeafIcon, PaletteIcon, ShieldIcon, WrenchIcon, MonitorIcon];

	console.info($LL.log({ fileName: '+page.svelte' }));
</script>

<div class="flex flex-col min-h-screen md:mx-32 sm:mx-16 mx-8">
	<div id="home" class="grid col-3 grid-cols-6 sm:gap-2 gap-8 sm:py-32 py-16 justify-items-center">
		<!-- Quote -->
		<div
			class="flex items-center justify-center min-h-28 w-full h-full sm:col-span-3 col-span-6 mt-4 order-first shadow-lg rounded-lg border border-gray-200 shadow-slate-200"
		>
			<blockquote class="text-center text-xl font-semibold">„KAMINI IN KERAMIKA“</blockquote>
		</div>

		<!-- Image Carousel -->
		<div
			id="slider"
			class="flex items-center max-w-sm p-4 h-full sm:row-span-2 sm:col-span-3 col-span-6 sm:order-2 order-3"
		>
			<Carousel></Carousel>
		</div>
		<div class="flex items-center justify-center h-full sm:col-span-3 col-span-6 order-2 mt-2">
			<p class="text-center text-gray-600">
				{$LL.home.intro()}<br />
				<a class="text-blue-500 hover:underline" href="/#features">{$LL.home.button()}</a>
			</p>
		</div>
	</div>

	<!-- Features -->
	<div
		id="features"
		class="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2 h-full border-y-2 border-gray-200 py-32 bg-white"
	>
		{#each Object.values($LL.features) as feature, index}
			<div
				class="relative flex flex-col p-4 shadow-lg rounded-lg border border-gray-200 shadow-slate-100 overflow-hidden"
			>
				<h2 class="font-bold text-lg">{feature.title()}</h2>
				<p class="text-gray-600">{feature.desc()}</p>
				<svelte:component
					this={icons[index]}
					class="absolute z-10 sm:h-24 sm:w-24 h-20 w-20 -translate-y-1/2 text-gray-800 opacity-10 right-4 top-1/2 "
				/>
			</div>
		{/each}
	</div>

	<!-- About Us -->
	<div id="about" class="grid grid-cols-1 gap-2 py-32 px-4 md:px-16">
		<div class="flex flex-col items-center text-center">
			<h2 class="text-3xl font-bold mb-4">{$LL.about.title()}</h2>
			<p class="text-gray-700 max-w-3xl">
				{#each Object.values($LL.about.desc).map((fn) => fn()) as paragraph}
					{@html paragraph}
				{/each}
			</p>
		</div>
	</div>

	<!-- Team -->
	<div id="team" class="flex flex-col items-center py-32">
		<h1 class="mb-8 text-3xl font-bold">{$LL.team.title()}</h1>
		<div class="grid grid-cols-1 justify-center justify-items-center gap-16 lg:grid-cols-3">
			{#each Object.values($LL.team.members) as member}
				<div class="min-w-[284px] p-4">
					<div
						class="flex flex-col h-80 justify-between items-center max-w-md shadow-lg rounded-lg border border-gray-200 shadow-slate-100 p-8 mx-3 lg:mx-auto"
					>
						<div
							class="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold"
						>
							{member.firstname()[0]}{member.lastname()[0]}
						</div>

						<h2 class="text-2xl font-medium text-gray-800 text-center leading-none">
							{member.firstname()}<br />{member.lastname()}
						</h2>

						<p class="text-gray-400 text-center">{member.role()}</p>
						<p class="text-center">{$LL.team.lang()}{@html member.languages()}</p>

						<a
							class="bg-[#333] text-white w-full max-w-[12rem] text-center py-2 mt-2 rounded-lg hover:bg-[#555] transition"
							href="mailto:{member.mailto()}"
						>
							{member.mailBtn()}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
