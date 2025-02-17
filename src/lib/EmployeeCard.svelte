<script lang="ts">
	export let firstname: string;
	export let lastname: string;
	export let rank: string;
	export let mailto: string;
</script>

<div
	class="flex flex-col justify-center items-center max-w-md shadow-lg rounded-lg border border-gray-200 shadow-slate-100 p-8 mx-3 lg:mx-auto gap-2"
>
	<!-- Placeholder for initials instead of image -->
	<div
		class="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center text-2xl font-bold"
	>
		{firstname[0]}{lastname[0]}
	</div>

	<h2 class="text-2xl font-medium text-gray-800 text-center leading-none">
		{firstname}<br />{lastname}
	</h2>
	<p class="text-gray-400 text-center">{rank}</p>

	<a
		class="bg-[#333] text-white w-full max-w-[125px] text-center py-2 mt-2 rounded-lg hover:bg-[#555] transition"
		href="mailto:{mailto}"
	>
		Contact Now
	</a>
</div>
