# Muzycznik Artyziaka — rolka produktowa

Film pionowy: 1080 × 1920, 30 fps, 18 sekund, bez dźwięku.

## Aktualny przebieg

Obrót zamkniętej książeczki → otwarcie od okładki → czytelny podgląd stron 02–06 → bardzo szybkie przewijanie rzeczywistych, zadrukowanych kartek w wąskim wachlarzu → zamknięcie okładki.

Szybkie przewijanie wykorzystuje tekstury stron 07–30 z oryginalnego PDF-u. W około sekundę przewija się 18 kartek, z malejącymi odstępami. Rozwarcie ograniczono do 64° zamiast pełnego obrotu 180°. Rozmycie wyłącznie na powierzchniach stron sprawia, że widoczne są kolory i zadruk, ale nie czytelny tekst. Tylna okładka ma białe logo Artyz; logotypy w kadrach nie mają tła. Kształty i paleta pochodzą z brandbooka.

Dodatkowe napisy: Montserrat, zamiennik nieposiadanych fontów Transforma zaakceptowany przez użytkownika. Licencja w public/Montserrat-OFL.txt.

## Praca nad filmem

```sh
cd /workspace/123/muzycznik-reel
npm run dev
```

Kompozycja główna: MuzycznikReel. Ujęcia Opening, Inside i Finale mają osobne kompozycje w folderze Scenes. Obie strony każdej kartki poruszają się razem. Nie nakładać filtrów ani opacity na rodzica warstw 3D — spłaszcza to powierzchnie i psuje obrót. Rozmycie znajduje się na poszczególnych obrazach powierzchni.

## Eksport

```sh
npx remotion render src/index.ts MuzycznikReel out/Muzycznik-Artyziaka-v4.mp4 --browser-executable=/usr/bin/chromium --codec=h264 --crf=18 --concurrency=3
```

Walidacja: npm run lint, przegląd 16 kadrów szybkiego przewijania i zamknięcia, pełny render 540 klatek oraz kontrola parametrów eksportu ffprobe.
