# Navigere

I denne oppgaven skal vi se på hvordan vi kan navigerer mellom flere skjermer/komponenter.

## Oppsett
Oppgaven har allerede en reduser med 2 todo som initState. Det skal ikke være behov for endringer på reduseren.
I tillegg så ligger det inne et komponent som lister ut alle todoene.

```
function initState(){
  return {todos:[
      {name:'Ferie', detail: 'Kjøp flybillett til Malaga og bestill hotell'},
      {name:'Ting til ferien', detail: 'Kjøp solkrem'}
    ]};
}
```

# Din oppgaven

## Del 1
Lag en ny komponent som viser teksten "Hello Todo". Kall den gjerne TodoDetail (hint, hint).
Når en bruker trykker på en todo på hjemmeskjermen så skal de sendes til denne kompononenten.


## Del 2
Bytt ut teksten "Hello Todo" med teksten som ligger inne på todo.detail  


## Del 3
Vis teksten fra todo.name i navigasjonsbaren.

## Extra
style navigasjonsbaren
