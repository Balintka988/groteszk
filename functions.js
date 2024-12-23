/**
 * a createHeader függvény segítségével hozzuk lére a fejlécünket
 * A fejlécet a header tömbből szedi ki és írja ki 
 * ezen a tömböt járjuk be egy for of ciklus segítségével
 */
function generateFejlec(){ //fejlec legeneralasa
    const header = ["Nemzetiség", "Szerző", "Mű"]; //a header nevű tömbbe eltároljuk az adatokat amik stringek

    const headerRow = document.createElement('tr'); //a fejlécnek létrehozok egy sort
    thead.appendChild(headerRow); //thead elemhez hozzáadom az új sorunkat

    for (const elem of header) { //a header tömböt for of-al járom be
        const headerCell = document.createElement('th'); //létrehozok egy uj cellat 
        headerCell.innerHTML = elem; //a headerCell cellájának adom meg az éppen aktuális elemet
        headerRow.appendChild(headerCell); //végül a cellát hozzáadjuk a fejléc sorához
    }
}


/**
 * Ebben a függvényben generáljuk le a formot
 * A függvény a formFileds tömbünket járja be és ez alapján hoz létre dinamikusan HTML űrlapot
 */
function generateForm(){//létrehozunk egy függvényt amely le fogja generálni a formunkat
    const formFields = [//tömb lérehozása függvényen belül is lehet mert csak itt használom
        { id: "szarmazas", label: "Származás"},//id, label megadása
        { id: "szerzo1", label: "1. szerző"},//id, label megadása
        { id: "szerzo1mu", label: "1. szerző műve"},//id, label megadása
        { id: "szerzo2", label: "2. szerző"},//id, label megadása
        { id: "szerzo2mu", label: "2. szerző műve"}//id, label megadása
    ];

    const form = document.createElement('form');//letrehozunk egy form elemet
    form.id = 'form';//itt adjuk meg neki az id-jét hogy majd később erre tudjunk hivatkozni
    document.body.appendChild(form);//az űrlapot hozzáadjuk a dokumentumunk törzséhez, bodyhoz
    
    for(const field of formFields){//itt járjuk be a formFields tömbnek minden egyes objektumát
        const div = document.createElement('div');//létrehozunk egy div elemet ami a formunk egyik sora lesz
        div.classList.add('field');//megadom a div-nek a field classt

        const label = document.createElement('label');//létrehozok egy label elemet
        label.innerText = field.label;//a label szövegét beállítjuk az aktuálisra
        label.htmlFor = field.id;//itt adom meg neki a html-forját azért dolgozhatok az id-ből mert az ugyan az mint a for a mi esetünkben
        div.appendChild(label);//hozzáadom a label1-et a divhez

        const input1 = document.createElement('input');//itt hozzuk létre az input mezőt, itt viszük majd be a szöveget
        input1.type = "text";//az input típusát textre állítjuk, hogy szöveges adatot tudjunk bevinni
        input1.id = field.id;//itt adjuk meg az azonosítóját
        div.appendChild(input1);//Az input mezőt hozzáadjuk a div-hez

        const div1_error = document.createElement('div');//létrehozunk még egy divet ahol majd a hibaüzenetet fogjuk megjeleníteni
        div1_error.classList = "error";//error osztályt hozzárendeljük
        div.appendChild(div1_error);//a hibaüzenet div-et hozzáadjuk a div hez

        form.appendChild(div);//az imént összeállított div-et itt adjuk hozzá a formhoz
    }
    const button = document.createElement('button');//itt hozok létre egy új button elemet
    button.type = 'submit';//a típusát beállítjuk submitra
    button.innerText = 'Hozzáadás';//a gombon kiírva az lesz hogy Hozzáadás
    form.appendChild(button);//hozzáadjuk a gombunkat a formhoz
}


/**
 * ennek a függgvénynek a segítségével jelenik meg a táblázatunk
 * 
 * @param {Array} irodalom_array - ebben a tömbben tároljuk azokat az adatokat amelynek egyes objektumai
 * tartalmazzák a nemzetiséget, szerzőt, művet és ha van ilyen akkor szerző2-t és mű2-t
 */
function renderTable(irodalom_array){//itt definiálom a renderTable függvényemet
    for(const currentElement of irodalom_array){//itt a ciklusunk végigiterál az irodalom_array tömbünk elemein és a currentElement lesz az aktuális elem
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
        
        nemzetiseg.rowSpan = "2"//Ha idáig lefutott a kódunk akkor biztosan szükség lesz soregyesítés és azt pedig itt adjuk meg a nemzetiseg valtozonak
        
        const szerzo2 = document.createElement('td');//letrehozok egy td elemet
        szerzo2.innerHTML = currentElement.szerzo2;//az aktuális elem (currentElement) szerzo2 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow2.appendChild(szerzo2);//hozzáadja a második sorhoz
        
        const mu2 = document.createElement('td');//letrehozok egy td elemet
        mu2.innerHTML = currentElement.mu2;//az aktuális elem (currentElement) mu2 tulajdonságának értéke lesz itt megjelenítve 
        tbodyRow2.appendChild(mu2);//hozzáadja a második sorhoz
        }
    }
}

/**
 * ellenőrizzük hogy az adott input mező üres-e, hogyha igen akkor egy hibaüzenetet jelenítünk meg alatta
 * 
 * @param {htmlElement} htmlElement - az az input mező amelyiket ellenőrizni szeretnénk
 * @param {string} errormessage - a kiirandó hibauzenetnek a szövege
 * @returns {boolean} - a valid változónkkal tér vissza vagy true vagy false
 */
function egyszeruValidation(htmlElement, errormessage){
    let valid = true;
    if(htmlElement.value === ""){//ellenőrizzük hogy az aktuális htmlElement input mezője üres-e
    showError(htmlElement, errormessage);//itt híjuk meg azt a függvényt ami majd megjeleníti a hibaüzenetet    
        valid = false;//a valid változónkat false-ra állítjuk ezáltal nem adódik majd a táblázatunkhoz új sor
    }
    return valid;//a függvényünk visszatér a valid változóval
}

/**
 * ezzel a függvénnyel döntjük el azt hogy mindkettő második szerzo és mű is ki van e töltve.
 * ha nincs akkor hibaüzenetet jelenítünk meg az alatt amelyik nincs kitöltve
 * először megkeressük azt a mezőt amelyikben nincsen semmi és utana rendeljük hozzá a hibaüzenetet
 * 
 * @param {htmlElement} szerzo2_inputHTML - az egyik ellenőrizendő input 
 * @param {htmlElement} mu2_inputHTML - a másik ellenőrizendő input
 * @param {string} errormessage - a megjeleníteni kívánt hibaüzenet
 * @returns {boolean} - a valid változónkkal tér vissza vagy true vagy false
 */
function osszetettValidation(szerzo2_inputHTML, mu2_inputHTML, errormessage) { //itt kapja meg a bemeneti értékeit két htmlelement és egy string
    let valid = true; //inicializaljuk a valid valtozot true-ra

    if ((szerzo2_inputHTML.value === '' && mu2_inputHTML.value !== '') || (mu2_inputHTML.value === '' && szerzo2_inputHTML.value !== '')){//ha szerzo2 ures, de mu2 nem vagy ha mu2 ures de szerzo2 nem akkor fut tovább
        
        let errormezo;//letrehozunk egy valtozot az input mezo tarolasara, ahol a hiba van
        if (szerzo2_inputHTML.value === '') {//ha szerzo2 ures
            errormezo = szerzo2_inputHTML;//akkor az errormezo a szerzo2 input lesz
        } else { 
            errormezo = mu2_inputHTML; //kulonben az errormezo a mu2 input lesz
        }
        showError(errormezo, errormessage);//itt híjuk meg azt a függvényt ami majd megjeleníti a hibaüzenetet    
        valid = false;//a valid valtozot false-ra allitjuk, jelezve, hogy a validacio nem sikerult
    }
    return valid; //visszaadjuk a valid valtozo erteket (true vagy false)
}
/**
 * Ez egy segédfüggvény, ezáltal az egyszeruValidation függvényembe csak meg kell ezt hívni és meg is lesz jelenítve a hibaüzenet
 * 
 * 
 * @param {htmlElement} inputHtmlelement - az a html element amelyhez hozzá kell rendelnünk a hibaüzenetet
 * @param {string} errormessage - a megjelenítendő hibaüzenet
 */
function showError(inputHtmlelement, errormessage){//itt hozzuk létre a függvényünket
    const errorPlace = inputHtmlelement.parentElement.querySelector('.error');//az aktuális html elem szuloelemeben keresünk egy olyan elemet ami rendelkezik az error classal
    if(errorPlace !== undefined){//hogyha van ilyen hely ahol meg tudja jeleníteni az errormessaget akkor:
        errorPlace.innerHTML = errormessage;//megadjuk neki a bemeneti paraméterből a hiaüzenetet (stringet) és itt is iratjuk ki
    }
}

/**
 * ezzel a segédfüggvénnyel váltjuk le a colgroup miatti sok kódismétlést 
 * először létrehozunk egy colgroup elemet
 * utána meg 3x legenerálunk col elemeket amiknek className-t is adunk ha az első vagy utolsó oszlop
 */
function colgroupFuggveny(){//fuggvény létrehozása
    const colgroup = document.createElement('colgroup');//itt hozom létre a colgroup elemet
    table.appendChild(colgroup);//hozzáadjuk a tablehoz

    for(let i = 0; i < 3; i++){//mivel tudom hogy 3 oszlopunk van összesen ezért 3x fog lefutni ez a növekményes ciklus
        const col = document.createElement('col');//itt hozom letre a col elemet
        if(i === 0 || i === 2){//abban az esetben, ha az 1oszlopnál vagy az utolsó oszlopnál tart akkor:
            col.className = "column";//hozzáad egy className-t ez alapjan talalja meg a css
        }
        colgroup.appendChild(col);//a colgrouphoz adom hozzá
    }
}