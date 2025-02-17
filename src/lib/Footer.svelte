<script lang="ts">
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	import LL from '$i18n/i18n-svelte';
</script>

<footer class="flex flex-col sm:flex-row m-8 sm:items-center justify-between gap-8 bg-white">
	<div class="flex flex-col justify-center gap-2">
		<img src="/logo.svg" class="w-16" alt="logo" />
		<p class="text-sm font-medium">{$LL.nav.rights()}</p>
	</div>
	<div class="flex flex-col gap-4 md:flex-row md:gap-32">
		<div class="flex flex-col gap-2">
			<h1 class="text-lg font-medium">{$LL.nav.links()}</h1>
			<ul>
				<li><a href="{base}/{$locale}/#home">{$LL.nav.home()}</a></li>
				<li><a href="{base}/{$locale}/#team">{$LL.nav.team()}</a></li>
			</ul>
		</div>
		<div class="flex flex-col gap-2">
			<h1 class="text-lg font-medium">{$LL.nav.legal()}</h1>
			<ul>
				<li><a href="{base}/{$locale}/terms-of-service">{$LL.nav.terms()}</a></li>
				<li><a href="{base}/{$locale}/privacy-policy">{$LL.nav.privacy()}</a></li>
			</ul>
		</div>
	</div>
</footer>
