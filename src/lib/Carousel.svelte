<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-svelte';

	let currId = 0;
	let speed = 3000;

	const images = [
		'slider/1.jpg',
		'slider/3.jpg',
		'slider/26.jpg',
		'slider/2.jpg',
		'slider/28.jpg',
		'slider/9.jpg',
		'slider/30.jpg',
		'slider/34.jpg',
		'slider/5.jpg',
		'slider/38.jpg',
		'slider/4.jpg',
		'slider/36.jpg',
		'slider/7.jpg',
		'slider/32.jpg',
		'slider/6.jpg',
		'slider/8.jpg',
		'slider/11.jpg',
		'slider/10.jpg',
		'slider/13.jpg',
		'slider/12.jpg',
		'slider/15.jpg',
		'slider/14.jpg',
		'slider/17.jpg',
		'slider/16.jpg',
		'slider/19.jpg',
		'slider/18.jpg',
		'slider/21.jpg',
		'slider/20.jpg',
		'slider/23.jpg',
		'slider/22.jpg',
		'slider/25.jpg',
		'slider/24.jpg',
		'slider/27.jpg',
		'slider/29.jpg',
		'slider/31.jpg',
		'slider/33.jpg',
		'slider/35.jpg',
		'slider/37.jpg',
		'slider/39.jpg',
		'slider/40.jpg'
	];
	const imgLen = images.length;
	let positionLeft = 0;
	let progress = 0;

	const moveSlider = () => {
		positionLeft = currId * 100;
		progress = ((currId + 1) / imgLen) * 100;
	};

	const next = () => {
		currId = currId === imgLen - 1 ? 0 : currId + 1;
		moveSlider();
	};

	const prev = () => {
		currId = currId === 0 ? imgLen - 1 : currId - 1;
		moveSlider();
	};

	let interval = setInterval(next, speed);
	const autoPlay = () => {
		interval = setInterval(next, speed);
	};

	const stopPlay = () => {
		clearInterval(interval);
	};
</script>

<div
	onmouseover={stopPlay}
	onmouseleave={autoPlay}
	onfocus={stopPlay}
	onabort={autoPlay}
	role="region"
	aria-label="Image Carousel"
	class="relative w-full max-w-2xl mx-auto overflow-hidden"
>
	<!-- Images -->
	<div
		class="flex transition-transform duration-500"
		style="transform: translateX(-{positionLeft}%);"
	>
		{#each images as img}
			<img src={img} alt="" class="w-full h-auto object-cover flex-shrink-0" />
		{/each}
	</div>

	<!-- Navigation Buttons -->
	<div class="absolute inset-0 flex justify-between items-center">
		<button onclick={prev} class="p-1.5 bg-white/70 hover:bg-white rounded-full shadow-md">
			<ChevronLeftIcon />
		</button>
		<button onclick={next} class="p-1.5 bg-white/70 hover:bg-white rounded-full shadow-md">
			<ChevronRightIcon />
		</button>
	</div>

	<!-- Progress Bar -->
	<div class="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
		<div class="h-full bg-gray-600 transition-all duration-500" style="width: {progress}%"></div>
	</div>
</div>
