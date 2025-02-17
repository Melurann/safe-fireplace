<script lang="ts">
	import LL from '$i18n/i18n-svelte';

	const date = new Date('2024-12-19'); // YYYY, MM, DD

	console.info($LL.log({ fileName: 'privacy-policy/+page.svelte' }));
</script>

<div class="flex flex-col justify-center-center md:mx-32 sm:mx-16 m-auto px-8 py-16 gap-3">
	<h1 class="text-2xl pt-3 font-extrabold">{$LL.privacy.title()}</h1>
	<p>{@html $LL.privacy.date(date)}</p>
	<p>{@html $LL.privacy.description()}</p>
	<p>{@html $LL.privacy.personalDataUsage()}</p>
	<p>{@html $LL.privacy.policyCreation()}</p>

	<h2 class="text-2xl font-bold pt-3">{@html $LL.privacy.interpretationAndDefinitions()}</h2>
	<h3 class="text-xl font-semibold">{@html $LL.privacy.interpretation()}</h3>
	<p>{@html $LL.privacy.interpretationText()}</p>
	<h3 class="text-xl font-semibold pt-3">{@html $LL.privacy.definitions()}</h3>
	<p>{@html $LL.privacy.definitionsText()}</p>

	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li><p><b>{@html $LL.privacy.account()}</b> {@html $LL.privacy.accountDefinition()}</p></li>
		<li><p><b>{@html $LL.privacy.affiliate()}</b> {@html $LL.privacy.affiliateDefinition()}</p></li>
		<li><p><b>{@html $LL.privacy.company()}</b> {@html $LL.privacy.companyDefinition()}</p></li>
		<li><p><b>{@html $LL.privacy.cookies()}</b> {@html $LL.privacy.cookiesDefinition()}</p></li>
		<li><p><b>{@html $LL.privacy.country()}</b> {@html $LL.privacy.countryDefinition()}</p></li>
		<li><p><b>{@html $LL.privacy.device()}</b> {@html $LL.privacy.deviceDefinition()}</p></li>
		<li>
			<p><b>{@html $LL.privacy.personalData()}</b> {@html $LL.privacy.personalDataDefinition()}</p>
		</li>
		<li><p><b>{@html $LL.privacy.service()}</b> {@html $LL.privacy.serviceDefinition()}</p></li>
		<li>
			<p>
				<b>{@html $LL.privacy.serviceProvider()}</b>
				{@html $LL.privacy.serviceProviderDefinition()}
			</p>
		</li>
		<li><p><b>{@html $LL.privacy.usageData()}</b> {@html $LL.privacy.usageDataDefinition()}</p></li>
		<li><p><b>{@html $LL.privacy.website()}</b> {@html $LL.privacy.websiteDefinition()}</p></li>
		<li><p><b>{@html $LL.privacy.you()}</b> {@html $LL.privacy.youDefinition()}</p></li>
	</ul>

	<h2 class="text-2xl font-bold pt-3">{@html $LL.privacy.collectingAndUsingPersonalData()}</h2>
	<h3 class="text-xl font-semibold">{@html $LL.privacy.typesOfDataCollected()}</h3>
	<h4 class="font-semibold pt-3">{@html $LL.privacy.personalData()}</h4>
	<p>{@html $LL.privacy.personalDataDescription()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li><p>{@html $LL.privacy.emailAddress()}</p></li>
		<li><p>{@html $LL.privacy.usageData()}</p></li>
	</ul>

	<h4 class="font-semibold pt-3">{@html $LL.privacy.usageData()}</h4>
	<p>{@html $LL.privacy.usageDataDescription()}</p>
	<p>{@html $LL.privacy.usageDataDetails()}</p>
	<p>{@html $LL.privacy.mobileUsageData()}</p>
	<p>{@html $LL.privacy.browserUsageData()}</p>

	<h4 class="font-semibold pt-3">{@html $LL.privacy.trackingTechnologiesAndCookies()}</h4>
	<p>{@html $LL.privacy.trackingTechnologiesDescription()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li><p><b>{@html $LL.privacy.cookies()}</b> {@html $LL.privacy.cookiesDescription()}</p></li>
		<li>
			<p><b>{@html $LL.privacy.webBeacons()}</b> {@html $LL.privacy.webBeaconsDescription()}</p>
		</li>
	</ul>

	<p>{@html $LL.privacy.cookieTypes()}</p>
	<p>{@html $LL.privacy.cookiePurposes()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li>
			<p>
				<b>{@html $LL.privacy.necessaryCookies()}</b>
				{@html $LL.privacy.necessaryCookiesDescription()}
			</p>
		</li>
		<li>
			<p>
				<b>{@html $LL.privacy.acceptanceCookies()}</b>
				{@html $LL.privacy.acceptanceCookiesDescription()}
			</p>
		</li>
		<li>
			<p>
				<b>{@html $LL.privacy.functionalityCookies()}</b>
				{@html $LL.privacy.functionalityCookiesDescription()}
			</p>
		</li>
	</ul>
	<p>{@html $LL.privacy.cookiePolicyLink()}</p>

	<h3 class="text-xl font-semibold pt-3">{@html $LL.privacy.useOfPersonalData()}</h3>
	<p>{@html $LL.privacy.useOfPersonalDataDescription()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li>
			<p>
				{@html $LL.privacy.provideAndMaintainService()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.manageAccount()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.performanceOfContract()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.contactYou()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.provideNewsAndOffers()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.manageYourRequests()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.businessTransfers()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.otherPurposes()}
			</p>
		</li>
	</ul>

	<p>{@html $LL.privacy.sharingPersonalInformation()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li>
			<p>
				{@html $LL.privacy.withServiceProviders()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.forBusinessTransfers()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.withAffiliates()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.withBusinessPartners()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.withOtherUsers()}
			</p>
		</li>
		<li>
			<p>
				{@html $LL.privacy.withYourConsent()}
			</p>
		</li>
	</ul>

	<h3 class="text-xl font-semibold pt-3">{@html $LL.privacy.retentionOfPersonalData()}</h3>
	<p>{@html $LL.privacy.retentionOfPersonalDataDescription()}</p>
	<p>{@html $LL.privacy.retentionOfUsageData()}</p>

	<h3 class="text-xl font-semibold pt-3">{@html $LL.privacy.transferOfPersonalData()}</h3>
	<p>{@html $LL.privacy.transferOfPersonalDataDescription()}</p>
	<p>{@html $LL.privacy.consentToTransfer()}</p>
	<p>{@html $LL.privacy.dataSecurity()}</p>

	<h3 class="text-xl font-semibold pt-3">{@html $LL.privacy.deleteYourPersonalData()}</h3>
	<p>{@html $LL.privacy.deleteYourPersonalDataDescription()}</p>
	<p>{@html $LL.privacy.deleteFromService()}</p>
	<p>{@html $LL.privacy.updateOrDeleteInfo()}</p>
	<p>{@html $LL.privacy.retainCertainInfo()}</p>

	<h3 class="text-xl font-semibold pt-3">{@html $LL.privacy.disclosureOfPersonalData()}</h3>
	<h4 class="font-semibold">{@html $LL.privacy.businessTransactions()}</h4>
	<p>{@html $LL.privacy.businessTransactionsDescription()}</p>
	<h4 class="font-semibold">{@html $LL.privacy.lawEnforcement()}</h4>
	<p>{@html $LL.privacy.lawEnforcementDescription()}</p>
	<h4 class="font-semibold">{@html $LL.privacy.otherLegalRequirements()}</h4>
	<p>{@html $LL.privacy.otherLegalRequirementsDescription()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li><p>{@html $LL.privacy.complyWithLegalObligation()}</p></li>
		<li><p>{@html $LL.privacy.protectCompanyRights()}</p></li>
		<li><p>{@html $LL.privacy.preventWrongdoing()}</p></li>
		<li><p>{@html $LL.privacy.protectUserSafety()}</p></li>
		<li><p>{@html $LL.privacy.protectAgainstLiability()}</p></li>
	</ul>

	<h3 class="text-xl font-semibold pt-3">{@html $LL.privacy.securityOfPersonalData()}</h3>
	<p>{@html $LL.privacy.securityOfPersonalDataDescription()}</p>

	<h2 class="text-2xl font-bold pt-3">{@html $LL.privacy.childrensPrivacy()}</h2>
	<p>{@html $LL.privacy.childrensPrivacyDescription()}</p>
	<p>{@html $LL.privacy.parentalConsent()}</p>

	<h2 class="text-2xl font-bold pt-3">{@html $LL.privacy.linksToOtherWebsites()}</h2>
	<p>{@html $LL.privacy.linksToOtherWebsitesDescription()}</p>
	<p>{@html $LL.privacy.noControlOverThirdParty()}</p>

	<h2 class="text-2xl font-bold pt-3">{@html $LL.privacy.changesToPrivacyPolicy()}</h2>
	<p>{@html $LL.privacy.changesToPrivacyPolicyDescription()}</p>
	<p>{@html $LL.privacy.notifyChanges()}</p>
	<p>{@html $LL.privacy.reviewChanges()}</p>

	<h2 class="text-2xl font-bold pt-3">{@html $LL.privacy.contactUs()}</h2>
	<p>{@html $LL.privacy.contactUsDescription()}</p>
	<ul class="flex flex-col pl-6 list-disc gap-4">
		<li><p>{@html $LL.privacy.contactEmail()}</p></li>
	</ul>
</div>

<style>
	li {
		color: #d1d5db;
	}

	p {
		color: #374151;
	}
</style>
