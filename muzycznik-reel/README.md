# Muzycznik Artyziaka — rolka produktowa

Pionowy film produktowy: 1080 × 1920, 30 fps, 18 sekund.

Materiały: oryginalna okładka i strony 02–06 dostarczone przez użytkownika. Kolory według brandbooka Artyz: #AFD117, #143134, #F4C1E9. Dodatkowe napisy: Montserrat (zamiennik Transforma, której pliki nie są dostępne). Licencja fontu: public/Montserrat-OFL.txt.

## Praca nad filmem

```sh
cd /workspace/123/muzycznik-reel
npm run dev
```

Główna kompozycja: MuzycznikReel. Ujęcia Opening, Inside i Finale mają osobne kompozycje w folderze Scenes. Wszystkie ruchy są sterowane klatkami Remotion.

## Eksport

```sh
npx remotion render src/index.ts MuzycznikReel out/Muzycznik-Artyziaka-v3.mp4 --browser-executable=/usr/bin/chromium --codec=h264 --crf=18 --concurrency=3
```

Film jest bez dźwięku, gotowy do dodania muzyki w Instagramie lub TikToku. Na ciemnozielonym tyle produktu umieszczono białe logo Artyz zgodnie z prośbą użytkownika. Animacja kartek wykorzystuje wyłącznie strony 02–06 z pełnego PDF-u; dalsza treść nie jest pokazywana. Pod koniec przyspieszają neutralne arkusze bez ujawniania dodatkowej treści.

Walidacja: npm run lint, render pełnych 540 klatek, przegląd kluczowych kadrów i sprawdzenie parametrów eksportu ffprobe.

## Wersja 3 — fizyczne otwieranie i zamykanie
Ujęcie środka zaczyna się zamkniętą okładką, która odsłania strony 02–03. Dalsze fizyczne kartki obracają stronę 03 na 04 (odsłaniając 05), a następnie 05 na 06. Obie strony kartki pozostają w jednej warstwie 3D bez filtrów lub przezroczystości na rodzicu. Treść bazowej strony znika przy szybkiej sekwencji: obraca się seria neutralnych arkuszy, a następnie okładka zamyka książkę.
Sprawdzono 20 kadrów wokół otwarcia, zakończeń obrotu stron, szybkiego przewijania i zamknięcia.
