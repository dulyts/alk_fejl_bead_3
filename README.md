# Alkalmazások fejlesztése dokumentáció

## Követelményanalízis
1. Követelmények összegyűjtése
	1. Funkcionális elvárások:
		* A felhasználok tudják feljegyezni hogy melyik napon mettől meddig dolgoztak.
		* Legyen lehetőségük módosítani az esetleges változásokat.
		* Tudják törölni a munkaóráikat.
		* Az adminisztrátoroknak legyen lehetőségük jováhagyni a felhasználók által ledolgozott órákat.
		* A főoldalon az alkalmazás rövid ismertetése található
		* A felhasználók a jogosultsági szintüktől függően csak adott gombokat láthatnak.
	2. Nem funkcionális elvárások:
		* Felhasználóbarát, ergonomikus elrendezés és kinézet.
		* Gyors működés.
		* Biztonságos működés: jelszavak kódolt tárolása, funkciókhoz való hozzáférés.
2. Használati modell
	1. Szerepkörök
		* felhasználók (munkaórák rögzítése/listázása/módosítása/törlése)
		* adminisztátorok (munkaórák jóváhagyása)
	2. Használati diagramm
	
	![Használati diagramm](docs/images/alk_fejl_image_01.png)

	3. Folyamatok pontos menete:
		- komment rögzítése:
			- munkaórák listázása
			- kommentek megjelenítése gomb-re kattintva feljönnek a kommentek
			- a szövegmezőbe a komment beírása
			- mentés gombal a komment elmentése
		
		

## Tervezés
1. Architektúra terv
	1. Oldaltérkép
		* Felhasználó
			* Főoldal
			* Munkaórák listázása
				* Munkaóra módosítása
				* Munkaóra törlése
				* Kommentek listázása
				    * Új komment létrehozása
			* Munkaóra létrehozása
			* 
	2. Végpontok
		* GET /munkaora.new: munkaóra rögzítés oldal
		* POST /munkaora.new: munkaóra adatok felküldése
		* GET /munkaora: munkaórák listázása oldal
		* GET /munkaora/:id : munkaóra módosítása oldal
		* POST /munkaora/:id : munkaóra módosított adatainak felküldése
		* GET /comment/:id : munkaóra kommentjeinek oldal

2. Felhasználóifelület-modell
	1. Oldalvázlat

		![oldalvazlat](docs/images/alk_fejl_image_03.jpg)

	2. Designterv
	
		![designterv](docs/images/alk_fejl_image_06.png)

3. Osztálymodell
	1. Adatmodell

		Munkaora 1 ───> * Komment
		-nap              -komment szovege  
		-mettol
		-meddig
		-leiras


## Implementáció
1. Fejlesztői környezet bemutatása
	Az alkalmazást egy online c9 nevű IDE-ben lett implementálva a Node.js alapokkal és egyéb modulok használatával.
2. Könyvtárstruktúrában lévő mappák funkiójának bemutatása
```
...
─app                        ROOT
 ├───pods                   adatmodellek
 │   ├───application        JSONAPI adapter tulajdonságok
 │   ├───comment            komment modell és megjelenés
 │   ├───components         oldalon megjelenő komponensek
 │   |   ├───comment-form   komment rögzítés komponense
 │   |   ├───munka-details  munkaóra megjelenítés komponense
 │   |   ├───munkaora-edit  munkaóra szerkesztés komponense
 │   |   └───munkaora-form  munkaóra rögzítés komponense
 │   ├───index              főoldal megjelenése
 │   ├───munkaora           munkaórák listázása
 │   |   ├───edit           munkaóra szerkesztése
 │   |   └───new            munkaóra rögzítése
 │   └───worktime           munkaóra modell
 └───styles                 stíluslapok
```


## Felhasználói dokumentáció
1. A futtatáshoz szükséges hardver legalább egy SSD-t és 1GB-ramot tartalmazó szerver
2. Futtatás
	- githubról az egész projektet le kell klónozni a helyi könyvtárba ```git clone``` parancsal
	- az npm install parancso kiadva letöltődnek az alkalmazáshoz tartozó függőségek.
	- az alkalmazás az nodemon index parancsal indul
	- az alkalmazáshoz szükséges elindítani a JSONAPI projektet is 
2. az alkalmazás értelemszerűen használható
	- regisztráció
	- bejelentkezés
	- munkaórák rögzítése
	- munkaórák módosítása (ha szükséges)
	- adminisztrátoroknak: (ha helyes a rögzített óra akkor jóváhagja)