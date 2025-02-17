import type { Translation } from '../i18n-types'

const sl = {
	nav: {
		home: 'Domov',
		features: 'Funkcije',
		about: 'O nas',
		team: 'Ekipa',
		lang: 'Jezik',
		catalog: 'Odpri katalog',
		rights: '© 2024 Vse pravice pridržane',
		links: 'Povezave',
		legal: 'Pravno',
		terms: 'Pogoji uporabe',
		privacy: 'Politika zasebnosti'
	},
	catalog_name: {
		catalog1: 'Katalog 1',
		catalog2: 'Katalog 2',
	},
	home: {
		intro: 'Preoblikujte svoj dom z našimi ročno izdelanimi kaminí in strokovno izvedenimi fasadnimi deli, ki združujejo večno tradicijo s sodobnim dizajnom.',
		button: 'Več o nas',
	},
	features: [
		{
			title: 'Visokokakovostni materiali',
			desc: 'Naši kamini in fasadne rešitve so izdelani iz najboljših materialov za zagotovitev dolgotrajnosti in vzdržljivosti.'
		},
		{
			title: 'Energijska učinkovitost',
			desc: 'Naši kamini so zasnovani energijsko učinkovito in okolju prijazno.'
		},
		{
			title: 'Široka izbira dizajnov',
			desc: 'Izberite med številnimi tradicionalnimi, modernimi ali rustikalnimi dizajni kaminov in fasad, ki se prilegajo vašemu domu.'
		},
		{
			title: 'Varno in zaščiteno',
			desc: 'Naši kamini imajo vgrajene varnostne funkcije, ki zagotavljajo varnost vam in vaši družini.'
		},
		{
			title: 'Strokovna montaža',
			desc: 'Naš tim certificiranih strokovnjakov zagotavlja nemoteno in brezhibno namestitev kaminov in fasad.'
		},
		{
			title: 'Sodobna tehnologija',
			desc: 'Opremljeni z najnovejšo tehnologijo, naši kamini ponujajo pametno krmiljenje in povezljivost.'
		}
	],
	about: {
		title: 'O SAFE-Fireplace',
		desc: [  
			'Pri <b>SAFE-Fireplace</b> verjamemo, da je kamin več kot le vir toplote - to je srce vašega doma. Ustanovljeni iz strasti do obrtništva in varnosti, smo specializirani za vrhunske kaminske rešitve in profesionalne fasadne dela, ki združujejo sodobno tehnologijo s časovno odpornim dizajnom.<br><br>',  
			'Naša misija je ustvarjati tople, varne in prijazne prostore, kjer se družine zbirajo in ustvarjajo dragocene spomine. Z močno predanostjo kakovosti in trajnosti izdelujemo vsak kos z največjo skrbnostjo, da zagotovimo dolgo življenjsko dobo in eleganco do najmanjših podrobnosti.<br><br>',  
			'Ponosni smo na svoje delo in si prizadevamo preseči vaša pričakovanja - z izjemnim servisom in visokokakovostnimi izdelki, ki bogatijo vaš dom in življenjski stil.'  
		 ]
	},
	team: {
		title: 'Naša ekipa',
		lang: 'Jeziki: ',
		members: [
			{
				firstname: 'Nihada',
				lastname: 'Seferovic',
				role: 'Vodja in svetovalka',
				languages: 'nemščina, slovenščina',
				phone: '0038670868442',
				mailto: 'mssmkamini80@gmail.com',
				mailBtn: 'Kontaktirajte Nihado'
			},
			{
				firstname: 'Sefko',
				lastname: 'Seferovic',
				role: 'Ustanovitelj in monter',
				languages: 'slovenščina, hrvaščina',
				phone: '0038641278221',
				mailto: 'mssmkamini80@gmail.com',
				mailBtn: 'Kontaktirajte Sefka'
			},
			{
				firstname: 'Beno', 
				lastname: 'Seferovic',
				role: 'Glavni monter',
				languages: 'angleščina, slovenščina',
				phone: '0038651202315' ,
				mailto: 'beno.seferovic9@gmail.com',
				mailBtn: 'Kontaktirajte Bena'
			},
		]
	},
	privacy: {
		title: 'Politika zasebnosti',
		date: `Zadnja posodobitev: {0|simpleDate}`,
		description: 'Ta politika zasebnosti opisuje naše prakse v zvezi z zbiranjem, uporabo in razkritjem vaših podatkov, ko uporabljate storitev, ter vas obvešča o vaših pravicah do zasebnosti in kako vas zakon ščiti.',
		personalDataUsage: 'Vaše osebne podatke uporabljamo za zagotavljanje in izboljšanje storitve. Z uporabo storitve se strinjate z zbiranjem in uporabo informacij v skladu s to politiko zasebnosti.',
		policyCreation: 'Ta politika zasebnosti je bila ustvarjena s pomočjo <a class="text-blue-500 underline" href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.',
	
		interpretationAndDefinitions: 'Razlaga in definicije',
		interpretation: 'Razlaga',
		interpretationText: 'Besede, katerih začetnica je napisana z veliko začetnico, imajo pomen, določen v naslednjih pogojih. Naslednje definicije imajo enak pomen ne glede na to, ali so v ednini ali množini.',
		definitions: 'Definicije',
		definitionsText: 'Za namene te politike zasebnosti:',
	
		account: 'Račun',
		accountDefinition: 'pomeni edinstven račun, ustvarjen za vas za dostop do naše storitve ali delov storitve.',
		affiliate: 'Pridružena družba',
		affiliateDefinition: 'pomeni subjekt, ki nadzoruje, je pod nadzorom ali je v skupnem nadzoru s stranko, pri čemer "nadzor" pomeni lastništvo 50 % ali več delnic, kapitalskih deležev ali drugih vrednostnih papirjev, ki dajejo pravico do volitve upravnih organov.',
		company: 'Podjetje',
		companyDefinition: '(v nadaljevanju "podjetje", "mi", "naš" ali "nas" v tej pogodbi) se nanaša na SAFE-Fireplace.',
		cookies: 'Piškotki',
		cookiesDefinition: 'so majhne datoteke, ki jih spletno mesto postavi na vaš računalnik, mobilno napravo ali katero koli drugo napravo in vsebujejo podrobnosti o vašem brskanju po tem spletnem mestu.',
		country: 'Država',
		countryDefinition: 'se nanaša na: Avstrija',
		device: 'Naprava',
		deviceDefinition: 'pomeni katero koli napravo, ki lahko dostopa do storitve, kot so računalnik, mobilni telefon ali digitalna tablica.',
		personalData: 'Osebni podatki',
		personalDataDefinition: 'so vsi podatki, ki se nanašajo na identificirano ali identificirljivo osebo.',
		service: 'Storitev',
		serviceDefinition: 'se nanaša na spletno stran.',
		serviceProvider: 'Ponudnik storitev',
		serviceProviderDefinition: 'pomeni fizično ali pravno osebo, ki obdeluje podatke v imenu podjetja. Nanaša se na tretje osebe ali podjetja, ki jih podjetje zaposli za olajšanje storitve, zagotavljanje storitve v imenu podjetja, izvajanje storitev, povezanih s storitvijo, ali pomoč pri analizi uporabe storitve.',
		usageData: 'Podatki o uporabi',
		usageDataDefinition: 'se nanašajo na podatke, ki se samodejno zbirajo bodisi z uporabo storitve bodisi iz same infrastrukture storitve (npr. trajanje obiska strani).',
		website: 'Spletna stran',
		websiteDefinition: 'se nanaša na SAFE-Fireplace, dostopno na <a href="https://safe-fireplace.vercel.app/" rel="external nofollow noopener" target="_blank">https://safe-fireplace.vercel.app/</a>.',
		you: 'Vi',
		youDefinition: 'pomeni osebo, ki dostopa ali uporablja storitev, ali podjetje ali drugo pravno osebo, v imenu katere ta oseba dostopa ali uporablja storitev, če je primerno.',
	
		collectingAndUsingPersonalData: 'Zbiranje in uporaba vaših osebnih podatkov',
		typesOfDataCollected: 'Vrste zbranih podatkov',
		personalDataDescription: 'Medtem ko uporabljate našo storitev, vas lahko prosimo, da nam posredujete določene osebno identificirljive informacije, ki se lahko uporabijo za vzpostavitev stika ali identifikacijo. Osebno identificirljive informacije lahko vključujejo:',
		emailAddress: 'E-poštni naslov',
		usageDataDescription: 'Podatki o uporabi se samodejno zbirajo pri uporabi storitve.',
		usageDataDetails: 'Podatki o uporabi lahko vključujejo informacije, kot so internetni protokol (IP) naslov vaše naprave, vrsto brskalnika, različico brskalnika, strani našega storitve, ki jih obiščete, datum in čas obiska, čas, preživet na teh straneh, edinstvene identifikatorje naprav in druge diagnostične podatke.',
		mobileUsageData: 'Ko uporabljate storitev prek mobilne naprave, lahko samodejno zbiramo določene informacije, vključno z vrst mobilne naprave, edinstvenim ID-jem mobilne naprave, IP naslovom mobilne naprave, mobilnim operacijskim sistemom, vrsto mobilnega brskalnika, edinstvenimi identifikatorji naprav in drugimi diagnostičnimi podatki.',
		browserUsageData: 'Zbiramo lahko tudi informacije, ki jih pošlje vaš brskalnik, ko obiščete našo storitev ali ko uporabljate storitev prek mobilne naprave.',
	
		trackingTechnologiesAndCookies: 'Sledilne tehnologije in piškotki',
		trackingTechnologiesDescription: 'Uporabljamo piškotke in podobne sledilne tehnologije za sledenje dejavnosti na naši storitvi in shranjevanje določenih informacij. Uporabljene sledilne tehnologije vključujejo sledilne piksle, oznake in skripte za zbiranje in sledenje informacij ter izboljšanje in analizo naše storitve. Uporabljene tehnologije lahko vključujejo:',
		cookiesDescription: 'Piškotek je majhna datoteka, nameščena na vašo napravo. Svojemu brskalniku lahko naročite, da zavrne vse piškotke ali opozori, ko je piškotek poslan. Če pa ne sprejmete piškotkov, morda ne boste mogli uporabljati nekaterih delov storitve. Če niste prilagodili nastavitev brskalnika tako, da zavrača piškotke, lahko naša storitev uporablja piškotke.',
		webBeacons: 'Sledilni piksli',
		webBeaconsDescription: 'Določeni deli naše storitve in naša e-pošta lahko vsebujejo majhne elektronske datoteke, znane kot sledilni piksli (ali clear GIFs, pixel tags in single-pixel GIFs), ki omogočajo podjetju na primer štetje uporabnikov, ki so obiskali te strani ali odprli e-pošto, in druge povezane statistike spletnega mesta.',
	
		cookieTypes: 'Piškotki so lahko "trajni" ali "sejni". Trajni piškotki ostanejo na vašem osebnem računalniku ali mobilni napravi, ko ste brez povezave, medtem ko se sejni piškotki izbrišejo, ko zaprete brskalnik.',
		cookiePurposes: 'Uporabljamo sejske in trajne piškotke za naslednje namene:',
		necessaryCookies: 'Nujni / Bistveni piškotki',
		necessaryCookiesDescription: 'Tip: Sejni piškotki<br/>Upravlja: Mi<br/>Namen: Ti piškotki so nujni za zagotavljanje storitev, dostopnih prek spletnega mesta, in omogočajo uporabo nekaterih njegovih funkcij. Pomagajo pri preverjanju uporabnikov in preprečevanju goljufive rabe uporabniških računov. Brez teh piškotkov zahtevane storitve ne morejo biti zagotovljene, mi pa uporabljamo te piškotke samo za zagotavljanje teh storitev.',
		acceptanceCookies: 'Piškotki politike / Sprejemni piškotki',
		acceptanceCookiesDescription: 'Tip: Trajni piškotki<br/>Upravlja: Mi<br/>Namen: Ti piškotki zaznavajo, ali so uporabniki sprejeli uporabo piškotkov na spletnem mestu.',
		functionalityCookies: 'Funkcionalni piškotki',
		functionalityCookiesDescription: 'Tip: Trajni piškotki<br/>Upravlja: Mi<br/>Namen: Ti piškotki omogočajo, da si zapomnimo vaše izbire, ko uporabljate spletno mesto, kot so vaše prijavne podatke ali jezikovne nastavitve. Namen teh piškotkov je zagotoviti bolj personalizirano izkušnjo in preprečiti, da bi morali svoje nastavitve znova vnašati vsakič, ko uporabljate spletno mesto.',
		cookiePolicyLink: 'Več informacij o piškotkih, ki jih uporabljamo, in vaših možnostih glede piškotkov najdete v našem pravilniku o piškotkih ali v razdelku Piškotki te politike zasebnosti.',
	
		useOfPersonalData: 'Uporaba vaših osebnih podatkov',
		useOfPersonalDataDescription: 'Podjetje lahko uporablja vaše osebne podatke za naslednje namene:',
		provideAndMaintainService: '<b>Za zagotavljanje in vzdrževanje storitve</b>, vključno s spremljanjem uporabe storitve.',
		manageAccount: '<b>Za upravljanje vašega računa:</b> za upravljanje vaše registracije kot uporabnika storitve. Osebni podatki, ki jih posredujete, vam lahko omogočijo dostop do različnih funkcij storitve, ki so na voljo registriranim uporabnikom.',
		performanceOfContract: '<b>Za izpolnjevanje pogodbe:</b> razvoj, skladnost in izvedba pogodbe o nakupu izdelkov, artiklov ali storitev, ki ste jih kupili, ali katere koli druge pogodbe z nami v zvezi s storitvijo.',
		contactYou: '<b>Za stik z vami:</b> za pošiljanje posodobitev ali informativnih sporočil prek e-pošte, telefonskih klicev, SMS ali drugih enakovrednih oblik elektronske komunikacije, kot so potisna obvestila mobilne aplikacije, v zvezi z lastnostmi, izdelki ali pogodbenimi storitvami, vključno z varnostnimi posodobitvami, kadar je to potrebno ali primerno.',
		provideNewsAndOffers: '<b>Za zagotavljanje</b> novic, posebnih ponudb in splošnih informacij o drugih izdelkih, storitvah in dogodkih, ki jih ponujamo in so podobni tistim, ki ste jih že kupili ali povpraševali po njih, razen če ste se odločili, da takih informacij ne želite prejemati.',
		manageYourRequests: '<b>Za obravnavo vaših zahtev:</b> za obdelavo in upravljanje vaših zahtev do nas.',
		businessTransfers: '<b>Za poslovne prenose:</b> vaše podatke lahko uporabimo za ocenjevanje ali izvedbo združitve, razlastitve, prestrukturiranja, reorganizacije, razpustitve ali druge prodaje ali prenosa nekaterih ali vseh naših sredstev, bodisi kot del tekočega poslovanja ali v postopku stečaja, likvidacije ali podobnem postopku, kjer so osebni podatki uporabnikov storitve med prenesenimi sredstvi.',
		otherPurposes: '<b>Za druge namene:</b> vaše podatke lahko uporabimo za druge namene, kot so analiza podatkov, prepoznavanje trendov uporabe, določanje učinkovitosti naših promocijskih kampanj in za ocenjevanje ter izboljšanje storitve, izdelkov, storitev, trženja in vaše izkušnje.',
	
		sharingPersonalInformation: 'Vaše osebne podatke lahko delimo v naslednjih situacijah:',
		withServiceProviders: '<b>Z ponudniki storitev:</b> vaše osebne podatke lahko delimo s ponudniki storitev za spremljanje in analizo uporabe storitve ter za stik z vami.',
		forBusinessTransfers: '<b>Za poslovne prenose:</b> vaše osebne podatke lahko delimo ali prenesemo v povezavi s kakršno koli združitvijo, prodajo sredstev podjetja, financiranjem ali pridobitvijo celotnega ali dela našega podjetja drugemu podjetju.',
		withAffiliates: '<b>S pridruženimi podjetji:</b> vaše podatke lahko delimo z našimi pridruženimi podjetji, v tem primeru bomo zahtevali, da ta pridružena podjetja spoštujejo to politiko zasebnosti. Pridružena podjetja vključujejo našo matično družbo in vse druge hčerinske družbe, partnerska podjetja ali druga podjetja, ki jih nadzorujemo ali smo pod skupnim nadzorom.',
		withBusinessPartners: '<b>S poslovnimi partnerji:</b> vaše podatke lahko delimo z našimi poslovnimi partnerji, da vam ponudimo določene izdelke, storitve ali promocije.',
		withOtherUsers: '<b>Z drugimi uporabniki:</b> ko delite osebne podatke ali komunicirate z drugimi uporabniki na javnih območjih, so te informacije vidne vsem uporabnikom in se lahko javno širijo.',
		withYourConsent: '<b>Z vašim soglasjem:</b> vaše osebne podatke lahko razkrijemo za kateri koli drug namen z vašim soglasjem.',
	
		retentionOfPersonalData: 'Hramba vaših osebnih podatkov',
		retentionOfPersonalDataDescription: 'Podjetje bo hranilo vaše osebne podatke samo toliko časa, kot je potrebno za namene, določene v tej politiki zasebnosti. Vaše osebne podatke bomo hranili in uporabljali v obsegu, potrebnem za izpolnjevanje naših zakonskih obveznosti (npr. če moramo hraniti vaše podatke za skladnost z veljavnimi zakoni), reševanje sporov in uveljavljanje naših pravnih sporazumov in pravil.',
		retentionOfUsageData: 'Podjetje bo hranilo tudi podatke o uporabi za notranje analize. Podatki o uporabi se običajno hranijo krajši čas, razen če se ti podatki uporabljajo za krepitev varnosti ali izboljšanje funkcionalnosti storitve ali če smo zakonsko obvezni hraniti te podatke dlje časa.',
	
		transferOfPersonalData: 'Prenos vaših osebnih podatkov',
		transferOfPersonalDataDescription: 'Vaše informacije, vključno z osebnimi podatki, se obdelujejo na operativnih lokacijah podjetja in na drugih lokacijah, kjer se nahajajo stranke, vključene v obdelavo. To pomeni, da se te informacije lahko prenesejo in hranijo na računalnikih zunaj vaše države, pokrajine, države ali druge državne pristojnosti, kjer so zakoni o zasebnosti morda drugačni od tistih v vaši pristojnosti.',
		consentToTransfer: 'Vaše soglasje s to politiko zasebnosti, ki mu sledi predložitev takih podatkov, pomeni vaše soglasje s takim prenosom.',
		dataSecurity: 'Podjetje bo sprejelo vse potrebne ukrepe za zagotovitev varne obravnave vaših podatkov v skladu s to politiko zasebnosti in ne bo prišlo do prenosa vaših osebnih podatkov organizaciji ali državi, razen če obstajajo ustrezne kontrole, vključno z varnostjo vaših podatkov in drugih osebnih informacij.',
	
		deleteYourPersonalData: 'Izbris vaših osebnih podatkov',
		deleteYourPersonalDataDescription: 'Imate pravico izbrisati svoje osebne podatke ali od nas zahtevati pomoč pri izbrisu osebnih podatkov, ki smo jih zbrali o vas.',
		deleteFromService: 'Naša storitev vam lahko omogoči izbris določenih informacij o vas znotraj storitve.',
		updateOrDeleteInfo: 'Svoje podatke lahko kadar koli posodobite, spremenite ali izbrišete tako, da se prijavite v svoj račun (če ga imate) in obiščete razdelk z nastavitvami računa, ki vam omogoča upravljanje osebnih podatkov. Lahko pa nas tudi kontaktirate in zahtevate dostop, popravek ali izbris vseh osebnih podatkov, ki ste nam jih posredovali.',
		retainCertainInfo: 'Prosimo, upoštevajte, da bomo morda morali obdržati določene informacije, če imamo zakonsko obveznost ali zakonito osnovo za to.',
	
		disclosureOfPersonalData: 'Razkritje vaših osebnih podatkov',
		businessTransactions: 'Poslovne transakcije',
		businessTransactionsDescription: 'Če je podjetje vpleteno v združitev, prevzem ali prodajo sredstev, se lahko vaši osebni podatki prenesejo. Pred prenosom vaših osebnih podatkov vas bomo obvestili in postali bodo predmet druge politike zasebnosti.',
		lawEnforcement: 'Kazenski pregon',
		lawEnforcementDescription: 'Pod določenimi okoliščinami lahko podjetje razkrije vaše osebne podatke, če to zahtevajo zakoni ali kot odgovor na veljavne zahteve javnih organov (npr. sodišče ali vladna agencija).',
		otherLegalRequirements: 'Druge zakonske zahteve',
		otherLegalRequirementsDescription: 'Podjetje lahko razkrije vaše osebne podatke v dobri veri, da je takšno dejanje potrebno za:',
		complyWithLegalObligation: 'Izpolnitev zakonske obveznosti',
		protectCompanyRights: 'Zaščito in uveljavljanje pravic ali lastnine podjetja',
		preventWrongdoing: 'Preprečevanje ali preiskovanje morebitnega nepravilnega ravnanja v povezavi s storitvijo',
		protectUserSafety: 'Zaščito osebne varnosti uporabnikov storitve ali javnosti',
		protectAgainstLiability: 'Zaščito pred pravno odgovornostjo',
	
		securityOfPersonalData: 'Varnost vaših osebnih podatkov',
		securityOfPersonalDataDescription: 'Varnost vaših osebnih podatkov je za nas pomembna, vendar ne pozabite, da nobena metoda prenosa prek interneta ali elektronskega shranjevanja ni 100 % varna. Medtem ko si prizadevamo uporabljati komercialno sprejemljive načine za zaščito vaših osebnih podatkov, ne moremo zagotoviti njihove popolne varnosti.',
	
		childrensPrivacy: 'Zasebnost otrok',
		childrensPrivacyDescription: 'Naša storitev ni namenjena osebam, mlajšim od 13 let. Zavedno ne zbiramo osebno identificirljivih informacij od oseb, mlajših od 13 let. Če ste starš ali skrbnik in veste, da je vaš otrok nam posredoval osebne podatke, nas prosimo kontaktirajte. Če ugotovimo, da smo zbrali osebne podatke od osebe, mlajše od 13 let, brez preverjanja starševskega soglasja, bomo sprejeli ukrepe za odstranitev teh informacij z naših strežnikov.',
		parentalConsent: 'Če za obdelavo vaših informacij zahteva zakon soglasje in vaša država zahteva soglasje staršev, bomo morda zahtevali soglasje staršev, preden zbiramo in uporabljamo te informacije.',
	
		linksToOtherWebsites: 'Povezave do drugih spletnih mest',
		linksToOtherWebsitesDescription: 'Naša storitev lahko vsebuje povezave do drugih spletnih mest, ki jih ne upravljamo mi. Če kliknete na povezavo tretje strani, boste preusmerjeni na spletno mesto te tretje strani. Toplo priporočamo, da pregledate politiko zasebnosti vsakega spletnega mesta, ki ga obiščete.',
		noControlOverThirdParty: 'Nimamo nadzora in ne prevzemamo odgovornosti za vsebino, politike zasebnosti ali prakse spletnih mest ali storitev tretjih oseb.',
	
		changesToPrivacyPolicy: 'Spremembe te politike zasebnosti',
		changesToPrivacyPolicyDescription: 'Občasno lahko posodobimo našo politiko zasebnosti. O spremembah vas bomo obvestili z objavo nove politike zasebnosti na tej strani.',
		notifyChanges: 'Pred uveljavitvijo sprememb vas bomo obvestili po e-pošti in/ali z vidnim obvestilom v naši storitvi ter posodobili datum zadnje posodobitve na vrhu te politike zasebnosti.',
		reviewChanges: 'Priporočamo, da redno preverjate to politiko zasebnosti za morebitne spremembe. Spremembe te politike zasebnosti postanejo učinkovite, ko so objavljene na tej strani.',
	
		contactUs: 'Kontaktirajte nas',
		contactUsDescription: 'Če imate kakršna koli vprašanja o tej politiki zasebnosti, nas lahko kontaktirate:',
		contactEmail: 'Po e-pošti: safefireplace9@gmail.com',
	},
	terms: {
		title: 'Pogoji uporabe',
		welcome: 'Dobrodošli pri SAFE-Fireplace!',
		intro: 'Ti pogoji uporabe določajo pravila in določila za uporabo spletnega mesta SAFE-Fireplace, dostopnega na www.safe-fireplace.bplaced.net.',
		acceptance: 'Z dostopom do tega spletnega mesta predpostavljamo, da sprejemate te pogoje uporabe. Ne nadaljujte z uporabo SAFE-Fireplace, če se ne strinjate z vsemi pogoji, navedenimi na tej strani.',
		terminology: `
			Naslednji izrazi veljajo za te pogoje uporabe, politiko zasebnosti in izjavo o omejitvi odgovornosti ter vse dogovore: "Stranka", "Vi" in "Vaš" se nanašajo na vas, osebo, ki se prijavi na to spletno stran in se strinja s pogoji podjetja. "Podjetje", "Mi", "Naš" in "Nas" se nanašajo na naše podjetje. "Stranka", "stranke" ali "nas" se nanašajo tako na stranko kot na nas. Vsi izrazi se nanašajo na ponudbo, sprejem in nadomestilo, potrebno za izvajanje procesa naše podpore stranki na najprimernejši način, da ustreza potrebam stranke v zvezi z zagotavljanjem določenih storitev podjetja, v skladu z veljavno zakonodajo Avstrije. Vsaka uporaba zgornjih izrazov ali drugih besed v ednini, množini, velikih črkah in/ali on/ona ali oni se štejejo za zamenljive in se zato nanašajo na isto. Naše pogoje uporabe smo ustvarili s pomočjo <a class="text-blue-500 underline" href="https://www.privacypolicyonline.com/terms-conditions-generator/">Generatorja pogojev uporabe</a>.
		`,
		cookies: {
			title: 'Piškotki',
			description: 'Uporabljamo piškotke. Z dostopom do SAFE-Fireplace se strinjate z uporabo piškotkov v skladu s politiko zasebnosti SAFE-Fireplace.',
			usage: 'Večina interaktivnih spletnih mest uporablja piškotke za pridobivanje podatkov o uporabniku ob vsakem obisku. Piškotki se na našem spletnem mestu uporabljajo za omogočanje funkcionalnosti določenih področij in olajšanje uporabe spletnega mesta za obiskovalce. Nekateri naši partnerji/prikriti oglaševalci lahko prav tako uporabljajo piškotke.',
		},
		license: {
			title: 'Licenca',
			description: 'Razen če je drugače navedeno, so SAFE-Fireplace in/ali njegovi licenčni partnerji lastniki intelektualne lastnine za vse materiale na SAFE-Fireplace. Vse intelektualne lastninske pravice so pridržane. Dostop do teh materialov iz SAFE-Fireplace je dovoljen za osebno uporabo, z omejitvami, določenimi v teh pogojih uporabe.',
			restrictions: 'Ni dovoljeno:',
			restrictionsList: [
				'Ponovno objaviti material iz SAFE-Fireplace',
				'Prodajati, najemati ali podlicencirati material iz SAFE-Fireplace',
				'Reproducirati, podvajati ali kopirati material iz SAFE-Fireplace',
				'Razširiti vsebino iz SAFE-Fireplace',
			],
			agreementStart: 'To sporazum se začne na današnji dan.',
		},
		comments: {
			title: 'Komentarji',
			description: 'Določeni deli tega spletnega mesta omogočajo uporabnikom objavljanje in izmenjavo mnenj ter informacij v določenih področjih spletnega mesta. SAFE-Fireplace ne filtrira, ureja, objavlja ali pregleduje komentarjev pred njihovo objavo. Komentarji ne odražajo stališč in mnenj SAFE-Fireplace, njegovih zastopnikov in/ali pridruženih podjetij. Komentarji odražajo stališča in mnenja osebe, ki jih objavi. V mejah, ki jih dovoljujejo veljavni zakoni, SAFE-Fireplace ne odgovarja za komentarje ali kakršno koli odgovornost, škodo ali stroške, ki nastanejo in/ali so posledica uporabe in/ali objave in/ali prikaza komentarjev na tem spletnem mestu.',
			monitoring: 'SAFE-Fireplace si pridržuje pravico spremljati vse komentarje in odstraniti vse komentarje, ki se lahko štejejo za neprimerne, žaljive ali kršijo te pogoje uporabe.',
			warranty: 'Zagotavljate in jamčite, da:',
			warrantyList: [
				'Imate pravico objavljati komentarje na našem spletnem mestu in imate vse potrebne licence in soglasja za to;',
				'Komentarji ne kršijo intelektualnih lastninskih pravic, vključno z avtorskimi pravicami, patenti ali blagovnimi znamkami tretjih oseb;',
				'Komentarji ne vsebujejo klevetnega, obrekljivega, žaljivega, nespodobnega ali drugače nezakonitega materiala, ki krši zasebnost;',
				'Komentarji ne bodo uporabljeni za vabljenje ali promocijo poslov ali navad ali predstavljanje komercialnih dejavnosti ali nezakonitih dejanj.',
			],
			licenseGrant: 'S tem podeljujete SAFE-Fireplace neekskluzivno licenco za uporabo, reprodukcijo in urejanje vaših komentarjev v vseh oblikah, formatih ali medijih.',
		},
		hyperlinking: {
			title: 'Hiperpovezave do naše vsebine',
			description: 'Naslednje organizacije lahko povezujejo do našega spletnega mesta brez predhodnega pisnega dovoljenja:',
			organizations: [
				'Vladne agencije;',
				'Iskalniki;',
				'Novinarske organizacije;',
				'Distributerji spletnih imenikov lahko povezujejo do našega spletnega mesta na enak način kot do spletnih mest drugih navedenih podjetij; in',
				'Sistemsko akreditirana podjetja, razen neprofitnih organizacij, dobrodelnih nakupovalnih središč in dobrodelnih organizacij za zbiranje sredstev, ki morda ne smejo povezovati do našega spletnega mesta.',
			],
			linkConditions: 'Te organizacije lahko povezujejo do naše domače strani, objav ali drugih informacij na spletnem mestu, pod pogojem, da povezava: (a) ni na noben način zavajajoča; (b) ne pomeni napačnega sponzorstva, podpore ali odobritve povezovalca in njegovih izdelkov in/ali storitev; in (c) se prilega kontekstu spletnega mesta povezovalca.',
			approvalConditions: 'Zahteve za povezavo lahko preverimo in odobrimo od naslednjih vrst organizacij:',
			approvalOrganizations: [
				'Splošno znani viri potrošniških in/ali poslovnih informacij;',
				'Spletná mesta skupnosti .com;',
				'Združenja ali druge skupine, ki zastopajo dobrodelne organizacije;',
				'Distributerji spletnih imenikov;',
				'Internetni portali;',
				'Računovodska, pravna in svetovalna podjetja; in',
				'Izobraževalne ustanove in trgovska združenja.',
			],
			approvalCriteria: 'Zahteve za povezavo bomo odobrili, če se nam zdi, da: (a) povezava ne daje podjetju ali našim akreditiranim podjetjem negativen videz; (b) organizacija nima negativnih zapisov pri nas; (c) korist za nas zaradi vidnosti hiperpovezave nadomesti odsotnost SAFE-Fireplace; in (d) povezava je v kontekstu splošnih informacijskih virov.',
			linkRules: 'Te organizacije lahko povezujejo do naše domače strani, pod pogojem, da povezava: (a) ni na noben način zavajajoča; (b) ne pomeni napačnega sponzorstva, podpore ali odobritve povezovalca in njegovih izdelkov ali storitev; in (c) se prilega kontekstu spletnega mesta povezovalca.',
			contactInfo: 'Če ste ena od organizacij, navedenih v odstavku 2 zgoraj, in ste zainteresirani za povezavo do našega spletnega mesta, nas morate obvestiti po e-pošti na SAFE-Fireplace. Prosimo, vključite svoje ime, ime organizacije, kontaktne podatke, URL vašega spletnega mesta, seznam URL-jev, s katerih želite povezovati do našega spletnega mesta, in seznam URL-jev na našem spletnem mestu, do katerih želite povezovati. Počakajte 2-3 tedne na odgovor.',
			approvedLinkMethods: 'Odobrene organizacije lahko povezujejo do našega spletnega mesta na naslednje načine:',
			approvedLinkList: [
				'Z uporabo imena našega podjetja; ali',
				'Z uporabo enotnega lokatorja vira (URL), na katerega se povezujete; ali',
				'Z uporabo katere koli druge opise našega spletnega mesta, na katerega se povezujete, ki je smiselna v kontekstu in obliki vsebine na spletnem mestu povezovalca.',
			],
			trademarkNotice: 'Uporaba logotipa ali drugih grafik SAFE-Fireplace ni dovoljena brez licenčne pogodbe o blagovni znamki.',
		},
		iframes: {
			title: 'iFrames',
			description: 'Brez predhodnega dovoljenja in pisnega soglasja ne smete ustvarjati okvirjev okoli naših spletnih strani, ki spreminjajo videz ali vizualno predstavitev našega spletnega mesta na kakršen koli način.',
		},
		contentLiability: {
			title: 'Odgovornost za vsebino',
			description: 'Ne prevzemamo odgovornosti za vsebino, ki se pojavi na vašem spletnem mestu. Strinjate se, da nas ščitite in branite pred vsemi zahtevki, ki izhajajo iz vašega spletnega mesta. Na vašem spletnem mestu ne smejo biti povezave, ki bi jih lahko razlagali kot klevetne, obscene ali kriminalne ali ki kršijo ali drugače kršijo pravice tretjih oseb.',
		},
		reservationOfRights: {
			title: 'Pridržanje pravic',
			description: 'Pridržujemo si pravico zahtevati odstranitev vseh povezav ali določene povezave do našega spletnega mesta. Strinjate se, da takoj odstranite vse povezave do našega spletnega mesta na zahtevo. Pridržujemo si tudi pravico spremeniti te pogoje uporabe in našo politiko povezav kadar koli. Z nadaljnjo povezavo do našega spletnega mesta se strinjate, da ste vezani na te pogoje povezovanja in se jim boste držali.',
		},
		removalOfLinks: {
			title: 'Odstranjevanje povezav z našega spletnega mesta',
			description: 'Če na našem spletnem mestu najdete katero koli povezavo, ki je zaradi katerega koli razloga žaljiva, nas lahko kadarkoli kontaktirate in obvestite. Preverili bomo zahteve za odstranitev povezav, vendar nismo dolžni na to odgovoriti ali vas neposredno obvestiti.',
			disclaimer: 'Ne jamčimo, da so informacije na tem spletnem mestu točne, ne jamčimo za njihovo popolnost ali točnost; prav tako ne jamčimo, da bo spletno mesto ostalo dostopno ali da bo material na spletnem mestu posodobljen.',
		},
		disclaimer: {
			title: 'Omejitev odgovornosti',
			description: 'V največji meri, ki jo dovoljuje zakon, izključujemo vse izjave, garancije in pogoje v zvezi z našim spletnim mestom in uporabo tega spletnega mesta. Nič v tej omejitvi odgovornosti ne bo:',
			points: [
				'omejilo ali izključilo našo ali vašo odgovornost za smrt ali telesno poškodbo;',
				'omejilo ali izključilo našo ali vašo odgovornost za goljufijo ali goljufivo napačno predstavitev;',
				'omejilo našo ali vašo odgovornost na način, ki ni dovoljen z veljavno zakonodajo; ali',
				'izključilo našo ali vašo odgovornost, ki je ni mogoče izključiti po veljavni zakonodaji.',
			],
			limitations: 'Omejitve in izključitve odgovornosti, določene v tem razdelku in drugje v tej omejitvi odgovornosti: (a) so podrejene zgornjemu odstavku; in (b) urejajo vse zahteve, ki izhajajo iz omejitve odgovornosti, vključno z zahtevami iz pogodbe, iz nedovoljenega dejanja in kršitve zakonske dolžnosti.',
			freeServiceDisclaimer: 'Dokler so spletno mesto in informacije ter storitve na spletnem mestu brezplačno dostopne, ne bomo odgovorni za izgube ali škodo nobene vrste.',
		},
	},
	log: `Ta dnevnik je bil poklican iz '{fileName}'`,
} satisfies Translation

export default sl