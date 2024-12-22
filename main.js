const array = [//itt hozom létre az array tömböt, minden értékadásnál egy string típusú értéket adok meg az éppen aktuális tulajdonságnak
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

//A colgroup elemet hozzuk it létre
const colgroup = document.createElement('colgroup');//itt hozom létre a colgroup elemet
table.appendChild(colgroup);//hozzáadjuk a tablehoz

//itt definiálom az első oszlopot 
const col1 = document.createElement('col');//itt hozom letre a col elemet
col1.className = "column";//itt adok neki egy className-t ez alapjan talalja meg a css
colgroup.appendChild(col1);//a colgrouphoz adom hozzá

//itt definiálom a második oszlopot, nem adok neki semmit mert nem kell semmit megjelenítenie
const col2 = document.createElement('col');//itt hozom letre a col elemet
colgroup.appendChild(col2);//a colgrouphoz adom hozzá

//itt definiálom a harmadik oszlopot 
const col3 = document.createElement('col');//itt hozom letre a col elemet
col3.className = "column";//itt adok neki egy className-t 
colgroup.appendChild(col3);//a colgrouphoz adom hozzá

//A táblázat fejlécének létrehozása
const thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
table.appendChild(thead);//hozzáadom a tablehez

//Létrehozunk egy sort a fejlécnek
const headerRow = document.createElement('tr');//itt hozok létre egy tr elemet 
thead.appendChild(headerRow);//hozzadaom a theadre

//Az első cella létrehozása a fejléc sorában
const headerCell = document.createElement('th');//itt egy th elemet hozok letre
headerCell.innerHTML = header.nemzetiseg;//a cellaban a header objektum nemzetisege tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell);//a headerRow-hoz (fejléc sorához) adom hozzá

//A második cella létrehozása a fejléc sorában
const headerCell2 = document.createElement('th');//itt egy th elemet hozok letre
headerCell2.innerHTML = header.szerzo;//a cellaban a header objektum szerzo tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell2);//a headerRow-hoz (fejléc sorához) adom hozzá

//A harmadik cella létrehozása a fejléc sorában
const headerCell3 = document.createElement('th');//itt egy th elemet hozok letre
headerCell3.innerHTML = header.mu;//a cellaban a header objektum mu tulajdonsaganak az erteket iratjuk ki
headerRow.appendChild(headerCell3);//a headerRow-hoz (fejléc sorához) adom hozzá

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez

function renderTable(){//itt definiálom a renderTable függvényemet
    for(const currentElement of array){//itt a ciklusunk végigiterál az array tömbünk elemein és a currentElement lesz az aktuális elem
        //sor létrehozása
        const tbodyRow = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
        tbody.appendChild(tbodyRow);//hozzaadom a tbody-hoz  
        
        const nemzetiseg = document.createElement('td');//letrehozok egy td elemet
        nemzetiseg.innerHTML = currentElement.nemzetiseg;//az aktuális elem (currentElement) nemzetisege tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(nemzetiseg);//hozzáadja az első sorhoz
        
        const szerzo1 = document.createElement('td');//letrehozok egy td elemet
        szerzo1.innerHTML = currentElement.szerzo;//az aktuális elem (currentElement) szerzo tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(szerzo1);//hozzáadjuk a cellát a sorhoz 
        
        const mu1 = document.createElement('td');//letrehozok egy td elemet
        mu1.innerHTML = currentElement.mu;//az aktuális elem (currentElement) mu tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow.appendChild(mu1);//hozzáadjuk a cellát a sorhoz 
        
        if(currentElement.szerzo2 !== undefined && currentElement.mu2 !== undefined){//itt ellenőrizzük azt hogy az aktuális szerzo2 és a mu2 nem egyenlő-e undefineddel, és ha egyik sem az(undefined), csak akkor fut le tovább a kód
        
        //második sor létrehozása
        const tbodyRow2 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
        tbody.appendChild(tbodyRow2);//hozzaadom a tbody-hoz  
        
        nemzetiseg.rowSpan = "2"//Ha idáig lefutott a kódunk akkor biztosan szükség lesz soregyesítés és azt pedig itt adjuk meg
        
        const szerzo2 = document.createElement('td');//letrehozok egy td elemet
        szerzo2.innerHTML = currentElement.szerzo2;//az aktuális elem (currentElement) szerzo2 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow2.appendChild(szerzo2);//hozzáadja a második sorhoz
        
        const mu2 = document.createElement('td');//letrehozok egy td elemet
        mu2.innerHTML = currentElement.mu2;//az aktuális elem (currentElement) mu2 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow2.appendChild(mu2);//hozzáadja a második sorhoz
        }
    }
}

renderTable();//a rendeTable függvényt itt hívom meg