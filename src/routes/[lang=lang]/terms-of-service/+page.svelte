<script lang="ts">
	import LL from '$i18n/i18n-svelte';
</script>

<div class="flex flex-col justify-center-center md:mx-32 sm:mx-16 m-auto px-8 py-16 gap-3">
	<h2 class="text-2xl pt-3 font-extrabold">{$LL.terms.title()}</h2>
	<p>{$LL.terms.welcome()}</p>
	<p>{@html $LL.terms.intro()}</p>
	<p>{@html $LL.terms.acceptance()}</p>
	<p>{@html $LL.terms.terminology()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.cookies.title()}</h3>
	<p>{@html $LL.terms.cookies.description()}</p>
	<p>{@html $LL.terms.cookies.usage()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.license.title()}</h3>
	<p>{@html $LL.terms.license.description()}</p>
	<p>{$LL.terms.license.restrictions()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		{#each Object.values($LL.terms.license.restrictionsList).map((fn) => fn()) as restriction}
			<li><p>{restriction}</p></li>
		{/each}
	</ul>
	<p>{$LL.terms.license.agreementStart()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.comments.title()}</h3>
	<p>{@html $LL.terms.comments.description()}</p>
	<p>{@html $LL.terms.comments.monitoring()}</p>
	<p>{$LL.terms.comments.warranty()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		{#each Object.values($LL.terms.comments.warrantyList).map((fn) => fn()) as warranty}
			<li><p>{warranty}</p></li>
		{/each}
	</ul>
	<p>{@html $LL.terms.comments.licenseGrant()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.hyperlinking.title()}</h3>
	<p>{$LL.terms.hyperlinking.description()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		{#each Object.values($LL.terms.hyperlinking.organizations).map((fn) => fn()) as organization}
			<li><p>{organization}</p></li>
		{/each}
	</ul>
	<p>{@html $LL.terms.hyperlinking.linkConditions()}</p>
	<p>{$LL.terms.hyperlinking.approvalConditions()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		{#each Object.values($LL.terms.hyperlinking.approvalOrganizations).map( (fn) => fn() ) as organization}
			<li><p>{organization}</p></li>
		{/each}
	</ul>
	<p>{@html $LL.terms.hyperlinking.approvalCriteria()}</p>
	<p>{@html $LL.terms.hyperlinking.linkRules()}</p>
	<p>{@html $LL.terms.hyperlinking.contactInfo()}</p>
	<p>{$LL.terms.hyperlinking.approvedLinkMethods()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		{#each Object.values($LL.terms.hyperlinking.approvedLinkList).map((fn) => fn()) as linkMethod}
			<li><p>{linkMethod}</p></li>
		{/each}
	</ul>
	<p>{@html $LL.terms.hyperlinking.trademarkNotice()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.iframes.title()}</h3>
	<p>{@html $LL.terms.iframes.description()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.contentLiability.title()}</h3>
	<p>{@html $LL.terms.contentLiability.description()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.reservationOfRights.title()}</h3>
	<p>{@html $LL.terms.reservationOfRights.description()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.removalOfLinks.title()}</h3>
	<p>{@html $LL.terms.removalOfLinks.description()}</p>
	<p>{@html $LL.terms.removalOfLinks.disclaimer()}</p>

	<h3 class="text-xl font-semibold pt-3">{$LL.terms.disclaimer.title()}</h3>
	<p>{@html $LL.terms.disclaimer.description()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		{#each Object.values($LL.terms.disclaimer.points).map((fn) => fn()) as point}
			<li><p>{point}</p></li>
		{/each}
	</ul>
	<p>{@html $LL.terms.disclaimer.limitations()}</p>
	<p>{@html $LL.terms.disclaimer.freeServiceDisclaimer()}</p>
</div>

<style>
	li {
		color: #d1d5db;
	}

	p {
		color: #374151;
	}
</style>
