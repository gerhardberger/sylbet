# overview

## general

- hosting: **[heroku](https://www.heroku.com/)**
- http framework: **[hapi](http://hapijs.com)**
- database: **[leveldb](http://leveldb.org)**
- authentication: **[twilio](https://www.twilio.com/authy)**
- ocr: **[tesseract](https://www.npmjs.com/package/node-tesseract)**

## server

minel jobban szetszedni modulokra, hogy minel szebb es atlathatobb legyen, es igy a kozponti `server.js` is szep rovid lesz. amihez lehet modult hasznalni npm-rol. segitseg: [link](https://iojs.org/api/modules.html). ilyesmikre szetszedni:
- auth/login
- db
- ocr.

## db

felepiteserol a sajat dokjaban. ehhez nagyon sok modul van. sokat is kell hasznalni. az alap: [level](https://github.com/level/level). a kulcsvalasztas/keszites a lenyeg benne, hogy jol, konnyen lehessen benne keresni. harom fo resz kellene szerintem:
- users
- games
- events.

## apn

ez kell hogy lehessen notificationoket kuldeni ios-re. ezt tobb helyen is kell majd az app mukodeseben. ehhez modul: [link](https://www.npmjs.com/package/apn).

## auth

ezt nem nagyon vagom hogy kell majd. szerintem ezzel a twilioval meg lehet. itt van egy [leiras](https://www.twilio.com/blog/2013/08/verify-phone-numbers-with-node-js-using-twilio-sms-express-and-socket-io.html). ez valami olyasmi asszem.