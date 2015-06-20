# flows

## register

1. megadja a telefonszamat
2. megadja a usernevet
3. check hogy valid (tehat nem foglaltak)
4. server elkuldi az sms-t
5. megkapja a user, ha helyesen visszakuldi
6. akkor eltarolni a user-t a db-ben es belepes, kap egy tokent hitelistesre/azonositasra, device token notification-hoz
7. ha nem akkor nem taroljuk

## login

ugyanaz mint a register csak mar meglevo user lep be, de ugyanazzal a mechanizmussal

## create event

1. appba osszeallitja
  - adatok szolgaltatasa az appnak (jatekokrol, userekrol)
  - lesznek inviteolt fogadok, meg jatekosok ugye
2. server megkapja egy json-ban
3. eltarolja, figyeli a veget, kikuldi a notificationoket

## close event

1. vege lett, errol is kuldhet notificationt, vagy manualisan majd
2. megkapja a server az eredmenyt (json vagy foto)
3. fotot elemzi ha az van
4. lezarja az esemenyt
5. mindenki megkapja amit nyert/vesztett
6. kuldd errol is notificationt

## fogadas

1. megnezek egy esemenyt
2. fogadok valamire
3. server kap egy json-t
4. update-eli azt az eventet a fogadassal
5. leveszi azt a penzt a usertol persze stb.

## navigalas az appban

- minden szepen menjen json-ban http keresekre
- gondolom a user tokene mindig menjen a keresekkel azonositasra
- friend jeloles
- kesobb majd chat meg stat