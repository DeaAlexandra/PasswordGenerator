# Salasanageneraattori

Salasanageneraattori on Windowsille tehty tyylikäs ja helppokäyttöinen sovellus vahvojen salasanojen luomiseen. Sovellus on toteutettu Electronilla ja Reactilla.

## Ominaisuudet

- Luo vahvoja salasanoja helposti
- Valitse pituus (8–40 merkkiä)
- Mukauta merkistö: isot ja pienet kirjaimet, numerot, erikoismerkit
- Huomaa että voit itse määritellä mitä erikoismerkkejä haluat käyttää
- Tumma ja vaalea teema
- Moderni, responsiivinen käyttöliittymä
- Kopioi salasana yhdellä napilla

## Asennus ja käyttö

1. **Lataa asennuspaketti** (tai zip-tiedosto) ja pura se haluamaasi kansioon.
2. Käynnistä sovellus tuplaklikkaamalla `Salasanageneraattori.exe`-tiedostoa.
3. Sovellus ei vaadi asennusta eikä internet-yhteyttä.

> **Huom:** Sovellus on testivaiheessa. Anna palautetta ja ilmoita mahdollisista bugeista!

## Kehittäjälle

Jos haluat ajaa sovellusta kehitystilassa:

1. Asenna riippuvuudet:
   ```bash
   npm install
   ```
2. Käynnistä React-kehityspalvelin:
   ```bash
   npm start
   ```
3. Käynnistä Electron:
   ```bash
   npm run electron
   ```
   (tai käytä omaa Electronin käynnistyskomentoasi)

## Tiedostorakenne

- `main.js` – Electronin pääprosessi
- `preload.js` – Turvallinen silta käyttöliittymän ja Electronin välillä
- `src/` – React-käyttöliittymä
- `public/` – Staattiset tiedostot (mm. ikonit)

## Kuvake

Sovelluksen kuvake: `Logo SG.ico` (Windows)

## Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä – katso LICENSE-tiedosto.
