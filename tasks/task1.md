# Oppsett av React Native Maps

## Målet med oppgaven

Bruke `react-native link` til å koble npm biblioteket `react-native-maps` i din applikasjon og vise et kart på skjermen.

## Intro

[react-native-maps](https://github.com/airbnb/react-native-maps) blir anbefalt å bruke for Mapview i dokumentasjonen til React Native siden de selv ikke tilbyr en komponent for kartvisning.

## Oppgave

1) Installer `react-native-maps` ved å kjøre `npm install --save react-native-maps`
2) Koble biblioteket til din app ved å kjøre `react-native link`
3) Se hvilke endringer som automagisk blir gjort i din kodebase av `react-native link` ved å skrive `git status` i konsollen
4) Opprett en `MapView`-komponent i [App.js](../src/App.js) som beskrevet i [dokumentasjonen](https://github.com/airbnb/react-native-maps) for å rendre et kart i din app
5) Start appen med `react-native run-ios` eller `react-native run-android` (hvis du utvikler mot Android trenger du en Google Maps API key som du kan få ved å si ifra til en av oss)
