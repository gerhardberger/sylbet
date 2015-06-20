# databases

## users

- **phone:** *egyedi*, ez lenne az id-ja
- **name:** lehet ez is egyedi, most nem vagom
- **image:** profilkep (URL), majd el kell tarolni ugyebar
- **friends:** [user]
- *etc*

## events

- **id:** kell neki valami egyedi azonosito
- **date:** mikor lesz, de majd lesz manualis befejezes is, hogy ha pl elobb befejeztek akkor ne kelljen megvarni mig befejezodik
- **organizer:** egy user aki szervezte az esemenyt, kb mindig benn van az egyik csapatban szerintem
- **game:** amit jatszanak
- **platform:** platform amin jatszanak, szerintem felesleges mert mi van ha valaki mason van, meg minek amugy is
- **closed:** lezarodott-e
- **result:** ha mar closed akkor mi lett az eredmeny, akar foto is rola
- **credit:** egy adott kreditmennyiseg amennyit mindenkinek be kell fizteni aki reszt akar venni, es a vegen a gyoztes csapat kapja meg
- **team:** csapat (ugye ketto kell majd), ennek felepitese:
  - **gameTeam:** jatekban a csapatuk
  - **members:** csapattagok (akik mar elfogadtak a meghivast)
  - **invites:** meghivott csapattagok
- *etc*

## games

- *szokasos adatok*
- **teams:** a jatek csapatai, felepitese:
  - **name:** csapatnev
  - **image:** logo
- *etc*