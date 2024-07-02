
let Kaverilista = []                                                    // luodaan tyhjä lista kavereille

// funktio lisää kaverin nimen listaan
function lisaa_kaveri() {
    console.log("lisaa_kaveri() -funktio kutsuttu");                  // tulostetaan konsoliin, että funktio on suoritettu

    while (Kaverilista.length < 10) {                                   // kun listassa on 10 nimeä
        let uusiKaveri = prompt("Anna kaverin nimi: (10 tarvitaan)");
        console.log("syötetty nimi: ${uusiKaveri};");                   // tulostetaan konsoliin käyttäjän antama nimi

        if (uusiKaveri === null) {                                      // jos käyttäjä painaa "cancel"...
            console.log("Käyttäjä keskeytti syöttämisen.");             // ...tulostetaan konsoliin, että käyttäjä keskeytti syöttämisen  
            break;                                                      // ...poistutaan while-loopista
        }
        else if (uusiKaveri.trim() === "") {                            // jos käyttäjä jättää nimen tyhjäksi tai pelkästään välilyöntejä 
            alert("10 kaveria tarvitaan, lisää kaverin nimi!");         // ilmoitetaan käyttäjälle, että kaverin nimi puuttuu
        }
        else {
            Kaverilista.push(uusiKaveri.trim());                        // lisätään kaverin nimi listalle ilman ylimääräisiä välilyöntejä
            console.log(`Lisätty nimi: ${uusiKaveri.trim()}`);          // tulostetaan konsoliin lisätty nimi
        }
    }
    if (Kaverilista.length == 10) {
        console.log("10 kaveria lisätty, tulostetaan lista");
        let itemList = document.getElementById('itemList');             // Haetaan HTML-dokumentista elementti, jonka id on 'itemList', johon kaverilista halutaan tulostaa
        itemList.innerHTML = '';                                        // Tyhjennetään elementti ennen päivitystä
    
        Kaverilista.forEach((kaveri, index) => {                        // Käydään läpi jokainen kaveri ja sen indeksi (järjestysnumero) listalla ja lisätään ne listaelementtiin
            let li = document.createElement('li');                      // Luodaan uusi listaelementti
            li.textContent = `${index + 1}. ${kaveri}`;                 // Asetetaan listaelementin tekstisisältö, indeksi ja kaverin nimi 
            itemList.appendChild(li);                                   // Lisätään listaelementti HTML-dokumenttiin
            console.log(`Lisätty listaan: ${index + 1}. ${kaveri}`);    // Tulostetaan konsoliin lisätty nimi ja sen indeksi
        });
} 
} 