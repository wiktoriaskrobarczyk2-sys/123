# CEN Wydminy — obozy zimowe, propozycja 01

Film pionowy 1080 × 1920, 30 fps, 25 sekund, bez ścieżki dźwiękowej.

Hasło: „Twój obóz. Nasze miejsce.” Odbiorcy: organizatorzy obozów zimowych, kluby i grupy treningowe.

## Wymagania użytkownika

- Korzystać z materiałów w CEN WYDMINY oraz z informacji wklejonych bezpośrednio w rozmowie. Nie łączyć się ze stroną ośrodka.
- Kolory podane przez użytkownika: #021C41 i #1C83C9. Dodatkowo biały tekst dla czytelności.
- Zachować temat obozów zimowych. Informacje o zielonych szkołach są dodatkowym źródłem danych o infrastrukturze, nie zmianą celu filmu.

## Źródła i przygotowanie

Materiały użytkownika w /workspace/123/CEN WYDMINY, commit dd59b19374c64deb7a6a4d6b9d2cf4a55d9bb8a3. Ujęcia zimowe są autentyczne. Oryginalne pliki pozostają bez zmian.

Dane 150 miejsc noclegowych, hali 25 × 17 m oraz całodziennego wyżywienia pochodzą z treści przekazanych przez użytkownika. W filmie nie podaje się cen, dostępności konkretnych terminów ani atrakcji wodnych jako oferty zimowej.

Przygotowane klipy w public/cen/ to pionowe H.264 SDR BT.709, 30 fps. Nagrania iPhone HDR HLG zostały przekonwertowane do SDR. Pierwszy i końcowy klip pokazują zimowy widok ośrodka; ostatni jest odtwarzany spokojniej. Kadry pokoi i sauny wykorzystują fotografie użytkownika.

CEN ma oddzielne sceny i paletę; nie korzysta z identyfikacji Artyz. Oznaczenie CEN/WYDMINY jest tekstowe. Czcionka napisów: Montserrat. Adres strony jest wyłącznie tekstem kontaktowym w końcowym kadrze.

## Scenariusz

| Czas | Ujęcie | Główny napis |
|---|---|---|
| 0–3,2 s | Zimowy ośrodek | Twój obóz. Nasze miejsce. / Trening, regeneracja i integracja w jednym miejscu. |
| 3,2–6,6 s | Hala sportowa 25 × 17 m | Trening niezależnie od pogody. |
| 6,6–9,3 s | Ścianka wspinaczkowa | Sięgaj wyżej. |
| 9,3–12 s | Ring bokserski | Przestrzeń na Twój trening. |
| 12–15 s | Noclegi dla grup | 150 miejsc noclegowych. |
| 15–18 s | Całodzienne wyżywienie | Śniadanie. Obiad. Kolacja. |
| 18–21 s | Sauna | Czas na regenerację. |
| 21–25 s | Zimowy ośrodek | Zorganizuj obóz zimowy w CEN Wydminy. / Zapytaj o ofertę dla grup / osrodek-mazury.com.pl |

## Edycja i eksport

Projekt: /workspace/123/muzycznik-reel. Kompozycja CenWinterCamps; osobne sceny w folderze CEN-Wydminy/CEN-scenes. Kolory w src/cen/palette.ts.

```sh
npm run dev
npm run lint
npx remotion render src/index.ts CenWinterCamps out/CEN-Wydminy-obozy-zimowe-v1.mp4 --browser-executable=/usr/bin/chromium --codec=h264 --crf=19 --concurrency=3
```

Sprawdzono kadry ośmiu scen, orientację i SDR, liczbę klatek przygotowanych klipów, poprawne dekodowanie wideo oraz napisy. Wynik powinien zawierać 750 klatek i trwać 25 sekund.

## Solarium — już otwarte

Osobna kompozycja `CenSolarium`: 15 s, 1080×1920, 30 fps, bez ścieżki audio,
z lokalną czcionką Montserrat i kolorami #021C41 / #1C83C9.
Zdjęcia pochodzą wyłącznie z folderu `CEN WYDMINY SOLARIUM`.
Nie pobierano informacji ze strony internetowej. Treść: otwarcie solarium,
prezentacja urządzenia i kosmetyków, zaproszenie do CEN Wydminy.
Nie dodawano cen, godzin ani twierdzeń o korzyściach zdrowotnych.

```bash
npx remotion render src/index.ts CenSolarium out/CEN-Wydminy-solarium-otwarte-v1.mp4 --browser-executable=/usr/bin/chromium --codec=h264 --crf=19 --concurrency=3
```

Plik do pobrania: `../cen-rolka-gotowa/CEN-Wydminy-solarium-otwarte-v1.mp4`.
Sceny są osobnymi kompozycjami w folderze `CEN-Solarium`.
