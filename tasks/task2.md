# Vis din posisjon på kartet

## Hensikt

Bli kjent med APIet for geolocation i React Native.

## Mock position

Når man bruker mobil-emulator for utviklingen vil posisjonen man får fra geolocation-APIet være helt på jordet. Du kan mocke din egen posisjon ved å følge følgende oppskrift:

iOS: https://stackoverflow.com/a/8175468

Android: I Android Studio velg `Tools -> Android -> Android Device Monitor -> Emulator Control`. Velg latitude og longitude og trykk `send`.

## Oppgave

1) Opprett property for `latitude` og `longitude` i staten til [App.js](../src/App.js)
2) Bruk metodene til [navigator.geolocation](http://facebook.github.io/react-native/docs/geolocation.html) for å hente ut devicen sin posisjon når komponenten mounter (kan bruke `componentDidMount()`)
3) Oppdater `latitude` og `longitude` i komponentens state til å inneholde devicens posisjon
4) Bruk denne informasjonen til å legge på en [marker](https://github.com/airbnb/react-native-maps#rendering-a-list-of-markers-on-a-map) på ditt kart som indikerer devicens posisjon

