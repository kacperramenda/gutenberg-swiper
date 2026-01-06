## Technologie
Wtyczka została wykonana w następującym stacku:
- Vite
- @wordpress/create-block
- SCSS
- Swiper.js

W nawiązaniu do naszej dzisiejszej rozmowy, w której mówiłem że nie miałem nigdy okazji implementować Vite postanowiłem użyć go do buildowania. Do stylowania użyłem SCSS wg konwencji nazewniczej BEM. Zdecydowałem się na bibliotekę Swiper.js ponieważ jest aktualnie najpopularniejszym rozwiązaniem tego typu, a zarazem oferuje nowoczesne technologie (brak JQuery) oraz modułową architekturę która pozwala na importowanie tylko tych elementów z których korzystamy co sprawia że wtyczka nie jest "ciężka". Kolejnym atutem dla swiper.js jest doskonała obsługa urządzeń mobilnych (np. gesty).

## Struktura slidera
Slajdy składają się wg założeń z następujących elementów:
- Zdjęcie (z media library)
- Nagłówek
- Opis
- Przycisk CTA z odnośnikiem

## Edycja slajdów w edytorze
- Dodawanie / usuwanie / sortowanie slajdów bezpośrednio w edytorze jest zrealizowane wg założeń.
- InnerBlocks (blok parent + child).

## Rendering
Blok jest renderowany statycznie (save), ponieważ treść slidera jest definiowana przez użytkownika w edytorze i nie wymaga przetwarzania po stronie serwera (PHP) przy ładowaniu strony. W połączeniu z biblioteką Swiper.js oferuje to bardzo dobrą wydajność.

## Frontend
- Dostępne są 2 rodzaje przejść, które użytkownik może wybrać w "InspectorControls" (Slide lub fade).
- Swiper zawiera domyślne strzałki oraz paginację Swiper.js (tylko zmienione kolory).
- Jest w pełni responsywny.

## InspectorControls
- Wybór automatycznego odtwarzania
- Czas wyświetlania slajdu (czas do przełączenia na kolejny slajd)
- Szybkość animacji
- Loop
- Wybór efektu przejścia

## Wydajność
Skrypty są ładowane tylko i wyłącznie w miejscach, gdzie blok jest renderowany, dzięki wykorzystaniu `viewScript`: `"file:../../build/view.js"` w `block.json` rodzica (kontenera).

## Instrukcja dodania slidera na stronę

1. Dodaj blok **Swiper slider**.
<img width="343" height="357" alt="image" src="https://github.com/user-attachments/assets/b300bb85-896d-46e0-a473-2226c379ef71" />

2. Dodaj dowolną ilość slajdów, uzupełnij ich treść oraz wybierz odpowiednią dla Ciebie konfigurację swipera w panelu po prawej stronie.
<img width="1913" height="1035" alt="image" src="https://github.com/user-attachments/assets/a5545274-eb6d-4f59-9cf2-8833c7d50625" />

3. Aby ustawić link do przycisku CTA, wejdź w edycję slajdu klikając na niego, następnie w menu po prawo w polu "Link odnośnika" podaj adres URL.
<img width="1915" height="1026" alt="image" src="https://github.com/user-attachments/assets/a26b598b-53e0-4745-b28e-3f4a583bd61c" />

4. Zapisz stronę.

5. Gotowe - w pełni funkcjonalny slider znajduje się na stronie.
<img width="1901" height="1025" alt="image" src="https://github.com/user-attachments/assets/2caaf6d6-e6e4-4c2f-a9e8-6eef9bcf6068" />
