
# Allenamenti PWA — Starter (GitHub Pages + PWABuilder)

Questo pacchetto è pronto all'uso per pubblicare la tua PWA su **GitHub Pages** e poi creare un **APK Android (TWA)** con **PWABuilder**.

## Struttura
```
/index.html
/manifest.webmanifest
/sw.js
/icons/icon-192.png
/icons/icon-512.png
```

## Passi rapidi

### A) Pubblica su GitHub Pages
1. Crea un repository pubblico su GitHub (es. `allenamenti-pwa`).
2. Carica tutti i file di questa cartella nel repo.
3. Vai su **Settings → Pages**: Source = `main`, folder = `/ (root)` → **Save**.
4. Apri l’URL `https://<tuo-username>.github.io/<repo>/` e verifica che funzioni anche **offline** (dopo il primo caricamento).

### B) Genera Android package con PWABuilder
1. Vai su **https://www.pwabuilder.com**.
2. Incolla l’URL GitHub Pages della tua PWA.
3. Risolvi eventuali warning (icone maskable → PWABuilder può rigenerarle per te).
4. Clicca **Package for Android** → scarica lo zip del progetto Android.
5. Apri il progetto con **Android Studio** → **Build APK(s)** o **Run**.

> Per Play Store servirà configurare `assetlinks.json` sul dominio. Per **sideload/debug** non è necessario.

---

### Nota
- Questo `index.html` è già collegato a un `manifest.webmanifest` **statico** e registra **sw.js** statico (meglio per PWABuilder/Lighthouse).
- La tua app funziona **offline** grazie al Service Worker e salva tutto in `localStorage`.
