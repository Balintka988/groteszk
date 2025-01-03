const irodalom_array = [//itt hozom létre az irodalom_array tömböt, minden értékadásnál egy string típusú értéket adok meg az éppen aktuális tulajdonságnak
    {
        nemzetiseg: "Orosz",// nemzetiség megadása
        szerzo: "Gogol",//szerző nevének megadása
        mu: "A köpönyeg",//mű címének a megadása
        szerzo2: "Csehov",//2. szerző nevének megadása
        mu2: "A csinovnyik halála"//2. mű címének a megadása
    }, 
    {
        nemzetiseg: "Cseh",//nemzetiség megadása
        szerzo: "Franz Kafka",//szerző nevének megadása
        mu: "Az átváltozás"//mű címének a megadása
    },
    {
        nemzetiseg: "Magyar",//nemzetiség megadása
        szerzo: "Örkény István",//szerző nevének a megadása
        mu: "Egyperces Novellák",//mű címének a megadása
        szerzo2: "József Attila",//2.szerző nevének megadása
        mu2: "Klárisok"// 2.mű címének a megadása
    },
    {
        nemzetiseg: "Svájc",//nemzetiség megadása
        szerzo: "Friedrich Dürrenmatt",//szerző nevének megadása
        mu: "A fizikusok"//mű címének a megadása
    }
];

const header = {// itt hozok létre egy objektumot a táblázatunk fejlécének
    nemzetiseg: "Nemzetiség", // fejléc mezője a nemzetiséghez
    szerzo: "Szerző", // fejléc mezője a szerzőkhöz
    mu: "Mű" // fejléc mezője a művekhez
};

//Itt hozzuk létre a táblázatot
const table = document.createElement('table');//létrehozok egy table elemet, ami majd a tablazatomat fogja tartalmazni
document.body.appendChild(table);//Hozzáadom a bodyhoz
//A colgroup elemek szabályozzák a táblázatunk oszlopainak stílusát

//A táblázat fejlécének létrehozása
const thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
table.appendChild(thead);//hozzáadom a tablehez

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

colgroupFuggveny();//itt hivom meg a colgroupFuggvényt ami majd az első és utolso oszlopot szinezi be
renderTable(irodalom_array);//a rendeTable függvényt itt hívom meg, és megadom neki hogy melyik tömböt járja be
generateForm();//függvényhívás
generateFejlec();//itt hívjuk meg a fejlécet generáló függvényt

const form = document.getElementById('form');//elékrem az index.html-ből a formomnak az id-ját
form.addEventListener('submit', function(e) {//amikor submitolunk (amikor rányomunk a gombra)akkor hívódik meg ez a függvény és egy új sort tudunk hozzáadni a táblázatunkhoz
    e.preventDefault(); //megakadalyozza hogy a bongeszo alapertelmezetten fusson le
    const nemzetiseg_HTMLelement = document.getElementById('szarmazas');//elkerem azt a htmlelementet aminek a szarmazas az id-ja
    const szerzo1_HTMLelement = document.getElementById('szerzo1');//elkerem azt a htmlelementet aminek az szerzo1 az id-ja
    const mu1_HTMLelement = document.getElementById('szerzo1mu');//elkerem azt a htmlelementet aminek az szerzo1mu az id-ja
    const szerzo2_HTMLelement = document.getElementById('szerzo2');//elkerem azt a htmlelementet aminek a szerzo2 az id-ja
    const mu2_HTMLelement = document.getElementById('szerzo2mu');//elkerem azt a htmlelementet aminek a szerzo2mu az id-ja

    const nemzetiseg_value = nemzetiseg_HTMLelement.value;//az nemzetiseg_HTMLelement értékét beleteszem egy változóba
    const szerzo1_value = szerzo1_HTMLelement.value;//az szerzo1_HTMLelement értékét beleteszem egy változóba
    const mu1_value = mu1_HTMLelement.value;//az mu1_HTMLelement értékét beleteszem egy változóba

    let szerzo2_value;//létrehozunk egy valtozot a masodik szerzo tarolasara
    if (szerzo2_HTMLelement.value === '') {//ha a szerzo2_HTMLelement értéke ures, akkor:
        szerzo2_value = undefined; //undefined lesz
    } 
    else {//hogyha viszont nem ures 
        szerzo2_value = szerzo2_HTMLelement.value;//akkor eltároljuk az értékét egy változóban és majd később hozzáadjuk a táblázatunkhoz
    }

    let mu2_value;//létrehozunk egy valtozot a masodik mu tarolasara
    if (mu2_HTMLelement.value === '') {//ha a szerzo2_HTMLelement értéke ures, akkor:
        mu2_value = undefined;//undefined lesz
    } 
    else {//hogyha viszont nem ures 
        mu2_value = mu2_HTMLelement.value;//akkor eltároljuk az értékét egy változóban és majd később hozzáadjuk a táblázatunkhoz
    }

    const thisForm = e.currentTarget;//az e.currentTarget tartalmazza a formunkat amit eltarolunk egy valtozoban
    const errorElements = thisForm.querySelectorAll('.error');//az összes olyan elemet elkérjük ami error classal rendelkezik
    for (const errorElement of errorElements){//itt végigiterálunk az imént bekért error classos elemeken ami az errorElements
        errorElement.innerHTML = "";//kitöröljük azt az elemet ami benne van
    }
    let valid = true;//itt megadjuk a valid változónak kezdőérték ként hogy true ezt majd a későbbiekben fogjuk változtatni


    if(!egyszeruValidation(nemzetiseg_HTMLelement, "Meg kell adnod, hogy mi a nemzetisége")){//itt adunk az egyszeruValidation függvényünknek bemeneti értékeket, és ha a függvény hamis értékkel tér vissza a bemeneti nemzetiseg_HTMLelement esetén akkor:
        valid = false;//a valid változónkat hamisra állítja
    }
    if(!egyszeruValidation(szerzo1_HTMLelement, "Meg kell adni, hogy ki a szerző")){//itt adunk az egyszeruValidation függvényünknek bemeneti értékeket, és ha a függvény hamis értékkel tér vissza a bemeneti szerzo1_HTMLelement esetén akkor:
        valid = false;//a valid változónkat hamisra állítja
    }
    if(!egyszeruValidation(mu1_HTMLelement, "Meg kell adni, hogy mi a címe")){//itt adunk az egyszeruValidation függvényünknek bemeneti értékeket, és ha a függvény hamis értékkel tér vissza a bemeneti mu1_HTMLelement esetén akkor:
        valid = false;//a valid változónkat hamisra állítja
    }
    if(!osszetettValidation(szerzo2_HTMLelement, mu2_HTMLelement, "Meg kell adni mindketto masodikat")){
        valid = false;
    }

    if(valid){//csak akkor fut le(ad hozzá új sort) ha a valid változónk true maradt 
        const newElement = {//itt hozok létre egy új objektumot amit később majd hozzáadunk az irodalom_array-ünkhöz
            nemzetiseg: nemzetiseg_value,//a nemzetiseg értéke a nemzetiseg_value lesz
            szerzo: szerzo1_value,//a szerző értéke a szerzo1_value lesz
            mu: mu1_value,//a mű értéke a mu1_value lesz
            szerzo2: szerzo2_value,//a második szerző értéke a szerzo2_value lesz
            mu2: mu2_value//a második mű értéke a mu2_value lesz
        };
        irodalom_array.push(newElement);//itt adjuk hozzá az irodalom_array-hez a new elementet(az új objektumunk) amit fentebb hoztunk létre
        tbody.innerHTML = ''; //a meglevo tablazat aktualis tartalmat itt töröljük
        renderTable(irodalom_array); //itt hivjuk meg a renderTable függvényünket ami az új adatokkal együtt fogja megjeleníteni a táblázatunkat
        thisForm.reset();//itt töröljük ki a formunk input mezőiből a beírt szöveget
    }
});