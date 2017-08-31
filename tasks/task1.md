# Vise holdeplasser på kartet

## Hensikt

Ta i bruk Ruter APIet og visualisere data.

## Hente ut data

Ettersom Ruter APIet bruker UTM33 format for å beskrive lokasjon på kartet, har vi inklurdert geoutils.js for å hjelpe dere konvertere fra UTM33 til long/lat og omvendt ved behov (psssst se på WorkshopXYToLatLon og WorkshopLatLonToXY). Etter at man har hentet ut dataen og lagret denne i redux storen så vil vi at dere skal visualisere denne dataen i form av markers på kartet.

Som dere ser har vi allrede lagt litt til rette ved å sette opp redux etc for dere, så det vil bare være nødvendig å implementere selve kallet, lagre dette i storen og vise det i form av markører på kartet.

Ting å huske på:
- Oppdatere regionen med nye pins i det man beveger på seg
- Sørge for å gjøre et nytt kall for å hente holdeplasser dit man beveger seg på kartet
