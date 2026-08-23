
const I18N={
 en:{
  findFish:"Find Fish",distance:"Distance",species:"Species",stockingYear:"Stocking year",
  minimumStocked:"Minimum fish stocked",lakeName:"Lake name",sortResults:"Sort results",
  bestMatch:"Best Match",closest:"Closest",recent:"Most recently stocked",quantity:"Most fish stocked",
  findStocked:"Find Stocked Lakes",myLakes:"My Lakes",trips:"Trips",overview:"Overview",
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
  privacy:"Privacy",privacyText:"Location is requested only when you use a location feature, and is never sent anywhere. Trips and catches stay on this device.",
  dataSources:"Government data sources",disclaimer:"Not an official Government of Ontario app.",
  yourData:"Your data",yourDataText:"Trips, catches and saved lakes stay on this device. Save a backup before you change or reset your device.",
  exportData:"Save a backup",importData:"Restore a backup",
  settings:"Settings",textSize:"Text size",textSizeNote:"Larger text throughout the app. Useful in bright sun or on the water.",
  sizePreview:"Brook Trout • stocked 2025 • 4,200 fish",
  location:"Location",locationNote:"Used on this device to sort lakes by distance. Never sent anywhere.",
  useLocation:"Use my location",
  appLink:"App link",appLinkNote:"Share Ontario Stocked Lakes with someone.",
  copyLink:"Copy link",shareApp:"Share",linkCopied:"Link copied."
 },
 fr:{
  findFish:"Trouver du poisson",distance:"Distance",species:"Espèce",stockingYear:"Année d'ensemencement",
  minimumStocked:"Nombre minimal de poissons ensemencés",lakeName:"Nom du lac",sortResults:"Trier les résultats",
  bestMatch:"Meilleure correspondance",closest:"Les plus proches",recent:"Ensemencement le plus récent",quantity:"Plus grand nombre ensemencé",
  findStocked:"Trouver des lacs ensemencés",myLakes:"Mes lacs",trips:"Sorties",overview:"Aperçu",
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
  privacy:"Confidentialité",privacyText:"La position est demandée seulement lorsque vous utilisez une fonction géolocalisée et n’est jamais transmise. Les sorties et les prises restent sur cet appareil.",
  dataSources:"Sources de données gouvernementales",disclaimer:"Ceci n’est pas une application officielle du gouvernement de l’Ontario.",
  yourData:"Vos données",yourDataText:"Les sorties, les prises et les lacs enregistrés restent sur cet appareil. Enregistrez une copie avant de changer ou de réinitialiser votre appareil.",
  exportData:"Enregistrer une copie",importData:"Restaurer une copie",
  settings:"Réglages",textSize:"Taille du texte",textSizeNote:"Agrandit le texte dans toute l'application. Utile au soleil ou sur l'eau.",
  sizePreview:"Omble de fontaine • ensemencé 2025 • 4 200 poissons",
  location:"Position",locationNote:"Utilisée sur cet appareil pour trier les lacs par distance. Jamais transmise.",
  useLocation:"Utiliser ma position",
  appLink:"Lien de l'application",appLinkNote:"Partagez Ontario Stocked Lakes avec quelqu'un.",
  copyLink:"Copier le lien",shareApp:"Partager",linkCopied:"Lien copié."
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
 const ff=document.querySelector('.tabs button[data-view="findfish"]');
 if(ff)ff.textContent=t("findFish");
 const run=$("runFind");if(run)run.textContent=t("findStocked");
 const tabText={explore:appLang==="fr"?"Explorer":"Explore",near:appLang==="fr"?"Près de moi":"Near Me",
  favorites:t("myLakes"),trips:t("trips"),resources:t("regulations")};
 Object.keys(tabText).forEach(k=>{
  const b=document.querySelector('.tabs button[data-view="'+k+'"]');
  if(b)b.textContent=tabText[k];
 });
 const tag=$("brandTagline");if(tag)tag.textContent=t("tagline");
 const hb=$("helpBtn");if(hb)hb.setAttribute("aria-label",t("help"));
 const ot=$("onboardTitle");if(ot)ot.textContent=t("onboardTitle");
 const ox=$("onboardText");if(ox)ox.textContent=t("onboardText");
 const o1=$("onboardStep1");if(o1)o1.textContent=t("onboard1");
 const o2=$("onboardStep2");if(o2)o2.textContent=t("onboard2");
 const o3=$("onboardStep3");if(o3)o3.textContent=t("onboard3");
 const se=$("startExploring");if(se)se.textContent=t("startExploring");
 const sort=$("findSort");if(sort&&sort.options.length>=4){sort.options[0].text=t("bestMatch");sort.options[1].text=t("closest");sort.options[2].text=t("recent");sort.options[3].text=t("quantity")}
}

const APP_VERSION="v1f";
const API="https://services1.arcgis.com/TJH5KDher0W13Kgo/ArcGIS/rest/services/FishStockingDataForRecreationalPurposes/FeatureServer/0/query";
const ACCESS_API="https://services1.arcgis.com/YiULsZbgRKmBtdZN/ArcGIS/rest/services/Protected_Fishing_Access_IntroGIS_smaglio2_WFL1/FeatureServer/2/query";
const FMZ_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open07/MapServer/14/query";
const REGS_BASE="https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-";
const HIST_API="https://services1.arcgis.com/TJH5KDher0W13Kgo/arcgis/rest/services/Historical_Fish_Stocking_Data/FeatureServer/0/query";
const SURVEY_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open10/MapServer/18/query";
const CAUGHT_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open10/MapServer/16/query";
const BATHY_URL="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open01/MapServer";
const BATHY_LAYER=30;
let rows=[],historicalRows=[],lakes=[],shown=[],accessPoints=[],accessLoaded=false,fmzFeatures=[],fmzLoaded=false,historicalLoaded=false,speciesLoaded=false,userLoc=null,currentView="explore";
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
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{subdomains:"abcd",maxZoom:19,attribution:"&copy; OpenStreetMap contributors &copy; CARTO"}).addTo(map);
const markerLayer=L.layerGroup().addTo(map);
const accessLayer=L.layerGroup().addTo(map);
const bathyLayer=L.tileLayer(`${BATHY_URL}/export?bbox={bbox-epsg-3857}&bboxSR=3857&layers=show:${BATHY_LAYER}&size=256,256&imageSR=3857&format=png32&transparent=true&f=image`,{opacity:.72,attribution:"Government of Ontario bathymetry"});
const fmzLayer=L.geoJSON(null,{
 style:()=>({weight:2,fillOpacity:.06}),
 onEachFeature:(f,l)=>{const z=f.properties&&f.properties.FISHERIES_MANAGEMENT_ZONE_ID;l.bindPopup(`<b>Fisheries Management Zone ${z}</b><br><a target="_blank" rel="noopener" href="${REGS_BASE}${z}">View current Zone ${z} regulations</a>`)}
}).addTo(map);
let userMarker=null;
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
 if(!fmzLoaded)return;
 lakes.forEach(l=>l.fmz=fmzForLake(l));
}
async function loadFMZ(show=true){
 if(fmzLoaded){if(show)renderFMZ();return}
 $("fmzStatus").textContent="Loading Ontario FMZ boundaries…";
 try{
  const p=new URLSearchParams({where:"1=1",outFields:"FISHERIES_MANAGEMENT_ZONE_ID,LOCATION_DESCR",returnGeometry:"true",outSR:"4326",f:"geojson",resultRecordCount:"2000"});
  const j=await fetch(FMZ_API+"?"+p).then(r=>r.json());
  fmzFeatures=j.features||[];fmzLoaded=true;assignFMZ();
  $("fmzStatus").textContent=`20 Ontario Fisheries Management Zones loaded`;
  if(show)renderFMZ();
 }catch(e){$("fmzStatus").textContent="FMZ service unavailable";$("showFMZ").checked=false}
}
function renderDepth(){
 if($("showDepth").checked){
  if(!map.hasLayer(bathyLayer))bathyLayer.addTo(map);
  $("depthStatus").textContent="Depth contours on • not for navigation";
 }else{
  if(map.hasLayer(bathyLayer))map.removeLayer(bathyLayer);
  $("depthStatus").textContent="Government bathymetry • not for navigation";
 }
}
function renderFMZ(){
 fmzLayer.clearLayers();
 if($("showFMZ").checked&&fmzLoaded)fmzLayer.addData(fmzFeatures);
}
async function loadAccess(){
 if(accessLoaded){renderAccess();return}
 $("accessStatus").textContent="Loading Ontario access points…";
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
 }catch(e){$("accessStatus").textContent="Access-point service unavailable";$("showAccess").checked=false}
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
function normalizeHistorical(a){
 const id=pick(a,["Waterbody_Location_Identifier","WATERBODY_LOCATION_IDENTIFIER","Waterbody_Location_ID","WATERBODY_IDENT","Waterbody_Identifier","WATERBODY_IDENTIFIER"]);
 const yr=pick(a,["Stocking_Year","STOCKING_YEAR","StockingYear","Year","YEAR"]);
 const date=pick(a,["Stocking_Date","STOCKING_DATE","StockingDate"]);
 let year=Number(yr)||0;
 if(!year&&date){const d=new Date(Number(date)||date);if(!isNaN(d))year=d.getFullYear()}
 return {
  raw:a, waterbodyId:id?String(id).trim():"",
  year, species:pick(a,["Species","SPECIES","Species_Name","SPECIES_NAME"])||"Species unavailable",
  number:Number(pick(a,["Number_of_Fish_Stocked","NUMBER_OF_FISH_STOCKED","Number_Stocked","NUMBER_STOCKED","Quantity","QUANTITY"]))||0,
  stage:pick(a,["Developmental_Stage","DEVELOPMENTAL_STAGE","Development_Stage","DEVELOPMENT_STAGE"])||"",
  strain:pick(a,["Stock_Strain","STOCK_STRAIN","Strain","STRAIN"])||"",
  rearing:pick(a,["Rearing_Location","REARING_LOCATION","RearingLocation"])||"",
  spawning:pick(a,["Spawning_Year","SPAWNING_YEAR","SpawningYear"])||"",
  date:date||""
 };
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
async function loadHistorical(){
 try{
  let all=[],offset=0,guard=0;
  while(true){
   const p=new URLSearchParams({where:"1=1",outFields:"*",returnGeometry:"false",f:"json",resultOffset:String(offset),resultRecordCount:"1000"});
   const j=await fetch(HIST_API+"?"+p).then(r=>r.json());
   if(j.error)throw Error(j.error.message);
   const batch=(j.features||[]).map(x=>normalizeHistorical(x.attributes||{}));all.push(...batch);
   if(batch.length<1000||!j.exceededTransferLimit)break;
   offset+=batch.length;if(++guard>150)break;
  }
  historicalRows=all;historicalLoaded=true;
  const byId=new Map();
  all.filter(r=>r.waterbodyId).forEach(r=>{if(!byId.has(r.waterbodyId))byId.set(r.waterbodyId,[]);byId.get(r.waterbodyId).push(r)});
  lakes.forEach(l=>{l.historical=l.waterbodyId&&byId.has(String(l.waterbodyId).trim())?byId.get(String(l.waterbodyId).trim()).sort((a,b)=>b.year-a.year):[]});
  $("statHistorical").textContent=num(all.length);
  apply();
 }catch(e){
  historicalLoaded=false;$("statHistorical").textContent="N/A";
  console.warn("Historical stocking data unavailable:",e);
 }
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
 if(matches.length!==1)return `<div class="historynote">${matches.length>1?"More than one Ontario Fish Guide location has this waterbody name, so V1K will not guess which advisory applies.":"No exact-name Ontario Fish Guide advisory location was matched to this lake."} Use Ontario's official Fish Guide to verify the location.</div><a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/page/fish-consumption-report">Open Ontario Fish Guide</a>`;
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
async function load(){
 $("count").textContent="Loading Ontario data…";
 ["statLakes","statRecords","statSpecies","statLatest","statHistorical"].forEach(id=>{const el=$(id);if(el)el.textContent="…"});
 try{
  let all=[],offset=0,page=0;
  while(true){const j=await fetchPage(offset),batch=(j.features||[]).map(x=>x.attributes);all.push(...batch);$("count").textContent=`Loading… ${num(all.length)} records`;page++;if(batch.length<1000||!j.exceededTransferLimit)break;offset+=batch.length;if(page>100)break}
  rows=all.filter(x=>x.Latitude&&x.Longitude);buildLakes();updateDashboard();buildFilters();apply();loadFMZ(false).then(()=>apply());loadHistorical();loadObservedSpecies();loadAdvisories();loadFullRegulations();
 }catch(e){
  $("results").innerHTML=`<div class="error"><b>Ontario stocking data didn't load.</b><br>Check your connection and pull to reload. If you were offline, saved lakes and regulations are still available.<br><small>${esc(e.message)}</small></div>`;
  $("count").textContent="Unavailable";
  ["statLakes","statRecords","statSpecies","statLatest","statHistorical"].forEach(id=>{const el=$(id);if(el)el.textContent="—"});
  toast("Ontario stocking data didn't load. Check your connection.");
 }
}
function buildLakes(){
 const groups=new Map();
 rows.forEach(r=>{const k=lakeKey(r);if(!groups.has(k))groups.set(k,{key:k,records:[],name:name(r),lat:Number(r.Latitude),lon:Number(r.Longitude),township:r.Geographic_Township||"",district:r.MNRF_District||"",waterbodyId:r.Waterbody_Location_Identifier||""});groups.get(k).records.push(r)});
 lakes=[...groups.values()].map(l=>{l.records.sort((a,b)=>(b.Stocking_Year||0)-(a.Stocking_Year||0));l.latestYear=Math.max(...l.records.map(r=>Number(r.Stocking_Year)||0));l.species=[...new Set(l.records.map(r=>r.Species).filter(Boolean))].sort();l.historical=[];l.observedSpecies=[];l.advisoryMatches=[];return l}).sort((a,b)=>b.latestYear-a.latestYear||a.name.localeCompare(b.name));
}
function updateDashboard(){
 const speciesCount=new Set(rows.map(r=>r.Species).filter(Boolean)).size;
 const latestYear=rows.reduce((m,r)=>Math.max(m,Number(r.Stocking_Year)||0),0);
 $("statLakes").textContent=num(lakes.length);
 $("statRecords").textContent=num(rows.length);
 $("statSpecies").textContent=num(speciesCount);
 $("statLatest").textContent=latestYear||"—";$("statHistorical").textContent=historicalLoaded?num(historicalRows.length):"Loading…";
}
function buildFilters(){
 const spp=[...new Set(rows.map(x=>x.Species).filter(Boolean))].sort();
 const yrs=[...new Set(rows.map(x=>x.Stocking_Year).filter(Boolean))].sort((a,b)=>b-a);
 spp.forEach(v=>{$("species").insertAdjacentHTML("beforeend",`<option>${esc(v)}</option>`);$("findSpecies").insertAdjacentHTML("beforeend",`<option>${esc(v)}</option>`)});
 yrs.forEach(v=>{$("year").insertAdjacentHTML("beforeend",`<option>${v}</option>`);$("findYear").insertAdjacentHTML("beforeend",`<option>${v}</option>`)});
}
function apply(){
 if(currentView==="trips"){renderTrips();return}
 const q=(currentView==="favorites"&&$("favSearch")?$("favSearch").value:$("search").value).trim().toLowerCase(),sp=$("species").value,yr=$("year").value,radius=Number($("radius").value)||0;
 shown=lakes.filter(l=>{
  if(currentView==="favorites"&&!favoriteKeys.has(l.key))return false;
  const matching=l.records.filter(r=>(!sp||r.Species===sp)&&(!yr||String(r.Stocking_Year)===yr));if(!matching.length)return false;
  if(q&&![l.name,l.township,l.district,...l.species].some(v=>String(v||"").toLowerCase().includes(q)))return false;
  if(radius&&userLoc&&distance(userLoc[0],userLoc[1],l.lat,l.lon)>radius)return false;
  return true;
 });
 if((currentView==="near"||currentView==="recentnear"||radius)&&userLoc)shown.sort((a,b)=>distance(userLoc[0],userLoc[1],a.lat,a.lon)-distance(userLoc[0],userLoc[1],b.lat,b.lon));
 else shown.sort((a,b)=>b.latestYear-a.latestYear||a.name.localeCompare(b.name));
 render();
}
function render(){
 $("count").textContent=lakeCount(shown.length);
 const filtering=!!(($("search").value||"").trim()||$("species").value||$("year").value||$("radius").value);
 document.body.classList.toggle("filtering",filtering&&currentView==="explore");
 const mc=$("mapCount");if(mc)mc.textContent=lakeCount(Math.min(shown.length,400))+" on the map";
 $("listTitle").textContent=currentView==="favorites"?"My Lakes":currentView==="near"?"Stocked lakes near me":currentView==="recentnear"?"Recently stocked within 100 km":currentView==="findfish"?$("listTitle").textContent:"Explore stocked lakes";
 $("results").innerHTML=shown.slice(0,250).map((l,i)=>{
  const d=userLoc?`${distance(userLoc[0],userLoc[1],l.lat,l.lon).toFixed(1)} km away`:"";
  const latest=l.records.filter(r=>Number(r.Stocking_Year)===l.latestYear),latestFish=latest.reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0),fav=favoriteKeys.has(l.key);
  return `<article class="record" data-i="${i}"><div class="topline"><div><h4>${esc(l.name)}</h4><div class="species">${esc(l.species.join(" • "))}</div></div><div class="cardactions"><span class="pill">${esc(l.latestYear||"—")}</span><button class="star ${fav?"saved":""}" data-fav="${esc(l.key)}" aria-label="Favourite">${fav?"★":"☆"}</button></div></div><div class="meta"><span>${num(latestFish)} stocked</span><span>${l.records.length} record${l.records.length===1?"":"s"}</span>${l.fmz?`<span>🗺️ FMZ ${l.fmz}</span>`:""}${l.township?`<span>${esc(l.township)}</span>`:""}${d?`<span>${d}</span>`:""}</div></article>`;
 }).join("")||`<div class="record empty">${emptyMessage()}</div>`;
 document.querySelectorAll(".record[data-i]").forEach(el=>el.onclick=e=>{if(e.target.closest(".star"))return;const l=shown[+el.dataset.i];map.setView([l.lat,l.lon],11);detail(l)});
 document.querySelectorAll(".star").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(b.dataset.fav)});
 markerLayer.clearLayers();
 shown.slice(0,400).forEach(l=>{const m=L.circleMarker([l.lat,l.lon],{radius:8,color:"#13263C",weight:2,fillColor:"#C4941F",fillOpacity:.92}).addTo(markerLayer).bindPopup(`<b>${esc(l.name)}</b><br>${esc(l.species.join(", "))}<br>Latest: ${esc(l.latestYear||"—")}`);m.on("click",()=>detail(l))});
}
function lakeCount(n){return num(n)+" "+(n===1?"lake":"lakes")}
function emptyMessage(){
 if(currentView==="favorites")return "No saved lakes yet. Tap ☆ on any lake to keep it here.";
 if((currentView==="near"||currentView==="recentnear")&&!userLoc)
  return "Turn on location to see the lakes closest to you, or search for one by name.";
 if(!lakes.length)return "Stocking data hasn't loaded yet.";
 return "No stocked lakes match these filters. Try widening the distance or clearing the species.";
}
function toggleFav(key){favoriteKeys.has(key)?favoriteKeys.delete(key):favoriteKeys.add(key);localStorage.setItem("osl-favorites",JSON.stringify([...favoriteKeys]));apply()}

function regulationUrl(l){return l.fmz?`${REGS_BASE}${l.fmz}`:"https://www.ontario.ca/document/ontario-fishing-regulations-summary"}


const ONTARIO_REGS_DATASET_URL="https://data.ontario.ca/en/dataset/recreational-fishing-regulations-data";
const ONTARIO_REGS_SUMMARY_URL="https://www.ontario.ca/document/ontario-fishing-regulations-summary";
const ONTARIO_REGS_UPDATED="2026-08-04";
const REG_ENGINE_VERSION="V1O";

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
  fullRegsLoaded=true;apply();
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
  <p class="regWarning">These are catch/possession limits for the selected licence type. Zone-wide rule shown only when V1O has not identified a packaged waterbody exception. Fish sanctuaries, bait/gear rules and variation orders can still override normal rules.</p>
  <div class="sourceStamp">Ontario 2026 regulations • current-summary check: Aug. 4, 2026</div>
  <a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Verify Current FMZ ${l.fmz} Regulations</a></div>`;
 }
 if(r.status==="exception"){
  return `<div class="regCard exception"><div class="regTitle"><b>⚠️ ${esc(r.species)} — special waterbody</b><span>Exception check required</span></div>
  <p>This lake is identified in the packaged Ontario waterbody-exception index for FMZ ${l.fmz}. V1O will not substitute the normal zone-wide limit, season or slot size.</p><div class="exceptionChecklist"><span>✓ Zone identified</span><span>✓ Species identified</span><span>⚠ Waterbody exception applies</span></div><a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Open Exact Ontario Exception</a></div>`;
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
   <p class="regWarning">This species/FMZ combination has not yet been packaged as a verified numeric rule. Ontario rules can also be overridden by species exceptions, waterbody exceptions, fish sanctuaries and variation orders. V1O will not display a guessed legal limit.</p>
   <div class="regActions"><a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Open FMZ ${l.fmz} Current Rules</a><a target="_blank" rel="noopener" href="${ONTARIO_REGS_DATASET_URL}">Ontario 2026 Regulation Dataset</a></div>
 </div>`;
}
function detail(l){
 recentLakes=[l.key,...recentLakes.filter(k=>k!==l.key)].slice(0,10);localStorage.setItem("osl-recent",JSON.stringify(recentLakes));
 const fav=favoriteKeys.has(l.key),history=l.records.map(r=>`<div class="historyrow"><div><b>${esc(r.Stocking_Year||"—")}</b><span>${esc(r.Species||"Species unavailable")}</span></div><div class="historyright"><b>${num(r.Number_of_Fish_Stocked)}</b><span>${esc(r.Developmental_Stage||"")}</span></div></div>`).join("");
 $("detail").innerHTML=`<div class="detailhead"><div><h2>${esc(l.name)}</h2><div class="species">${esc(l.species.join(" • "))}</div></div><button class="bigstar ${fav?"saved":""}" id="detailFav">${fav?"★":"☆"}</button></div>
 <div class="detailgrid"><div><small>Latest stocking</small><b>${esc(l.latestYear||"—")}</b></div><div><small>Stocking records</small><b>${l.records.length}</b></div><div><small>Township</small><b>${esc(l.township||"—")}</b></div><div><small>MNRF district</small><b>${esc(l.district||"—")}</b></div>
 <div><small>Fisheries Management Zone</small><b>${l.fmz?`FMZ ${l.fmz}`:"Loading / unavailable"}</b></div><div><small>Waterbody ID</small><b>${esc(l.waterbodyId||"—")}</b></div></div>
 ${l.fmz?`<a class="zoneAction" target="_blank" rel="noopener" href="${REGS_BASE}${l.fmz}">View Current FMZ ${l.fmz} Regulations</a>`:""}
 <button class="tripStart" id="startTrip">Start a fishing trip</button>
 <div id="lake-rules" class="tabAnchor"></div>${fullRegCard(l,l.species[0]||"Fish")}
 ${fishingConditionsCard(l)}
 <div id="lake-eating" class="tabAnchor"></div><div class="infoCard"><h3>🍽️ Eating Ontario Fish</h3><p>Ontario consumption advice depends on the exact waterbody, fish species and fish length.</p>${advisoryPanel(l)}</div>
 <div id="lake-species" class="tabAnchor"></div><div class="infoCard"><h3>Fish observed</h3>
 ${speciesLoaded?(l.observedSpecies&&l.observedSpecies.length?`<div class="specieschips">${l.observedSpecies.map(s=>`<span>${esc(s.species)}</span>`).join("")}</div><p class="microcopy">Species shown come from Fish ON-Line survey records and are not a guarantee of current abundance.</p>`:`<p>No Fish ON-Line survey species were matched to this waterbody identifier.</p>`):`<p>Species observations are loading or unavailable.</p>`}
 </div>
 <div id="lake-depth" class="tabAnchor"></div><div class="infoCard"><h3>🌊 Lake depth</h3><p>Ontario publishes bathymetry contour lines for many lakes. Turn on the depth-contour map layer to view available contours. These data vary in age and accuracy and must never be used for navigation.</p><button class="inlineBtn" id="detailDepth">Show Depth Contours</button></div>
 <div id="lake-stocking" class="tabAnchor"></div><h3>Recent Stocking History</h3><div class="history">${history}</div>
 ${historicalLoaded?`<h3>Historical Stocking</h3>${l.historical&&l.historical.length?`<div class="history historical">${l.historical.map(r=>`<div class="historyrow"><div><b>${esc(r.year||"—")}</b><span>${esc(r.species)}</span>${r.strain?`<span>Strain: ${esc(r.strain)}</span>`:""}</div><div class="historyright"><b>${r.number?num(r.number):"Recorded"}</b><span>${esc(r.stage)}</span>${r.rearing?`<span>${esc(r.rearing)}</span>`:""}</div></div>`).join("")}</div>`:`<div class="historynote">No historical records were matched to this lake by Ontario Waterbody Location Identifier.</div>`}`:`<div class="historynote">Historical stocking data is still loading or temporarily unavailable.</div>`}
 <div id="lake-access" class="tabAnchor"></div><div class="infoCard"><h3>🚤 Nearest fishing access</h3><div id="nearestAccess">${accessLoaded?nearestAccess(l).map(a=>`<div class="accessrow"><div><b>${accessIcon(a)} ${esc(a.AccessName||a.WaterBody||"Fishing access")}</b><span>${esc(a.AccessType||"Access point")} • ${a.km.toFixed(1)} km from lake point</span></div><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lon}">Directions</a></div>`).join(""):"<p>Turn on “Show fishing access points” on the map to load Ontario access data.</p>"}</div></div>
 <div class="infoCard"><h3>Fishing information</h3><p>Stocking records are useful planning information, but fishing seasons, limits and exceptions can change. Check Ontario's current regulations before fishing.</p>
 <div class="actionstack">
 <a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/document/ontario-fishing-regulations-summary">Check 2026 Fishing Regulations</a>
 <a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/fishonline">Open Ontario Fish ON-Line</a>
 </div></div>
 <a class="directions" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lon}">Get Directions</a>`;
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
 ${active?`<div class="catchform"><input id="catchSpecies" placeholder="Species e.g. Walleye"><div class="formrow"><input id="catchSize" type="number" min="0" step="0.1" placeholder="Length cm"><select id="catchDisposition"><option>Released</option><option>Kept</option></select></div><textarea id="catchNotes" placeholder="Catch notes (optional)"></textarea><label class="checkline"><input id="catchLocation" type="checkbox"> Save current catch location</label><button id="addCatch">+ Add Catch</button></div>
 <textarea id="tripNotes" class="tripnotes" placeholder="Trip notes">${esc(t.notes||"")}</textarea><button id="saveTripNotes" class="secondaryAction">Save Trip Notes</button><button id="endTrip" class="endTrip">End Fishing Trip</button>`:""}
 `;
 $("tripSheet").classList.remove("hidden");
 document.querySelectorAll("[data-delcatch]").forEach(b=>b.onclick=()=>{t.catches=t.catches.filter(c=>c.id!==Number(b.dataset.delcatch));saveTrips();openTrip(t.id)});
 if(active){
  $("addCatch").onclick=()=>addCatch(t.id);$("saveTripNotes").onclick=()=>{t.notes=$("tripNotes").value;saveTrips()};
  $("endTrip").onclick=()=>{t.notes=$("tripNotes").value;t.ended=new Date().toISOString();saveTrips();openTrip(t.id)};
 }
}
function addCatch(id){
 const t=trips.find(x=>x.id===id),species=$("catchSpecies").value.trim();if(!species)return alert("Enter the fish species.");
 const finish=(loc)=>{t.catches.unshift({id:Date.now(),species,size:$("catchSize").value,disposition:$("catchDisposition").value,notes:$("catchNotes").value.trim(),time:new Date().toISOString(),location:loc});saveTrips();openTrip(id)};
 if($("catchLocation").checked&&navigator.geolocation)navigator.geolocation.getCurrentPosition(p=>finish({lat:p.coords.latitude,lon:p.coords.longitude}),()=>finish(null),{timeout:8000});else finish(null);
}
function renderTrips(){
 $("listTitle").textContent="My Fishing Trips";$("count").textContent=`${trips.length} trips`;markerLayer.clearLayers();
 $("results").innerHTML=trips.length?trips.map(t=>`<article class="record tripcard" data-trip="${t.id}"><div class="topline"><div><h4>${esc(t.lakeName)}</h4><div class="species">${t.ended?"Completed":"Active trip"}</div></div><span class="pill">${t.catches.length} catch${t.catches.length===1?"":"es"}</span></div><div class="meta"><span>🎣 ${new Date(t.started).toLocaleDateString("en-CA")}</span>${t.fmz?`<span>🗺️ FMZ ${t.fmz}</span>`:""}</div></article>`).join(""):`<div class="record empty">No fishing trips yet. Open a lake and tap “Start Fishing Trip.”</div>`;
 document.querySelectorAll("[data-trip]").forEach(e=>e.onclick=()=>openTrip(Number(e.dataset.trip)));
}
function locate(after){
 const nativeLoc=nativeBridge("requestLocation");
 if(!nativeLoc&&!navigator.geolocation)return toast("This device cannot share a location. Use the search box to find a lake by name.");
 $("count").textContent="Finding your location…";

 if(nativeLoc){
  window.__nativeLocationResult=r=>{
   window.__nativeLocationResult=null;
   if(r&&r.ok)return onLocated({coords:{latitude:r.lat,longitude:r.lon}});
   onLocateFailed(r&&r.reason==="denied");
  };
  nativeLoc.postMessage({});
  return;
 }

 navigator.geolocation.getCurrentPosition(onLocated,()=>onLocateFailed(true),{enableHighAccuracy:true,timeout:10000});

 function onLocated(p){
  userLoc=[p.coords.latitude,p.coords.longitude];
  if(mapAvailable){
   if(userMarker)map.removeLayer(userMarker);
   userMarker=L.marker(userLoc).addTo(map).bindPopup("Your location");
   map.setView(userLoc,8);
  }
  if(after)after();else apply();
 }
 function onLocateFailed(denied){
  $("count").textContent="Location unavailable";
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
 const latest=Math.max(...rows.map(r=>Number(r.Stocking_Year)||0));
 let score=Math.max(0,40-(km/5));                       // distance, max ~40
 score+=Math.max(0,30-((latest-yr)*7));                 // recency, max 30
 score+=Math.min(20,Math.log10(Math.max(1,qty))*5);     // stocking volume, max 20
 if(hasNearbyAccess(l))score+=7;
 if(l.fmz)score+=3;
 return Math.round(score);
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
  box.innerHTML=alerts.slice(0,5).map(f=>{const p=f.properties||{};return `<div class="weatherAlert"><b>⚠ ${esc(p.alert_name_en||p.alert_short_name_en||"Weather alert")}</b><span>${esc(p.feature_name_en||p.province||"Lake area")}</span>${p.alert_type?`<span>${esc(p.alert_type)}</span>`:""}</div>`}).join("");
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
 const go=()=>{
  const radius=Number($("findRadius").value)||50,sp=$("findSpecies").value,yr=$("findYear").value,min=Number($("findMinimum").value)||0,
    lname=$("findLake").value.trim().toLowerCase(),sort=$("findSort").value,needAccess=$("findAccess").checked;
  const execute=()=>{
   currentView="findfish";
   shown=lakes.filter(l=>{
    const km=distance(userLoc[0],userLoc[1],l.lat,l.lon);if(km>radius)return false;
    if(lname&&!l.name.toLowerCase().includes(lname))return false;
    const relevant=l.records.filter(r=>(!sp||r.Species===sp)&&(!yr||String(r.Stocking_Year)===yr));if(!relevant.length)return false;
    const qty=relevant.reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0);if(qty<min)return false;
    if(needAccess&&!hasNearbyAccess(l))return false;
    l._findQty=qty;l._findKm=km;l._findYear=Math.max(...relevant.map(r=>Number(r.Stocking_Year)||0));return true;
   });
   shown.forEach(l=>l._bestScore=bestMatchScore(l));
   if(sort==="best")shown.sort((a,b)=>b._bestScore-a._bestScore||a._findKm-b._findKm);
   if(sort==="closest")shown.sort((a,b)=>a._findKm-b._findKm);
   if(sort==="recent")shown.sort((a,b)=>b._findYear-a._findYear||a._findKm-b._findKm);
   if(sort==="quantity")shown.sort((a,b)=>b._findQty-a._findQty||a._findKm-b._findKm);
   $("listTitle").textContent=`Find Fish • within ${radius} km`;$("count").textContent=lakeCount(shown.length);
   renderFindResults(sp,yr);$("findPanel").classList.remove("open");
  };
  if(needAccess&&!accessLoaded)loadAccess().then(execute);else execute();
 };
 if(!userLoc)locate(go);else go();
}
function renderFindResults(sp,yr){
 $("count").textContent=lakeCount(shown.length);
 $("results").innerHTML=shown.slice(0,250).map((l,i)=>{
  const rs=ruleSummaryForResult(l,sp);
  const access=hasNearbyAccess(l);
  return `<article class="record finder2" data-i="${i}">
   <div class="finderTop"><div><div class="matchBadge">★ ${l._bestScore||0} Best Match</div><h4>${esc(l.name)}</h4><div class="species">${esc(sp||l.species.join(" • "))}</div></div><span class="distancebadge">${l._findKm.toFixed(1)} km</span></div>
   <div class="heroStock"><div><small>${t("matchingStocked")}</small><b>${num(l._findQty)}</b></div><div><small>${t("mostRecent")}</small><b>${l._findYear||"—"}</b></div></div>
   <div class="rulePreview ${rs.kind}"><b>${esc(rs.label)}</b><span>${esc(rs.detail)}</span></div>
   <div class="featureRow"><span>FMZ ${l.fmz||"—"}</span>${access?`<span>🚤 Access ≤5 km</span>`:""}${l.observedSpecies&&l.observedSpecies.length?`<span>Species data</span>`:""}<span>🌊 Depth layer</span><span>🌤️ Weather</span></div>
   <button class="viewLakeBtn">${t("viewLake")}</button>
  </article>`;
 }).join("")||`<div class="record empty">No stocked lakes match this search. Try increasing the distance or removing a filter.</div>`;
 document.querySelectorAll(".record[data-i]").forEach(el=>el.onclick=()=>{const l=shown[+el.dataset.i];map.setView([l.lat,l.lon],11);detail(l)});
 markerLayer.clearLayers();shown.slice(0,400).forEach(l=>L.circleMarker([l.lat,l.lon],{radius:8,color:"#13263C",weight:2,fillColor:"#C4941F",fillOpacity:.92}).addTo(markerLayer).bindPopup(`<b>${esc(l.name)}</b><br>${l._findKm.toFixed(1)} km away<br>${num(l._findQty)} fish stocked`));
}
function recentNearMe(){
 const run=()=>{
  currentView="recentnear";$("search").value="";$("species").value="";$("year").value="";$("radius").value="100";
  shown=[...lakes].filter(l=>distance(userLoc[0],userLoc[1],l.lat,l.lon)<=100)
    .sort((a,b)=>b.latestYear-a.latestYear || distance(userLoc[0],userLoc[1],a.lat,a.lon)-distance(userLoc[0],userLoc[1],b.lat,b.lon));
  $("listTitle").textContent="Recently stocked within 100 km";
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
  const r=$("nearRadius");if(r)$("radius").value=r.value;
  if(!userLoc)locate(apply);
 }
 apply();
}

function syncTabs(){
 const map={recentnear:"near",findfish:"findfish"};
 setView(map[currentView]||currentView);
}
const nr=$("nearRadius");if(nr)nr.onchange=()=>{$("radius").value=nr.value;if(!userLoc)locate(apply);else apply()};
const nl=$("nearLocate");if(nl)nl.onclick=()=>locate(apply);
const fs2=$("favSearch");if(fs2)fs2.oninput=()=>{clearTimeout(fs2._t);fs2._t=setTimeout(apply,200)};
$("showAccess").onchange=()=>{$("showAccess").checked?loadAccess():renderAccess()};
$("showFMZ").onchange=()=>{$("showFMZ").checked?loadFMZ(true):renderFMZ()};
$("showDepth").onchange=renderDepth;
$("searchBtn").onclick=apply;
$("search").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();$("search").blur();apply()}};
$("search").oninput=()=>{clearTimeout($("search")._t);$("search")._t=setTimeout(apply,240)};$("species").onchange=apply;$("year").onchange=apply;
$("radius").onchange=()=>{if($("radius").value&&!userLoc)locate(apply);else apply()};
$("clearFilters").onclick=()=>{$("search").value="";$("species").value="";$("year").value="";$("radius").value="";apply()};


$("closeFind").onclick=()=>{$("findPanel").classList.remove("open");setView("explore")};
$("runFind").onclick=runFindFish;
$("recentNearBtn").onclick=recentNearMe;
$("recentBtn").onclick=()=>{$("search").value="";$("species").value="";$("year").value="";$("radius").value="";currentView="explore";shown=[...lakes].sort((a,b)=>b.latestYear-a.latestYear);render()};
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
 setLanguage(appLang);wireShell();
});
