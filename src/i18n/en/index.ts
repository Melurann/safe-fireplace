import type { BaseTranslation } from '../i18n-types'

const en = {
	nav: {
		home: 'Home',
		features: 'Features',
		about: 'About',
		team: 'Team',
		lang: 'Language',
		catalog: 'Open Catalog',
		rights: '© 2024 All rights reserved',
		links: 'Links',
		legal: 'Legal',
		terms: 'Terms of Service',
		privacy: 'Privacy Policy'
	},
	catalog_name: {
		catalog1: 'Catalog 1',
		catalog2: 'Catalog 2',
	},
	home: {
		intro: 'Transform your home with our handcrafted fireplaces and expert tiling services, blending timeless tradition with modern design.',
		button: 'Learn more',
	},
	features: [
		{
			title: 'Hiqh-Quality Materials',
			desc: 'Our fireplaces and tiling solutions are made from the finest materials to ensure durability and longevity.'
		},
		{
			title: 'Energy-Efficient',
			desc: 'Our fireplaces are designed to be energy-efficient and environmentally friendly.'
		},
		{
			title: 'Wide Range of Designs',
			desc: 'Choose from a variety of traditional, modern, or rustic fireplace and tile designs to suit your home.'
		},
		{
			title: 'Safe and Secure',
			desc: 'Our fireplaces come with built-in safety features, ensuring peace of mind for your family.'
		},
		{
			title: 'Expert Installation',
			desc: 'Our team of certified professionals ensures seamless and hassle-free installation of fireplaces and tiles.'
		},
		{
			title: 'Modern Technology',
			desc: 'Equipped with the latest technology, our fireplaces offer smart controls and connectivity.'
		}
	],
	about: {
		title: 'About SAFE-Fireplace',
		desc: [
			'At <b>SAFE-Fireplace</b>, we believe that a fireplace is more than just a heat source-it’s the heart of your home. Founded with a passion for craftsmanship and safety, we specialize in providing premium fireplaces and expert tiling services that combine modern technology with timeless design.<br><br>',
			'Our mission is to create warm, safe, and inviting spaces for families to gather and make memories. With a commitment to quality and sustainability, we handcraft each piece with care, ensuring durability and elegance in every detail.<br><br>',
			'We take pride in our work and strive to exceed your expectations, delivering exceptional service and superior products that enhance your home and lifestyle.'
		]
	},
	team: {
		title: 'Meet the Team',
		lang: 'Languages: ',
		members: [
			{
				firstname: 'Nihada',
				lastname: 'Seferovic',
				role: 'Manager & Consultant',
				languages: 'German, Slovenian',
				phone: '0038670868442',
				mailto: 'mssmkamini80@gmail.com',
				mailBtn: 'Contact Nihada'
			},
			{
				firstname: 'Sefko',
				lastname: 'Seferovic',
				role: 'Founder & Installer',
				languages: 'Slovenian, Croatian',
				phone: '0038641278221',
				mailto: 'mssmkamini80@gmail.com',
				mailBtn: 'Contact Sefko'
			},
			{
				firstname: 'Beno', 
				lastname: 'Seferovic',
				role: 'Head Installer',
				languages: 'English, Slovenian',
				phone: '0038651202315',
				mailto: 'beno.seferovic9@gmail.com',
				mailBtn: 'Contact Beno'
			},
		]
	},
	privacy: {
		title: 'Privacy Policy',
		date: `Last updated: {0:Date|simpleDate}`,
		description: 'This Privacy Policy describes our policies and procedures regarding the collection, use, and disclosure of your information when you use the Service and informs you about your privacy rights and how the law protects you.',
		personalDataUsage: 'We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.',
		policyCreation: 'This Privacy Policy was created with the help of the <a class="text-blue-500 underline" href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.',

		interpretationAndDefinitions: 'Interpretation and Definitions',
		interpretation: 'Interpretation',
		interpretationText: 'Words whose initial letter is capitalized have defined meanings under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.',
		definitions: 'Definitions',
		definitionsText: 'For the purposes of this Privacy Policy:',

		account: 'Account',
		accountDefinition: 'means a unique account created for you to access our Service or parts of our Service.',
		affiliate: 'Affiliate',
		affiliateDefinition: 'means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.',
		company: 'Company',
		companyDefinition: '(referred to as either "the Company", "We", "Us", or "Our" in this Agreement) refers to SAFE-Fireplace.',
		cookies: 'Cookies',
		cookiesDefinition: 'are small files that are placed on your computer, mobile device, or any other device by a website, containing details of your browsing history on that website among other things.',
		country: 'Country',
		countryDefinition: 'refers to: Austria',
		device: 'Device',
		deviceDefinition: 'means any device that can access the Service, such as a computer, a mobile phone, or a digital tablet.',
		personalData: 'Personal Data',
		personalDataDefinition: 'means any information relating to an identified or identifiable individual.',
		service: 'Service',
		serviceDefinition: 'refers to the Website.',
		serviceProvider: 'Service Provider',
		serviceProviderDefinition: 'means any natural or legal person who processes data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.',
		usageData: 'Usage Data',
		usageDataDefinition: 'refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).',
		website: 'Website',
		websiteDefinition: 'refers to SAFE-Fireplace, accessible at <a href="https://safe-fireplace.vercel.app/" rel="external nofollow noopener" target="_blank">https://safe-fireplace.vercel.app/</a>.',
		you: 'You',
		youDefinition: 'means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',

		collectingAndUsingPersonalData: 'Collecting and Using Your Personal Data',
		typesOfDataCollected: 'Types of Data Collected',
		personalDataDescription: 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:',
		emailAddress: 'Email address',
		usageDataDescription: 'Usage Data is collected automatically when using the Service.',
		usageDataDetails: 'Usage Data may include information such as your device\'s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.',
		mobileUsageData: 'When you use the Service via a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device\'s unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers, and other diagnostic data.',
		browserUsageData: 'We may also collect information that your browser sends whenever you visit our Service or when you access the Service via a mobile device.',

		trackingTechnologiesAndCookies: 'Tracking Technologies and Cookies',
		trackingTechnologiesDescription: 'We use Cookies and similar tracking technologies to track activity on our Service and store certain information. The tracking technologies used include beacons, tags, and scripts to collect and track information and to improve and analyze our Service. The technologies we use may include:',
		cookiesDescription: 'A cookie is a small file placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our Service. Unless you have adjusted your browser settings to refuse cookies, our Service may use cookies.',
		webBeacons: 'Web Beacons',
		webBeaconsDescription: 'Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear GIFs, pixel tags, and single-pixel GIFs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (e.g., recording the popularity of a certain section and verifying system and server integrity).',

		cookieTypes: 'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.',
		cookiePurposes: 'We use both Session and Persistent Cookies for the purposes set out below:',
		necessaryCookies: 'Necessary / Essential Cookies',
		necessaryCookiesDescription: 'Type: Session Cookies<br/>Administered by: Us<br/>Purpose: These Cookies are essential to provide you with services available through the Website and to enable you to use some of its features. They help authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services you have requested cannot be provided, and we only use these Cookies to provide you with those services.',
		acceptanceCookies: 'Cookies Policy / Acceptance Cookies',
		acceptanceCookiesDescription: 'Type: Persistent Cookies<br/>Administered by: Us<br/>Purpose: These Cookies identify whether users have accepted the use of cookies on the Website.',
		functionalityCookies: 'Functionality Cookies',
		functionalityCookiesDescription: 'Type: Persistent Cookies<br/>Administered by: Us<br/>Purpose: These Cookies allow us to remember choices you make when you use the Website, such as your login details or language preference. The purpose of these Cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use the Website.',
		cookiePolicyLink: 'For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.',

		useOfPersonalData: 'Use of Your Personal Data',
		useOfPersonalDataDescription: 'The Company may use Personal Data for the following purposes:',
		provideAndMaintainService: '<b>To provide and maintain our Service</b>, including to monitor the usage of our Service.',
		manageAccount: '<b>To manage Your Account:</b> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.',
		performanceOfContract: '<b>For the performance of a contract:</b> the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service.',
		contactYou: '<b>To contact You:</b> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application\'s push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including the security updates, when necessary or reasonable for their implementation.',
		provideNewsAndOffers: '<b>To provide You</b> with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about, unless You have opted not to receive such information.',
		manageYourRequests: '<b>To manage Your requests:</b> To attend and manage Your requests to Us.',
		businessTransfers: '<b>For business transfers:</b> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.',
		otherPurposes: '<b>For other purposes:</b> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Service, products, services, marketing, and your experience.',

		sharingPersonalInformation: 'We may share Your personal information in the following situations:',
		withServiceProviders: '<b>With Service Providers:</b> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.',
		forBusinessTransfers: '<b>For business transfers:</b> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.',
		withAffiliates: '<b>With Affiliates:</b> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us.',
		withBusinessPartners: '<b>With business partners:</b> We may share Your information with Our business partners to offer You certain products, services, or promotions.',
		withOtherUsers: '<b>With other users:</b> When You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.',
		withYourConsent: '<b>With Your consent:</b> We may disclose Your personal information for any other purpose with Your consent.',

		retentionOfPersonalData: 'Retention of Your Personal Data',
		retentionOfPersonalDataDescription: 'The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.',
		retentionOfUsageData: 'The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.',

		transferOfPersonalData: 'Transfer of Your Personal Data',
		transferOfPersonalDataDescription: 'Your information, including Personal Data, is processed at the Company\'s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.',
		consentToTransfer: 'Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.',
		dataSecurity: 'The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.',

		deleteYourPersonalData: 'Delete Your Personal Data',
		deleteYourPersonalDataDescription: 'You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.',
		deleteFromService: 'Our Service may give You the ability to delete certain information about You from within the Service.',
		updateOrDeleteInfo: 'You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.',
		retainCertainInfo: 'Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.',

		disclosureOfPersonalData: 'Disclosure of Your Personal Data',
		businessTransactions: 'Business Transactions',
		businessTransactionsDescription: 'If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.',
		lawEnforcement: 'Law Enforcement',
		lawEnforcementDescription: 'Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).',
		otherLegalRequirements: 'Other Legal Requirements',
		otherLegalRequirementsDescription: 'The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:',
		complyWithLegalObligation: 'Comply with a legal obligation',
		protectCompanyRights: 'Protect and defend the rights or property of the Company',
		preventWrongdoing: 'Prevent or investigate possible wrongdoing in connection with the Service',
		protectUserSafety: 'Protect the personal safety of Users of the Service or the public',
		protectAgainstLiability: 'Protect against legal liability',

		securityOfPersonalData: 'Security of Your Personal Data',
		securityOfPersonalDataDescription: 'The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.',

		childrensPrivacy: 'Children\'s Privacy',
		childrensPrivacyDescription: 'Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.',
		parentalConsent: 'If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent\'s consent before We collect and use that information.',

		linksToOtherWebsites: 'Links to Other Websites',
		linksToOtherWebsitesDescription: 'Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party\'s site. We strongly advise You to review the Privacy Policy of every site You visit.',
		noControlOverThirdParty: 'We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',

		changesToPrivacyPolicy: 'Changes to this Privacy Policy',
		changesToPrivacyPolicyDescription: 'We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.',
		notifyChanges: 'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.',
		reviewChanges: 'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',

		contactUs: 'Contact Us',
		contactUsDescription: 'If you have any questions about this Privacy Policy, You can contact us:',
		contactEmail: 'By email: safefireplace9@gmail.com',
	},
	terms: {
		title: 'Terms and Conditions',
		welcome: 'Welcome to SAFE-Fireplace!',
		intro: 'These terms and conditions outline the rules and regulations for the use of SAFE-Fireplace\'s Website, located at www.safe-fireplace.bplaced.net.',
		acceptance: 'By accessing this website, we assume you accept these terms and conditions. Do not continue to use SAFE-Fireplace if you do not agree to all of the terms and conditions stated on this page.',
		terminology: `
			The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice, as well as all Agreements: "Client", "You", and "Your" refer to you, the person logging on to this website and compliant with the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us" refer to our Company. "Party", "Parties", or "Us" refer to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, in accordance with and subject to the prevailing law of the Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they are taken as interchangeable and therefore as referring to the same. Our Terms and Conditions were created with the help of the <a class="text-blue-500 underline" href="https://www.privacypolicyonline.com/terms-conditions-generator/">Terms & Conditions Generator</a>.
		`,
		cookies: {
			title: 'Cookies',
			description: 'We employ the use of cookies. By accessing SAFE-Fireplace, you agree to use cookies in accordance with SAFE-Fireplace\'s Privacy Policy.',
			usage: 'Most interactive websites use cookies to retrieve user details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.',
		},
		license: {
			title: 'License',
			description: 'Unless otherwise stated, SAFE-Fireplace and/or its licensors own the intellectual property rights for all material on SAFE-Fireplace. All intellectual property rights are reserved. You may access this from SAFE-Fireplace for your own personal use, subject to restrictions set in these terms and conditions.',
			restrictions: 'You must not:',
			restrictionsList: [
				'Republish material from SAFE-Fireplace',
				'Sell, rent, or sub-license material from SAFE-Fireplace',
				'Reproduce, duplicate, or copy material from SAFE-Fireplace',
				'Redistribute content from SAFE-Fireplace',
			],
			agreementStart: 'This Agreement shall begin on the date hereof.',
		},
		comments: {
			title: 'Comments',
			description: 'Certain parts of this website offer users the opportunity to post and exchange opinions and information in certain areas of the website. SAFE-Fireplace does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of SAFE-Fireplace, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, WaitFor shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.',
			monitoring: 'SAFE-Fireplace reserves the right to monitor all Comments and to remove any Comments that can be considered inappropriate, offensive, or in breach of these Terms and Conditions.',
			warranty: 'You warrant and represent that:',
			warrantyList: [
				'You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;',
				'The Comments do not infringe any intellectual property right, including but not limited to copyright, patent, or trademark of any third party;',
				'The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material that is an invasion of privacy;',
				'The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.',
			],
			licenseGrant: 'You hereby grant WaitFor a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.',
		},
		hyperlinking: {
			title: 'Hyperlinking to our Content',
			description: 'The following organizations may link to our Website without prior written approval:',
			organizations: [
				'Government agencies;',
				'Search engines;',
				'News organizations;',
				'Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and',
				'System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.',
			],
			linkConditions: 'These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party\'s site.',
			approvalConditions: 'We may consider and approve other link requests from the following types of organizations:',
			approvalOrganizations: [
				'Commonly-known consumer and/or business information sources;',
				'Dot.com community sites;',
				'Associations or other groups representing charities;',
				'Online directory distributors;',
				'Internet portals;',
				'Accounting, law, and consulting firms; and',
				'Educational institutions and trade associations.',
			],
			approvalCriteria: 'We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of SAFE-Fireplace; and (d) the link is in the context of general resource information.',
			linkRules: 'These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party\'s site.',
			contactInfo: 'If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to SAFE-Fireplace. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.',
			approvedLinkMethods: 'Approved organizations may hyperlink to our Website as follows:',
			approvedLinkList: [
				'By use of our corporate name; or',
				'By use of the uniform resource locator being linked to; or',
				'By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party\'s site.',
			],
			trademarkNotice: 'No use of SAFE-Fireplace\'s logo or other artwork will be allowed for linking absent a trademark license agreement.',
		},
		iframes: {
			title: 'iFrames',
			description: 'Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.',
		},
		contentLiability: {
			title: 'Content Liability',
			description: 'We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of any third-party rights.',
		},
		reservationOfRights: {
			title: 'Reservation of Rights',
			description: 'We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.',
		},
		removalOfLinks: {
			title: 'Removal of Links from our Website',
			description: 'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to do so or to respond to you directly.',
			disclaimer: 'We do not ensure that the information on this website is correct, and we do not warrant its completeness or accuracy. Nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.',
		},
		disclaimer: {
			title: 'Disclaimer',
			description: 'To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:',
			points: [
				'limit or exclude our or your liability for death or personal injury;',
				'limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
				'limit any of our or your liabilities in any way that is not permitted under applicable law; or',
				'exclude any of our or your liabilities that may not be excluded under applicable law.',
			],
			limitations: 'The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.',
			freeServiceDisclaimer: 'As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.',
		},
	},
	log: `This log was called from '{fileName:string}'`,
} satisfies BaseTranslation

export default en
