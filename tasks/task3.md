# Styling

## Din oppgave

### Del 1
Vi skal starte med å lage en verktøylinje. Verktøylinjen skal ha en knapp til høyre, en knapp til venstre, og en tittel i senter.

Som du ser vises tekstene vertikalt, en etter en. For at det skal ligne mer på verktøylinje skal tekstene vises horisontalt. Tittelen skal være fleksibel i bredden avhengig av enhetens bredde, mens knappene skal ha en fast bredde. Legg inn ønsket bakgrunnsfarge på verktøylinjen (På bildet under har vi brukt `#4d4d4d`)

![screenshot_1](../screenshots/screenshot_1.png)

Prøv gjerne å bytte orientering på simulatoren (`Command + høyre/venstre piltast`), og du vil se at tittelen tilpasser seg til bredden.


### Del 2
Det neste vi skal legge til er innhold etter verktøylinjen. Utvid `render` metoden med følgende komponenter.

```
render() {
    return (
        <View style={ styles.mainContainer }>
            <View style={ styles.toolbar }>
                ...
            </View>
            <View style={ styles.content }>
                <Text>This is the content</Text>
            </View>
        </View>
    );
}
```

Vi har nå lagt til en ytre container, som inneholder en verktøylinje og innholdet som består av en tekst. Det neste vi kan gjøre er å legge til en bakgrunnsfarge (`red`) på innholdet. Du vil nå se at innholdet ikke fyller hele skjermen.

![screenshot_2](../screenshots/screenshot_2.png)

Dette er ikke bra nok for en utvikler som deg, så det neste du skal gjøre er å få innholdet til å fylle hele skjermen uavhengig av enhet.

### Del 3
Det neste vi skal gjøre er å legge inn et mer spennende innhold. Mer spesifikt skal vi lage et sosialt nettverk for hunder, iallefall deler av et. Under ser du hvordan et innlegg skal se ut etter at du er ferdig.

![screenshot_3](../screenshots/screenshot_3.png)

En ting først.. bytt ut den røde bakgrunnsfargen med en hvitt.

Vi har laget et komponent (`DogPost`) for et innlegg, din jobb er å style det slik at det ser ut som på bildet over. Start med å importere komponentet i toppen av `index.ios.js` (`import DogPost from './src/DogPost'`). Erstatt `<Text>This is the content</Text>` i render metoden med dette komponentet.

```
render() {
    return (
        <View style={ styles.mainContainer }>
            <View style={ styles.toolbar }>
                ...
            </View>
            <View style={ styles.content }>
                <DogPost />
            </View>
        </View>
    );
}
```

### Ekstra Oppgave
Hvis de forrige oppgavene var for enkle kan du utvide `DogPost` slik at vi kan ha nestede komponenter med forskjellige bakgrunnsfarge slik som på bildet under.

![screenshot_4](../screenshots/screenshot_4.png)
