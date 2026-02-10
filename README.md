> [!IMPORTANT]
> **Aplikace nestahuje data z https://www.alza.cz/Services/RestService.svc/v2/products**
>
> Tento endpoint běží na alze za cloudflare firewallem a obcházení by znamenalo několikavteřinové zpoždění pro jednoduchý požadavek. Pro jednoduchost je v souboru `src/lib/service/production/msw/product-mock-server.ts` spuštěn mockupový server, který zachycuje požadavky na tuto adresu a vrací předem stažená data, staticky uložená ve stejném adresáři.

<br/>

## Vercel

Aplikace běží na adrese https://alza-nu.vercel.app.

<br/>

##  Nástroje


#### Spuštění lokálního serveru
Aplikace bude dostupná na http://localhost:3000

```bash
pnpm dev 
```
<br/>

#### Build a spuštění aplikace
Aplikace bude dostupná na http://localhost:3000
```bash
pnpm build
pnpm start
```
<br/>

#### Storybook
Nástroj pro vývoj a testování React komponent.

```bash
pnpm storybook
```

<br/>

## Mockupové a produkční prostředí

Nastavením proměnné `INTERFACE` v libovolném platném `.env` souboru (a restartováním vývojového serveru) lze přepínat rozhraní, které aplikace používá.

Nabývat může těchto tří hodnot:

- `mockup` - aplikace generuje pseudo-náhodná data
- `productin` - aplikace stahuje produkční data
<br/>

- `development` - slouží pro modulární vývoj produkčního rozhraní. Používá všechny dostupné funkcionality produkčního prostředí a, jako fallback, používá mockupové rozhraní pro zatím nevyvinuté.

<br/>

> [!NOTE] 
> `.env` soubory s touto proměnnou se neverzují. Pokud proměnná `INTERFACE` není definovaná, výchozí hodnotou je `production`.

<br/>

## Git

### Větve

- `dev` slouží k vývoji, obsahuje kompletní historii commitů
- `preview` slouží k testování před zveřejněním nové verze. Každou verzi reprezentuje 1 commit.
- `main` odpovídá verzi na adrese https://alza-nu.vercel.app  (kopíruje preview)


<br/>
<br/>
<br/>

[![HitCount](https://hits.dwyl.com/lejdar-dev/alza.svg?style=flat-square&show=unique)](http://hits.dwyl.com/lejdar-dev/alza)
