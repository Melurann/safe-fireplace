import type { Translation } from '../i18n-types'

const de = {
	nav: {
		home: 'Startseite',
		features: 'Features',
		about: 'Über uns',
		team: 'Team',
		lang: 'Sprache',
		catalog: 'Katalog öffnen',
		rights: '© 2024 Sämtliche Rechte vorbehalten',
		links: 'Links',
		legal: 'Rechtliches',
		terms: 'Nutzungsbedingungen',
		privacy: 'Datenschutzerklärung'
	},
	catalog_name: {
		catalog1: 'Katalog 1',
		catalog2: 'Katalog 2',
	},
	home: {
		intro: 'Verwandeln Sie Ihr Zuhause mit unseren handgefertigten Kaminen und fachmännischen Fliesenlegern, die zeitlose Tradition mit modernem Design verbinden.',
		button: 'Mehr erfahren',
	},
	features: [
		{
			title: 'Hochwertige Materialien',
			desc: 'Unsere Kamine und Fliesenlösungen bestehen aus den besten Materialien, um Langlebigkeit und Haltbarkeit zu gewährleisten.'
		},
		{
			title: 'Energieeffizienz',
			desc: 'Unsere Kamine sind energieeffizient und umweltfreundlich konzipiert.'
		},
		{
			title: 'Große Auswahl an Designs',
			desc: 'Wählen Sie aus einer Vielzahl von traditionellen, modernen oder rustikalen Kamin- und Fliesendesigns, die zu Ihrem Zuhause passen.'
		},
		{
			title: 'Sicher und geschützt',
			desc: 'Unsere Kamine verfügen über integrierte Sicherheitsfunktionen, die Ihnen und Ihrer Familie Sicherheit bieten.'
		},
		{
			title: 'Fachgerechte Installation',
			desc: 'Unser Team von zertifizierten Fachleuten sorgt für eine reibungslose und problemlose Installation von Kaminen und Fliesen.'
		},
		{
			title: 'Moderne Technologie',
			desc: 'Ausgestattet mit der neuesten Technologie bieten unsere Kamine intelligente Steuerungen und Konnektivität.'
		}
	],
	about: {
		title: 'Über SAFE-Fireplace',
		desc: [  
			'Bei <b>SAFE-Fireplace</b> sind wir der Meinung, dass ein Kamin mehr ist als nur eine Wärmequelle – er ist das Herz Ihres Zuhauses. Gegründet aus Leidenschaft für Handwerkskunst und Sicherheit, spezialisieren wir uns auf erstklassige Kamine und professionelle Fliesenarbeiten, die moderne Technologie mit zeitlosem Design verbinden.<br><br>',  
			'Unsere Mission ist es, warme, sichere und einladende Räume zu schaffen, in denen Familien zusammenkommen und wertvolle Erinnerungen schaffen können. Mit einem starken Engagement für Qualität und Nachhaltigkeit fertigen wir jedes Stück mit größter Sorgfalt, um Langlebigkeit und Eleganz bis ins kleinste Detail zu gewährleisten.<br><br>',  
			'Wir sind stolz auf unsere Arbeit und setzen alles daran, Ihre Erwartungen zu übertreffen – mit außergewöhnlichem Service und hochwertigen Produkten, die Ihr Zuhause und Ihren Lebensstil bereichern.'  
		 ]
	},
	team: {
		title: 'Unser Team',
		lang: 'Sprachen: ',
		members: [
			{
				firstname: 'Nihada',
				lastname: 'Seferovic',
				role: 'Managerin & Beraterin',
				languages: 'Deutsch, Slowenisch',
				phone: '0038670868442',
				mailto: 'mssmkamini80@gmail.com',
				mailBtn: 'Nihada kontaktieren'
			},
			{
				firstname: 'Sefko',
				lastname: 'Seferovic',
				role: 'Gründer & Monteur',
				languages: 'Slowenisch, Kroatisch',
				phone: '0038641278221',
				mailto: 'mssmkamini80@gmail.com',
				mailBtn: 'Sefko kontaktieren'
			},
			{
				firstname: 'Beno', 
				lastname: 'Seferovic',
				role: 'Chefinstallateur',
				languages: 'Englisch, Slowenisch',
				phone: '0038651202315',
				mailto: 'beno.seferovic9@gmail.com',
				mailBtn: 'Beno kontaktieren'
			},
		]
	},
	privacy: {
		title: 'Datenschutzerklärung',
		date: `Zuletzt aktualisiert: {0|simpleDate}`,
		description: 'Diese Datenschutzrichtlinie beschreibt unsere Richtlinien und Verfahren zur Sammlung, Verwendung und Offenlegung Ihrer Informationen, wenn Sie den Dienst nutzen, und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt.',
		personalDataUsage: 'Wir verwenden Ihre persönlichen Daten, um den Dienst bereitzustellen und zu verbessern. Durch die Nutzung des Dienstes erklären Sie sich mit der Sammlung und Verwendung von Informationen gemäß dieser Datenschutzrichtlinie einverstanden.',
		policyCreation: 'Diese Datenschutzrichtlinie wurde mit Hilfe des <a class="text-blue-500 underline" href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a> erstellt.',
	
		interpretationAndDefinitions: 'Interpretation und Definitionen',
		interpretation: 'Interpretation',
		interpretationText: 'Die Wörter, deren Anfangsbuchstabe groß geschrieben ist, haben unter den folgenden Bedingungen definierte Bedeutungen. Die folgenden Definitionen haben die gleiche Bedeutung, unabhängig davon, ob sie im Singular oder im Plural erscheinen.',
		definitions: 'Definitionen',
		definitionsText: 'Für die Zwecke dieser Datenschutzrichtlinie:',
	
		account: 'Konto',
		accountDefinition: 'bedeutet ein eindeutiges Konto, das für Sie erstellt wurde, um auf unseren Dienst oder Teile unseres Dienstes zuzugreifen.',
		affiliate: 'Tochtergesellschaft',
		affiliateDefinition: 'bedeutet eine Einheit, die eine Partei kontrolliert, von einer Partei kontrolliert wird oder unter gemeinsamer Kontrolle mit einer Partei steht, wobei "Kontrolle" den Besitz von 50 % oder mehr der Anteile, des Eigenkapitals oder anderer Wertpapiere bedeutet, die zur Wahl von Direktoren oder anderen Leitungsorganen berechtigt sind.',
		company: 'Unternehmen',
		companyDefinition: '(im Folgenden als "das Unternehmen", "wir", "uns" oder "unser" in dieser Vereinbarung bezeichnet) bezieht sich auf SAFE-Fireplace.',
		cookies: 'Cookies',
		cookiesDefinition: 'sind kleine Dateien, die von einer Website auf Ihrem Computer, Mobilgerät oder einem anderen Gerät platziert werden und unter anderem Details zu Ihrem Surfverlauf auf dieser Website enthalten.',
		country: 'Land',
		countryDefinition: 'bezieht sich auf: Österreich',
		device: 'Gerät',
		deviceDefinition: 'bedeutet jedes Gerät, das auf den Dienst zugreifen kann, wie z. B. ein Computer, ein Mobiltelefon oder ein digitales Tablet.',
		personalData: 'Persönliche Daten',
		personalDataDefinition: 'sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.',
		service: 'Dienst',
		serviceDefinition: 'bezieht sich auf die Website.',
		serviceProvider: 'Dienstleister',
		serviceProviderDefinition: 'bedeutet jede natürliche oder juristische Person, die die Daten im Namen des Unternehmens verarbeitet. Es bezieht sich auf Drittunternehmen oder Einzelpersonen, die vom Unternehmen beschäftigt werden, um den Dienst zu erleichtern, den Dienst im Namen des Unternehmens zu erbringen, Dienstleistungen im Zusammenhang mit dem Dienst zu erbringen oder das Unternehmen bei der Analyse zu unterstützen, wie der Dienst genutzt wird.',
		usageData: 'Nutzungsdaten',
		usageDataDefinition: 'bezieht sich auf Daten, die automatisch entweder durch die Nutzung des Dienstes oder durch die Infrastruktur des Dienstes selbst erfasst werden (z. B. die Dauer eines Seitenbesuchs).',
		website: 'Website',
		websiteDefinition: 'bezieht sich auf SAFE-Fireplace, erreichbar unter <a href="https://safe-fireplace.vercel.app/" rel="external nofollow noopener" target="_blank">https://safe-fireplace.vercel.app/</a>.',
		you: 'Sie',
		youDefinition: 'bedeutet die Person, die auf den Dienst zugreift oder ihn nutzt, oder das Unternehmen oder eine andere juristische Person, in deren Namen diese Person auf den Dienst zugreift oder ihn nutzt, sofern zutreffend.',
	
		collectingAndUsingPersonalData: 'Erhebung und Verwendung Ihrer persönlichen Daten',
		typesOfDataCollected: 'Arten der gesammelten Daten',
		personalDataDescription: 'Während Sie unseren Dienst nutzen, können wir Sie bitten, uns bestimmte persönlich identifizierbare Informationen zur Verfügung zu stellen, die zur Kontaktaufnahme oder Identifizierung verwendet werden können. Persönlich identifizierbare Informationen können unter anderem Folgendes umfassen:',
		emailAddress: 'E-Mail-Adresse',
		usageDataDescription: 'Nutzungsdaten werden automatisch erfasst, wenn der Dienst genutzt wird.',
		usageDataDetails: 'Nutzungsdaten können Informationen wie die Internetprotokolladresse Ihres Geräts (z. B. IP-Adresse), Browsertyp, Browserversion, die von Ihnen besuchten Seiten unseres Dienstes, das Datum und die Uhrzeit Ihres Besuchs, die auf diesen Seiten verbrachte Zeit, eindeutige Gerätekennungen und andere Diagnosedaten umfassen.',
		mobileUsageData: 'Wenn Sie den Dienst über ein mobiles Gerät nutzen, können wir bestimmte Informationen automatisch sammeln, darunter, aber nicht beschränkt auf, den Typ des mobilen Geräts, die eindeutige ID Ihres mobilen Geräts, die IP-Adresse Ihres mobilen Geräts, Ihr mobiles Betriebssystem, den Typ des mobilen Internetbrowsers, den Sie verwenden, eindeutige Gerätekennungen und andere Diagnosedaten.',
		browserUsageData: 'Wir können auch Informationen sammeln, die Ihr Browser sendet, wenn Sie unseren Dienst besuchen oder wenn Sie den Dienst über ein mobiles Gerät nutzen.',
	
		trackingTechnologiesAndCookies: 'Tracking-Technologien und Cookies',
		trackingTechnologiesDescription: 'Wir verwenden Cookies und ähnliche Tracking-Technologien, um die Aktivität auf unserem Dienst zu verfolgen und bestimmte Informationen zu speichern. Zu den verwendeten Tracking-Technologien gehören Beacons, Tags und Skripte, um Informationen zu sammeln und zu verfolgen sowie unseren Dienst zu verbessern und zu analysieren. Die von uns verwendeten Technologien können Folgendes umfassen:',
		cookiesDescription: 'Ein Cookie ist eine kleine Datei, die auf Ihrem Gerät platziert wird. Sie können Ihren Browser anweisen, alle Cookies abzulehnen oder anzuzeigen, wann ein Cookie gesendet wird. Wenn Sie jedoch keine Cookies akzeptieren, können Sie möglicherweise einige Teile unseres Dienstes nicht nutzen. Sofern Sie Ihre Browsereinstellungen nicht so angepasst haben, dass sie Cookies ablehnen, kann unser Dienst Cookies verwenden.',
		webBeacons: 'Web Beacons',
		webBeaconsDescription: 'Bestimmte Abschnitte unseres Dienstes und unsere E-Mails können kleine elektronische Dateien enthalten, die als Web Beacons (auch bekannt als Clear GIFs, Pixel Tags und Single-Pixel GIFs) bezeichnet werden und es dem Unternehmen ermöglichen, beispielsweise Benutzer zu zählen, die diese Seiten besucht oder eine E-Mail geöffnet haben, und für andere verwandte Website-Statistiken (z. B. die Aufzeichnung der Beliebtheit eines bestimmten Abschnitts und die Überprüfung der System- und Serverintegrität).',
	
		cookieTypes: 'Cookies können "Persistent" oder "Session" Cookies sein. Persistent Cookies verbleiben auf Ihrem persönlichen Computer oder Mobilgerät, wenn Sie offline gehen, während Session Cookies gelöscht werden, sobald Sie Ihren Webbrowser schließen.',
		cookiePurposes: 'Wir verwenden sowohl Session- als auch Persistent Cookies für die folgenden Zwecke:',
		necessaryCookies: 'Notwendige / Essenzielle Cookies',
		necessaryCookiesDescription: 'Typ: Session Cookies<br/>Verwaltet von: Uns<br/>Zweck: Diese Cookies sind erforderlich, um Ihnen die über die Website verfügbaren Dienste bereitzustellen und Ihnen die Nutzung einiger ihrer Funktionen zu ermöglichen. Sie helfen dabei, Benutzer zu authentifizieren und betrügerische Nutzung von Benutzerkonten zu verhindern. Ohne diese Cookies können die von Ihnen angeforderten Dienste nicht bereitgestellt werden, und wir verwenden diese Cookies nur, um Ihnen diese Dienste bereitzustellen.',
		acceptanceCookies: 'Cookies-Richtlinie / Akzeptanz-Cookies',
		acceptanceCookiesDescription: 'Typ: Persistent Cookies<br/>Verwaltet von: Uns<br/>Zweck: Diese Cookies identifizieren, ob Benutzer die Verwendung von Cookies auf der Website akzeptiert haben.',
		functionalityCookies: 'Funktionalitäts-Cookies',
		functionalityCookiesDescription: 'Typ: Persistent Cookies<br/>Verwaltet von: Uns<br/>Zweck: Diese Cookies ermöglichen es uns, Ihre getroffenen Entscheidungen zu speichern, wenn Sie die Website nutzen, wie z. B. Ihre Anmeldedaten oder Sprachpräferenz. Der Zweck dieser Cookies besteht darin, Ihnen ein persönlicheres Erlebnis zu bieten und zu vermeiden, dass Sie Ihre Präferenzen jedes Mal neu eingeben müssen, wenn Sie die Website nutzen.',
		cookiePolicyLink: 'Weitere Informationen zu den von uns verwendeten Cookies und Ihren Möglichkeiten in Bezug auf Cookies finden Sie in unserer Cookie-Richtlinie oder im Abschnitt Cookies unserer Datenschutzrichtlinie.',
	
		useOfPersonalData: 'Verwendung Ihrer persönlichen Daten',
		useOfPersonalDataDescription: 'Das Unternehmen kann Ihre persönlichen Daten für die folgenden Zwecke verwenden:',
		provideAndMaintainService: '<b>Zur Bereitstellung und Aufrechterhaltung unseres Dienstes</b>, einschließlich der Überwachung der Nutzung unseres Dienstes.',
		manageAccount: '<b>Zur Verwaltung Ihres Kontos:</b> zur Verwaltung Ihrer Registrierung als Nutzer des Dienstes. Die von Ihnen bereitgestellten persönlichen Daten können Ihnen Zugang zu verschiedenen Funktionen des Dienstes gewähren, die Ihnen als registriertem Nutzer zur Verfügung stehen.',
		performanceOfContract: '<b>Zur Erfüllung eines Vertrags:</b> die Entwicklung, Einhaltung und Durchführung des Kaufvertrags für die von Ihnen erworbenen Produkte, Artikel oder Dienstleistungen oder eines anderen Vertrags mit uns über den Dienst.',
		contactYou: '<b>Um Sie zu kontaktieren:</b> Um Sie per E-Mail, Telefonanrufe, SMS oder andere gleichwertige Formen der elektronischen Kommunikation, wie z. B. Push-Benachrichtigungen einer mobilen Anwendung, über Updates oder informative Mitteilungen in Bezug auf die Funktionen, Produkte oder vertraglichen Dienstleistungen zu informieren, einschließlich der Sicherheitsupdates, wenn dies für deren Implementierung notwendig oder angemessen ist.',
		provideNewsAndOffers: '<b>Um Ihnen</b> Nachrichten, Sonderangebote und allgemeine Informationen über andere Waren, Dienstleistungen und Veranstaltungen anzubieten, die wir anbieten und die denen ähnlich sind, die Sie bereits erworben oder angefragt haben, es sei denn, Sie haben sich dafür entschieden, solche Informationen nicht zu erhalten.',
		manageYourRequests: '<b>Zur Bearbeitung Ihrer Anfragen:</b> Um Ihre Anfragen an uns zu bearbeiten und zu verwalten.',
		businessTransfers: '<b>Für Unternehmensübertragungen:</b> Wir können Ihre Informationen verwenden, um eine Fusion, Veräußerung, Umstrukturierung, Reorganisation, Auflösung oder einen anderen Verkauf oder eine Übertragung einiger oder aller unserer Vermögenswerte zu bewerten oder durchzuführen, sei es als laufendes Unternehmen oder im Rahmen eines Insolvenz-, Liquidations- oder ähnlichen Verfahrens, bei dem die von uns über die Nutzer des Dienstes gespeicherten persönlichen Daten zu den übertragenen Vermögenswerten gehören.',
		otherPurposes: '<b>Für andere Zwecke:</b> Wir können Ihre Informationen für andere Zwecke verwenden, wie z. B. Datenanalyse, Identifizierung von Nutzungstrends, Bestimmung der Effektivität unserer Werbekampagnen und zur Bewertung und Verbesserung unseres Dienstes, unserer Produkte, Dienstleistungen, Marketing und Ihrer Erfahrung.',
	
		sharingPersonalInformation: 'Wir können Ihre persönlichen Informationen in den folgenden Situationen teilen:',
		withServiceProviders: '<b>Mit Dienstleistern:</b> Wir können Ihre persönlichen Informationen mit Dienstleistern teilen, um die Nutzung unseres Dienstes zu überwachen und zu analysieren, um Sie zu kontaktieren.',
		forBusinessTransfers: '<b>Für Unternehmensübertragungen:</b> Wir können Ihre persönlichen Informationen im Zusammenhang mit oder während der Verhandlungen über eine Fusion, den Verkauf von Unternehmensvermögen, eine Finanzierung oder den Erwerb eines Teils oder des gesamten Unternehmens an ein anderes Unternehmen teilen oder übertragen.',
		withAffiliates: '<b>Mit verbundenen Unternehmen:</b> Wir können Ihre Informationen mit unseren verbundenen Unternehmen teilen, in diesem Fall werden wir diese verbundenen Unternehmen verpflichten, diese Datenschutzrichtlinie einzuhalten. Verbundene Unternehmen umfassen unsere Muttergesellschaft und alle anderen Tochtergesellschaften, Joint-Venture-Partner oder andere Unternehmen, die wir kontrollieren oder die unter gemeinsamer Kontrolle mit uns stehen.',
		withBusinessPartners: '<b>Mit Geschäftspartnern:</b> Wir können Ihre Informationen mit unseren Geschäftspartnern teilen, um Ihnen bestimmte Produkte, Dienstleistungen oder Werbeaktionen anzubieten.',
		withOtherUsers: '<b>Mit anderen Nutzern:</b> Wenn Sie persönliche Informationen teilen oder anderweitig in öffentlichen Bereichen mit anderen Nutzern interagieren, können diese Informationen von allen Nutzern eingesehen und öffentlich außerhalb verteilt werden.',
		withYourConsent: '<b>Mit Ihrer Zustimmung:</b> Wir können Ihre persönlichen Informationen für jeden anderen Zweck mit Ihrer Zustimmung offenlegen.',
	
		retentionOfPersonalData: 'Aufbewahrung Ihrer persönlichen Daten',
		retentionOfPersonalDataDescription: 'Das Unternehmen wird Ihre persönlichen Daten nur so lange aufbewahren, wie es für die in dieser Datenschutzrichtlinie festgelegten Zwecke erforderlich ist. Wir werden Ihre persönlichen Daten aufbewahren und verwenden, soweit dies erforderlich ist, um unseren gesetzlichen Verpflichtungen nachzukommen (z. B. wenn wir verpflichtet sind, Ihre Daten zur Einhaltung der geltenden Gesetze aufzubewahren), Streitigkeiten beizulegen und unsere rechtlichen Vereinbarungen und Richtlinien durchzusetzen.',
		retentionOfUsageData: 'Das Unternehmen wird Nutzungsdaten auch für interne Analysezwecke aufbewahren. Nutzungsdaten werden in der Regel für einen kürzeren Zeitraum aufbewahrt, es sei denn, diese Daten werden verwendet, um die Sicherheit zu stärken oder die Funktionalität unseres Dienstes zu verbessern, oder wir sind gesetzlich verpflichtet, diese Daten für längere Zeiträume aufzubewahren.',
	
		transferOfPersonalData: 'Übertragung Ihrer persönlichen Daten',
		transferOfPersonalDataDescription: 'Ihre Informationen, einschließlich persönlicher Daten, werden an den Betriebsstandorten des Unternehmens und an anderen Orten verarbeitet, an denen sich die an der Verarbeitung beteiligten Parteien befinden. Dies bedeutet, dass diese Informationen möglicherweise auf Computer außerhalb Ihres Staates, Ihrer Provinz, Ihres Landes oder einer anderen staatlichen Gerichtsbarkeit übertragen und dort gespeichert werden, in denen die Datenschutzgesetze möglicherweise anders sind als in Ihrer Gerichtsbarkeit.',
		consentToTransfer: 'Ihre Zustimmung zu dieser Datenschutzrichtlinie, gefolgt von der Übermittlung solcher Informationen, stellt Ihre Zustimmung zu dieser Übertragung dar.',
		dataSecurity: 'Das Unternehmen wird alle angemessenen Schritte unternehmen, um sicherzustellen, dass Ihre Daten sicher und in Übereinstimmung mit dieser Datenschutzrichtlinie behandelt werden, und es wird keine Übertragung Ihrer persönlichen Daten an eine Organisation oder ein Land erfolgen, es sei denn, es gibt angemessene Kontrollen, einschließlich der Sicherheit Ihrer Daten und anderer persönlicher Informationen.',
	
		deleteYourPersonalData: 'Löschung Ihrer persönlichen Daten',
		deleteYourPersonalDataDescription: 'Sie haben das Recht, Ihre persönlichen Daten zu löschen oder uns aufzufordern, Ihnen bei der Löschung der persönlichen Daten zu helfen, die wir über Sie gesammelt haben.',
		deleteFromService: 'Unser Dienst kann Ihnen die Möglichkeit bieten, bestimmte Informationen über Sie innerhalb des Dienstes zu löschen.',
		updateOrDeleteInfo: 'Sie können Ihre Informationen jederzeit aktualisieren, ändern oder löschen, indem Sie sich in Ihr Konto einloggen, falls Sie eines haben, und den Abschnitt der Kontoeinstellungen aufrufen, der es Ihnen ermöglicht, Ihre persönlichen Informationen zu verwalten. Sie können uns auch kontaktieren, um Zugang zu, Berichtigung oder Löschung aller persönlichen Informationen anzufordern, die Sie uns zur Verfügung gestellt haben.',
		retainCertainInfo: 'Bitte beachten Sie jedoch, dass wir möglicherweise bestimmte Informationen aufbewahren müssen, wenn wir eine gesetzliche Verpflichtung oder eine rechtliche Grundlage dafür haben.',
	
		disclosureOfPersonalData: 'Offenlegung Ihrer persönlichen Daten',
		businessTransactions: 'Geschäftstransaktionen',
		businessTransactionsDescription: 'Wenn das Unternehmen in eine Fusion, Übernahme oder einen Verkauf von Vermögenswerten verwickelt ist, können Ihre persönlichen Daten übertragen werden. Wir werden Sie benachrichtigen, bevor Ihre persönlichen Daten übertragen werden und einer anderen Datenschutzrichtlinie unterliegen.',
		lawEnforcement: 'Strafverfolgung',
		lawEnforcementDescription: 'Unter bestimmten Umständen kann das Unternehmen verpflichtet sein, Ihre persönlichen Daten offenzulegen, wenn dies gesetzlich vorgeschrieben ist oder auf gültige Anfragen von öffentlichen Behörden (z. B. einem Gericht oder einer Regierungsbehörde) reagiert wird.',
		otherLegalRequirements: 'Andere gesetzliche Anforderungen',
		otherLegalRequirementsDescription: 'Das Unternehmen kann Ihre persönlichen Daten in dem guten Glauben offenlegen, dass eine solche Handlung notwendig ist, um:',
		complyWithLegalObligation: 'Eine gesetzliche Verpflichtung zu erfüllen',
		protectCompanyRights: 'Die Rechte oder das Eigentum des Unternehmens zu schützen und zu verteidigen',
		preventWrongdoing: 'Mögliches Fehlverhalten in Verbindung mit dem Dienst zu verhindern oder zu untersuchen',
		protectUserSafety: 'Die persönliche Sicherheit der Nutzer des Dienstes oder der Öffentlichkeit zu schützen',
		protectAgainstLiability: 'Vor rechtlicher Haftung zu schützen',
	
		securityOfPersonalData: 'Sicherheit Ihrer persönlichen Daten',
		securityOfPersonalDataDescription: 'Die Sicherheit Ihrer persönlichen Daten ist uns wichtig, aber denken Sie daran, dass keine Methode der Übertragung über das Internet oder der elektronischen Speicherung 100% sicher ist. Während wir uns bemühen, kommerziell akzeptable Mittel zum Schutz Ihrer persönlichen Daten zu verwenden, können wir deren absolute Sicherheit nicht garantieren.',
	
		childrensPrivacy: 'Datenschutz für Kinder',
		childrensPrivacyDescription: 'Unser Dienst richtet sich nicht an Personen unter 13 Jahren. Wir sammeln wissentlich keine persönlich identifizierbaren Informationen von Personen unter 13 Jahren. Wenn Sie ein Elternteil oder Vormund sind und Sie wissen, dass Ihr Kind uns persönliche Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte. Wenn wir feststellen, dass wir persönliche Daten von einer Person unter 13 Jahren ohne Überprüfung der elterlichen Zustimmung gesammelt haben, ergreifen wir Schritte, um diese Informationen von unseren Servern zu entfernen.',
		parentalConsent: 'Wenn wir auf Zustimmung als rechtliche Grundlage für die Verarbeitung Ihrer Informationen angewiesen sind und Ihr Land die Zustimmung eines Elternteils erfordert, können wir die Zustimmung Ihres Elternteils verlangen, bevor wir diese Informationen sammeln und verwenden.',
	
		linksToOtherWebsites: 'Links zu anderen Websites',
		linksToOtherWebsitesDescription: 'Unser Dienst kann Links zu anderen Websites enthalten, die nicht von uns betrieben werden. Wenn Sie auf einen Link eines Drittanbieters klicken, werden Sie zu dessen Website weitergeleitet. Wir raten Ihnen dringend, die Datenschutzrichtlinie jeder Website, die Sie besuchen, zu überprüfen.',
		noControlOverThirdParty: 'Wir haben keine Kontrolle über und übernehmen keine Verantwortung für den Inhalt, die Datenschutzrichtlinien oder Praktiken von Websites oder Diensten Dritter.',
	
		changesToPrivacyPolicy: 'Änderungen an dieser Datenschutzrichtlinie',
		changesToPrivacyPolicyDescription: 'Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen.',
		notifyChanges: 'Wir werden Sie per E-Mail und/oder durch einen auffälligen Hinweis in unserem Dienst über Änderungen informieren, bevor diese wirksam werden, und das Datum der letzten Aktualisierung oben in dieser Datenschutzrichtlinie aktualisieren.',
		reviewChanges: 'Wir empfehlen Ihnen, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen. Änderungen an dieser Datenschutzrichtlinie werden wirksam, wenn sie auf dieser Seite veröffentlicht werden.',
	
		contactUs: 'Kontaktieren Sie uns',
		contactUsDescription: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, können Sie uns kontaktieren:',
		contactEmail: 'Per E-Mail: safefireplace9@gmail.com',
	},
	terms: {
		title: 'Nutzungsbedingungen',
		welcome: 'Willkommen bei SAFE-Fireplace!',
		intro: 'Diese Nutzungsbedingungen legen die Regeln und Bestimmungen für die Nutzung der Website von SAFE-Fireplace fest, die unter www.safe-fireplace.bplaced.net zu finden ist.',
		acceptance: 'Durch den Zugriff auf diese Website gehen wir davon aus, dass Sie diese Nutzungsbedingungen akzeptieren. Nutzen Sie SAFE-Fireplace nicht weiter, wenn Sie nicht mit allen auf dieser Seite angegebenen Bedingungen einverstanden sind.',
		terminology: `
			Die folgenden Begriffe gelten für diese Nutzungsbedingungen, die Datenschutzerklärung und den Haftungsausschluss sowie alle Vereinbarungen: "Kunde", "Sie" und "Ihr" beziehen sich auf Sie, die Person, die sich auf dieser Website anmeldet und die Bedingungen des Unternehmens einhält. "Das Unternehmen", "Wir", "Uns" und "Unser" beziehen sich auf unser Unternehmen. "Partei", "Parteien" oder "Uns" beziehen sich sowohl auf den Kunden als auch auf uns selbst. Alle Begriffe beziehen sich auf das Angebot, die Annahme und die Gegenleistung, die erforderlich sind, um den Prozess unserer Unterstützung für den Kunden auf die angemessenste Weise durchzuführen, um den Bedürfnissen des Kunden in Bezug auf die Bereitstellung der angegebenen Dienstleistungen des Unternehmens zu entsprechen, in Übereinstimmung mit und unterliegend dem geltenden Recht der Niederlande. Jede Verwendung der oben genannten Begriffe oder anderer Wörter im Singular, Plural, Großschreibung und/oder er/sie oder sie wird als austauschbar und daher als auf dasselbe bezogen angesehen. Unsere Nutzungsbedingungen wurden mit Hilfe des <a class="text-blue-500 underline" href="https://www.privacypolicyonline.com/terms-conditions-generator/">Nutzungsbedingungen-Generators</a> erstellt.
		`,
		cookies: {
			title: 'Cookies',
			description: 'Wir verwenden Cookies. Durch den Zugriff auf SAFE-Fireplace erklären Sie sich damit einverstanden, Cookies gemäß der Datenschutzrichtlinie von SAFE-Fireplace zu verwenden.',
			usage: 'Die meisten interaktiven Websites verwenden Cookies, um die Benutzerdaten bei jedem Besuch abzurufen. Cookies werden von unserer Website verwendet, um die Funktionalität bestimmter Bereiche zu ermöglichen und den Besuchern unserer Website die Nutzung zu erleichtern. Einige unserer Partner/Affiliates können ebenfalls Cookies verwenden.',
		},
		license: {
			title: 'Lizenz',
			description: 'Sofern nicht anders angegeben, besitzen SAFE-Fireplace und/oder seine Lizenzgeber die geistigen Eigentumsrechte für alle Materialien auf SAFE-Fireplace. Alle Rechte des geistigen Eigentums sind vorbehalten. Sie können auf diese Materialien von SAFE-Fireplace für den persönlichen Gebrauch zugreifen, vorbehaltlich der in diesen Nutzungsbedingungen festgelegten Einschränkungen.',
			restrictions: 'Sie dürfen nicht:',
			restrictionsList: [
				'Material von SAFE-Fireplace erneut veröffentlichen',
				'Material von SAFE-Fireplace verkaufen, vermieten oder unterlizenzieren',
				'Material von SAFE-Fireplace reproduzieren, duplizieren oder kopieren',
				'Inhalte von SAFE-Fireplace weiterverbreiten',
			],
			agreementStart: 'Diese Vereinbarung beginnt am heutigen Datum.',
		},
		comments: {
			title: 'Kommentare',
			description: 'Bestimmte Teile dieser Website bieten Benutzern die Möglichkeit, Meinungen und Informationen in bestimmten Bereichen der Website zu veröffentlichen und auszutauschen. SAFE-Fireplace filtert, bearbeitet, veröffentlicht oder überprüft Kommentare nicht, bevor sie auf der Website erscheinen. Kommentare spiegeln nicht die Ansichten und Meinungen von SAFE-Fireplace, seinen Vertretern und/oder verbundenen Unternehmen wider. Kommentare spiegeln die Ansichten und Meinungen der Person wider, die ihre Ansichten und Meinungen veröffentlicht. Soweit dies nach geltendem Recht zulässig ist, haftet WaitFor nicht für die Kommentare oder für jegliche Haftung, Schäden oder Kosten, die durch und/oder in Folge der Nutzung und/oder Veröffentlichung und/oder des Erscheinens der Kommentare auf dieser Website entstehen und/oder erlitten werden.',
			monitoring: 'SAFE-Fireplace behält sich das Recht vor, alle Kommentare zu überwachen und Kommentare zu entfernen, die als unangemessen, beleidigend oder als Verstoß gegen diese Nutzungsbedingungen angesehen werden können.',
			warranty: 'Sie erklären und garantieren, dass:',
			warrantyList: [
				'Sie berechtigt sind, die Kommentare auf unserer Website zu veröffentlichen und über alle notwendigen Lizenzen und Zustimmungen hierfür verfügen;',
				'Die Kommentare keine Rechte des geistigen Eigentums, einschließlich, aber nicht beschränkt auf Urheberrechte, Patente oder Markenrechte Dritter, verletzen;',
				'Die Kommentare kein diffamierendes, verleumderisches, beleidigendes, unanständiges oder anderweitig rechtswidriges Material enthalten, das eine Verletzung der Privatsphäre darstellt;',
				'Die Kommentare nicht zur Anwerbung oder Förderung von Geschäften oder Gewohnheiten oder zur Darstellung kommerzieller Aktivitäten oder rechtswidriger Handlungen verwendet werden.',
			],
			licenseGrant: 'Sie räumen WaitFor hiermit eine nicht-exklusive Lizenz ein, Ihre Kommentare in allen Formen, Formaten oder Medien zu verwenden, zu reproduzieren, zu bearbeiten und anderen die Nutzung, Reproduktion und Bearbeitung Ihrer Kommentare zu gestatten.',
		},
		hyperlinking: {
			title: 'Hyperlinks zu unserem Inhalt',
			description: 'Die folgenden Organisationen dürfen ohne vorherige schriftliche Zustimmung auf unsere Website verlinken:',
			organizations: [
				'Regierungsbehörden;',
				'Suchmaschinen;',
				'Nachrichtenorganisationen;',
				'Online-Verzeichnisverteiler dürfen auf unsere Website in der gleichen Weise verlinken, wie sie auf die Websites anderer gelisteter Unternehmen verlinken; und',
				'Systemweit akkreditierte Unternehmen, mit Ausnahme von gemeinnützigen Organisationen, Wohltätigkeitseinkaufszentren und Wohltätigkeits-Spendenorganisationen, die möglicherweise nicht auf unsere Website verlinken dürfen.',
			],
			linkConditions: 'Diese Organisationen dürfen auf unsere Startseite, auf Veröffentlichungen oder auf andere Informationen auf der Website verlinken, solange der Link: (a) in keiner Weise irreführend ist; (b) nicht fälschlicherweise Sponsoring, Unterstützung oder Billigung der verlinkenden Partei und ihrer Produkte und/oder Dienstleistungen impliziert; und (c) in den Kontext der Website der verlinkenden Partei passt.',
			approvalConditions: 'Wir können Linkanfragen von den folgenden Arten von Organisationen prüfen und genehmigen:',
			approvalOrganizations: [
				'Allgemein bekannte Verbraucher- und/oder Geschäftsinformationsquellen;',
				'Community-Websites mit .com-Domain;',
				'Verbände oder andere Gruppen, die Wohltätigkeitsorganisationen vertreten;',
				'Online-Verzeichnisverteiler;',
				'Internetportale;',
				'Wirtschaftsprüfungs-, Rechts- und Beratungsfirmen; und',
				'Bildungseinrichtungen und Handelsverbände.',
			],
			approvalCriteria: 'Wir werden Linkanfragen von diesen Organisationen genehmigen, wenn wir entscheiden, dass: (a) der Link uns oder unseren akkreditierten Unternehmen nicht negativ erscheinen lässt; (b) die Organisation keine negativen Einträge bei uns hat; (c) der Nutzen für uns aus der Sichtbarkeit des Hyperlinks das Fehlen von SAFE-Fireplace ausgleicht; und (d) der Link im Kontext allgemeiner Informationsressourcen steht.',
			linkRules: 'Diese Organisationen dürfen auf unsere Startseite verlinken, solange der Link: (a) in keiner Weise irreführend ist; (b) nicht fälschlicherweise Sponsoring, Unterstützung oder Billigung der verlinkenden Partei und ihrer Produkte oder Dienstleistungen impliziert; und (c) in den Kontext der Website der verlinkenden Partei passt.',
			contactInfo: 'Wenn Sie eine der in Absatz 2 oben aufgeführten Organisationen sind und an einer Verlinkung zu unserer Website interessiert sind, müssen Sie uns per E-Mail an SAFE-Fireplace informieren. Bitte geben Sie Ihren Namen, den Namen Ihrer Organisation, Kontaktinformationen sowie die URL Ihrer Website, eine Liste der URLs, von denen aus Sie auf unsere Website verlinken möchten, und eine Liste der URLs auf unserer Website, auf die Sie verlinken möchten, an. Warten Sie 2-3 Wochen auf eine Antwort.',
			approvedLinkMethods: 'Genehmigte Organisationen dürfen wie folgt auf unsere Website verlinken:',
			approvedLinkList: [
				'Durch die Verwendung unseres Firmennamens; oder',
				'Durch die Verwendung des Uniform Resource Locators (URL), auf den verlinkt wird; oder',
				'Durch die Verwendung einer anderen Beschreibung unserer Website, auf die verlinkt wird, die im Kontext und Format des Inhalts auf der Website der verlinkenden Partei sinnvoll ist.',
			],
			trademarkNotice: 'Die Verwendung des Logos oder anderer Grafiken von SAFE-Fireplace ist ohne eine Markenlizenzvereinbarung nicht gestattet.',
		},
		iframes: {
			title: 'iFrames',
			description: 'Ohne vorherige Genehmigung und schriftliche Erlaubnis dürfen Sie keine Frames um unsere Webseiten erstellen, die das Erscheinungsbild oder die visuelle Darstellung unserer Website in irgendeiner Weise verändern.',
		},
		contentLiability: {
			title: 'Inhaltshaftung',
			description: 'Wir übernehmen keine Verantwortung für Inhalte, die auf Ihrer Website erscheinen. Sie erklären sich damit einverstanden, uns gegen alle Ansprüche zu schützen und zu verteidigen, die auf Ihrer Website entstehen. Es sollten keine Links auf Ihrer Website erscheinen, die als verleumderisch, obszön oder kriminell interpretiert werden könnten oder die die Rechte Dritter verletzen oder anderweitig gegen diese verstoßen.',
		},
		reservationOfRights: {
			title: 'Vorbehalt von Rechten',
			description: 'Wir behalten uns das Recht vor, die Entfernung aller Links oder eines bestimmten Links zu unserer Website zu verlangen. Sie erklären sich damit einverstanden, alle Links zu unserer Website auf Anfrage sofort zu entfernen. Wir behalten uns auch das Recht vor, diese Nutzungsbedingungen und unsere Verlinkungsrichtlinie jederzeit zu ändern. Durch die fortgesetzte Verlinkung auf unsere Website erklären Sie sich damit einverstanden, an diese Verlinkungsbedingungen gebunden zu sein und sie einzuhalten.',
		},
		removalOfLinks: {
			title: 'Entfernung von Links von unserer Website',
			description: 'Wenn Sie einen Link auf unserer Website finden, der aus irgendeinem Grund anstößig ist, können Sie uns jederzeit kontaktieren und uns informieren. Wir werden Anfragen zur Entfernung von Links prüfen, sind jedoch nicht verpflichtet, darauf zu reagieren oder Sie direkt zu benachrichtigen.',
			disclaimer: 'Wir garantieren nicht, dass die Informationen auf dieser Website korrekt sind, und wir übernehmen keine Gewähr für deren Vollständigkeit oder Genauigkeit. Ebenso versprechen wir nicht, dass die Website verfügbar bleibt oder dass das Material auf der Website auf dem neuesten Stand gehalten wird.',
		},
		disclaimer: {
			title: 'Haftungsausschluss',
			description: 'Im gesetzlich zulässigen Rahmen schließen wir alle Zusicherungen, Garantien und Bedingungen in Bezug auf unsere Website und die Nutzung dieser Website aus. Nichts in diesem Haftungsausschluss wird:',
			points: [
				'unsere oder Ihre Haftung für Tod oder Körperverletzung einschränken oder ausschließen;',
				'unsere oder Ihre Haftung für Betrug oder betrügerische Falschdarstellung einschränken oder ausschließen;',
				'unsere oder Ihre Haftung in einer Weise einschränken, die nach geltendem Recht nicht zulässig ist; oder',
				'unsere oder Ihre Haftung ausschließen, die nach geltendem Recht nicht ausgeschlossen werden kann.',
			],
			limitations: 'Die in diesem Abschnitt und an anderer Stelle in diesem Haftungsausschluss festgelegten Haftungsbeschränkungen und -ausschlüsse: (a) unterliegen dem vorhergehenden Absatz; und (b) regeln alle Haftungsansprüche, die sich aus dem Haftungsausschluss ergeben, einschließlich Haftungsansprüchen aus Vertrag, unerlaubter Handlung und Verletzung gesetzlicher Pflichten.',
			freeServiceDisclaimer: 'Solange die Website und die Informationen und Dienstleistungen auf der Website kostenlos zur Verfügung gestellt werden, haften wir nicht für Verluste oder Schäden jeglicher Art.',
		},
	},
	log: `Dieses Log wurde von '{fileName}' aufgerufen`,
} satisfies Translation

export default de
