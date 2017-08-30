# Vis din posisjon på kartet

## Hensikt

## Intro

## Oppgave

1) Opprett property for `latitude` og `longitude` i staten til [App.js](../src/App.js)
2) Bruk metodene til [navigator.geolocation](http://facebook.github.io/react-native/docs/geolocation.html) for å hente ut devicen sin posisjon når komponenten mounter (kan bruke `componentDidMount()`)
3) Oppdater `latitude` og `longitude` i komponentens state til å inneholde devicens posisjon
4) Bruk denne informasjonen til å legge på en [marker](https://github.com/airbnb/react-native-maps#rendering-a-list-of-markers-on-a-map) på ditt kart som indikerer devicens posisjon

## Ekstraoppgave

Dersom man klikker på markeren som indikerer devicens posisjon skal det komme opp en boble som viser latitude og longitude for markeren.
