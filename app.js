
const I18N={
 en:{
  // Survey / species-presence wording. Three distinct facts — see speciesGap().
  fishPresentHead:"Fish species present",
  fishPresentSub:"Species recorded in Ontario's Aquatic Resource Area surveys.",
  fishPresentSeparate:"Separate from the stocking history below.",
  fishPresentTap:"Tap one for its limits and season.",
  // The netting-survey card. It sits next to "Fish species present" and was
  // reading as the same list twice: same lake, overlapping species, no stated
  // difference. Presence is Ontario's summary of what lives in the waterbody;
  // this is what a crew actually pulled out of the water and counted.
  netHead:"Counted in netting surveys",
  netSub:"Fish ON-Line records the catch from individual survey nettings, with counts. Fewer species appear here than in the presence list above — a species can live in a lake without turning up in a netting.",
  netCaught:"caught",
  netNoCount:"count not recorded",
  netNone:"No Fish ON-Line netting survey was matched to this waterbody identifier. That means no netting record, not an empty lake.",
  netLoading:"Netting survey records are loading, or unavailable offline.",
  surveyNone:"No fish survey has been published for this waterbody. That means no data, not an empty lake.",
  surveyForageOnly:"This lake has been surveyed, but the only species recorded were baitfish and forage fish, which this app does not list. That is a record of what the crew netted, not a full picture of the lake.",
  surveyUnidentified:"This lake has been surveyed, but the records are not identified to species — only to a family or genus. There are fish here; Ontario's data does not say which.",
  headForageOnly:"Forage species only",
  headUnidentified:"Not identified to species",
  metaNoSurvey:"No survey data",
  metaForageOnly:"Forage species only",
  metaUnidentified:"Not identified to species",
  speciesRecordedOne:"species recorded",
  speciesRecordedMany:"species recorded",
  maxDepth:"Maximum depth",meanDepth:"Mean depth",surfaceArea:"Surface area",
  waterClarity:"Water clarity",thermalRegime:"Thermal regime",
  // Status and progress lines
  loadingData:"Loading Ontario data…",loadingRecords:"Loading…",searchingOntario:"Searching Ontario…",
  searchingAllLakes:"Searching all Ontario lakes…",searchingFor:"Searching Ontario for {sp}…",
  loadingZones:"Loading Ontario FMZ boundaries…",zonesRetry:"Zone boundaries unavailable — retrying",
  zonesUnavailable:"Zone boundaries unavailable",loadingAccess:"Loading Ontario access points…",
  accessUnavailable:"Access-point service unavailable",findingLocation:"Finding your location…",
  locationUnavailable:"Location unavailable",
  contoursOn:"Depth contours on • not for navigation",
  bathyNote:"Government bathymetry • not for navigation",
  // Find Fish mode note
  modeNoteAny:"Searches provincial fish survey records, not just stocking. Most Ontario fish were never stocked.",
  modeNoteStocked:"Only lakes with a stocking record for this species.",
  // Catch log
  catchSpeciesPh:"Species e.g. Walleye",catchLengthPh:"Length cm",catchNotesPh:"Catch notes (optional)",
  tripNotesPh:"Trip notes",enterSpecies:"Enter the fish species.",minimumPh:"e.g. 2000",
  // Result cards
  badgeBestMatch:"Best Match",recordedNotStocked:"Recorded here (not stocked)",
  fishStocked:"fish stocked",kmAway:"km away",records:"records",
  explore:"Explore",nearMe:"Near Me",sections:"Sections",
  plateNote:"Illustration \u2014 not for identification",
  illustrations:"Fish illustrations",
  plateAboutNote:"They are shown to help you picture the fish, not to identify one. Several Ontario species are easily confused and their limits differ \u2014 check the official rule before keeping anything.",
  noLakeWithSpecies:"No lake within {r} km has {sp} on record. Try a wider distance — or the species may simply not have been surveyed nearby.",
  noLakesWithin:"No lakes found within {r} km.",
  weatherAlert:"Weather alert",lakeArea:"Lake area",
  findFish:"Find Fish",distance:"Distance",species:"Species",stockingYear:"Stocking year",
  minimumStocked:"Minimum fish stocked",lakeName:"Lake name",sortResults:"Sort results",
  bestMatch:"Best Match",closest:"Closest",recent:"Most recently stocked",quantity:"Most fish stocked",
  findStocked:"Find Fish Near Me",myLakes:"My Lakes",trips:"Trips",overview:"Overview",
  stocking:"Stocking",regulations:"Regulations",access:"Access",fishSpecies:"Fish Species",
  depth:"Depth",eatingAdvice:"Eating Advice",weather:"Weather",sportLimit:"Sport limit",
  conservationLimit:"Conservation limit",season:"Season",verify:"Verify Current Ontario Rule",
  weatherTitle:"Weather & Fishing Conditions",refreshAlerts:"Refresh Alerts",
  noAlert:"No active Environment Canada alert was returned for the lake area.",
  language:"Language",english:"English",french:"Français",viewLake:"View Lake →",
  matchingStocked:"Matching fish stocked",mostRecent:"Most recent stocking",
  specialRule:"Special lake rule",officialRequired:"Official Ontario rule required",
  tagline:"Find stocked lakes. Know the rules. Plan the trip.",
  help:"Help",about:"About",startExploring:"Start Exploring",
  onboardTitle:"Find your next Ontario fishing lake",
  onboardText:"Search by distance, species and stocking history, then check regulations, access, weather and eating advice before you go.",
  onboard1:"Choose a distance and species",onboard2:"Compare stocked lakes",onboard3:"Open a lake and verify the current rules",
  helpTitle:"Help & About",helpFind:"Find Fish",helpFindText:"Use your location, distance, species, stocking year and quantity filters to find stocked lakes.",
  helpRules:"Regulations",helpRulesText:"The app imports Ontario's 2026 open regulation data, but current official Ontario rules remain the final verification source.",
  helpTrips:"Trips & catches",helpTripsText:"Trip notes and catch logs are stored on this device. Save a backup below before you reset or change devices.",
  helpWeather:"Weather",helpWeatherText:"Weather alerts come from Environment and Climate Change Canada. Weather information is for trip planning and safety, not a bite prediction.",
  privacy:"Privacy",privacyText:"Location is requested only when you use a location feature, and is never sent anywhere. Your most recent position is kept on this device for two weeks so distances still show next time. Trips and catches stay on this device.",
  dataSources:"Government data sources",disclaimer:"Not an official Government of Ontario app.",
  yourData:"Your data",yourDataText:"Trips, catches and saved lakes stay on this device. Save a backup before you change or reset your device.",
  exportData:"Save a backup",importData:"Restore a backup",
  textSize:"Text size",textSizeNote:"Larger text throughout the app. Useful in bright sun or on the water.",
  sizePreview:"Brook Trout • stocked 2025 • 4,200 fish",
  location:"Location",locationNote:"Used on this device to sort lakes by distance. Never sent anywhere.",
  useLocation:"Use my location",
  appLink:"App link",appLinkNote:"Share Ontario Stocked Lakes with someone.",
  copyLink:"Copy link",shareApp:"Share",linkCopied:"Link copied.",
  heroTitle:"Find your next fishing spot",searchPh:"Search a lake, township or species",search:"Search",
  statLakesLbl:"Stocked lakes",statRecordsLbl:"Stocking records",statSpeciesLbl:"Species",statLatestLbl:"Latest year",
  recentlyStocked:"Recently Stocked",recentlyStockedSub:"Newest records first",
  recentNear:"Recent Near Me",recentNearSub:"Newest stocked lakes close to you",
  regs2026:"2026 Regulations",regs2026Sub:"Official Ontario fishing rules",
  fishOnlineSub:"Government lake information",fishOnlineSub2:"Government lake information and maps",
  lakesNearYou:"Lakes near you",sortedByDrive:"Sorted by how far you'd have to drive.",within:"Within",
  myLakesSub:"Lakes you've saved. Tap \u2606 on any lake to keep it here.",filterSavedPh:"Filter your saved lakes",
  tripsCatches:"Trips & catches",logbookSub:"Your logbook, stored on this device.",
  findFishHead:"\uD83D\uDD0E Find Fish",findFishSub:"Find which lakes hold a species, near you.",
  modeAny:"Anywhere the fish are",modeStocked:"Stocked lakes only",
  anySpecies:"Any species",anyYear:"Any year",optionalLakePh:"Optional lake name",
  onlyAccess:"Only lakes with a nearby fishing access point",reset:"Reset",
  allSpecies:"All species",allYears:"All years",anyDistance:"Any distance",clear:"Clear",
  includeUnstocked:"Include lakes that aren't stocked",filtersChanged:"Filters changed \u2014 tap Search to apply.",
  showAccess:"Show fishing access points",showFMZ:"Show Fisheries Management Zones",
  showDepth:"Show lake depth contours",accessStatus:"Boat launches \u2022 shore access \u2022 docks/piers",
  depthStatus:"Government bathymetry \u2022 not for navigation",
  lakeMap:"Lake map",baseMap:"Map",baseTopo:"Topo",basePlain:"Plain",tapMarker:"Tap a marker for details",loading:"Loading\u2026",
  officialSources:"Official Ontario sources",
  regsSummaryNote:"Regulations in this app are a summary. These are the authoritative sources \u2014 open them before you fish.",
  regsSummaryTitle:"2026 Fishing Regulations Summary",regsSummarySub:"Seasons, limits and slot sizes by zone",
  licences:"Fishing licences",licencesSub:"Buy or renew an Outdoors Card and licence",
  eatingGuide:"Guide to Eating Ontario Fish",eatingGuideSub:"Consumption advisories by waterbody",
  ecWeather:"Environment Canada weather",ecWeatherSub:"Forecasts and marine warnings",
  openData:"Ontario Open Data",openDataSub:"The datasets behind this app",
  footerSources:"Fish stocking, regulations and advisory data: Government of Ontario. Weather alerts: Environment and Climate Change Canada.",
  footerDisclaimer:"Not an official Government of Ontario application. Always confirm the current regulations before you fish.",
  noSpeciesRecorded:"No species recorded",notStocked:"Not stocked",latestStocking:"Latest stocking",speciesUnavailable:"Species unavailable",
  exploreStocked:"Explore stocked lakes",stockedNearMe:"Stocked lakes near me",recentWithin100:"Recently stocked within 100 km",
  myFishingTrips:"My Fishing Trips",tripsCount:"trips",
  settings:"Settings",helpAbout:"Help and about",withinKm:"Within {n} km",
  regsEnglishNote:"Ontario publishes its regulations, seasons and limits in English only in this dataset, so that text stays as the province wrote it.",
  stockingData:"Stocking data",
  stockingDataNote:"Bundled with the app, so it opens without a network. Check Ontario for newer records whenever you have a signal.",
  checkStockings:"Check for new stockings",checkingStockings:"Checking…",
  asOf:"Ontario stocking data as of",liveData:"Ontario stocking data, loaded live."
 },
 fr:{
  // Formulation des relev\u00e9s d'esp\u00e8ces \u2014 trois faits distincts, voir speciesGap().
  fishPresentHead:"Esp\u00e8ces de poissons pr\u00e9sentes",
  fishPresentSub:"Esp\u00e8ces r\u00e9pertori\u00e9es dans les relev\u00e9s des aires de ressources aquatiques de l'Ontario.",
  fishPresentSeparate:"Distinct de l'historique d'ensemencement ci-dessous.",
  fishPresentTap:"Touchez une esp\u00e8ce pour conna\u00eetre ses limites et sa saison.",
  netHead:"D\u00e9nombr\u00e9s lors de p\u00eaches exp\u00e9rimentales",
  netSub:"P\u00eache en direct r\u00e9pertorie les prises de chaque p\u00eache exp\u00e9rimentale, avec les d\u00e9nombrements. Moins d'esp\u00e8ces figurent ici que dans la liste des esp\u00e8ces pr\u00e9sentes ci-dessus \u2014 une esp\u00e8ce peut vivre dans un lac sans \u00eatre captur\u00e9e.",
  netCaught:"captur\u00e9s",
  netNoCount:"d\u00e9nombrement non consign\u00e9",
  netNone:"Aucune p\u00eache exp\u00e9rimentale de P\u00eache en direct n'a \u00e9t\u00e9 associ\u00e9e \u00e0 cet identifiant de plan d'eau. Cela signifie qu'il n'y a pas de relev\u00e9 de capture, et non que le lac est vide.",
  netLoading:"Les relev\u00e9s de p\u00eache exp\u00e9rimentale se chargent ou ne sont pas disponibles hors ligne.",
  surveyNone:"Aucun relev\u00e9 de poissons n'a \u00e9t\u00e9 publi\u00e9 pour ce plan d'eau. Cela signifie qu'il n'y a pas de donn\u00e9es, et non que le lac est vide.",
  surveyForageOnly:"Ce lac a fait l'objet d'un relev\u00e9, mais les seules esp\u00e8ces r\u00e9pertori\u00e9es \u00e9taient des poissons-app\u00e2ts et des poissons fourrages, que cette application ne r\u00e9pertorie pas. Il s'agit du relev\u00e9 des captures de l'\u00e9quipe, et non d'un portrait complet du lac.",
  surveyUnidentified:"Ce lac a fait l'objet d'un relev\u00e9, mais les donn\u00e9es ne pr\u00e9cisent pas l'esp\u00e8ce \u2014 seulement la famille ou le genre. Il y a des poissons ici; les donn\u00e9es de l'Ontario ne disent pas lesquels.",
  headForageOnly:"Poissons fourrages seulement",
  headUnidentified:"Esp\u00e8ce non pr\u00e9cis\u00e9e",
  metaNoSurvey:"Aucun relev\u00e9",
  metaForageOnly:"Poissons fourrages seulement",
  metaUnidentified:"Esp\u00e8ce non pr\u00e9cis\u00e9e",
  speciesRecordedOne:"esp\u00e8ce r\u00e9pertori\u00e9e",
  speciesRecordedMany:"esp\u00e8ces r\u00e9pertori\u00e9es",
  maxDepth:"Profondeur maximale",meanDepth:"Profondeur moyenne",surfaceArea:"Superficie",
  waterClarity:"Transparence de l'eau",thermalRegime:"R\u00e9gime thermique",
  // Lignes d'\u00e9tat et de progression
  loadingData:"Chargement des donn\u00e9es de l'Ontario\u2026",loadingRecords:"Chargement\u2026",
  searchingOntario:"Recherche en Ontario\u2026",
  searchingAllLakes:"Recherche dans tous les lacs de l'Ontario\u2026",searchingFor:"Recherche de {sp} en Ontario\u2026",
  loadingZones:"Chargement des limites des ZGP de l'Ontario\u2026",zonesRetry:"Limites de zone non disponibles \u2014 nouvelle tentative",
  zonesUnavailable:"Limites de zone non disponibles",loadingAccess:"Chargement des points d'acc\u00e8s de l'Ontario\u2026",
  accessUnavailable:"Service des points d'acc\u00e8s non disponible",findingLocation:"Localisation en cours\u2026",
  locationUnavailable:"Position non disponible",
  contoursOn:"Courbes de profondeur activ\u00e9es \u2022 ne pas utiliser pour la navigation",
  bathyNote:"Bathym\u00e9trie gouvernementale \u2022 ne pas utiliser pour la navigation",
  // Note du mode Trouver du poisson
  modeNoteAny:"Recherche dans les relev\u00e9s provinciaux de poissons, pas seulement l'ensemencement. La plupart des poissons de l'Ontario n'ont jamais \u00e9t\u00e9 ensemenc\u00e9s.",
  modeNoteStocked:"Seuls les lacs ayant un registre d'ensemencement pour cette esp\u00e8ce.",
  // Journal de p\u00eache
  catchSpeciesPh:"Esp\u00e8ce, p. ex. dor\u00e9 jaune",catchLengthPh:"Longueur cm",catchNotesPh:"Notes sur la capture (facultatif)",
  tripNotesPh:"Notes de sortie",enterSpecies:"Entrez l'esp\u00e8ce de poisson.",minimumPh:"p. ex. 2000",
  // Fiches de r\u00e9sultats
  badgeBestMatch:"Meilleure correspondance",recordedNotStocked:"R\u00e9pertori\u00e9 ici (non ensemenc\u00e9)",
  fishStocked:"poissons ensemenc\u00e9s",kmAway:"km",records:"enregistrements",
  explore:"Explorer",nearMe:"Pr\u00e8s de moi",sections:"Sections",
  plateNote:"Illustration \u2014 non destin\u00e9e \u00e0 l'identification",
  illustrations:"Illustrations de poissons",
  plateAboutNote:"Elles vous aident \u00e0 visualiser le poisson, mais ne servent pas \u00e0 l'identifier. Plusieurs esp\u00e8ces de l'Ontario se confondent facilement et leurs limites diff\u00e8rent \u2014 v\u00e9rifiez la r\u00e8gle officielle avant de garder une prise.",
  noLakeWithSpecies:"Aucun lac dans un rayon de {r}\u00a0km n'a de {sp} au registre. Essayez une distance plus grande \u2014 ou l'esp\u00e8ce n'a simplement pas fait l'objet d'un relev\u00e9 \u00e0 proximit\u00e9.",
  noLakesWithin:"Aucun lac trouv\u00e9 dans un rayon de {r}\u00a0km.",
  weatherAlert:"Alerte m\u00e9t\u00e9o",lakeArea:"Secteur du lac",
  findFish:"Trouver du poisson",distance:"Distance",species:"Espèce",stockingYear:"Année d'ensemencement",
  minimumStocked:"Nombre minimal de poissons ensemencés",lakeName:"Nom du lac",sortResults:"Trier les résultats",
  bestMatch:"Meilleure correspondance",closest:"Les plus proches",recent:"Ensemencement le plus récent",quantity:"Plus grand nombre ensemencé",
  findStocked:"Trouver du poisson près de moi",myLakes:"Mes lacs",trips:"Sorties",overview:"Aperçu",
  stocking:"Ensemencement",regulations:"Règlements",access:"Accès",fishSpecies:"Espèces de poissons",
  depth:"Profondeur",eatingAdvice:"Conseils de consommation",weather:"Météo",sportLimit:"Limite sportive",
  conservationLimit:"Limite de conservation",season:"Saison",verify:"Vérifier le règlement actuel de l’Ontario",
  weatherTitle:"Météo et conditions de pêche",refreshAlerts:"Actualiser les alertes",
  noAlert:"Aucune alerte active d’Environnement Canada n’a été retournée pour le secteur du lac.",
  language:"Langue",english:"English",french:"Français",viewLake:"Voir le lac →",
  matchingStocked:"Poissons ensemencés correspondants",mostRecent:"Ensemencement le plus récent",
  specialRule:"Règle spéciale pour ce plan d’eau",officialRequired:"Règlement officiel de l’Ontario requis",
  tagline:"Trouvez des lacs ensemencés. Connaissez les règles. Planifiez votre sortie.",
  help:"Aide",about:"À propos",startExploring:"Commencer",
  onboardTitle:"Trouvez votre prochain lac de pêche en Ontario",
  onboardText:"Recherchez par distance, espèce et historique d’ensemencement, puis vérifiez les règlements, l’accès, la météo et les conseils de consommation.",
  onboard1:"Choisissez une distance et une espèce",onboard2:"Comparez les lacs ensemencés",onboard3:"Ouvrez un lac et vérifiez les règles actuelles",
  helpTitle:"Aide et à propos",helpFind:"Trouver du poisson",helpFindText:"Utilisez votre position, la distance, l’espèce, l’année et la quantité d’ensemencement pour trouver des lacs.",
  helpRules:"Règlements",helpRulesText:"L’application importe les données ouvertes 2026 de l’Ontario, mais les règles officielles actuelles de l’Ontario demeurent la source finale de vérification.",
  helpTrips:"Sorties et prises",helpTripsText:"Les notes de sortie et les prises sont enregistrées sur cet appareil. Enregistrez une copie ci-dessous avant de changer d’appareil.",
  helpWeather:"Météo",helpWeatherText:"Les alertes météo proviennent d’Environnement et Changement climatique Canada. Elles servent à la planification et à la sécurité, pas à prédire les prises.",
  privacy:"Confidentialité",privacyText:"La position est demandée seulement lorsque vous utilisez une fonction géolocalisée et n’est jamais transmise. Votre position la plus récente est conservée sur cet appareil pendant deux semaines afin que les distances s’affichent à la prochaine ouverture. Les sorties et les prises restent sur cet appareil.",
  dataSources:"Sources de données gouvernementales",disclaimer:"Ceci n’est pas une application officielle du gouvernement de l’Ontario.",
  yourData:"Vos données",yourDataText:"Les sorties, les prises et les lacs enregistrés restent sur cet appareil. Enregistrez une copie avant de changer ou de réinitialiser votre appareil.",
  exportData:"Enregistrer une copie",importData:"Restaurer une copie",
  textSize:"Taille du texte",textSizeNote:"Agrandit le texte dans toute l'application. Utile au soleil ou sur l'eau.",
  sizePreview:"Omble de fontaine • ensemencé 2025 • 4 200 poissons",
  location:"Position",locationNote:"Utilisée sur cet appareil pour trier les lacs par distance. Jamais transmise.",
  useLocation:"Utiliser ma position",
  appLink:"Lien de l'application",appLinkNote:"Partagez Ontario Stocked Lakes avec quelqu'un.",
  copyLink:"Copier le lien",shareApp:"Partager",linkCopied:"Lien copié.",
  heroTitle:"Trouvez votre prochain coin de p\u00eache",searchPh:"Rechercher un lac, un canton ou une esp\u00e8ce",search:"Rechercher",
  statLakesLbl:"Lacs ensemenc\u00e9s",statRecordsLbl:"Ensemencements",statSpeciesLbl:"Esp\u00e8ces",statLatestLbl:"Derni\u00e8re ann\u00e9e",
  recentlyStocked:"Ensemenc\u00e9s r\u00e9cemment",recentlyStockedSub:"Les plus r\u00e9cents d'abord",
  recentNear:"R\u00e9cents pr\u00e8s de moi",recentNearSub:"Lacs ensemenc\u00e9s r\u00e9cemment, pr\u00e8s de vous",
  regs2026:"R\u00e8glements 2026",regs2026Sub:"R\u00e8gles de p\u00eache officielles de l'Ontario",
  fishOnlineSub:"Renseignements gouvernementaux sur les lacs",fishOnlineSub2:"Renseignements et cartes du gouvernement",
  lakesNearYou:"Lacs pr\u00e8s de vous",sortedByDrive:"Tri\u00e9s selon la distance \u00e0 parcourir.",within:"Dans un rayon de",
  myLakesSub:"Vos lacs enregistr\u00e9s. Touchez \u2606 sur un lac pour l'ajouter ici.",filterSavedPh:"Filtrer vos lacs enregistr\u00e9s",
  tripsCatches:"Sorties et prises",logbookSub:"Votre carnet, conserv\u00e9 sur cet appareil.",
  findFishHead:"\uD83D\uDD0E Trouver du poisson",findFishSub:"Trouvez les lacs o\u00f9 vit une esp\u00e8ce, pr\u00e8s de vous.",
  modeAny:"Partout o\u00f9 vit le poisson",modeStocked:"Lacs ensemenc\u00e9s seulement",
  anySpecies:"Toutes les esp\u00e8ces",anyYear:"Toutes les ann\u00e9es",optionalLakePh:"Nom du lac (facultatif)",
  onlyAccess:"Seulement les lacs avec un acc\u00e8s de p\u00eache \u00e0 proximit\u00e9",reset:"R\u00e9initialiser",
  allSpecies:"Toutes les esp\u00e8ces",allYears:"Toutes les ann\u00e9es",anyDistance:"Toute distance",clear:"Effacer",
  includeUnstocked:"Inclure les lacs non ensemenc\u00e9s",filtersChanged:"Filtres modifi\u00e9s \u2014 touchez Rechercher pour appliquer.",
  showAccess:"Afficher les acc\u00e8s de p\u00eache",showFMZ:"Afficher les zones de gestion des p\u00eaches",
  showDepth:"Afficher les courbes de profondeur",accessStatus:"Mises \u00e0 l'eau \u2022 acc\u00e8s riverain \u2022 quais",
  depthStatus:"Bathym\u00e9trie gouvernementale \u2022 pas pour la navigation",
  lakeMap:"Carte du lac",baseMap:"Carte",baseTopo:"Topo",basePlain:"\u00c9pur\u00e9e",tapMarker:"Touchez un rep\u00e8re pour les d\u00e9tails",loading:"Chargement\u2026",
  officialSources:"Sources officielles de l'Ontario",
  regsSummaryNote:"Les r\u00e8glements pr\u00e9sent\u00e9s ici sont un r\u00e9sum\u00e9. Voici les sources officielles \u2014 consultez-les avant de p\u00eacher.",
  regsSummaryTitle:"R\u00e9sum\u00e9 des r\u00e8glements de p\u00eache 2026",regsSummarySub:"Saisons, limites et fourchettes de taille par zone",
  licences:"Permis de p\u00eache",licencesSub:"Acheter ou renouveler une Carte Plein air et un permis",
  eatingGuide:"Guide de consommation du poisson de l'Ontario",eatingGuideSub:"Avis de consommation par plan d'eau",
  ecWeather:"M\u00e9t\u00e9o d'Environnement Canada",ecWeatherSub:"Pr\u00e9visions et avertissements maritimes",
  openData:"Donn\u00e9es ouvertes de l'Ontario",openDataSub:"Les jeux de donn\u00e9es derri\u00e8re cette application",
  footerSources:"Donn\u00e9es d'ensemencement, de r\u00e9glementation et d'avis de consommation\u00a0: gouvernement de l'Ontario. Alertes m\u00e9t\u00e9o\u00a0: Environnement et Changement climatique Canada.",
  footerDisclaimer:"Application non officielle du gouvernement de l'Ontario. V\u00e9rifiez toujours les r\u00e8glements en vigueur avant de p\u00eacher.",
  noSpeciesRecorded:"Aucune esp\u00e8ce r\u00e9pertori\u00e9e",notStocked:"Non ensemenc\u00e9",latestStocking:"Dernier ensemencement",speciesUnavailable:"Esp\u00e8ce non disponible",
  exploreStocked:"Explorer les lacs ensemenc\u00e9s",stockedNearMe:"Lacs ensemenc\u00e9s pr\u00e8s de moi",recentWithin100:"Ensemenc\u00e9s r\u00e9cemment dans un rayon de 100\u00a0km",
  myFishingTrips:"Mes sorties de p\u00eache",tripsCount:"sorties",
  settings:"Param\u00e8tres",helpAbout:"Aide et \u00e0 propos",withinKm:"Dans un rayon de {n}\u00a0km",
  regsEnglishNote:"L'Ontario ne publie ce jeu de donn\u00e9es \u2014 r\u00e8glements, saisons et limites \u2014 qu'en anglais. Ce texte demeure donc tel que r\u00e9dig\u00e9 par la province.",
  stockingData:"Donn\u00e9es d'ensemencement",
  stockingDataNote:"Incluses dans l'application, qui s'ouvre donc sans réseau. Vérifiez auprès de l'Ontario s'il y a de nouvelles données lorsque vous avez du signal.",
  checkStockings:"Vérifier les nouveaux ensemencements",checkingStockings:"Vérification…",
  asOf:"Données d'ensemencement de l'Ontario au",liveData:"Données d'ensemencement de l'Ontario, chargées en direct."
 }
};
let appLang=localStorage.getItem("osl-language")||"en";
function t(k){return (I18N[appLang]&&I18N[appLang][k])||I18N.en[k]||k}
function setLanguage(lang){
 appLang=lang==="fr"?"fr":"en";localStorage.setItem("osl-language",appLang);
 document.documentElement.lang=appLang;
 const en=$("langEN"),fr=$("langFR");if(en)en.classList.toggle("active",appLang==="en");if(fr)fr.classList.toggle("active",appLang==="fr");
 translateStaticUI();apply();
}
function translateStaticUI(){
 // Everything carrying a data-i18n key. Before this the switch reached eight
 // elements and roughly a hundred hardcoded English strings sat untouched, so
 // FR gave you French tabs on an English app.
 document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n)});
 document.querySelectorAll("[data-i18n-ph]").forEach(el=>{el.placeholder=t(el.dataset.i18nPh)});
 document.querySelectorAll("[data-i18n-aria]").forEach(el=>{el.setAttribute("aria-label",t(el.dataset.i18nAria))});
 document.querySelectorAll("[data-i18n-within]").forEach(el=>{
  el.textContent=t("withinKm").replace("{n}",el.dataset.i18nWithin);
 });
 document.documentElement.lang=appLang;
 // Species wheels are rebuilt because their labels are translated while their
 // values stay English — the filters match on the value, so nothing shifts.
 if(typeof lakes!=="undefined"&&lakes.length)buildFilters(true);
 // The tab strip, the sort wheel, the run button and onboarding all carry
 // data-i18n keys now, so the walk above has already done them. v1x set each
 // of these by hand here, and the sort wheel was assigned by option index —
 // which did not match the markup order, so French swapped "Closest" and
 // "Best Match" on every switch.
 const tag=$("brandTagline");if(tag)tag.textContent=t("tagline");
 // The snapshot line is written when data loads, which is usually before the
 // user ever touches the language toggle. Re-render it here or FR leaves an
 // English sentence sitting under the dashboard.
 const age=$("dataAge");
 if(age&&age.textContent.trim())age.textContent=stockingBuilt?`${t("asOf")} ${stockingBuilt}.`:t("liveData");
 const hb=$("helpBtn");if(hb)hb.setAttribute("aria-label",t("help"));
 const ox=$("onboardText");if(ox)ox.textContent=t("onboardText");
 // The Find Fish mode note is rewritten by setMode() on every switch, so it has
 // to be re-rendered here rather than left to the data-i18n default.
 const note=$("modeNote");
 if(note)note.textContent=t(findMode==="stocked"?"modeNoteStocked":"modeNoteAny");
}

const APP_VERSION="v2g";
const API="https://services1.arcgis.com/TJH5KDher0W13Kgo/ArcGIS/rest/services/FishStockingDataForRecreationalPurposes/FeatureServer/0/query";
const ACCESS_API="https://services1.arcgis.com/YiULsZbgRKmBtdZN/ArcGIS/rest/services/Protected_Fishing_Access_IntroGIS_smaglio2_WFL1/FeatureServer/2/query";
const FMZ_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open07/MapServer/14/query";
const REGS_BASE="https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-";
const SURVEY_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open10/MapServer/18/query";
const CAUGHT_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open10/MapServer/16/query";
const BATHY_URL="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open01/MapServer";
const BATHY_LAYER=30;
let rows=[],lakes=[],shown=[],accessPoints=[],accessLoaded=false,fmzFeatures=[],fmzLoaded=false,speciesLoaded=false,userLoc=null,currentView="explore";
let trips=JSON.parse(localStorage.getItem("osl-trips")||"[]"),recentLakes=JSON.parse(localStorage.getItem("osl-recent")||"[]");
let advisoryLocations=[],advisoriesLoaded=false,favoriteKeys=new Set(JSON.parse(localStorage.getItem("osl-favorites")||"[]"));
const $=id=>document.getElementById(id);

/* ---------------------------------------------------------------------------
   Leaflet guard.

   Everything below this point assumes Leaflet loaded. If it didn't, the very
   next line used to throw a ReferenceError, which killed the whole script -
   no search, no stats, no buttons, no data. Nothing on the page worked.

   Now: if L is missing we install an inert stand-in so the rest of the app
   (search, filters, lists, regulations, trips) keeps working, and we say so
   in the map card instead of failing silently.
--------------------------------------------------------------------------- */
let mapAvailable = typeof L !== "undefined";
if (!mapAvailable) {
  const inert = new Proxy(function () {}, {
    get: (_t, prop) => (prop === "then" ? undefined : () => inert),
    apply: () => inert
  });
  window.L = inert;
  document.addEventListener("DOMContentLoaded", () => {
    const n = document.getElementById("mapNotice");
    if (n) {
      n.textContent = "The map didn't load. Everything else still works - search for a lake by name below.";
      n.classList.remove("hidden");
    }
    const m = document.getElementById("map");
    if (m) m.style.display = "none";
  });
}

const map=L.map("map").setView([46.2,-81.0],5);

const markerLayer=L.layerGroup().addTo(map);
const accessLayer=L.layerGroup().addTo(map);
const bathyLayer=L.tileLayer(`${BATHY_URL}/export?bbox={bbox-epsg-3857}&bboxSR=3857&layers=show:${BATHY_LAYER}&size=256,256&imageSR=3857&format=png32&transparent=true&f=image`,{opacity:.72,attribution:"Government of Ontario bathymetry"});
const fmzLayer=L.geoJSON(null,{
 style:()=>({weight:2,fillOpacity:.06}),
 onEachFeature:(f,l)=>{const z=f.properties&&f.properties.FISHERIES_MANAGEMENT_ZONE_ID;l.bindPopup(`<b>Fisheries Management Zone ${z}</b><br><a target="_blank" rel="noopener" href="${REGS_BASE}${z}">View current Zone ${z} regulations</a>`)}
}).addTo(map);

/* ---------------------------------------------------------------------------
   Basemaps.

   A road basemap is the wrong basemap for finding water — lakes render as pale
   shapes and small ones vanish. Ontario publishes its own topographic tile
   cache, which draws lakes, rivers, wetlands and bush properly, under the same
   Open Government Licence the rest of the app's data uses.

   Deliberately NOT included: Esri World Imagery. Its terms require an ArcGIS
   licence and exclude commercial use, so it cannot ship in an App Store build
   however good the satellite view would look.
--------------------------------------------------------------------------- */
const BASEMAPS={
 map:{
  label:"Map",
  url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  opts:{subdomains:"abcd",maxZoom:19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}
 },
 topo:{
  label:"Ontario topo",
  // ArcGIS tile caches are {z}/{y}/{x} — row before column, unlike XYZ.
  url:"https://ws.lioservices.lrc.gov.on.ca/arcgis1/rest/services/LIO_Cartographic/LIO_Topographic/MapServer/tile/{z}/{y}/{x}",
  opts:{maxZoom:17,attribution:'Topographic data &copy; Government of Ontario'}
 },
 plain:{
  label:"Plain",
  url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  opts:{subdomains:"abcd",maxZoom:19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}
 }
};
let baseLayer=null,baseKey=localStorage.getItem("osl-basemap")||"map";

function setBasemap(key){
 if(!BASEMAPS[key])key="map";
 baseKey=key;localStorage.setItem("osl-basemap",key);
 // Reflect the choice in the UI first: bailing out early when the map is
 // unavailable used to leave the buttons showing the wrong one.
 document.querySelectorAll(".baseSwitch button").forEach(x=>x.classList.toggle("on",x.dataset.base===key));
 if(!mapAvailable)return;
 if(baseLayer)map.removeLayer(baseLayer);
 const b=BASEMAPS[key];
 baseLayer=L.tileLayer(b.url,b.opts).addTo(map);
 baseLayer.bringToBack&&baseLayer.bringToBack();
}

/* The map used to sit wherever it was last dragged while the list below it
   showed something else entirely. It now frames whatever is in the results. */
function fitToResults(){
 if(!mapAvailable||!shown.length)return;
 const pts=shown.slice(0,400).filter(l=>l.lat&&l.lon).map(l=>[l.lat,l.lon]);
 if(!pts.length)return;
 if(userLoc&&(currentView==="near"||currentView==="findfish"||currentView==="recentnear"))pts.push(userLoc);
 try{
  if(pts.length===1)map.setView(pts[0],11);
  else map.fitBounds(L.latLngBounds(pts),{padding:[28,28],maxZoom:12});
 }catch(e){}
}

let userMarker=null;

/* ---------------------------------------------------------------------------
   Remembering where you are.

   userLoc lived only in memory, so every relaunch dropped it and the distance
   column silently disappeared until you granted location again. The last fix
   is now kept on the device and restored at startup, and if permission is
   already granted a fresh fix is fetched quietly in the background.

   Nothing is transmitted — this is the same coordinate the app already had,
   stored in the same place as your saved lakes.
--------------------------------------------------------------------------- */
const LOC_KEY="osl-lastloc";
const LOC_MAX_AGE=1000*60*60*24*14;      // a fortnight; beyond that it is a guess

function rememberLocation(lat,lon){
 try{localStorage.setItem(LOC_KEY,JSON.stringify({lat,lon,at:Date.now()}))}catch(e){}
}

function restoreLocation(){
 try{
  const raw=localStorage.getItem(LOC_KEY);
  if(!raw)return false;
  const v=JSON.parse(raw);
  if(!v||typeof v.lat!=="number"||typeof v.lon!=="number")return false;
  if(Date.now()-(v.at||0)>LOC_MAX_AGE)return false;
  userLoc=[v.lat,v.lon];
  return true;
 }catch(e){return false}
}

/* If the browser already holds the permission, refresh silently. No prompt is
   raised here — a cold launch should never interrogate the user. */
function refreshLocationQuietly(){
 if(!navigator.geolocation)return;
 const go=()=>navigator.geolocation.getCurrentPosition(
   p=>{userLoc=[p.coords.latitude,p.coords.longitude];rememberLocation(userLoc[0],userLoc[1]);apply()},
   ()=>{},{maximumAge:1000*60*10,timeout:8000});
 if(navigator.permissions&&navigator.permissions.query){
  navigator.permissions.query({name:"geolocation"})
   .then(st=>{if(st.state==="granted")go()})
   .catch(()=>{});
 }
}
/* ---------------------------------------------------------------------------
   Species and life-stage names.

   These come out of Ontario's stocking table in English. They are also the
   words a francophone angler reads on every single card, so leaving them
   untranslated makes the French build look like a translation that gave up
   halfway. Twelve species, four stages — the names below follow the usage in
   Ontario's own French fisheries material.

   A species that is not in this table falls through unchanged, which is the
   right failure: an English name is honest, an invented French one is not.
------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------
   Forage species, and why they are hidden.

   Ontario's ARA survey records every fish a crew netted, which is the right
   thing for a fisheries dataset and the wrong thing for a lake sheet. A lake
   would list twenty chips and an angler would scroll past Iowa Darter,
   Blacknose Shiner and Creek Chub looking for Walleye.

   So the display drops three groups:

     FORAGE   minnows, shiners, dace, chubs, sticklebacks, sculpins, darters
              and the other small baitfish nobody drives two hours to catch.
     NOT_ANGLED  lampreys, gobies, ruffe, goldfish, alewife, gizzard shad.
              Not bait, but not a target either. Rainbow Smelt is deliberately
              NOT here — Ontario has a real spring dip-net fishery for it.
     ROLLUP   "Unidentifiable", "Sunfishes", "Moxostoma sp." and the rest of
              the family- and genus-level placeholders. These are not species.
              The card promises "tap one for its limits and season" and there
              is no season for Sander sp., so every one of these chips was a
              dead end.

   Carp, suckers, redhorse, bullheads, rock bass and bowfin all stay. The line
   is baitfish, not glamour.

   This is a DISPLAY filter only. Nothing is deleted from the data: the ARA
   record still holds every species, hasSpeciesData() can still see them, and
   the sheet says so when a filter empties a list.
--------------------------------------------------------------------------- */
const HIDDEN_SPECIES=new Set([
 // Shiners
 "Common Shiner","Golden Shiner","Blacknose Shiner","Spottail Shiner","Mimic Shiner",
 "Emerald Shiner","Blackchin Shiner","Rosyface Shiner","Spotfin Shiner","Sand Shiner",
 "Bridle Shiner","Redfin Shiner","Silver Shiner","Striped Shiner","Ghost Shiner",
 "Pugnose Shiner","River Shiner","Notropis sp.","Luxilus sp.",
 // Dace
 "Northern Redbelly Dace","Finescale Dace","Northern Pearl Dace","Longnose Dace",
 "Blacknose Dace","Redside Dace","Chrosomus sp.","Chrosomus hybrids",
 "Northern Redbelly Dace x Finescale Dace","Finescale Dace x Northern Pearl Dace",
 "Northern Redbelly Dace x Northern Pearl Dace","Blacknose Dace x Creek Chub",
 "Common Shiner x Creek Chub",
 // Chubs
 "Creek Chub","Lake Chub","Hornyhead Chub","River Chub","Silver Chub","Gravel Chub",
 "Chub","Nocomis sp.","Semotilus sp.",
 // Minnows
 "Fathead Minnow","Bluntnose Minnow","Brassy Minnow","Eastern Silvery Minnow",
 "Pugnose Minnow","Central Mudminnow","Fathead Minnow x Bluntnose Minnow",
 // Sticklebacks
 "Brook Stickleback","Ninespine Stickleback","Threespine Stickleback",
 "Fourspine Stickleback","Sticklebacks",
 // Sculpins
 "Mottled Sculpin","Slimy Sculpin","Spoonhead Sculpin","Deepwater Sculpin",
 "Fourhorn Sculpin","Sculpins","Cottus sp.","COTTIDAE hybrids",
 // Darters and the small perches
 "Iowa Darter","Johnny Darter","Johnny Darter x Tesselated Darter","Tessellated Darter",
 "Rainbow Darter","Least Darter","River Darter","Blackside Darter","Fantail Darter",
 "Greenside Darter","Channel Darter","Eastern Sand Darter","Etheostoma sp.",
 "Logperch","Trout-Perch","Trout-Perches",
 // Other small forage
 "Banded Killifish","Brook Silverside","New World Silversides","Central Stoneroller",
 "Tadpole Madtom","Margined Madtom","Noturus sp.","Stonecat",
 "Alewife","Gizzard Shad","Herrings","Alosa sp.","Smelts",
 // Not angled
 "Silver Lamprey","Sea Lamprey","American Brook Lamprey","Northern Brook Lamprey",
 "Round Goby","Freshwater Tubenose Goby","Ruffe","Goldfish",
 // Family and genus placeholders — not species, no regulation to look up
 "Unidentifiable","Carps and Minnows","CYPRINIDAE hybrids","Suckers","Perches",
 "Sunfishes","Pikes","North American Catfishes","Whitefish subfamily",
 "Salmon and Trout subfamily","Grayling subfamily","Bowfins","Cods","Freshwater Eels",
 "Temperate Basses","Moxostoma sp.","Catostomus sp.","Lepomis sp.","Coregonus sp.",
 "Micropterus sp.","Sander sp.","Ictalurus sp.","Ameiurus sp.","Ictiobus sp.",
 "Rhinichthys sp.","Esox sp.","Salmo sp.","Pumpkinseed x Bluegill"
]);

/* The list an angler sees. Everything downstream — chips, filter wheels, map
   popups, search, the "+N" count — goes through this one function so the app
   can never show a species the filters cannot find. */
function anglerSpecies(list){
 return (list||[]).filter(s=>!HIDDEN_SPECIES.has(s));
}
/* Why a visible list came back empty. The distinction matters: "no records"
   and "records we don't show you" are different facts, and telling an angler
   the wrong one about a lake they are about to drive to is exactly the kind of
   thing this app must not do. */
function speciesGap(list){
 const raw=list||[];
 if(!raw.length)return "none";                       // nobody has surveyed it
 if(anglerSpecies(raw).length)return "";             // something to show
 return raw.some(s=>/sp\.$|hybrids$|^Unidentifiable$|subfamily$|^Suckers$|^Perches$|^Sunfishes$|^Pikes$|^Herrings$|^Smelts$|^Sculpins$|^Sticklebacks$|Catfishes$|^Bowfins$|^Cods$|Eels$|Basses$/.test(s))
  ? "unidentified"                                   // surveyed, not keyed to species
  : "forage";                                        // surveyed, all baitfish
}

/* ---------------------------------------------------------------------------
   French species names.

   Every species the app can still display, so a French lake sheet never shows
   a stray English chip beside "Omble de fontaine". Names follow Ontario's own
   French fisheries material and the standard Quebec/CMFFA usage.

   The forage species above are absent on purpose: they are never rendered, so
   a French name for them would be dead weight — and the obscure dace and
   shiner names are exactly the ones worth not guessing at.
--------------------------------------------------------------------------- */
const SPECIES_FR={
 // Trout, char and salmon
 "Brook Trout":"Omble de fontaine","Brown Trout":"Truite brune","Rainbow Trout":"Truite arc-en-ciel",
 "Lake Trout":"Touladi","Aurora Trout":"Omble Aurora","Splake":"Truite moulac",
 "Arctic Char":"Omble chevalier","Atlantic Salmon":"Saumon atlantique",
 "Chinook Salmon":"Saumon quinnat","Coho Salmon":"Saumon coho","Pink Salmon":"Saumon rose",
 "Sockeye Salmon":"Saumon rouge","Arctic Grayling":"Corégone arctique",
 // Whitefish and ciscoes
 "Lake Whitefish":"Grand corégone","Round Whitefish":"Ménomini rond",
 "Pygmy Whitefish":"Corégone nain","Cisco":"Cisco de lac","Lake Herring (Cisco)":"Cisco de lac",
 "Shortjaw Cisco":"Cisco à mâchoires courtes","Blackfin Cisco":"Cisco à nageoires noires",
 "Shortnose Cisco":"Cisco à museau court","Deepwater Cisco":"Cisco de profondeur",
 "Nipigon Cisco":"Cisco de Nipigon","Bloater":"Cisco de fumage","Kiyi":"Cisco kiyi",
 // Pike and walleye
 "Northern Pike":"Grand brochet","Muskellunge":"Maskinongé",
 "Tiger Muskellunge":"Maskinongé tigré","Grass Pickerel":"Brochet vermiculé",
 "Walleye":"Doré jaune","Sauger":"Doré noir","Saugeye":"Doré hybride",
 "Blue Pike":"Doré bleu",
 // Bass, sunfish and crappie
 "Smallmouth Bass":"Achigan à petite bouche","Largemouth Bass":"Achigan à grande bouche",
 "Rock Bass":"Crapet de roche","White Bass":"Bar blanc","Striped Bass":"Bar rayé",
 "White Perch":"Baret","Pumpkinseed":"Crapet-soleil","Bluegill":"Crapet arlequin",
 "Green Sunfish":"Crapet vert","Northern Sunfish":"Crapet du nord",
 "Black Crappie":"Marigane noire","White Crappie":"Marigane blanche",
 "Yellow Perch":"Perchaude",
 // Catfish and bullheads
 "Brown Bullhead":"Barbotte brune","Yellow Bullhead":"Barbotte jaune",
 "Black Bullhead":"Barbotte noire","Channel Catfish":"Barbue de rivière",
 // Suckers and redhorse
 "White Sucker":"Meunier noir","Longnose Sucker":"Meunier rouge",
 "Northern Hog Sucker":"Suceur ballot","Spotted Sucker":"Suceur tacheté",
 "Lake Chubsucker":"Sucet de lac","Quillback":"Couette",
 "Black Buffalo":"Buffalo noir","Shorthead Redhorse":"Chevalier rouge",
 "Silver Redhorse":"Chevalier blanc","Greater Redhorse":"Chevalier jaune",
 "Golden Redhorse":"Chevalier doré","Black Redhorse":"Chevalier de rivière",
 "River Redhorse":"Chevalier de rivière",
 // Everything else still shown
 "Burbot":"Lotte","Lake Sturgeon":"Esturgeon jaune","American Eel":"Anguille d'Amérique",
 "Bowfin":"Poisson-castor","Longnose Gar":"Lépisosté osseux","Spotted Gar":"Lépisosté tacheté",
 "Freshwater Drum":"Malachigan","Mooneye":"Laquaiche argentée","Goldeye":"Laquaiche aux yeux d'or",
 "Rainbow Smelt":"Éperlan arc-en-ciel","Common Carp":"Carpe commune","Fallfish":"Ouitouche"
};
const STAGE_FR={
 "Yearlings":"Sujets d'un an","Yearling":"Sujet d'un an","Fingerlings":"Fretin",
 "Fingerling":"Fretin","Adult":"Adulte","Fry":"Alevins"
};
function speciesLabel(v){return appLang==="fr"&&SPECIES_FR[v]?SPECIES_FR[v]:v}
/* ARA reports one of four thermal regimes. "Unknown" is a real value in the
   data, not a missing one, so it gets a label rather than being blanked. */
const THERMAL_FR={"Cold":"Eau froide","Cool":"Eau tempérée","Warm":"Eau chaude","Unknown":"Non déterminé"};
function thermalLabel(v){return appLang==="fr"&&THERMAL_FR[v]?THERMAL_FR[v]:v}
function stageLabel(v){return appLang==="fr"&&STAGE_FR[v]?STAGE_FR[v]:v}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function name(r){return r.Official_Waterbody_Name||r.Unoffcial_Waterbody_Name||"Unnamed waterbody"}
function num(v){return Number(v||0).toLocaleString("en-CA",{maximumFractionDigits:0})}
function rad(x){return x*Math.PI/180}
function distance(a,b,c,d){const R=6371,x=rad(c-a),y=rad(d-b),q=Math.sin(x/2)**2+Math.cos(rad(a))*Math.cos(rad(c))*Math.sin(y/2)**2;return 2*R*Math.asin(Math.sqrt(q))}
function lakeKey(r){return String(r.Waterbody_Location_Identifier||"").trim()||[name(r),r.Geographic_Township,r.Latitude,r.Longitude].map(v=>String(v||"").trim().toLowerCase()).join("|")}
async function fetchPage(offset){
 const p=new URLSearchParams({where:"1=1",outFields:"*",returnGeometry:"false",f:"json",resultOffset:String(offset),resultRecordCount:"1000",orderByFields:"Stocking_Year DESC"});
 const j=await fetch(API+"?"+p).then(r=>r.json()); if(j.error)throw Error(j.error.message); return j;
}
function mercatorToLatLon(x,y){
 const lon=x/20037508.34*180;
 let lat=y/20037508.34*180;
 lat=180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);
 return [lat,lon];
}
function pointInRing(lon,lat,ring){
 let inside=false;
 for(let i=0,j=ring.length-1;i<ring.length;j=i++){
  const xi=ring[i][0],yi=ring[i][1],xj=ring[j][0],yj=ring[j][1];
  const hit=((yi>lat)!=(yj>lat))&&(lon<(xj-xi)*(lat-yi)/(yj-yi)+xi);
  if(hit)inside=!inside;
 }
 return inside;
}
function pointInGeometry(lon,lat,g){
 if(!g)return false;
 if(g.type==="Polygon")return g.coordinates.some(r=>pointInRing(lon,lat,r));
 if(g.type==="MultiPolygon")return g.coordinates.some(poly=>poly.some(r=>pointInRing(lon,lat,r)));
 return false;
}
function fmzForLake(l){
 const f=fmzFeatures.find(f=>pointInGeometry(l.lon,l.lat,f.geometry));
 return f&&f.properties?Number(f.properties.FISHERIES_MANAGEMENT_ZONE_ID):null;
}
function assignFMZ(){
 lakes.forEach(l=>{
  if(l.fmz)return;
  if(fmzLoaded){const z=fmzForLake(l);if(z){l.fmz=z;return}}
  // The regulation package records a zone against every waterbody that has an
  // exception or an additional opportunity. Free, offline, and exact.
  const wli=String(l.waterbodyId||"").trim();
  if(wli){
   const hit=(exceptionIndex.get(wli)||[]).concat(additionalIndex.get(wli)||[])[0];
   if(hit&&hit.zone){l.fmz=Number(hit.zone);return}
  }
 });
}
async function loadFMZ(show=true){
 if(fmzLoaded){if(show)renderFMZ();return}
 $("fmzStatus").textContent=t("loadingZones");
 try{
  const p=new URLSearchParams({
   where:"1=1",outFields:"FISHERIES_MANAGEMENT_ZONE_ID,LOCATION_DESCR",
   returnGeometry:"true",outSR:"4326",f:"geojson",resultRecordCount:"2000",
   // Zone outlines follow every bay and island of the Great Lakes. At full
   // detail this is tens of megabytes and simply never arrived, which is why
   // no lake was showing a zone. ~200 m is far finer than needed to decide
   // which zone a lake sits in.
   maxAllowableOffset:"0.002",geometryPrecision:"4"
  });
  const j=await fetch(FMZ_API+"?"+p).then(r=>r.json());
  if(j.error)throw Error(j.error.message);
  fmzFeatures=j.features||[];fmzLoaded=true;assignFMZ();apply();
  $("fmzStatus").textContent=`20 Ontario Fisheries Management Zones loaded`;
  if(show)renderFMZ();
 }catch(e){
  $("fmzStatus").textContent=t("zonesRetry");
  $("showFMZ").checked=false;
  if(!loadFMZ._retried){loadFMZ._retried=true;setTimeout(()=>loadFMZ(show),4000)}
  else $("fmzStatus").textContent=t("zonesUnavailable");
 }
}
function renderDepth(){
 if($("showDepth").checked){
  if(!map.hasLayer(bathyLayer))bathyLayer.addTo(map);
  $("depthStatus").textContent=t("contoursOn");
 }else{
  if(map.hasLayer(bathyLayer))map.removeLayer(bathyLayer);
  $("depthStatus").textContent=t("bathyNote");
 }
}
function renderFMZ(){
 fmzLayer.clearLayers();
 if($("showFMZ").checked&&fmzLoaded)fmzLayer.addData(fmzFeatures);
}
async function loadAccess(){
 if(accessLoaded){renderAccess();return}
 $("accessStatus").textContent=t("loadingAccess");
 try{
  const p=new URLSearchParams({where:"1=1",outFields:"AccessName,WaterBody,Town,County,Owner,Manager,AccessType,BoatSize,RampType,UniversalA,Parking,Shorefishi,Dock,Directions,CoordX,CoordY",returnGeometry:"true",outSR:"4326",f:"geojson",resultRecordCount:"2000"});
  const j=await fetch(ACCESS_API+"?"+p).then(r=>r.json());
  accessPoints=(j.features||[]).map(f=>{
   const a=f.properties||{},c=f.geometry&&f.geometry.coordinates;
   let lat=c&&c[1],lon=c&&c[0];
   if((!lat||!lon)&&a.CoordX&&a.CoordY){const ll=mercatorToLatLon(a.CoordX,a.CoordY);lat=ll[0];lon=ll[1]}
   return {...a,lat:Number(lat),lon:Number(lon)}
  }).filter(a=>Number.isFinite(a.lat)&&Number.isFinite(a.lon));
  accessLoaded=true;$("accessStatus").textContent=`${num(accessPoints.length)} government access points loaded`;renderAccess();
 }catch(e){$("accessStatus").textContent=t("accessUnavailable");$("showAccess").checked=false}
}
function accessIcon(a){
 const t=String(a.AccessType||"").toLowerCase(),dock=String(a.Dock||"").toLowerCase();
 if(t.includes("boat")||String(a.RampType||"").trim())return "🚤";
 if(t.includes("shore")||String(a.Shorefishi||"").toLowerCase().includes("yes"))return "🎣";
 if(dock.includes("yes")||t.includes("dock")||t.includes("pier"))return "🛶";
 return "📍";
}
function renderAccess(){
 accessLayer.clearLayers();if(!$("showAccess").checked||!accessLoaded)return;
 accessPoints.forEach(a=>{
  const title=a.AccessName||a.WaterBody||"Fishing access point",icon=accessIcon(a);
  const popup=`<b>${icon} ${esc(title)}</b><br>${esc(a.AccessType||"Fishing access")}<br>${a.WaterBody?esc(a.WaterBody)+"<br>":""}${a.Parking?`Parking: ${esc(a.Parking)}<br>`:""}<a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lon}">Directions</a>`;
  L.circleMarker([a.lat,a.lon],{radius:6,color:"#2E6E9E",weight:2,fillColor:"#fff",fillOpacity:.95}).addTo(accessLayer).bindPopup(popup);
 });
}
function nearestAccess(l,limit=3){
 if(!accessLoaded)return [];
 return accessPoints.map(a=>({...a,km:distance(l.lat,l.lon,a.lat,a.lon)})).sort((a,b)=>a.km-b.km).slice(0,limit);
}
function pick(a,names){
 for(const n of names) if(a[n]!==undefined&&a[n]!==null&&String(a[n]).trim()!=="") return a[n];
 return null;
}
async function queryAll(url,fields="*"){
 let all=[],offset=0,guard=0;
 while(true){
  const p=new URLSearchParams({where:"1=1",outFields:fields,returnGeometry:"false",f:"json",resultOffset:String(offset),resultRecordCount:"2000"});
  const j=await fetch(url+"?"+p).then(r=>r.json());
  if(j.error)throw Error(j.error.message);
  const batch=(j.features||[]).map(x=>x.attributes||{});all.push(...batch);
  if(batch.length<2000||!j.exceededTransferLimit)break;
  offset+=batch.length;if(++guard>100)break;
 }
 return all;
}
async function loadObservedSpecies(){
 try{
  const [surveys,caught]=await Promise.all([
   queryAll(SURVEY_API,"SURVEY_SUMMARY_RECORD_ID,WATERBODY_IDENT,WATERBODY_NAME"),
   queryAll(CAUGHT_API,"SURVEY_SUMMARY_RECORD_ID,SPECIES_CAUGHT,NUMBER_FISH_CAUGHT")
  ]);
  const surveyByRecord=new Map(surveys.map(s=>[String(s.SURVEY_SUMMARY_RECORD_ID),s]));
  const byWaterbody=new Map();
  caught.forEach(c=>{
   const s=surveyByRecord.get(String(c.SURVEY_SUMMARY_RECORD_ID)); if(!s||!s.WATERBODY_IDENT||!c.SPECIES_CAUGHT)return;
   const id=String(s.WATERBODY_IDENT).trim();
   if(!byWaterbody.has(id))byWaterbody.set(id,new Map());
   const m=byWaterbody.get(id),sp=String(c.SPECIES_CAUGHT).trim();
   m.set(sp,(m.get(sp)||0)+(Number(c.NUMBER_FISH_CAUGHT)||0));
  });
  lakes.forEach(l=>{
   const m=byWaterbody.get(String(l.waterbodyId||"").trim());
   l.observedSpecies=m?[...m.entries()].sort((a,b)=>a[0].localeCompare(b[0])).map(([species,caught])=>({species,caught})):[];
  });
  speciesLoaded=true;apply();
 }catch(e){console.warn("Fish ON-Line species observations unavailable",e)}
}
function normName(s){return String(s||"").toLowerCase().replace(/\([^)]*\)/g," ").replace(/\b(lake|lac|river|rivière|reservoir|réservoir)\b/g," ").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ")}
async function loadAdvisories(){
 try{
  advisoryLocations=await fetch("fish-advisories-2025.json").then(r=>r.json());advisoriesLoaded=true;
  lakes.forEach(l=>l.advisoryMatches=advisoryLocations.filter(a=>normName(a.name)===normName(l.name)));
  apply();
 }catch(e){console.warn("Fish consumption advisory data unavailable",e)}
}
function parseRange(s){
 const m=String(s||"").match(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/);return m?[Number(m[1]),Number(m[2])]:null;
}
function adviceFor(loc,species,length){
 const rows=loc.advisories.filter(a=>a.species===species),byPop={};
 rows.forEach(a=>{const rg=parseRange(a.length);if(rg&&length>=rg[0]&&length<rg[1])byPop[a.population]=a});
 return byPop;
}
function advisoryPanel(l){
 if(!advisoriesLoaded)return `<div class="historynote">Consumption-advisory data is loading.</div>`;
 const matches=l.advisoryMatches||[];
 if(matches.length!==1)return `<div class="historynote">${matches.length>1?"More than one Ontario Fish Guide location has this waterbody name, so this app will not guess which advisory applies.":"No exact-name Ontario Fish Guide advisory location was matched to this lake."} Use Ontario's official Fish Guide to verify the location.</div><a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/page/fish-consumption-report">Open Ontario Fish Guide</a>`;
 const loc=matches[0],species=[...new Set(loc.advisories.map(a=>a.species))].sort();
 return `<div class="advisorybox"><b>${esc(loc.name)}</b>${loc.desc?`<span>${esc(loc.desc)}</span>`:""}<label>Fish species<select id="advSpecies">${species.map(s=>`<option>${esc(s)}</option>`).join("")}</select></label><label>Fish length (cm)<input id="advLength" type="number" min="1" step="1" placeholder="e.g. 42"></label><button id="checkAdvice">Check Eating Advice</button><div id="adviceResult"></div></div><a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/page/fish-consumption-report">Verify in Official Ontario Fish Guide</a>`;
}
function wireAdvisory(l){
 const btn=$("checkAdvice");if(!btn)return;
 btn.onclick=()=>{const loc=(l.advisoryMatches||[])[0],sp=$("advSpecies").value,len=Number($("advLength").value),out=$("adviceResult");if(!len){out.innerHTML="<p>Enter the fish length in centimetres.</p>";return}
  const a=adviceFor(loc,sp,len),g=a.General,s=a.Sensitive;
  if(!g&&!s){out.innerHTML=`<div class="historynote">No tested advisory range was found for a ${len} cm ${esc(sp)} at this location. Check the official Ontario Fish Guide.</div>`;return}
  const cause=[g&&g.cause,s&&s.cause].filter(Boolean)[0]||"";
  out.innerHTML=`<div class="mealgrid"><div><small>General population</small><b>${g?esc(g.meals):"N/A"}</b><span>meals/month</span></div><div><small>Sensitive population</small><b>${s?esc(s.meals):"N/A"}</b><span>meals/month</span></div></div>${cause?`<p class="microcopy">Advisory cause listed by Ontario: ${esc(cause)}</p>`:""}<p class="microcopy">This is planning information from Ontario's 2025 advisory database. Verify current advice in the official Fish Guide.</p>`;
 };
}
/* ---------------------------------------------------------------------------
   Where the stocking table comes from.

   It used to come from the live ArcGIS API on every cold open: 12,000-odd
   records, every field, before the user had asked for anything. Invisible on
   wifi; a spinner and a chunk of cellular data on a weak signal; and with no
   signal at all, an app with no stocking data whatsoever — which is a strange
   state for something whose whole argument is that it works at the lake.

   Now it is a bundled file like every other dataset here, built by
   tools/build-stocking.py. The API is still available, but only when the user
   asks for it from Settings.

   If the file has not been built, we fall back to the API exactly as before,
   so a fresh checkout still works before anyone has run the tool. --------- */

let stockingBuilt="";     // snapshot date, shown in the UI so it never looks live

/* The bundled file shortens its keys to halve the size. Expand them back to
   the names the rest of the app already uses, so nothing downstream changes. */
function expandStocking(payload){
 const map=payload.fields||{};
 return (payload.rows||[]).map(r=>{
  const out={};
  for(const k in r)out[map[k]||k]=r[k];
  return out;
 });
}

async function loadBundledStocking(){
 const r=await fetch("ontario-stocking.json");
 if(!r.ok)throw Error("not built");
 const j=await r.json();
 if(!Array.isArray(j.rows)||!j.rows.length)throw Error("empty");
 stockingBuilt=j.built||"";
 return expandStocking(j);
}

async function loadLiveStocking(){
 let all=[],offset=0,page=0;
 while(true){const j=await fetchPage(offset),batch=(j.features||[]).map(x=>x.attributes);all.push(...batch);$("count").textContent=`${t("loadingRecords")} ${num(all.length)} ${t("records")}`;page++;if(batch.length<1000||!j.exceededTransferLimit)break;offset+=batch.length;if(page>100)break}
 stockingBuilt="";        // live data has no snapshot date; it is today's
 return all;
}

function afterStockingLoaded(){
 buildLakes();updateDashboard();buildFilters();apply();
 loadFMZ(false).then(()=>apply());
 loadObservedSpecies();loadAdvisories();loadFullRegulations();loadWaterbodies();loadTripData();loadSpeciesArt();
}

async function load(){
 $("count").textContent=t("loadingData");
 ["statLakes","statRecords","statSpecies","statLatest"].forEach(id=>{const el=$(id);if(el)el.textContent="…"});
 try{
  let all;
  try{ all=await loadBundledStocking(); }
  catch(e){ all=await loadLiveStocking(); }   // file not built: behave as before
  rows=all.filter(x=>x.Latitude&&x.Longitude);
  afterStockingLoaded();
 }catch(e){
  $("results").innerHTML=`<div class="error"><b>Ontario stocking data didn't load.</b><br>Check your connection and pull to reload. If you were offline, saved lakes and regulations are still available.<br><small>${esc(e.message)}</small></div>`;
  $("count").textContent="Unavailable";
  ["statLakes","statRecords","statSpecies","statLatest"].forEach(id=>{const el=$(id);if(el)el.textContent="—"});
  toast("Ontario stocking data didn't load. Check your connection.");
 }
}

/* Settings → "Check for new stockings". The only thing that touches the live
   API now, and only because someone asked it to. */
async function refreshStockingFromAPI(){
 const btn=$("refreshStocking");
 if(btn){btn.disabled=true;btn.textContent=t("checkingStockings")}
 try{
  const all=await loadLiveStocking();
  const fresh=all.filter(x=>x.Latitude&&x.Longitude);
  const added=fresh.length-rows.length;
  rows=fresh;
  afterStockingLoaded();
  toast(added>0?`${num(added)} new stocking records.`
       :added<0?"Ontario's records changed. Updated."
       :"No new stocking records.");
 }catch(e){
  toast("Couldn't reach Ontario's stocking service.");
 }finally{
  if(btn){btn.disabled=false;btn.textContent=t("checkStockings")}
 }
}

/* ---------------------------------------------------------------------------
   Waterbodies that are not stocked.

   The app used to be built purely from the stocking table, so a lake only
   existed if it had been stocked — Moira, Rice and every other self-sustaining
   fishery in the province were simply missing.

   ontario-waterbodies.json is Ontario's Aquatic Resource Area data, flattened
   by tools/build-waterbodies.py: name, centre point, recorded species, depth.
   WATERBODY_LID joins it to the stocking table, so a stocked lake gains its
   full species list and everything else arrives as a new, unstocked lake.

   The file is optional. If it has not been built the app behaves exactly as
   before rather than failing.
--------------------------------------------------------------------------- */
let waterbodies=[],waterbodiesLoaded=false;

async function loadWaterbodies(){
 try{
  const r=await fetch("ontario-waterbodies.json");
  if(!r.ok)throw new Error("not built");
  const j=await r.json();
  waterbodies=j.waterbodies||[];
  waterbodiesLoaded=true;
  mergeWaterbodies();
  buildFilters(true);
  apply();
  loadTownshipsForLakes(lakes).then(()=>{assignTownships();apply()});
 }catch(e){
  // Not built yet, or offline before it was ever cached. The stocking data
  // still works on its own; say nothing rather than raising an error about a
  // file most users will never know exists.
  waterbodiesLoaded=false;
 }
}

/* ---------------------------------------------------------------------------
   Trip data: where a lake actually is, and where you could stay near it.

   Two optional files, both built once a year on a machine with a network and
   committed like the waterbody index:

   ontario-places.json   tools/build-gazetteer.py — Ontario towns from
                         GeoNames (CC-BY). Lets the sheet say "12 km N of
                         Apsley" instead of leaving a coordinate to speak for
                         itself.
   ontario-nearby.json   tools/build-nearby.py — campgrounds, motels, lodges
                         and cabins from OpenStreetMap (ODbL). The lake sheet
                         lists anything within NEARBY_KM.

   Both are optional, and both fail the same way the waterbody index does:
   silently. Missing files mean the cards simply do not render.
--------------------------------------------------------------------------- */
const NEARBY_KM=10;
let gazetteer=[],nearbyStays=[],nearbyLoaded=false;

async function loadTripData(){
 try{
  const r=await fetch("ontario-places.json");
  if(r.ok){const j=await r.json();gazetteer=j.places||[]}
 }catch(e){ /* not built; the sheet just has no "where is this" line */ }
 try{
  const r=await fetch("ontario-nearby.json");
  if(r.ok){const j=await r.json();nearbyStays=j.stays||[];nearbyLoaded=true}
 }catch(e){ /* not built; the lodging card just does not render */ }
}

/* ---------------------------------------------------------------------------
   Species plates.

   Anglers want to see the fish. Everything below is decorative: it makes the
   app feel like a fishing app rather than a database, and it is deliberately
   NOT an identification reference. Ontario has pairs that are genuinely hard
   to tell apart and whose limits differ — lake trout and splake above all —
   and a pretty watercolour with no distinguishing marks called out is how
   somebody ends up keeping a fish they should have released. So each plate is
   captioned as an illustration, and the official rule link does the real work.

   The plate is only shown where the angler has named ONE species: a tapped
   species chip, or a Find Fish search for a particular fish. The app never
   picks a "headline" fish for a lake, because it has no honest basis to.

   Optional, like the gazetteer and the lodging data. If species-art has not
   been built the cards render exactly as before.
--------------------------------------------------------------------------- */
let speciesArt={},speciesArtCredit="";

async function loadSpeciesArt(){
 try{
  const r=await fetch("species-art/manifest.json");
  if(!r.ok)return;
  const j=await r.json();
  speciesArt=j.species||{};
  speciesArtCredit=j.credit||"";
 }catch(e){ /* not built; no plates, everything else unchanged */ }
}

/* A species with no plate of THAT species gets no plate. Never a stand-in —
   the same rule the fish-survey wording and the lodging card follow. */
function plateFor(species,cls){
 const a=speciesArt[species];
 if(!a)return "";
 return `<figure class="${cls}">
  <img src="species-art/${encodeURIComponent(a.f)}" alt="" width="1200" height="420" loading="lazy" decoding="async">
  <figcaption class="plateCap"><i>${esc(a.sci||"")}</i><span>${t("plateNote")}</span></figcaption>
 </figure>`;
}

/* "About 12 km N of Apsley." Nearest wins, but a town people have heard of
   beats a hamlet slightly further away, so distance is discounted by
   population. Nothing within 120 km (far north): say nothing. */
function whereLine(l){
 if(!gazetteer.length||!Number.isFinite(l.lat))return "";
 let best=null,bestScore=Infinity;
 for(const p of gazetteer){
  if(Math.abs(p.lat-l.lat)>1.2||Math.abs(p.lon-l.lon)>1.7)continue; // cheap prefilter
  const km=distance(l.lat,l.lon,p.lat,p.lon);
  if(km>120)continue;
  const score=km/Math.log10(Math.max(p.pop||0,10));
  if(score<bestScore){bestScore=score;best={p,km}}
 }
 if(!best)return "";
 const n=best.km<10?best.km.toFixed(1):Math.round(best.km);
 const dir=bearingLabel(best.p.lat,best.p.lon,l.lat,l.lon);
 return `<p class="whereLine">About ${n} km ${dir} of ${esc(best.p.name)}.</p>`;
}

function stayIcon(kind){
 return /camp|rv|trailer|caravan|hut/i.test(kind||"")?"🏕️":"🛏️";
}

/* Camping & lodging near the lake, from the bundled OSM index. OSM coverage
   in cottage country is genuinely patchy, so — exactly like the fish-survey
   wording — an empty list must say "no data", never "nothing nearby". */
function nearbyStaysCard(l){
 if(!nearbyLoaded)return "";
 const within=nearbyStays
  .filter(s=>Math.abs(s.lat-l.lat)<0.15&&Math.abs(s.lon-l.lon)<0.22) // cheap prefilter
  .map(s=>({...s,km:distance(l.lat,l.lon,s.lat,s.lon)}))
  .filter(s=>s.km<=NEARBY_KM)
  .sort((a,b)=>a.km-b.km)
  .slice(0,8);
 const rows=within.length
  ?within.map(s=>`<div class="accessrow"><div><b>${stayIcon(s.kind)} ${esc(s.name)}</b><span>${esc(s.kind)} • ${s.km.toFixed(1)} km ${bearingLabel(l.lat,l.lon,s.lat,s.lon)}</span></div><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}">Directions</a></div>`).join("")
  :`<p class="setNote">Nothing within ${NEARBY_KM} km appears in the bundled index. That means no data for this area, not that there is nowhere to stay.</p>`;
 return `<div class="infoCard"><h3>🏕️ Camping &amp; lodging within ${NEARBY_KM} km</h3>${rows}
 <p class="microcopy osmNote">Locations © OpenStreetMap contributors (ODbL). Community-maintained and incomplete — confirm they are open and taking bookings before you drive.</p></div>`;
}


/* ---------------------------------------------------------------------------
   Province-wide lake lookup.

   The bundled index (ontario-waterbodies.json) is the offline path, but it has
   to be generated with tools/build-waterbodies.py and committed. Until that
   happens — and for anything the index misses — this asks Ontario directly.

   It runs only when a typed search finds little or nothing locally, so the
   normal case still costs no network at all. Failure is silent: offline is the
   expected state for this app, not an error.
--------------------------------------------------------------------------- */
const ARA_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open07/MapServer/2/query";
const liveTried=new Set();
let liveBusy=false;


/* ---------------------------------------------------------------------------
   Townships.

   Ontario has several Rice Lakes, several Trout Lakes and a great many Long
   Lakes. A name on its own is not an answer, so every result carries the
   township it sits in and how far away it is.

   Stocked lakes already have a township from the stocking table. Survey
   waterbodies do not — the ARA dataset has no township field — so those are
   resolved against Geographic Township Improved: one envelope query for the
   area being searched, then point-in-polygon locally using the same helper
   the FMZ assignment uses. One request covers every lake in the search.
--------------------------------------------------------------------------- */
const TOWNSHIP_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open06/MapServer/1/query";
let townshipFeatures=[];
const townshipAreasTried=new Set();

/* Resolve townships for a set of lakes, using their own bounding box. The
   user's position is irrelevant here — these lakes have coordinates. */
async function loadTownshipsForLakes(list){
 const need=(list||lakes).filter(l=>!l.township&&l.lat&&l.lon);
 if(!need.length)return;
 // Try the cheap way first: a township we already hold may cover them.
 assignTownships();
 const still=need.filter(l=>!l.township);
 if(!still.length)return;
 const lats=still.map(l=>l.lat),lons=still.map(l=>l.lon);
 const minLat=Math.min(...lats),maxLat=Math.max(...lats);
 const minLon=Math.min(...lons),maxLon=Math.max(...lons);
 const cLat=(minLat+maxLat)/2,cLon=(minLon+maxLon)/2;
 // Half-diagonal in km, padded, so one request covers the whole result set.
 const km=Math.max(25,distance(minLat,minLon,maxLat,maxLon)/2+20);
 await loadTownshipsFor(cLat,cLon,Math.min(km,600));
}

async function loadTownshipsFor(lat,lon,km){
 const tag=`${km}|${lat.toFixed(1)},${lon.toFixed(1)}`;
 if(townshipAreasTried.has(tag))return;
 townshipAreasTried.add(tag);
 const dLat=km/111.32, dLon=km/(111.32*Math.cos(lat*Math.PI/180));
 const env={xmin:lon-dLon,ymin:lat-dLat,xmax:lon+dLon,ymax:lat+dLat,spatialReference:{wkid:4326}};
 try{
  const p=new URLSearchParams({
   where:"1=1",
   geometry:JSON.stringify(env),geometryType:"esriGeometryEnvelope",
   spatialRel:"esriSpatialRelIntersects",inSR:"4326",outSR:"4326",
   outFields:"OFFICIAL_NAME",returnGeometry:"true",
   // Township outlines only need to be accurate enough to say which one a
   // point falls in, so they are heavily generalised.
   maxAllowableOffset:"0.005",geometryPrecision:"4",
   f:"geojson",resultRecordCount:"600"
  });
  const j=await fetch(TOWNSHIP_API+"?"+p).then(r=>r.json());
  townshipFeatures=townshipFeatures.concat(j.features||[]);
  assignTownships();
 }catch(e){ /* township names are a nicety; distance still disambiguates */ }
}

function assignTownships(){
 if(!townshipFeatures.length)return;
 lakes.forEach(l=>{
  if(l.township)return;
  const f=townshipFeatures.find(f=>pointInGeometry(l.lon,l.lat,f.geometry));
  if(f&&f.properties&&f.properties.OFFICIAL_NAME)l.township=f.properties.OFFICIAL_NAME;
 });
}

/* "42 km NE" says more than "42 km" when two lakes share a name. */
function bearingLabel(fromLat,fromLon,toLat,toLon){
 const rad=x=>x*Math.PI/180;
 const dLon=rad(toLon-fromLon);
 const y=Math.sin(dLon)*Math.cos(rad(toLat));
 const x=Math.cos(rad(fromLat))*Math.sin(rad(toLat))-Math.sin(rad(fromLat))*Math.cos(rad(toLat))*Math.cos(dLon);
 const deg=(Math.atan2(y,x)*180/Math.PI+360)%360;
 return ["N","NE","E","SE","S","SW","W","NW"][Math.round(deg/45)%8];
}

/* Stocking data stores townships shouting: "ADRIAN", "TRAFALGAR". */
function townshipLabel(t){
 const raw=String(t||"").trim();
 if(!raw)return "";
 const nice=raw.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase())
   .replace(/\bMc([a-z])/g,(m,c)=>"Mc"+c.toUpperCase())
   .replace(/\bO'([a-z])/g,(m,c)=>"O'"+c.toUpperCase());
 return /twp|township/i.test(nice)?nice:nice+" Twp";
}

function distanceLabel(l){
 if(!userLoc)return "";
 const km=distance(userLoc[0],userLoc[1],l.lat,l.lon);
 const n=km<10?km.toFixed(1):Math.round(km);
 return `${n} km ${bearingLabel(userLoc[0],userLoc[1],l.lat,l.lon)}`;
}

function ringCentre(geom){
 const rings=(geom&&geom.rings)||[];
 if(!rings.length)return null;
 const ring=rings.reduce((a,b)=>b.length>a.length?b:a,rings[0]);
 if(ring.length<3){
  const n=ring.length||1;
  return [ring.reduce((t,p)=>t+p[1],0)/n, ring.reduce((t,p)=>t+p[0],0)/n];
 }
 let a=0,cx=0,cy=0;
 for(let i=0;i<ring.length-1;i++){
  const x0=ring[i][0],y0=ring[i][1],x1=ring[i+1][0],y1=ring[i+1][1];
  const cr=x0*y1-x1*y0; a+=cr; cx+=(x0+x1)*cr; cy+=(y0+y1)*cr;
 }
 if(Math.abs(a)<1e-12){
  const n=ring.length;
  return [ring.reduce((t,p)=>t+p[1],0)/n, ring.reduce((t,p)=>t+p[0],0)/n];
 }
 a*=0.5;
 return [cy/(6*a), cx/(6*a)];
}

function escSql(v){return String(v).replace(/'/g,"''")}


/* ---------------------------------------------------------------------------
   Species-aware Explore search.

   The Explore box used to hand the query to Ontario as a NAME lookup only, so
   typing "walleye" asked for lakes *called* Walleye — there are none — and
   fell back to whatever stocked walleye lakes happened to be loaded. Moira,
   which holds walleye but has never been stocked, could not appear.

   If the query names a species the app knows, it now also runs the same
   area-and-species query Find Fish uses.
--------------------------------------------------------------------------- */
function knownSpeciesName(q){
 const t=String(q||"").trim().toLowerCase();
 if(t.length<3)return null;
 const all=new Set(SPORT_SPECIES);
 rows.forEach(r=>{if(r.Species)all.add(r.Species)});
 lakes.forEach(l=>anglerSpecies(l.present).forEach(x=>all.add(x)));
 for(const sp of all)if(sp.toLowerCase()===t)return sp;              // "walleye"
 for(const sp of all)if(sp.toLowerCase().startsWith(t)&&t.length>=4)return sp;  // "walle"
 // "brook trout" typed against "Brook Trout" with odd spacing
 const norm=x=>x.toLowerCase().replace(/\s+/g," ").trim();
 for(const sp of all)if(norm(sp)===norm(t))return sp;
 return null;
}

/* The radius the Explore box should search when the query is a species.
   Uses whatever distance is set; falls back to 100 km. */
function explorerRadius(){
 return Number($("radius") && $("radius").value)||100;
}

async function speciesLookupFor(q){
 const sp=knownSpeciesName(q);
 if(!sp||!userLoc)return 0;
 const status=$("count"),previous=status?status.textContent:"";
 if(status)status.textContent=t("searchingFor").replace("{sp}",speciesLabel(sp));
 try{
  const n=await araNearby(userLoc[0],userLoc[1],explorerRadius(),sp);
  if(n){buildFilters(true);apply()}
  else if(status)status.textContent=previous;
  return n;
 }catch(e){
  if(status)status.textContent=previous;
  return 0;
 }
}


/* ---------------------------------------------------------------------------
   Explore filters are staged, not live.

   Every filter change used to run a search immediately, and a species query
   can reach out to Ontario's servers. Changing species and then distance fired
   two searches and two requests, neither of which the person had asked for —
   wasted data on a phone that is often on a weak signal at a lake.

   Nothing runs now until Search is pressed (or Enter). The button shows when
   there are unapplied changes so it never looks like the app is ignoring you.
--------------------------------------------------------------------------- */
let filtersDirty=false;

/* The staged group — search text, species, year, Explore's own radius —
   only takes effect when Search is pressed or Clear is used. apply() used to
   read these controls' live DOM values directly, which meant switching tabs
   (setView calls apply() unconditionally) silently applied whatever was
   sitting unsubmitted in the box: the Search button still showed "pending",
   nothing had been confirmed, and the list changed anyway. committed is the
   snapshot apply() actually filters against; only commitFilters() advances
   it, and only from a real submission — a Search press, Clear, or an
   intentionally-immediate control like Near Me's own radius picker. */
let committed={q:"",sp:"",yr:"",radius:0};
function commitFilters(){
 committed.q=$("search")?$("search").value:"";
 committed.sp=$("species")?$("species").value:"";
 committed.yr=$("year")?$("year").value:"";
 committed.radius=Number($("radius")?$("radius").value:0)||0;
}

function markFiltersDirty(){
 filtersDirty=true;
 const btn=$("searchBtn"),hint=$("filterHint");
 if(btn)btn.classList.add("pending");
 if(hint)hint.hidden=false;
}

function clearFiltersDirty(){
 filtersDirty=false;
 const btn=$("searchBtn"),hint=$("filterHint");
 if(btn)btn.classList.remove("pending");
 if(hint)hint.hidden=true;
}

/* The one place a search actually happens. */
async function runSearch(){
 clearFiltersDirty();
 commitFilters();
 const radius=$("radius")?$("radius").value:"";
 // A distance filter is meaningless without a position, so ask once, here,
 // rather than the moment the dropdown changed.
 if(radius&&!userLoc){locate(runSearch);return}
 apply();

 const q=$("search").value.trim();
 const sp=$("species")?$("species").value:"";
 const speciesTyped=q.length>=3?knownSpeciesName(q):null;

 // One request per search, not two. A bare species name has no business
 // being sent as a lake-name lookup as well.
 if(speciesTyped)await speciesLookupFor(q);
 else if(q.length>=3&&shown.length<5)await searchProvince(q);
 else if(sp)await speciesLookupFor(sp);

 apply();   // settle the count after any lookup, rather than leaving "Searching…"
}

async function searchProvince(q){
 const term=q.trim();
 if(term.length<3||liveBusy||liveTried.has(term.toLowerCase()))return false;
 liveBusy=true;liveTried.add(term.toLowerCase());
 const status=$("count");
 const previous=status?status.textContent:"";
 if(status)status.textContent=t("searchingAllLakes");
 try{
  const p=new URLSearchParams({
   where:`WATERBODY_TYPE = 'Lake or Pond' AND UPPER(OFFICIAL_WATERBODY_NAME) LIKE UPPER('%${escSql(term)}%')`,
   outFields:"OFFICIAL_WATERBODY_NAME,WATERBODY_LID,FISH_SPECIES_SUMMARY,SURFACE_AREA,MAXIMUM_DEPTH,MEAN_DEPTH,SECCHI_DEPTH,THERMAL_REGIME,FISHERIES_MANAGEMENT_ZONE_ID",
   returnGeometry:"true",
   // The shoreline detail is irrelevant — we only need somewhere to put a
   // marker — and generalising keeps this a small request on a slow connection.
   maxAllowableOffset:"0.02",
   geometryPrecision:"4",
   outSR:"4326",
   f:"json",
   resultRecordCount:"60"
  });
  const j=await fetch(ARA_API+"?"+p).then(r=>r.json());
  if(j.error)throw Error(j.error.message);
  const added=mergeLiveResults(j.features||[]);
  // One township request covers the whole result set.
  if(added)loadTownshipsForLakes(lakes).then(()=>{assignTownships();apply()});

  if(added){buildFilters(true);apply();}
  else if(status)status.textContent=previous;
  return added>0;
 }catch(e){
  if(status)status.textContent=previous;
  return false;
 }finally{liveBusy=false}
}

function mergeLiveResults(features){
 const byLid=new Map();
 lakes.forEach(l=>{const k=String(l.waterbodyId||"").trim();if(k)byLid.set(k,l)});
 const byName=new Set(lakes.map(l=>(l.name||"").toLowerCase()+"|"+l.lat.toFixed(2)));

 const grouped=new Map();
 features.forEach(f=>{
  const a=f.attributes||{},name=(a.OFFICIAL_WATERBODY_NAME||"").trim();
  if(!name)return;
  const pt=ringCentre(f.geometry);
  if(!pt)return;
  const lid=String(a.WATERBODY_LID||"").trim();
  const key=lid||name.toLowerCase()+"|"+pt[0].toFixed(2);
  const spp=(a.FISH_SPECIES_SUMMARY||"").split(",").map(x=>x.trim()).filter(Boolean);
  const area=a.SURFACE_AREA||0;
  const cur=grouped.get(key);
  if(!cur){
   grouped.set(key,{name,lid,lat:pt[0],lon:pt[1],sp:spp,area:area||null,
    max:a.MAXIMUM_DEPTH,mean:a.MEAN_DEPTH,clar:a.SECCHI_DEPTH,
    th:a.THERMAL_REGIME||null,fmz:a.FISHERIES_MANAGEMENT_ZONE_ID||null,_a:area||0});
  }else{
   // One lake is often several ARA segments. Union the species, keep the
   // deepest reading, and take the centre of the biggest piece — averaging two
   // arms of a lake can put the marker on dry land.
   spp.forEach(x=>{if(!cur.sp.includes(x))cur.sp.push(x)});
   if((a.MAXIMUM_DEPTH||0)>(cur.max||0))cur.max=a.MAXIMUM_DEPTH;
   if(area>cur._a){cur._a=area;cur.lat=pt[0];cur.lon=pt[1];cur.area=area}
  }
 });

 let added=0;
 grouped.forEach(w=>{
  w.sp.sort();
  const existing=w.lid?byLid.get(w.lid):null;
  if(existing){
   if(!existing.present||!existing.present.length)existing.present=w.sp;
   existing.depthMax=existing.depthMax||w.max;
   existing.depthMean=existing.depthMean||w.mean;
   existing.clarity=existing.clarity||w.clar;
   existing.areaHa=existing.areaHa||w.area;
   existing.thermal=existing.thermal||w.th;
   if(!existing.fmz&&w.fmz)existing.fmz=w.fmz;
   return;
  }
  if(byName.has(w.name.toLowerCase()+"|"+w.lat.toFixed(2)))return;
  lakes.push({
   key:"wb:"+(w.lid||w.name+w.lat),
   records:[],name:w.name,lat:w.lat,lon:w.lon,
   township:"",district:"",waterbodyId:w.lid,
   latestYear:0,species:[],present:w.sp,
   depthMax:w.max,depthMean:w.mean,clarity:w.clar,areaHa:w.area,thermal:w.th,
   fmz:w.fmz,observedSpecies:[],advisoryMatches:[],
   stocked:false
  });
  added++;
 });
 return added;
}


/* ---------------------------------------------------------------------------
   "Where can I catch a black crappie within 50 km?"

   Find Fish used to filter stocking records, so it could only answer "where
   has this species been stocked" — useless for crappie, muskie, bass, walleye
   and most of what people actually fish for, none of which are stocked in the
   majority of the lakes that hold them.

   This asks Ontario's survey data for the species directly, inside a box
   around you, then trims the box to a true radius.
--------------------------------------------------------------------------- */
let findMode="any";                       // "any" | "stocked"
const araAreaTried=new Set();

async function araNearby(lat,lon,km,species){
 const tag=`${species||"*"}|${km}|${lat.toFixed(2)},${lon.toFixed(2)}`;
 if(araAreaTried.has(tag))return 0;
 araAreaTried.add(tag);

 // A degree of latitude is ~111.32 km everywhere; longitude shrinks with the
 // cosine of latitude, which matters a lot this far north.
 const dLat=km/111.32, dLon=km/(111.32*Math.cos(lat*Math.PI/180));
 const env={xmin:lon-dLon,ymin:lat-dLat,xmax:lon+dLon,ymax:lat+dLat,
            spatialReference:{wkid:4326}};

 let where="WATERBODY_TYPE = 'Lake or Pond' AND FISH_SPECIES_SUMMARY IS NOT NULL";
 if(species)where+=` AND UPPER(FISH_SPECIES_SUMMARY) LIKE UPPER('%${escSql(species)}%')`;

 const p=new URLSearchParams({
  where,
  geometry:JSON.stringify(env),
  geometryType:"esriGeometryEnvelope",
  spatialRel:"esriSpatialRelIntersects",
  inSR:"4326",outSR:"4326",
  outFields:"OFFICIAL_WATERBODY_NAME,WATERBODY_LID,FISH_SPECIES_SUMMARY,SURFACE_AREA,MAXIMUM_DEPTH,MEAN_DEPTH,SECCHI_DEPTH,THERMAL_REGIME,FISHERIES_MANAGEMENT_ZONE_ID",
  returnGeometry:"true",maxAllowableOffset:"0.02",geometryPrecision:"4",
  f:"json",resultRecordCount:"400"
 });
 const j=await fetch(ARA_API+"?"+p).then(r=>r.json());
 if(j.error)throw Error(j.error.message);
 const n=mergeLiveResults(j.features||[]);
 if(n)await loadTownshipsForLakes(lakes);
 return n;
}


function mergeWaterbodies(){
 if(!waterbodies.length)return;
 const byLid=new Map();
 lakes.forEach(l=>{const k=String(l.waterbodyId||"").trim();if(k)byLid.set(k,l)});

 const added=[];
 waterbodies.forEach(w=>{
  const lid=String(w.lid||"").trim();
  const existing=lid?byLid.get(lid):null;
  if(existing){
   existing.present=w.sp||[];
   existing.depthMax=w.max;existing.depthMean=w.mean;existing.clarity=w.clar;
   existing.areaHa=w.area;existing.thermal=w.th;
   if(!existing.fmz&&w.fmz)existing.fmz=w.fmz;
   return;
  }
  added.push({
   key:"wb:"+(lid||w.n+w.lat),
   records:[],            // never stocked, so no stocking history
   name:w.n,
   lat:w.lat,lon:w.lon,
   township:"",district:"",
   waterbodyId:lid,
   latestYear:0,
   species:[],            // "species" means stocked species throughout the app
   present:w.sp||[],
   depthMax:w.max,depthMean:w.mean,clarity:w.clar,areaHa:w.area,thermal:w.th,
   fmz:w.fmz||null,
   observedSpecies:[],advisoryMatches:[],
   stocked:false
  });
 });
 lakes.forEach(l=>{if(l.stocked===undefined)l.stocked=true});
 lakes=lakes.concat(added);
}

function buildLakes(){
 const groups=new Map();
 rows.forEach(r=>{const k=lakeKey(r);if(!groups.has(k))groups.set(k,{key:k,records:[],name:name(r),lat:Number(r.Latitude),lon:Number(r.Longitude),township:r.Geographic_Township||"",district:r.MNRF_District||"",waterbodyId:r.Waterbody_Location_Identifier||""});groups.get(k).records.push(r)});
 lakes=[...groups.values()].map(l=>{l.records.sort((a,b)=>(b.Stocking_Year||0)-(a.Stocking_Year||0));l.latestYear=Math.max(...l.records.map(r=>Number(r.Stocking_Year)||0));l.species=[...new Set(l.records.map(r=>r.Species).filter(Boolean))].sort();l.observedSpecies=[];l.advisoryMatches=[];l.present=l.present||[];l.stocked=true;return l}).sort((a,b)=>b.latestYear-a.latestYear||a.name.localeCompare(b.name));
}
function updateDashboard(){
 const speciesCount=new Set(rows.map(r=>r.Species).filter(Boolean)).size;
 const latestYear=rows.reduce((m,r)=>Math.max(m,Number(r.Stocking_Year)||0),0);
 $("statLakes").textContent=num(lakes.length);
 $("statRecords").textContent=num(rows.length);
 $("statSpecies").textContent=num(speciesCount);
 $("statLatest").textContent=latestYear||"—";
 const age=$("dataAge");
 if(age)age.textContent=stockingBuilt?`${t("asOf")} ${stockingBuilt}.`:t("liveData");
}
function buildFilters(rebuild){
 const sel=$("species"),find=$("findSpecies");
 if(rebuild){
  const keep=sel?sel.value:"",keepFind=find?find.value:"";
  if(sel)sel.length=1;
  if(find)find.length=1;
  fillSpecies();
  if(sel)sel.value=keep;
  if(find)find.value=keepFind;
  return;
 }
 fillSpecies();
 const yrs=[...new Set(rows.map(x=>x.Stocking_Year).filter(Boolean))].sort((a,b)=>b-a);
 yrs.forEach(v=>{$("year").insertAdjacentHTML("beforeend",`<option>${v}</option>`);$("findYear").insertAdjacentHTML("beforeend",`<option>${v}</option>`)});
}

function fillSpecies(){
 // The wheel has to offer the fish people actually go looking for, not only
 // the ones somebody happened to stock.
 const set=new Set(SPORT_SPECIES);
 rows.forEach(r=>{if(r.Species)set.add(r.Species)});
 lakes.forEach(l=>anglerSpecies(l.present).forEach(x=>set.add(x)));
 const all=[...set].sort((a,b)=>a.localeCompare(b));
 const opts=all.map(v=>`<option value="${esc(v)}">${esc(speciesLabel(v))}</option>`).join("");
 const sel=$("species"),find=$("findSpecies");
 if(sel)sel.insertAdjacentHTML("beforeend",opts);
 if(find)find.insertAdjacentHTML("beforeend",opts);
}

function apply(){
 if(currentView==="trips"){renderTrips();return}
 const q=(currentView==="favorites"&&$("favSearch")?$("favSearch").value:committed.q).trim().toLowerCase(),sp=committed.sp,yr=committed.yr,radius=committed.radius;
 shown=lakes.filter(l=>{
  if(currentView==="favorites"&&!favoriteKeys.has(l.key))return false;
  if(!showUnstocked()&&!l.stocked)return false;
  if(sp&&!(l.species.includes(sp)||anglerSpecies(l.present).includes(sp)))return false;
  if(yr&&!l.records.some(r=>String(r.Stocking_Year)===yr))return false;
  if(q&&!matchesQuery(l,q))return false;
  if(radius&&userLoc&&distance(userLoc[0],userLoc[1],l.lat,l.lon)>radius)return false;
  return true;
 });
 if(q){
  // With a query typed, closeness of the NAME match beats everything else —
  // "Rice Lake" should not sit below "Big Rice Lake" alphabetically.
  shown.forEach(l=>l._nameScore=nameScore(l,q));
  const byDist=(a,b)=>userLoc?distance(userLoc[0],userLoc[1],a.lat,a.lon)-distance(userLoc[0],userLoc[1],b.lat,b.lon):0;
  shown.sort((a,b)=>b._nameScore-a._nameScore||byDist(a,b)||a.name.localeCompare(b.name));
 }
 else if((currentView==="near"||currentView==="recentnear"||radius)&&userLoc)shown.sort((a,b)=>distance(userLoc[0],userLoc[1],a.lat,a.lon)-distance(userLoc[0],userLoc[1],b.lat,b.lon));
 else shown.sort((a,b)=>b.latestYear-a.latestYear||a.name.localeCompare(b.name));
 render();
}
function render(){
 $("count").textContent=lakeCount(shown.length);
 const filtering=!!(($("search").value||"").trim()||$("species").value||$("year").value||$("radius").value);
 document.body.classList.toggle("filtering",filtering&&currentView==="explore");
 const mc=$("mapCount");if(mc)mc.textContent=lakeCount(Math.min(shown.length,400))+" on the map";
 $("listTitle").textContent=currentView==="favorites"?t("myLakes"):currentView==="near"?t("stockedNearMe"):currentView==="recentnear"?t("recentWithin100"):currentView==="findfish"?$("listTitle").textContent:t("exploreStocked");
 $("results").innerHTML=shown.slice(0,250).map((l,i)=>{
  const latest=l.records.filter(r=>Number(r.Stocking_Year)===l.latestYear),latestFish=latest.reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0),fav=favoriteKeys.has(l.key);
  // An unstocked lake has no year and no stocking totals, so it gets its own
  // pill and its own meta line instead of a row of dashes.
  const listSpecies=l.stocked?l.species:anglerSpecies(l.present);
  // The empty case is not one case. A stocked lake with no stocked species is
  // a data gap; an unstocked lake can be unsurveyed, forage-only, or keyed no
  // finer than a family. Each says a different thing to someone choosing a lake.
  const headGap=l.stocked?"none":speciesGap(l.present);
  const head=listSpecies.length?esc(listSpecies.slice(0,3).map(speciesLabel).join(" • "))+(listSpecies.length>3?` <span class="more">+${listSpecies.length-3}</span>`:"")
   :`<span class="nospecies">${t(headGap==="forage"?"headForageOnly":headGap==="unidentified"?"headUnidentified":"noSpeciesRecorded")}</span>`;
  const pill=l.stocked?`<span class="pill">${esc(l.latestYear||"—")}</span>`
   :`<span class="pill wild">${t("notStocked")}</span>`;
  // Township and distance come first: with three Rice Lakes on screen they
  // are the only things that tell them apart.
  // Township, zone and distance identify the lake. Everything after them is
  // detail — with three Rice Lakes on screen these three are the answer.
  const where=[
   l.township?`<span class="place">${esc(townshipLabel(l.township))}</span>`:"",
   l.fmz?`<span class="zone">FMZ ${esc(l.fmz)}</span>`:"",
   userLoc?`<span class="dist">${esc(distanceLabel(l))}</span>`:""
  ].join("");
  const meta=where+(l.stocked
   ?`<span>${num(latestFish)} stocked</span><span>${l.records.length} record${l.records.length===1?"":"s"}</span>`
   :`<span>${surveyMetaLabel(l)}</span>${l.depthMax?`<span>${l.depthMax} m deep</span>`:""}`);
  return `<article class="record" data-i="${i}"><div class="topline"><div><h4>${esc(l.name)}</h4><div class="species">${head}</div></div><div class="cardactions">${pill}<button class="star ${fav?"saved":""}" data-fav="${esc(l.key)}" aria-label="Favourite">${fav?"★":"☆"}</button></div></div><div class="meta">${meta}</div></article>`;
 }).join("")||`<div class="record empty">${emptyMessage()}</div>`;
 $("results").insertAdjacentHTML("afterbegin",locationPrompt());
 document.querySelectorAll(".record[data-i]").forEach(el=>el.onclick=e=>{if(e.target.closest(".star"))return;const l=shown[+el.dataset.i];map.setView([l.lat,l.lon],11);detail(l)});
 document.querySelectorAll(".star").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(b.dataset.fav)});
 markerLayer.clearLayers();
 fitToResults();
 shown.slice(0,400).forEach(l=>{const m=L.circleMarker([l.lat,l.lon],{radius:8,color:"#13263C",weight:2,fillColor:l.stocked?"#C4941F":"#8FB6D6",fillOpacity:l.stocked?.92:.85}).addTo(markerLayer).bindPopup(`<b>${esc(l.name)}</b><br>${esc((l.stocked?l.species:anglerSpecies(l.present)).slice(0,4).map(speciesLabel).join(", "))}<br>${l.stocked?(t("latestStocking")+": "+esc(l.latestYear||"—")):t("notStocked")}`);m.on("click",()=>detail(l))});
}
function lakeCount(n){return num(n)+" "+(n===1?"lake":"lakes")}

/* ---------------------------------------------------------------------------
   Search matching.

   The old filter did a plain substring test, so "rice lake" matched
   "Maurice Lake" and "Price Lake" — the query sits inside both of those words.
   Matching is now anchored to word starts: a token must begin a word.

     "rice lake"  -> Rice Lake, Big Rice Lake, Little Rice Lake
                     NOT Maurice Lake, NOT Price Lake
     "walle"      -> Walleye        (still forgiving while you type)
     "brook tr"   -> Brook Trout

   Every token has to match somewhere, in any order, across the lake's name,
   township, district and species.
--------------------------------------------------------------------------- */
function searchWords(v){
 return String(v||"").toLowerCase()
  .replace(/[^a-z0-9\s]+/g," ")
  .split(/\s+/).filter(Boolean);
}

/* Does `toks` appear as a run of consecutive words in `words`?

   Only the LAST token is a prefix match — that is the word still being typed.
   Every earlier token must match a whole word. Without that, "pine lake"
   matched "Pineapple Lake", which is the same class of wrong answer as
   "Maurice Lake". */
function phraseIn(words,toks){
 if(!toks.length)return true;
 const last=toks.length-1;
 for(let i=0;i+toks.length<=words.length;i++){
  let ok=true;
  for(let j=0;j<toks.length;j++){
   const w=words[i+j],t=toks[j];
   if(j===last?!w.startsWith(t):w!==t){ok=false;break}
  }
  if(ok)return true;
 }
 return false;
}

/* Fields are matched separately so a phrase cannot straddle two of them —
   otherwise "trout township" could match a Trout in one field and a Township
   in another and look like a hit. */
function searchFields(l){
 return [l.name,l.township,l.district,...(l.species||[]),...anglerSpecies(l.present)]
  .filter(Boolean).map(searchWords);
}

function matchesQuery(l,q){
 const toks=searchWords(q);
 if(!toks.length)return true;
 return searchFields(l).some(f=>phraseIn(f,toks));
}

/* Rank so an exact name lands above a lake that merely contains the phrase. */
function nameScore(l,q){
 const toks=searchWords(q);
 if(!toks.length)return 0;
 const name=searchWords(l.name);
 const joined=name.join(" "),query=toks.join(" ");
 if(joined===query)return 4;                       // Pine Lake
 if(joined.startsWith(query+" "))return 3;         // Pine Lake (Unofficial Name)
 if(phraseIn(name,toks))return 2;                  // Big Pine Lake
 return 1;                                         // matched on species or township
}

function showUnstocked(){
 const el=$("showUnstocked");
 return el?el.checked:true;
}
/* Distance was simply absent with no location granted, which reads as a
   missing feature rather than a missing permission. Ask for it instead. */
function locationPrompt(){
 if(userLoc)return "";
 return `<button type="button" id="distancePrompt" class="distPrompt">
  <b>Turn on location</b><span>to show how far each lake is from you</span></button>`;
}
function emptyMessage(){
 if(currentView==="favorites")return "No saved lakes yet. Tap ☆ on any lake to keep it here.";
 if((currentView==="near"||currentView==="recentnear")&&!userLoc)
  return "Turn on location to see the lakes closest to you, or search for one by name.";
 if(!lakes.length)return "Stocking data hasn't loaded yet.";
 if(liveBusy)return "Searching every lake in Ontario…";
 if(!userLoc&&knownSpeciesName($("search").value))
  return "Turn on location to search the whole province for this species — a species search needs somewhere to search from.";
 return "No stocked lakes match these filters. Try widening the distance or clearing the species.";
}
function toggleFav(key){favoriteKeys.has(key)?favoriteKeys.delete(key):favoriteKeys.add(key);localStorage.setItem("osl-favorites",JSON.stringify([...favoriteKeys]));apply()}

function regulationUrl(l){return l.fmz?`${REGS_BASE}${l.fmz}`:"https://www.ontario.ca/document/ontario-fishing-regulations-summary"}


const ONTARIO_REGS_DATASET_URL="https://data.ontario.ca/en/dataset/recreational-fishing-regulations-data";
const ONTARIO_REGS_SUMMARY_URL="https://www.ontario.ca/document/ontario-fishing-regulations-summary";
const ONTARIO_REGS_UPDATED="2026-08-04";
const ECCC_ALERTS_API="https://api.weather.gc.ca/collections/weather-alerts/items";
const ECCC_WEATHER_HOME="https://weather.gc.ca/";


function officialRuleSource(l){
 return l&&l.fmz?`${REGS_BASE}${l.fmz}`:ONTARIO_REGS_SUMMARY_URL;
}
function regulationConfidence(l,species){
 const r=resolveVerifiedRule(l,species);
 if(r.status==="zone") return {level:"verified",label:"Verified 2026 zone rule"};
 if(r.status==="exception") return {level:"exception",label:"Waterbody exception — verify exact rule"};
 return {level:"official",label:"Official Ontario rule required"};
}
const VERIFIED_ZONE_RULES={
  "11":{
    "Brook Trout":{season:"Feb 15 – Sep 30",sport:"5",conservation:"2",size:"Sport: max 1 over 31 cm • Conservation: none over 31 cm",source:"Ontario 2026 FMZ 11"}
  },
  "17":{
    "Brook Trout":{season:"4th Saturday in Apr – Sep 30",sport:"2",conservation:"1",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 17"},
    "Brown Trout":{season:"4th Saturday in Apr – Sep 30",sport:"5",conservation:"2",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 17"}
  },
  "10":{
    "Brook Trout":{season:"Jan 1 – Sep 30",sport:"5",conservation:"2",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 10"},
    "Brown Trout":{season:"Open all year",sport:"5",conservation:"2",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 10"},
    "Channel Catfish":{season:"Open all year",sport:"12",conservation:"6",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 10"}
  }
};
const KNOWN_WATERBODY_EXCEPTION_NAMES={
 "11":["cut lake","french river provincial park","green lake","lake nipissing","lake temagami","mcconnell lake","shanty lake","surecatch lake","trout lake"],
 "17":["lake scugog","trent river"]
};
function canonicalSpecies(s){
 const x=String(s||"").trim().toLowerCase();
 const map={"brook trout":"Brook Trout","brown trout":"Brown Trout","channel catfish":"Channel Catfish"};
 return map[x]||String(s||"").trim();
}
function hasKnownWaterbodyException(l){
 const names=KNOWN_WATERBODY_EXCEPTION_NAMES[String(l.fmz)]||[];
 return names.includes(String(l.name||"").trim().toLowerCase());
}
function resolveVerifiedRule(l,species){
 const sp=canonicalSpecies(species),zone=VERIFIED_ZONE_RULES[String(l.fmz)]||{},rule=zone[sp]||null;
 if(!rule)return {status:"unverified",species:sp};
 if(hasKnownWaterbodyException(l))return {status:"exception",species:sp,rule};
 return {status:"zone",species:sp,rule};
}

let fullRegs=null,fullRegsLoaded=false,zoneRuleIndex=new Map(),exceptionIndex=new Map(),additionalIndex=new Map();
async function loadFullRegulations(){
 try{
  fullRegs=await fetch("ontario-regulations-2026.json").then(r=>r.json());
  fullRegs.zoneRules.forEach(r=>zoneRuleIndex.set(`${r.zone}|${canonicalSpecies(r.species)}`,r));
  const add=(map,k,v)=>{if(!map.has(k))map.set(k,[]);map.get(k).push(v)};
  fullRegs.exceptions.forEach(r=>{if(r.wli)add(exceptionIndex,String(r.wli),r)});
  fullRegs.additional.forEach(r=>{if(r.wli)add(additionalIndex,String(r.wli),r)});
  fullRegsLoaded=true;assignFMZ();apply();
 }catch(e){console.warn("Full 2026 regulations unavailable",e)}
}
function fullRuleFor(l,species){
 const sp=canonicalSpecies(species), wli=String(l.waterbodyId||"");
 const ex=(exceptionIndex.get(wli)||[]).filter(r=>!r.species||canonicalSpecies(r.species)===sp);
 const add=(additionalIndex.get(wli)||[]).filter(r=>!r.species||canonicalSpecies(r.species)===sp);
 const zone=zoneRuleIndex.get(`${l.fmz}|${sp}`)||null;
 return {sp,zone,exceptions:ex,additional:add,general:fullRegs&&fullRegs.zoneGeneral?fullRegs.zoneGeneral[String(l.fmz)]||{}:{}};
}
function fullRegCard(l,species){
 if(!fullRegsLoaded)return exactRuleCard(l,species);
 const r=fullRuleFor(l,species);
 if(r.exceptions.length||r.additional.length){
  const rows=[...r.exceptions.map(x=>({kind:"Waterbody exception",...x})),...r.additional.map(x=>({kind:"Additional fishing opportunity",...x}))];
  return `<div class="regCard exception"><div class="regTitle"><b>⚠️ ${esc(r.sp)} — FMZ ${l.fmz}</b><span>Exact waterbody rule found</span></div>
   ${rows.map(x=>`<div class="exactException"><b>${esc(x.kind)}</b>${x.season?`<span>Season: ${esc(x.season)}</span>`:""}${x.limit?`<span>Limit: ${esc(x.limit)}</span>`:""}${x.size?`<span>Size: ${esc(x.size)}</span>`:""}${x.bait?`<span>Bait: ${esc(x.bait)}</span>`:""}${x.gear?`<span>Gear: ${esc(x.gear)}</span>`:""}${x.time?`<span>Time: ${esc(x.time)}</span>`:""}</div>`).join("")}
   <a target="_blank" rel="noopener" href="${officialRuleSource(l)}">${t("verify")}</a></div>`;
 }
 if(r.zone){
  const g=r.general||{};
  return `<div class="regCard verified"><div class="regTitle"><b>🎣 ${esc(r.sp)} — FMZ ${l.fmz}</b><span>Imported 2026 Ontario data</span></div>
   <div class="regGrid exact"><div><small>${t("sportLimit")}</small><b>${esc(r.zone.sport||"—")}</b></div><div><small>${t("conservationLimit")}</small><b>${esc(r.zone.conservation||"—")}</b></div><div><small>${t("season")}</small><b>${esc(r.zone.season||"—")}</b></div><div><small>Aggregate trout/salmon</small><b>${esc(r.zone.aggregate||"—")}</b></div></div>
   ${g.bait?`<p class="ruleNote"><b>Bait:</b> ${esc(g.bait)}</p>`:""}${g.gear?`<p class="ruleNote"><b>Gear:</b> ${esc(g.gear)}</p>`:""}${g.general?`<p class="ruleNote">${esc(g.general)}</p>`:""}
   <p class="regWarning">Imported from Ontario's 2026 open regulation workbook. Ontario states the dataset is not a complete legal representation; variation orders may supersede it.</p>
   <a target="_blank" rel="noopener" href="${officialRuleSource(l)}">${t("verify")}</a></div>`;
 }
 return regulationCard(l,r.sp);
}

function exactRuleCard(l,species){
 const r=resolveVerifiedRule(l,species);
 if(r.status==="zone"){
  return `<div class="regCard verified"><div class="regTitle"><b>🎣 ${esc(r.species)} — FMZ ${l.fmz}</b><span>Verified zone-wide 2026 rule</span></div>
  <div class="regGrid exact"><div><small>${t("sportLimit")}</small><b>${esc(r.rule.sport)}</b></div><div><small>${t("conservationLimit")}</small><b>${esc(r.rule.conservation)}</b></div><div><small>Slot / size</small><b>${esc(r.rule.size)}</b></div><div><small>${t("season")}</small><b>${esc(r.rule.season)}</b></div></div>
  <p class="regWarning">These are catch/possession limits for the selected licence type. Zone-wide rule shown only when the app has not identified a packaged waterbody exception. Fish sanctuaries, bait/gear rules and variation orders can still override normal rules.</p>
  <div class="sourceStamp">Ontario 2026 regulations • current-summary check: Aug. 4, 2026</div>
  <a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Verify Current FMZ ${l.fmz} Regulations</a></div>`;
 }
 if(r.status==="exception"){
  return `<div class="regCard exception"><div class="regTitle"><b>⚠️ ${esc(r.species)} — special waterbody</b><span>Exception check required</span></div>
  <p>This lake is identified in the packaged Ontario waterbody-exception index for FMZ ${l.fmz}. The app will not substitute the normal zone-wide limit, season or slot size.</p><div class="exceptionChecklist"><span>✓ Zone identified</span><span>✓ Species identified</span><span>⚠ Waterbody exception applies</span></div><a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Open Exact Ontario Exception</a></div>`;
 }
 return regulationCard(l,r.species);
}

function regulationCard(l,species){
 const sp=species||"selected species";
 if(!l.fmz)return `<div class="regCard warning"><b>Limits &amp; slot sizes</b><p>FMZ could not be determined for this lake. Open Ontario's current regulations before fishing.</p><a target="_blank" rel="noopener" href="${regulationUrl(l)}">Check Official Regulations</a></div>`;
 return `<div class="regCard">
   <div class="regTitle"><b>🎣 ${esc(sp)} — FMZ ${l.fmz}</b><span>2026 rules</span></div>
   <div class="regGrid">
     <div><small>${t("sportLimit")}</small><b>See official rule</b></div>
     <div><small>${t("conservationLimit")}</small><b>See official rule</b></div>
     <div><small>Slot / size</small><b>Check zone + exception</b></div>
     <div><small>${t("season")}</small><b>Check current dates</b></div>
   </div>
   <p class="regWarning">This species/FMZ combination has not yet been packaged as a verified numeric rule. Ontario rules can also be overridden by species exceptions, waterbody exceptions, fish sanctuaries and variation orders. The app will not display a guessed legal limit.</p>
   <div class="regActions"><a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Open FMZ ${l.fmz} Current Rules</a><a target="_blank" rel="noopener" href="${ONTARIO_REGS_DATASET_URL}">Ontario 2026 Regulation Dataset</a></div>
 </div>`;
}


/* ---------------------------------------------------------------------------
   Per-species limits, from tapping a species.

   Ontario's zone tables list limits under ~20 regulation CATEGORIES, while
   survey and stocking data name the actual fish. "Black Crappie" has to become
   "Crappie", "Walleye" has to become "Walleye and Sauger or any combination",
   and so on, or the lookup silently misses.

   Everything in this map is a grouping Ontario's own summary uses. Where a
   species is not confidently mappable — rock bass, suckers, shiners, sculpin,
   most baitfish — it is deliberately LEFT OUT, and the app says the zone table
   does not list a limit for it rather than guessing one. A wrong limit shown
   confidently is the worst thing this app can do: somebody keeps a fish on it.
--------------------------------------------------------------------------- */

/* Ontario sport fish, for the species wheel. Every one of these resolves to a
   regulation category, so picking any of them can show a limit. Species the
   app discovers in stocking or survey data are merged in on top. */
const SPORT_SPECIES=["Atlantic Salmon","Black Crappie","Bluegill","Brook Trout","Brown Trout",
 "Channel Catfish","Chinook Salmon","Coho Salmon","Lake Herring (Cisco)","Lake Sturgeon",
 "Lake Trout","Lake Whitefish","Largemouth Bass","Muskellunge","Northern Pike","Pumpkinseed",
 "Rainbow Trout","Sauger","Smallmouth Bass","Splake","Walleye","White Crappie","Yellow Perch"];

const REG_CATEGORY={
 "black crappie":"Crappie",
 "white crappie":"Crappie",
 "crappie":"Crappie",
 "walleye":"Walleye and Sauger or any combination",
 "sauger":"Walleye and Sauger or any combination",
 /* Bass are listed as a combined category in 18 of Ontario's 20 zones; only
    zone 20 breaks them out separately. Both candidates are listed here, most
    common first, and the zone decides which one actually applies. */
 "largemouth bass":["Largemouth and Smallmouth Bass or any combination","Largemouth Bass"],
 "smallmouth bass":["Largemouth and Smallmouth Bass or any combination","Smallmouth Bass"],
 "northern pike":"Northern Pike",
 "muskellunge":"Muskellunge",
 "musky":"Muskellunge",
 "yellow perch":"Yellow Perch",
 "lake trout":"Lake Trout",
 "brook trout":"Brook Trout",
 "speckled trout":"Brook Trout",
 "brown trout":"Brown Trout",
 "rainbow trout":"Rainbow Trout",
 "steelhead":"Rainbow Trout",
 "splake":"Splake",
 "lake whitefish":"Lake Whitefish",
 "lake sturgeon":"Lake Sturgeon",
 "channel catfish":"Channel Catfish",
 "atlantic salmon":"Atlantic Salmon",
 "chinook salmon":"Pacific Salmon",
 "coho salmon":"Pacific Salmon",
 "pink salmon":"Pacific Salmon",
 "lake herring":"Lake Herring (Cisco)",
 "cisco":"Lake Herring (Cisco)",
 "lake herring (cisco)":"Lake Herring (Cisco)",
 "pumpkinseed":"Sunfish",
 "bluegill":"Sunfish"
};

function regCategoriesFor(species){
 const k=String(species||"").trim().toLowerCase();
 const v=REG_CATEGORY[k];
 if(!v)return [];
 return Array.isArray(v)?v:[v];
}

/* Resolve to the category this zone's table actually carries. A species can
   sit under different groupings from zone to zone, so a single fixed name
   silently misses wherever the grouping differs. When no candidate matches,
   the first is returned so the caller still reports the zone table as not
   listing a limit rather than guessing one. */
function regCategoryFor(species,fmz){
 const cands=regCategoriesFor(species);
 if(!cands.length)return null;
 if(fmz)for(const c of cands)if(zoneRuleIndex.get(`${fmz}|${c}`))return c;
 return cands[0];
}

/* Everything known about one species on one lake. */
function speciesRule(l,species){
 const cat=regCategoryFor(species,l.fmz);
 const cats=regCategoriesFor(species);
 const wli=String(l.waterbodyId||"").trim();
 // A waterbody exception overrides the zone table, so it is looked up first
 // and reported even when it carries no species of its own.
 const ex=(exceptionIndex.get(wli)||[]).filter(r=>!r.species||
   cats.includes(canonicalSpecies(r.species))||String(r.species).toLowerCase()===String(species).toLowerCase());
 const extra=(additionalIndex.get(wli)||[]).filter(r=>!r.species||
   cats.includes(canonicalSpecies(r.species))||String(r.species).toLowerCase()===String(species).toLowerCase());
 const zone=cat&&l.fmz?zoneRuleIndex.get(`${l.fmz}|${cat}`)||null:null;
 return {species,category:cat,zone,exceptions:ex,additional:extra};
}

function speciesRuleCard(l,species){
 if(!fullRegsLoaded)
  return `<div class="ruleDrawer"><p class="setNote">Regulations are still loading.</p></div>`;
 if(!l.fmz)
  return `<div class="ruleDrawer"><p class="setNote">This lake's Fisheries Management Zone could not be determined, so no zone limit can be shown.</p>
   <a class="ruleLink" target="_blank" rel="noopener" href="${regulationUrl(l)}">Open the official regulations</a></div>`;

 const r=speciesRule(l,species);
 let body="";

 if(r.zone){
  body+=`<div class="ruleGrid">
   <div><small>Sport licence</small><b>${esc(r.zone.sport||"—")}</b></div>
   <div><small>Conservation licence</small><b>${esc(r.zone.conservation||"—")}</b></div>
   <div class="wide"><small>Season</small><b>${esc(r.zone.season||"—")}</b></div>
  </div>`;
  if(r.zone.aggregate==="Yes")
   body+=`<p class="setNote">This limit is aggregate — it is shared across the species grouped with it, not counted separately.</p>`;
  if(r.category&&r.category.toLowerCase()!==String(species).toLowerCase())
   body+=`<p class="setNote">Listed by Ontario under "${esc(r.category)}".</p>`;
 }else{
  body+=`<p class="setNote">Ontario's FMZ ${esc(l.fmz)} table does not list a catch limit under this species' name. That does not mean there is no rule — check the official summary before keeping one.</p>`;
 }

 if(r.exceptions.length){
  body+=`<div class="ruleAlert"><b>This waterbody has its own rule</b>
   <p>A waterbody exception is listed for this lake, and it overrides the zone limit above.</p>
   ${r.exceptions.slice(0,3).map(e=>`<div class="exRow">
     ${e.season?`<span><small>Season</small>${esc(e.season)}</span>`:""}
     ${e.limit?`<span><small>Limit</small>${esc(e.limit)}</span>`:""}
     ${e.size?`<span><small>Size</small>${esc(e.size)}</span>`:""}
   </div>`).join("")}</div>`;
 }
 if(r.additional.length){
  body+=`<p class="setNote">An additional fishing opportunity is also listed for this waterbody.</p>`;
 }

 return `<div class="ruleDrawer">
  ${plateFor(species,"plate")}
  <div class="ruleHead"><b>${esc(speciesLabel(species))}</b><span>FMZ ${esc(l.fmz)} • 2026</span></div>
  ${body}
  <p class="ruleFine">Summary only. Sanctuaries, bait and gear restrictions and in-season variation orders can all change this.</p>
  <a class="ruleLink" target="_blank" rel="noopener" href="${officialRuleSource(l)}">Verify on Ontario's official FMZ ${esc(l.fmz)} page</a>
 </div>`;
}

/* Delegated so it keeps working for chips rendered after this runs. */
function wireSpeciesChips(){
 const sheet=$("detail");if(!sheet)return;
 sheet.onclick=e=>{
  const chip=e.target.closest("[data-sprule]");
  if(!chip)return;
  const open=chip.classList.contains("open");
  sheet.querySelectorAll("[data-sprule].open").forEach(c=>c.classList.remove("open"));
  sheet.querySelectorAll(".ruleDrawer").forEach(d=>d.remove());
  if(open)return;
  chip.classList.add("open");
  const lake=lakes.find(x=>x.key===chip.dataset.lakekey);
  if(!lake)return;
  chip.insertAdjacentHTML("afterend",speciesRuleCard(lake,chip.dataset.sprule));
 };
}

/* The one-line survey summary on a result row. Three different facts, three
   different sentences — see speciesGap(). */
function surveyMetaLabel(l){
 const shownSp=anglerSpecies(l.present);
 if(shownSp.length)return shownSp.length+" "+t(shownSp.length===1?"speciesRecordedOne":"speciesRecordedMany");
 const gap=speciesGap(l.present);
 return gap==="none"?t("metaNoSurvey"):gap==="unidentified"?t("metaUnidentified"):t("metaForageOnly");
}

function presentBlock(l){
 const sp=anglerSpecies(l.present);
 const facts=[
  l.depthMax?[t("maxDepth"),l.depthMax+" m"]:null,
  l.depthMean?[t("meanDepth"),l.depthMean+" m"]:null,
  l.areaHa?[t("surfaceArea"),num(l.areaHa)+" ha"]:null,
  l.clarity?[t("waterClarity"),l.clarity+" m"]:null,
  l.thermal?[t("thermalRegime"),thermalLabel(l.thermal)]:null
 ].filter(Boolean);
 const gap=speciesGap(l.present);
 if(!sp.length&&!facts.length&&l.stocked)return "";

 // A blank list is never "no fish". There are three separate reasons a list
 // can come back empty and they are three different facts:
 //
 //   none          nobody has surveyed this lake
 //   forage        surveyed, but only baitfish were recorded
 //   unidentified  surveyed, but the records stop at family or genus
 //
 // Saying "only baitfish" about a lake whose record reads "Pikes" would be a
 // lie — there IS a pike-family fish in there, ARA just never keyed it. Each
 // case gets its own sentence, and each keeps the ARA link so a curious angler
 // is never stonewalled.
 const list=sp.length
  ?`<div class="speciesGrid">${sp.map(x=>`<button type="button" class="spChip" data-sprule="${esc(x)}" data-lakekey="${esc(l.key)}">${esc(speciesLabel(x))}<i aria-hidden="true">›</i></button>`).join("")}</div>`
  :`<p class="setNote">${t(gap==="none"?"surveyNone":gap==="unidentified"?"surveyUnidentified":"surveyForageOnly")}</p>`;

 return `<div class="infoCard">
  <h3>${t("fishPresentHead")}</h3>
  <p class="panelNote">${t("fishPresentSub")}${l.stocked?" "+t("fishPresentSeparate"):""} ${t("fishPresentTap")}</p>
  ${list}
  ${facts.length?`<div class="detailgrid">${facts.map(f=>`<div><small>${f[0]}</small>${esc(String(f[1]))}</div>`).join("")}</div>`:""}
 </div>`;
}

function detail(l){
 recentLakes=[l.key,...recentLakes.filter(k=>k!==l.key)].slice(0,10);localStorage.setItem("osl-recent",JSON.stringify(recentLakes));
 const fav=favoriteKeys.has(l.key),history=l.records.map(r=>`<div class="historyrow"><div><b>${esc(r.Stocking_Year||"—")}</b><span>${esc(r.Species?speciesLabel(r.Species):t("speciesUnavailable"))}</span></div><div class="historyright"><b>${num(r.Number_of_Fish_Stocked)}</b><span>${esc(r.Developmental_Stage?stageLabel(r.Developmental_Stage):"")}</span></div></div>`).join("");
 $("detail").innerHTML=`<div class="detailhead"><div><h2>${esc(l.name)}</h2><div class="species">${esc(l.species.join(" • "))}</div></div><button class="bigstar ${fav?"saved":""}" id="detailFav">${fav?"★":"☆"}</button></div>
 ${whereLine(l)}
 <div class="detailgrid">${l.stocked?`<div><small>Latest stocking</small><b>${esc(l.latestYear||"—")}</b></div><div><small>Stocking records</small><b>${l.records.length}</b></div>`:`<div><small>Stocking</small><b>Not stocked</b></div>`}${l.township?`<div><small>Township</small><b>${esc(townshipLabel(l.township))}</b></div>`:""}${userLoc?`<div><small>Distance from you</small><b>${esc(distanceLabel(l))}</b></div>`:""}${l.district?`<div><small>MNRF district</small><b>${esc(l.district)}</b></div>`:""}
 <div><small>Fisheries Management Zone</small><b>${l.fmz?`FMZ ${l.fmz}`:"Loading / unavailable"}</b></div><div><small>Waterbody ID</small><b>${esc(l.waterbodyId||"—")}</b></div></div>
 ${l.fmz?`<a class="zoneAction" target="_blank" rel="noopener" href="${REGS_BASE}${l.fmz}">View Current FMZ ${l.fmz} Regulations</a>`:""}
${presentBlock(l)}
 <button class="tripStart" id="startTrip">Start a fishing trip</button>
 <div id="lake-rules" class="tabAnchor"></div>${fullRegCard(l,l.species[0]||"Fish")}
 ${fishingConditionsCard(l)}
 <div id="lake-eating" class="tabAnchor"></div><div class="infoCard"><h3>🍽️ Eating Ontario Fish</h3><p>Ontario consumption advice depends on the exact waterbody, fish species and fish length.</p>${advisoryPanel(l)}</div>
 <div id="lake-species" class="tabAnchor"></div><div class="infoCard"><h3>${t("netHead")}</h3><p class="microcopy">${t("netSub")}</p>
 ${speciesLoaded?(l.observedSpecies&&l.observedSpecies.length?`<div class="specieschips netchips">${l.observedSpecies.map(s=>`<span>${esc(s.species)}<em>${s.caught>0?`${Number(s.caught).toLocaleString()} ${t("netCaught")}`:t("netNoCount")}</em></span>`).join("")}</div><p class="microcopy">Species shown come from Fish ON-Line survey records and are not a guarantee of current abundance.</p>`:`<p>${t("netNone")}</p>`):`<p>${t("netLoading")}</p>`}
 </div>
 <div id="lake-depth" class="tabAnchor"></div><div class="infoCard"><h3>🌊 Lake depth</h3><p>Ontario publishes bathymetry contour lines for many lakes. Turn on the depth-contour map layer to view available contours. These data vary in age and accuracy and must never be used for navigation.</p><button class="inlineBtn" id="detailDepth">Show Depth Contours</button></div>
 <div id="lake-stocking" class="tabAnchor"></div><h3>Recent Stocking History</h3><div class="history">${history}</div>
 <div id="lake-access" class="tabAnchor"></div><div class="infoCard"><h3>🚤 Nearest fishing access</h3><div id="nearestAccess">${accessLoaded?nearestAccess(l).map(a=>`<div class="accessrow"><div><b>${accessIcon(a)} ${esc(a.AccessName||a.WaterBody||"Fishing access")}</b><span>${esc(a.AccessType||"Access point")} • ${a.km.toFixed(1)} km from lake point</span></div><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lon}">Directions</a></div>`).join(""):"<p>Turn on “Show fishing access points” on the map to load Ontario access data.</p>"}</div></div>
 ${nearbyStaysCard(l)}
 <div class="infoCard"><h3>Fishing information</h3><p>Stocking records are useful planning information, but fishing seasons, limits and exceptions can change. Check Ontario's current regulations before fishing.</p>
 <div class="actionstack">
 <a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/document/ontario-fishing-regulations-summary">Check 2026 Fishing Regulations</a>
 <a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/fishonline">Open Ontario Fish ON-Line</a>
 </div></div>
 <a class="directions" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lon}">Get Directions</a>`;
 wireSpeciesChips();
 $("sheet").classList.remove("hidden");$("detailFav").onclick=()=>{toggleFav(l.key);detail(l)};
 const dd=$("detailDepth");if(dd)dd.onclick=()=>{$("showDepth").checked=true;renderDepth();map.setView([l.lat,l.lon],12);$("sheet").classList.add("hidden")};
 const st=$("startTrip");if(st)st.onclick=()=>startTrip(l);wireAdvisory(l);wireWeather(l);
 document.querySelectorAll("[data-laketab]").forEach(b=>b.onclick=()=>{
  document.querySelectorAll("[data-laketab]").forEach(x=>x.classList.remove("active"));b.classList.add("active");
  const id=b.dataset.laketab, target=id==="trips"?st:$("lake-"+id);
  if(target)target.scrollIntoView({behavior:"smooth",block:"start"});
 });
}
function saveTrips(){localStorage.setItem("osl-trips",JSON.stringify(trips))}
function startTrip(l){
 const trip={id:Date.now(),lakeKey:l.key,lakeName:l.name,lat:l.lat,lon:l.lon,fmz:l.fmz||null,started:new Date().toISOString(),ended:null,catches:[],notes:""};
 trips.unshift(trip);saveTrips();$("sheet").classList.add("hidden");openTrip(trip.id);
}
function tripLake(t){return lakes.find(l=>l.key===t.lakeKey)}
function openTrip(id){
 const t=trips.find(x=>x.id===id);if(!t)return;const l=tripLake(t),active=!t.ended;
 $("tripDetail").innerHTML=`<h2>🎣 ${esc(t.lakeName)}</h2><div class="tripmeta">${new Date(t.started).toLocaleString("en-CA")}${t.fmz?` • FMZ ${t.fmz}`:""} • ${active?"Active trip":"Completed"}</div>
 ${l?`<div class="lakeSnapshot"><b>Lake snapshot</b><span>Stocked: ${esc(l.species.join(", ")||"—")}</span><span>Latest stocking: ${esc(l.latestYear||"—")}</span>${l.observedSpecies&&l.observedSpecies.length?`<span>Observed: ${esc(l.observedSpecies.map(s=>s.species).join(", "))}</span>`:""}</div>`:""}
 ${t.fmz?`<a class="zoneAction" target="_blank" rel="noopener" href="${REGS_BASE}${t.fmz}">Check FMZ ${t.fmz} Regulations</a>`:""}
 <h3>Catch Log</h3><div class="catchlist">${t.catches.length?t.catches.map(c=>`<div class="catchrow"><div><b>${esc(c.species)}</b><span>${new Date(c.time).toLocaleTimeString("en-CA",{hour:"numeric",minute:"2-digit"})} • ${esc(c.disposition)}</span>${c.size?`<span>${esc(c.size)} cm</span>`:""}${c.disposition==="Kept"&&c.size?`<span>🍽️ Check lake eating advice</span>`:""}</div><button data-delcatch="${c.id}">×</button></div>`).join(""):`<div class="historynote">No catches logged yet.</div>`}</div>
 ${active?`<div class="catchform"><input id="catchSpecies" placeholder="${t('catchSpeciesPh')}"><div class="formrow"><input id="catchSize" type="number" min="0" step="0.1" placeholder="${t('catchLengthPh')}"><select id="catchDisposition"><option>Released</option><option>Kept</option></select></div><textarea id="catchNotes" placeholder="${t('catchNotesPh')}"></textarea><label class="checkline"><input id="catchLocation" type="checkbox"> Save current catch location</label><button id="addCatch">+ Add Catch</button></div>
 <textarea id="tripNotes" class="tripnotes" placeholder="${t('tripNotesPh')}">${esc(t.notes||"")}</textarea><button id="saveTripNotes" class="secondaryAction">Save Trip Notes</button><button id="endTrip" class="endTrip">End Fishing Trip</button>`:""}
 `;
 $("tripSheet").classList.remove("hidden");
 document.querySelectorAll("[data-delcatch]").forEach(b=>b.onclick=()=>{t.catches=t.catches.filter(c=>c.id!==Number(b.dataset.delcatch));saveTrips();openTrip(t.id)});
 if(active){
  $("addCatch").onclick=()=>addCatch(t.id);$("saveTripNotes").onclick=()=>{t.notes=$("tripNotes").value;saveTrips()};
  $("endTrip").onclick=()=>{t.notes=$("tripNotes").value;t.ended=new Date().toISOString();saveTrips();openTrip(t.id)};
 }
}
function addCatch(id){
 const t=trips.find(x=>x.id===id),species=$("catchSpecies").value.trim();if(!species)return alert(t("enterSpecies"));
 const finish=(loc)=>{t.catches.unshift({id:Date.now(),species,size:$("catchSize").value,disposition:$("catchDisposition").value,notes:$("catchNotes").value.trim(),time:new Date().toISOString(),location:loc});saveTrips();openTrip(id)};
 if($("catchLocation").checked&&navigator.geolocation)navigator.geolocation.getCurrentPosition(p=>finish({lat:p.coords.latitude,lon:p.coords.longitude}),()=>finish(null),{timeout:8000});else finish(null);
}
function renderTrips(){
 $("listTitle").textContent=t("myFishingTrips");$("count").textContent=`${trips.length} ${t("tripsCount")}`;markerLayer.clearLayers();
 $("results").innerHTML=trips.length?trips.map(t=>`<article class="record tripcard" data-trip="${t.id}"><div class="topline"><div><h4>${esc(t.lakeName)}</h4><div class="species">${t.ended?"Completed":"Active trip"}</div></div><span class="pill">${t.catches.length} catch${t.catches.length===1?"":"es"}</span></div><div class="meta"><span>🎣 ${new Date(t.started).toLocaleDateString("en-CA")}</span>${t.fmz?`<span>🗺️ FMZ ${t.fmz}</span>`:""}</div></article>`).join(""):`<div class="record empty">No fishing trips yet. Open a lake and tap “Start Fishing Trip.”</div>`;
 document.querySelectorAll("[data-trip]").forEach(e=>e.onclick=()=>openTrip(Number(e.dataset.trip)));
}
function locate(after){
 const nativeLoc=nativeBridge("requestLocation");
 if(!nativeLoc&&!navigator.geolocation)return toast("This device cannot share a location. Use the search box to find a lake by name.");
 $("count").textContent=t("findingLocation");

 if(nativeLoc){
  window.__nativeLocationResult=r=>{
   window.__nativeLocationResult=null;
   if(r&&r.ok){rememberLocation(r.lat,r.lon);return onLocated({coords:{latitude:r.lat,longitude:r.lon}})}
   onLocateFailed(r&&r.reason==="denied");
  };
  nativeLoc.postMessage({});
  return;
 }

 navigator.geolocation.getCurrentPosition(onLocated,()=>onLocateFailed(true),{enableHighAccuracy:true,timeout:10000});

 function onLocated(p){
  userLoc=[p.coords.latitude,p.coords.longitude];rememberLocation(userLoc[0],userLoc[1]);
  if(mapAvailable){
   if(userMarker)map.removeLayer(userMarker);
   userMarker=L.marker(userLoc).addTo(map).bindPopup("Your location");
   map.setView(userLoc,8);
  }
  if(after)after();else apply();
 }
 function onLocateFailed(denied){
  $("count").textContent=t("locationUnavailable");
  toast(denied
   ?"Location is off. Turn it on in Settings, or search for a lake by name."
   :"Your location could not be found right now. Try again outdoors, or search for a lake by name.");
 }
}
function lakeQuantityFor(l,sp,yr){
 return l.records.filter(r=>(!sp||r.Species===sp)&&(!yr||String(r.Stocking_Year)===String(yr))).reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0);
}
function hasNearbyAccess(l,maxKm=5){
 return accessLoaded&&accessPoints.some(a=>distance(l.lat,l.lon,a.lat,a.lon)<=maxKm);
}

function bestMatchScore(l){
 const km=Number(l._findKm)||999, qty=Number(l._findQty)||0, yr=Number(l._findYear)||0;
 // Math.max() of an empty array is -Infinity, which propagated all the way
 // through and rendered as "★ Infinity Best Match" whenever stocking data
 // hadn't loaded.
 const years=rows.map(r=>Number(r.Stocking_Year)||0).filter(Boolean);
 const latest=years.length?Math.max(...years):(new Date()).getFullYear();

 let score=Math.max(0,40-(km/5));                       // distance, max ~40
 if(l.stocked){
  score+=Math.max(0,30-((latest-yr)*7));                // recency, max 30
  score+=Math.min(20,Math.log10(Math.max(1,qty))*5);    // stocking volume, max 20
 }else{
  // Stocking recency and volume mean nothing for a lake nobody stocked.
  // Score it on what is actually known: how thoroughly it has been surveyed
  // and how big it is.
  const spp=anglerSpecies(l.present).length;
  score+=Math.min(28,spp*3);
  score+=Math.min(12,Math.log10(Math.max(1,Number(l.areaHa)||0))*6);
 }
 if(hasNearbyAccess(l))score+=7;
 if(l.fmz)score+=3;
 return Math.max(0,Math.min(100,Math.round(score)))||0;
}
function ruleSummaryForResult(l,sp){
 if(!fullRegsLoaded)return {label:"Rules loading",detail:"Open lake for current regulations",kind:"normal"};
 const r=fullRuleFor(l,sp||l.species[0]||"Fish");
 if(r.exceptions.length){
  const x=r.exceptions[0];
  return {label:"⚠ Special lake rule",detail:[x.limit,x.size,x.season].filter(Boolean).join(" • ")||"Waterbody exception applies",kind:"exception"};
 }
 if(r.additional.length){
  const x=r.additional[0];
  return {label:"Additional opportunity",detail:[x.limit,x.size,x.season].filter(Boolean).join(" • ")||"Special opportunity applies",kind:"exception"};
 }
 if(r.zone)return {label:`2026 ${r.sp} rules`,detail:`Sport ${r.zone.sport||"—"} • Conservation ${r.zone.conservation||"—"} • ${r.zone.season||"Season unavailable"}`,kind:"verified"};
 return {label:"2026 rules",detail:"Open lake for official current rule",kind:"normal"};
}

async function weatherAlertsForLake(l){
 try{
  const delta=.18,bbox=[l.lon-delta,l.lat-delta,l.lon+delta,l.lat+delta].join(",");
  const u=`${ECCC_ALERTS_API}?f=json&bbox=${bbox}&limit=50`;
  const j=await fetch(u).then(r=>r.json());
  return (j.features||[]).filter(f=>{
   const p=f.properties||{};
   return String(p.display_status||p.status_en||"").toLowerCase()!=="ended";
  });
 }catch(e){return []}
}
function windDirection(deg){
 const dirs=["N","NE","E","SE","S","SW","W","NW"];return dirs[Math.round((Number(deg)||0)/45)%8];
}
function fishingConditionsCard(l){
 return `<div id="lake-weather" class="tabAnchor"></div><div class="infoCard weatherCard"><h3>🌤️ ${t("weatherTitle")}</h3>
 <p>Check current Environment Canada conditions and active weather alerts before heading out. Wind and storms can make lake conditions unsafe even when the fishing looks good.</p>
 <div id="weatherAlertBox"><span class="weatherLoading">Checking Environment Canada alerts…</span></div>
 <div class="weatherActions"><a target="_blank" rel="noopener" href="${ECCC_WEATHER_HOME}">Environment Canada Weather</a><button id="refreshAlerts">${t("refreshAlerts")}</button></div>
 <p class="microcopy">V1R does not claim to predict whether fish will bite. Weather is trip-planning information only.</p></div>`;
}
async function wireWeather(l){
 const box=$("weatherAlertBox");if(!box)return;
 const load=async()=>{
  box.innerHTML='<span class="weatherLoading">Checking Environment Canada alerts…</span>';
  const alerts=await weatherAlertsForLake(l);
  if(!alerts.length){box.innerHTML='<div class="weatherOK">✓ ${t("noAlert")}</div>';return}
  box.innerHTML=alerts.slice(0,5).map(f=>{const p=f.properties||{};return `<div class="weatherAlert"><b>⚠ ${esc(p.alert_name_en||p.alert_short_name_en||t("weatherAlert"))}</b><span>${esc(p.feature_name_en||p.province||t("lakeArea"))}</span>${p.alert_type?`<span>${esc(p.alert_type)}</span>`:""}</div>`}).join("");
 };
 await load();const b=$("refreshAlerts");if(b)b.onclick=load;
}

function lakeOverviewTabs(l){
 const sections=[
  ["overview",t("overview")],["weather",t("weather")],["stocking",t("stocking")],["rules",t("regulations")],["access",t("access")],
  ["species",t("fishSpecies")],["depth",t("depth")],["eating",t("eatingAdvice")],["trips",t("trips")]
 ];
 return `<div class="lakeTabs">${sections.map((s,i)=>`<button class="${i===0?"active":""}" data-laketab="${s[0]}">${s[1]}</button>`).join("")}</div>`;
}
function runFindFish(){
 const go=async()=>{
  const radius=Number($("findRadius").value)||50,sp=$("findSpecies").value.trim(),yr=$("findYear").value,
    min=Number($("findMinimum").value)||0,lname=$("findLake").value.trim().toLowerCase(),
    sort=$("findSort").value,needAccess=$("findAccess").checked;

  // Ask the province for this species around here before filtering, so lakes
  // that were never stocked are in the pool at all.
  if(findMode==="any"&&userLoc){
   const btn=$("runFind"),label=btn?btn.textContent:"";
   if(btn){btn.disabled=true;btn.textContent=t("searchingOntario")}
   try{ await araNearby(userLoc[0],userLoc[1],radius,sp||null); }
   catch(e){ toast("Couldn't reach the Ontario fish survey. Showing what's already on this device."); }
   finally{ if(btn){btn.disabled=false;btn.textContent=label} }
  }

  const execute=()=>{
   currentView="findfish";
   const wantStocked=findMode==="stocked";
   shown=lakes.filter(l=>{
    const km=distance(userLoc[0],userLoc[1],l.lat,l.lon);
    if(km>radius)return false;                       // the box was square; this is the circle
    if(lname&&!matchesQuery({name:l.name,species:[],present:[]},lname))return false;
    if(needAccess&&!hasNearbyAccess(l))return false;

    const relevant=l.records.filter(r=>(!sp||r.Species===sp)&&(!yr||String(r.Stocking_Year)===yr));
    const qty=relevant.reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0);
    const presentMatch=!sp||anglerSpecies(l.present).some(x=>x.toLowerCase()===sp.toLowerCase());

    if(wantStocked){
     if(!relevant.length||qty<min)return false;
    }else{
     // Either the species has been stocked here, or a survey recorded it here.
     if(!relevant.length&&!presentMatch)return false;
     // A minimum-stocked figure is meaningless for a lake nobody stocked, so
     // it only filters lakes that actually have stocking records.
     if(min&&relevant.length&&qty<min)return false;
     if(min&&!relevant.length)return false;
    }
    l._findQty=qty;l._findKm=km;
    l._findYear=relevant.length?Math.max(...relevant.map(r=>Number(r.Stocking_Year)||0)):0;
    l._findPresent=presentMatch&&!relevant.length;
    return true;
   });
   shown.forEach(l=>l._bestScore=bestMatchScore(l));
   if(sort==="best")shown.sort((a,b)=>b._bestScore-a._bestScore||a._findKm-b._findKm);
   if(sort==="closest")shown.sort((a,b)=>a._findKm-b._findKm);
   if(sort==="recent")shown.sort((a,b)=>b._findYear-a._findYear||a._findKm-b._findKm);
   if(sort==="quantity")shown.sort((a,b)=>b._findQty-a._findQty||a._findKm-b._findKm);
   const what=sp?esc(sp):"lakes";
   $("listTitle").textContent=`${what} within ${radius} km`;
   $("count").textContent=lakeCount(shown.length);
   renderFindResults(sp,yr);$("findPanel").classList.remove("open");
   if(!shown.length){
    $("results").innerHTML=`<div class="record empty">${sp
     ?t("noLakeWithSpecies").replace("{r}",radius).replace("{sp}",esc(speciesLabel(sp)))
     :t("noLakesWithin").replace("{r}",radius)}</div>`;
   }
  };
  if(needAccess&&!accessLoaded)loadAccess().then(execute);else execute();
 };
 if(!userLoc)locate(go);else go();
}

function renderFindResults(sp,yr){
 $("count").textContent=lakeCount(shown.length);
 // The plate goes in only when the angler asked for a specific fish. "Any
 // species" gets none — the app would be choosing one for them.
 const hero=sp?plateFor(sp,"findPlate"):"";
 $("results").innerHTML=shown.slice(0,250).map((l,i)=>{
  const rs=ruleSummaryForResult(l,sp);
  const access=hasNearbyAccess(l);
  return `<article class="record finder2" data-i="${i}">
   <div class="finderTop"><div><div class="matchBadge">★ ${Number.isFinite(l._bestScore)?l._bestScore:0} ${t("badgeBestMatch")}</div><h4>${esc(l.name)}</h4><div class="species">${esc(sp||(l.stocked?l.species:anglerSpecies(l.present)).slice(0,3).map(speciesLabel).join(" • "))}</div></div><span class="distancebadge">${l._findKm<10?l._findKm.toFixed(1):Math.round(l._findKm)} km<small>${esc(bearingLabel(userLoc[0],userLoc[1],l.lat,l.lon))}</small></span></div>
   ${l._findPresent
     ?`<div class="heroStock present"><div><small>Recorded in this lake</small><b>${esc(sp||"Surveyed")}</b></div><div><small>Stocking</small><b>Not stocked</b></div></div>`
     :`<div class="heroStock"><div><small>${t("matchingStocked")}</small><b>${num(l._findQty)}</b></div><div><small>${t("mostRecent")}</small><b>${l._findYear||"—"}</b></div></div>`}
   <div class="rulePreview ${rs.kind}"><b>${esc(rs.label)}</b><span>${esc(rs.detail)}</span></div>
   <div class="featureRow">${l.township?`<span class="place">${esc(townshipLabel(l.township))}</span>`:""}<span class="zone">FMZ ${l.fmz||"—"}</span>${access?`<span>🚤 Access ≤5 km</span>`:""}${l.observedSpecies&&l.observedSpecies.length?`<span>Species data</span>`:""}<span>🌊 Depth layer</span><span>🌤️ Weather</span></div>
   <button class="viewLakeBtn">${t("viewLake")}</button>
  </article>`;
 }).join("")||"";
 if(hero)$("results").insertAdjacentHTML("afterbegin",hero);
 $("results").insertAdjacentHTML("afterbegin",locationPrompt());
 document.querySelectorAll(".record[data-i]").forEach(el=>el.onclick=()=>{const l=shown[+el.dataset.i];map.setView([l.lat,l.lon],11);detail(l)});
 markerLayer.clearLayers();fitToResults();shown.slice(0,400).forEach(l=>L.circleMarker([l.lat,l.lon],{radius:8,color:"#13263C",weight:2,fillColor:l.stocked?"#C4941F":"#8FB6D6",fillOpacity:l.stocked?.92:.85}).addTo(markerLayer).bindPopup(`<b>${esc(l.name)}</b><br>${l._findKm.toFixed(1)} km away<br>${l._findPresent?t("recordedNotStocked"):num(l._findQty)+" fish stocked"}`));
}
function recentNearMe(){
 const run=()=>{
  currentView="recentnear";$("search").value="";$("species").value="";$("year").value="";$("radius").value="100";
  commitFilters();
  shown=[...lakes].filter(l=>distance(userLoc[0],userLoc[1],l.lat,l.lon)<=100)
    .sort((a,b)=>b.latestYear-a.latestYear || distance(userLoc[0],userLoc[1],a.lat,a.lon)-distance(userLoc[0],userLoc[1],b.lat,b.lon));
  $("listTitle").textContent=t("recentWithin100");
  render();
 };
 if(!userLoc)locate(run);else run();
}
function setView(v){
 currentView=v;
 document.querySelectorAll(".tabs button").forEach(b=>{
  const on=b.dataset.view===v;
  b.classList.toggle("active",on);b.setAttribute("aria-selected",String(on));
 });
 const active=document.querySelector(".tabs button.active");
 if(active&&active.scrollIntoView)active.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"});

 // Every section declares which views it belongs to. Before this, only the
 // resources panel was hidden, so Explore's hero, stats and shortcuts sat
 // underneath whichever tab you picked.
 document.querySelectorAll("[data-show]").forEach(el=>{
  el.hidden=!el.dataset.show.split(" ").includes(v);
 });

 const find=$("findPanel");
 if(find)find.classList.toggle("open",v==="findfish");
 window.scrollTo({top:0,behavior:"smooth"});

 if(v==="resources")return;
 if(v==="trips")return renderTrips();
 if(v==="near"){
  // #radius is one shared setting between Explore and Near Me — Near Me's own
  // selector writes into the same field, so the committed snapshot has to
  // follow this sync too, or a later Search press on Explore would silently
  // pick up whatever radius Near Me last set rather than what Explore's own
  // dropdown shows.
  const r=$("nearRadius");if(r){$("radius").value=r.value;committed.radius=Number(r.value)||0;}
  if(!userLoc)locate(apply);
 }
 apply();
}

function syncTabs(){
 const map={recentnear:"near",findfish:"findfish"};
 setView(map[currentView]||currentView);
}
const nr=$("nearRadius");if(nr)nr.onchange=()=>{$("radius").value=nr.value;committed.radius=Number(nr.value)||0;if(!userLoc)locate(apply);else apply()};
const nl=$("nearLocate");if(nl)nl.onclick=()=>locate(apply);
const fs2=$("favSearch");if(fs2)fs2.oninput=()=>{clearTimeout(fs2._t);fs2._t=setTimeout(apply,200)};
$("showAccess").onchange=()=>{$("showAccess").checked?loadAccess():renderAccess()};
$("showFMZ").onchange=()=>{$("showFMZ").checked?loadFMZ(true):renderFMZ()};
$("showDepth").onchange=renderDepth;
$("searchBtn").onclick=runSearch;
$("search").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();$("search").blur();apply();const q=$("search").value.trim();if(q.length>=3&&shown.length<5)searchProvince(q)}};
$("search").oninput=markFiltersDirty;
$("species").onchange=markFiltersDirty;
$("year").onchange=markFiltersDirty;
$("radius").onchange=markFiltersDirty;
const rf=$("resetFind");
if(rf)rf.onclick=()=>{
 $("findSpecies").value="";$("findYear").value="";$("findMinimum").value="";
 $("findLake").value="";$("findRadius").value="50";$("findSort").value="closest";
 $("findAccess").checked=false;
 const a=$("modeAny");if(a)a.click();
 toast("Filters reset.");
};
document.addEventListener("click",e=>{
 if(e.target.closest("#distancePrompt"))locate(apply);
});
document.querySelectorAll(".baseSwitch button").forEach(b=>b.onclick=()=>setBasemap(b.dataset.base));
setBasemap(baseKey);
const su=$("showUnstocked");if(su)su.onchange=markFiltersDirty;
{
 const any=$("modeAny"),stk=$("modeStocked"),note=$("modeNote"),minRow=$("findMinimum");
 const setMode=m=>{
  findMode=m;
  if(any)any.classList.toggle("on",m==="any");
  if(stk)stk.classList.toggle("on",m==="stocked");
  if(note)note.textContent=t(m==="any"?"modeNoteAny":"modeNoteStocked");
  // "Minimum fish stocked" cannot apply to a lake nobody stocked.
  // Stocking year and minimum-stocked are meaningless for a lake nobody
  // stocked, so they are dimmed rather than silently ignored.
  const off=m==="any";
  document.querySelectorAll(".stockOnlyField").forEach(el=>el.classList.toggle("disabledField",off));
  if(minRow)minRow.disabled=off;
  const yr=$("findYear");if(yr)yr.disabled=off;
 };
 if(any)any.onclick=()=>setMode("any");
 if(stk)stk.onclick=()=>setMode("stocked");
 setMode("any");
}
$("clearFilters").onclick=()=>{$("search").value="";$("species").value="";$("year").value="";$("radius").value="";const u=$("showUnstocked");if(u)u.checked=true;clearFiltersDirty();commitFilters();apply()};


$("closeFind").onclick=()=>{$("findPanel").classList.remove("open");setView("explore")};
$("runFind").onclick=runFindFish;
$("recentNearBtn").onclick=recentNearMe;
$("recentBtn").onclick=()=>{$("search").value="";$("species").value="";$("year").value="";$("radius").value="";commitFilters();currentView="explore";shown=[...lakes].sort((a,b)=>b.latestYear-a.latestYear);render()};
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>setView(b.dataset.view));
$("closeSheet").onclick=()=>$("sheet").classList.add("hidden");
$("closeTrip").onclick=()=>$("tripSheet").classList.add("hidden");$("tripSheet").onclick=e=>{if(e.target===$("tripSheet"))$("tripSheet").classList.add("hidden")};$("sheet").onclick=e=>{if(e.target===$("sheet"))$("sheet").classList.add("hidden")};
load();if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});



function toast(msg){
 let el=document.getElementById("toast");
 if(!el){el=document.createElement("div");el.id="toast";el.setAttribute("role","status");document.body.appendChild(el)}
 el.textContent=msg;el.classList.add("show");
 clearTimeout(toast._t);toast._t=setTimeout(()=>el.classList.remove("show"),4200);
}

const nativeBridge=k=>window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers[k];

window.__nativeBackupFailed=()=>toast("The backup could not be saved. Try again, or free up some space on the device.");

function exportMyData(){
 const payload={app:"Ontario Stocked Lakes",version:APP_VERSION,exported:new Date().toISOString(),
  trips:JSON.parse(localStorage.getItem("osl-trips")||"[]"),
  favorites:JSON.parse(localStorage.getItem("osl-favorites")||"[]"),
  recent:JSON.parse(localStorage.getItem("osl-recent")||"[]")};
 const json=JSON.stringify(payload,null,2);
 const filename="ontario-stocked-lakes-backup.json";

 // In the iOS app this goes to the native share sheet. WKWebView will not
 // download a blob URL, so the anchor path below does nothing there.
 const native=nativeBridge("saveBackup");
 if(native){
  native.postMessage({filename,text:json});
  return;
 }

 const blob=new Blob([json],{type:"application/json"});
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);
 a.download=filename;a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),4000);
 toast("Saved a backup of your trips, catches and saved lakes.");
}

function importMyData(file){
 const r=new FileReader();
 r.onload=()=>{
  try{
   const d=JSON.parse(r.result);
   if(Array.isArray(d.trips))localStorage.setItem("osl-trips",JSON.stringify(d.trips));
   if(Array.isArray(d.favorites))localStorage.setItem("osl-favorites",JSON.stringify(d.favorites));
   if(Array.isArray(d.recent))localStorage.setItem("osl-recent",JSON.stringify(d.recent));
   trips=JSON.parse(localStorage.getItem("osl-trips")||"[]");
   favoriteKeys=new Set(JSON.parse(localStorage.getItem("osl-favorites")||"[]"));
   recentLakes=JSON.parse(localStorage.getItem("osl-recent")||"[]");
   apply();toast("Restored your backup.");
  }catch(e){toast("That file is not a Stocked Lakes backup. Choose the .json file you exported.")}
 };
 r.readAsText(file);
}

function helpMarkup(){
 return `<div class="helpHero"><img class="brandMark large" src="icons/icon-192.png" alt=""><div><h2>${t("helpTitle")}</h2><p>${t("disclaimer")}</p></div></div>
 <div class="helpGrid">
  <section><h3>${t("helpFind")}</h3><p>${t("helpFindText")}</p></section>
  <section><h3>${t("helpRules")}</h3><p>${t("helpRulesText")}</p></section>
  <section><h3>${t("helpTrips")}</h3><p>${t("helpTripsText")}</p></section>
  <section><h3>${t("helpWeather")}</h3><p>${t("helpWeatherText")}</p></section>
  <section><h3>${t("privacy")}</h3><p>${t("privacyText")}</p></section>
 </div>
 <div class="aboutBlock"><h3>${t("dataSources")}</h3>
  <a target="_blank" rel="noopener" href="https://www.ontario.ca/fishonline">Ontario Fish ON-Line / ON-Pêche</a>
  <a target="_blank" rel="noopener" href="https://www.ontario.ca/document/ontario-fishing-regulations-summary">2026 Ontario Fishing Regulations Summary</a>
  <a target="_blank" rel="noopener" href="https://data.ontario.ca/en/dataset/recreational-fishing-regulations-data">Ontario Open Data — Fishing Regulations</a>
  <a target="_blank" rel="noopener" href="https://weather.gc.ca/">Environment Canada Weather</a>
 </div>
 ${speciesArtCredit?`<div class="aboutBlock"><h3>${t("illustrations")}</h3>
  <p class="helpNote">${esc(speciesArtCredit)} ${t("plateAboutNote")}</p>
  <a target="_blank" rel="noopener" href="https://www.fws.gov/media">U.S. Fish and Wildlife Service media library</a>
 </div>`:""}
 <div class="aboutBlock"><h3>${t("yourData")}</h3><p class="helpNote">${t("yourDataText")}</p>
  <div class="dataActions">
   <button id="exportData" type="button">${t("exportData")}</button>
   <label class="importBtn">${t("importData")}<input id="importData" type="file" accept="application/json,.json" hidden></label>
  </div>
 </div>
 <div class="versionStamp">Ontario Stocked Lakes • v${APP_VERSION}</div>`;
}

// Derived from wherever the app is being served, so the share link is correct
// on GitHub Pages, on Vercel and on any domain this moves to later. A
// hardcoded URL is what broke it last time.
const APP_URL=(location.origin&&location.origin!=="null")
 ? location.origin+location.pathname.replace(/index\.html$/,"")
 : "https://richardjallinson.github.io/Ontario-Stocked-Lakes/";
const TEXT_SIZES=["standard","large","larger"];
function applyTextSize(size){
 document.body.classList.remove("text-large","text-larger");
 if(size==="large")document.body.classList.add("text-large");
 if(size==="larger")document.body.classList.add("text-larger");
 localStorage.setItem("osl-textsize",size);
}
function currentTextSize(){return localStorage.getItem("osl-textsize")||"standard"}

function settingsMarkup(){
 const size=currentTextSize();
 const label={standard:appLang==="fr"?"Standard":"Standard",large:appLang==="fr"?"Grand":"Large",larger:appLang==="fr"?"Très grand":"Larger"};
 return `<h2 class="sheetTitle">${t("settings")}</h2>

 <section class="setBlock">
  <h3>${t("textSize")}</h3>
  <p class="setNote">${t("textSizeNote")}</p>
  <div class="segmented" role="group" aria-label="${t("textSize")}">
   ${TEXT_SIZES.map(v=>`<button type="button" data-size="${v}" class="${v===size?"on":""}">${label[v]}</button>`).join("")}
  </div>
  <p class="sizePreview">${t("sizePreview")}</p>
 </section>

 <section class="setBlock">
  <h3>${t("language")}</h3>
  <div class="segmented" role="group" aria-label="${t("language")}">
   <button type="button" data-lang="en" class="${appLang==="en"?"on":""}">English</button>
   <button type="button" data-lang="fr" class="${appLang==="fr"?"on":""}">Français</button>
  </div>
 </section>

 <section class="setBlock">
  <h3>${t("location")}</h3>
  <p class="setNote">${t("locationNote")}</p>
  <button id="setLocate" class="ghostbtn wide" type="button">${t("useLocation")}</button>
 </section>

 ${appLang==="fr"?`<section class="setBlock">
  <h3>${t("language")}</h3>
  <p class="setNote">${t("regsEnglishNote")}</p>
 </section>`:""}

 <section class="setBlock">
  <h3>${t("stockingData")}</h3>
  <p class="setNote">${t("stockingDataNote")}</p>
  <p class="setNote">${stockingBuilt?`${t("asOf")} ${esc(stockingBuilt)}.`:t("liveData")}</p>
  <button id="refreshStocking" class="ghostbtn wide" type="button">${t("checkStockings")}</button>
 </section>

 <section class="setBlock">
  <h3>${t("appLink")}</h3>
  <p class="setNote">${t("appLinkNote")}</p>
  <div class="linkRow"><code id="appUrl">${esc(APP_URL)}</code></div>
  <div class="dataActions">
   <button id="copyLink" type="button">${t("copyLink")}</button>
   <button id="shareLink" type="button">${t("shareApp")}</button>
  </div>
 </section>

 <section class="setBlock">
  <h3>${t("yourData")}</h3>
  <p class="setNote">${t("yourDataText")}</p>
  <div class="dataActions">
   <button id="exportData" type="button">${t("exportData")}</button>
   <label class="importBtn">${t("importData")}<input id="importData" type="file" accept="application/json,.json" hidden></label>
  </div>
 </section>

 <section class="setBlock">
  <button id="openHelpFromSettings" class="ghostbtn wide" type="button">${t("helpTitle")}</button>
 </section>

 <div class="versionStamp">Ontario Stocked Lakes • v${APP_VERSION}</div>`;
}

function openSettings(){
 const c=$("settingsContent");if(!c)return;
 c.innerHTML=settingsMarkup();
 c.querySelectorAll("[data-size]").forEach(b=>b.onclick=()=>{applyTextSize(b.dataset.size);openSettings()});
 c.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{setLanguage(b.dataset.lang);openSettings()});
 const sl=$("setLocate");if(sl)sl.onclick=()=>{$("settingsSheet").classList.add("hidden");locate(apply)};
 const rs=$("refreshStocking");if(rs)rs.onclick=refreshStockingFromAPI;
 const cl=$("copyLink");if(cl)cl.onclick=()=>{
  const done=()=>toast(t("linkCopied"));
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(APP_URL).then(done).catch(()=>toast(APP_URL));
  else toast(APP_URL);
 };
 const sh=$("shareLink");if(sh)sh.onclick=()=>{
  if(navigator.share)navigator.share({title:"Ontario Stocked Lakes",url:APP_URL}).catch(()=>{});
  else if(cl)cl.click();
 };
 const ex=$("exportData");if(ex)ex.onclick=exportMyData;
 const im=$("importData");if(im)im.onchange=e=>{if(e.target.files[0])importMyData(e.target.files[0])};
 const oh=$("openHelpFromSettings");if(oh)oh.onclick=()=>{$("settingsSheet").classList.add("hidden");openHelp()};
 $("settingsSheet").classList.remove("hidden");
}

function openHelp(){
 const c=$("helpContent");if(c)c.innerHTML=helpMarkup();
 // Backup lives in Settings now; Help just points at it.
 const ex=$("exportData");if(ex)ex.onclick=exportMyData;
 const im=$("importData");if(im)im.onchange=e=>{if(e.target.files[0])importMyData(e.target.files[0])};
 $("helpSheet").classList.remove("hidden");
}
function wireShell(){
 const hb=$("helpBtn"),ch=$("closeHelp"),hs=$("helpSheet"),ob=$("onboarding"),co=$("closeOnboarding"),se=$("startExploring");
 const sb=$("settingsBtn"),cs=$("closeSettings"),ss=$("settingsSheet");
 if(sb)sb.onclick=openSettings;
 if(cs)cs.onclick=()=>ss.classList.add("hidden");
 if(ss)ss.onclick=e=>{if(e.target===ss)ss.classList.add("hidden")};
 applyTextSize(currentTextSize());
 if(hb)hb.onclick=openHelp;if(ch)ch.onclick=()=>hs.classList.add("hidden");
 if(hs)hs.onclick=e=>{if(e.target===hs)hs.classList.add("hidden")};
 const closeOnboard=()=>{if(ob)ob.classList.add("hidden");localStorage.setItem("osl-onboarded-v1t","1")};
 if(co)co.onclick=closeOnboard;if(se)se.onclick=()=>{closeOnboard();setView("findfish")};
 if(ob&&!localStorage.getItem("osl-onboarded-v1t"))ob.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded",()=>{
 const en=$("langEN"),fr=$("langFR");
 if(en)en.onclick=()=>setLanguage("en");
 if(fr)fr.onclick=()=>setLanguage("fr");
 restoreLocation();
 setLanguage(appLang);wireShell();
 refreshLocationQuietly();
});
