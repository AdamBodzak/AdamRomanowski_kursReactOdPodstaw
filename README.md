# Kurs React od podstaw – w ramach kursu stworzyłem aplikację do zarządzania własnymi wiadomościami z twitter-a, przydatnymi artykułami i własnymi notatkami

### Ostateczna wersja aplikacji dostępna jest pod adresem https://adam-romanowski-kurs-react-od-podstaw.vercel.app/

***
**Własne funkcjonalności stworzone po za kursem:**

1. dodanie stanu początkowego
2. dodanie przycisku usuwającego dany wpis
3. możliwość przesuwania elementów w górę i w dół
4. możliwość edycji elementów
5. dodałem polyfill w celu obsługi przez przeglądarki IE11
6. zmiana w dziale Header sposobu rozmieszczenia elementów z display: grid na flex (IE11 nie obsługuje grid-a)
7. dodanie widoku mobilnego
8. zmiana grafiki przycisków na pliki svg wraz z dodaniem animacji

***
Jest to prawie 5 godzinny kurs pod nazwą **React od podstaw** stworzony przez **Adam Romański** dostępny na platformie eduweb.pl pod adresem https://eduweb.pl/programowanie-i-www/reactjs/react-od-podstaw

Skrócony zakres zagadnień poruszonych w ramach kursu:

1. komponenty funkcyjne.
2. JSX (syntactic sugar).
3. props-y i przekazywanie danych z rodzica do dziecka i z powrotem.
4. PropType walidacja zmiennych wraz z domyślnymi wartościami.
5. komponenty class-owe.
6. stan komponentu i jego modyfikacja.
7. React Router wraz z funkcją Switch.
8. NavLink i jego funkcje.
9. Context API.
9. Deployment aplikacji na serwer.

***

Funkcjonalności stworzone w ramach kursu:
1. wyświetlanie danych w aplikacji w zależności od typu danych (twitter, artykuł i notatka).
2. stworzenie przycisku "new item" do otwierania formularza dodawania treści.
3. stworzenie formularza w celu dodawania nowych treści do aplikacji.
    * prosta walidacja wymaganych pól
    * wyświetlanie wymaganych pól w zależności od typu dodawanej treści (twitter, artykuł i notatka)
    * dodanie przycisku zamykania formularz
    * dodanie przycisku "add new item" do formularza
