> [!IMPORTANT]
> **Aplikace nestahuje živá data z https://www.alza.cz/Services/RestService.svc/v2/products**
>
> Tento endpoint běží na alze za cloudflare firewallem a obcházení by znamenalo několikavteřinové zpoždění pro jednoduchý požadavek. Pro jednoduchost je v souboru `src/lib/service/production/product-sw.ts` spuštěn mockupový server, který zachycuje požadavky na tuto adresu a vrací předem stažená data, staticky uložená ve stejném adresáři.

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

#### Build a spuštění aplikace
Aplikace bude dostupná na http://localhost:3000
```bash
pnpm build
pnpm start
```

#### Storybook
Nástroj pro vývoj a testování React komponent.

```bash
pnpm storybook
```

<br/>

## Git

### Větve

- `dev` slouží k vývoji a běží na mockupových datech 
- `preview` slouží k testování před zveřejněním nové verze a běží na produkčních datech
- `main` odpovídá verzi na adrese https://alza-nu.vercel.app



> [!NOTE]
> Při spuštění serveri `npm dev` nebo buildu `npm build` se spustí generátor souboru `tsconfig.gen.json`, který zajišťuje, že každá verze apliakce používá správné rozhraní (mockup / production). Pro testování produkčního rozhraní ve větvi `dev` stačí přepsat `.../mock/services.mock.ts` na `.../production/services.production.ts` v generovaném `tsconfig.gen.json`. (Soubor není verzovaný)

<br/>
<br/>
<br/>

[![HitCount](https://hits.dwyl.com/lejdar-dev/alza.svg?style=flat-square&show=unique)](http://hits.dwyl.com/lejdar-dev/alza)
