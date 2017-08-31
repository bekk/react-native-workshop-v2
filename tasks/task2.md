# Navigere
I denne oppgaven skal vi se på hvordan vi kan legge til knapper til navigasjonsbaren.

## Oppsett
Oppgaven baserer seg på task1. Det skal fremdeles ikke være behov for å endre på reduseren, men her vil du nok ha behov for addTodo  fra action/Actions.js

```
export const addTodo = (todo) => {
  return{
      type: Constants.ADD_TODO,
      todo
  }
}
```

# Din oppgaven

## Del 1
Lag en ny komponent som viser teksten "Hello new Todo". Kall den gjerne AddTodo (hint, hint).
Legg til en knapp på navigasjonsbaren som skal lede til denne komponenten.


## Del 2
Endre innholdet i AddTodo til 2 tekstfelter, kalt name og detail.

## Del 3
Legg til en ny knapp i navigasjonsbaren i AddTodo. Når en bruker trykker på denne så skal en ny todo opprettes basert på innholdet
i tekstefeltene. Denne knappen burde kun være aktiv når begge tekstfeltene er fylt ut.

## Extra
style navigasjonsbaren
