let Kaverilista = [];                                                                       // Luodaan tyhjä lista kavereille

// lisätään kuuntelijat painikkeille ja kutsutaan funktioita 
document.getElementById('lisaa_kaveri').addEventListener('click', lisaa_kaveri);            // Lisätään kuuntelija painikkeelle, joka kutsuu funktiota lisaa_kaveri
document.getElementById('poista_kaveri').addEventListener('click', poista_kaveri);          // Lisätään kuuntelija painikkeelle, joka kutsuu funktiota poista_kaveri
document.getElementById('jarjesta_kaverit').addEventListener('click', jarjesta_kaverit);    // Lisätään kuuntelija painikkeelle, joka kutsuu funktiota jarjesta_kaverit

// Funktio lisää kaverin nimen listaan
function lisaa_kaveri() {
    console.log("lisaa_kaveri() -funktio kutsuttu");                                // Tulostetaan konsoliin, että funktio on suoritettu

    let kaveri = document.getElementById('kaveri_nimi').value.trim();               // Haetaan kaverin nimi input-kentästä ja poistetaan ylimääräiset välilyönnit           
    if (kaveri !== '') {                                                            // Jos syötekenttä ei ole tyhjä, lisätään kaveri listaan                                             
        Kaverilista.push(kaveri);
        document.getElementById('kaveri_nimi').value = '';                          // Tyhjennetään syötekenttä kaverin nimen lisäämisen jälkeen jotta käyttäjä voi lisätä uuden kaverin
        console.log(`Lisätty nimi: ${kaveri}`);                                     // Tulostetaan konsoliin lisätty nimi
        paivita_kaverilista();                                                      // Kutsutaan funktiota, joka päivittää kaverilistan näkymän
    }
      else {                                                                        // Jos syötekenttä on tyhjä...                             
        alert("Tyhjä ei kelpaa, lisää nimi!");                                      // ....ilmoitetaan käyttäjälle, että kaverin nimi puuttuu
        console.log("Tyhjä ei kelpaa, lisää nimi!");                                // Tulostetaan konsoliin, että kaverin nimi puuttuu
      }
}

// Funktio poistaa kaverin nimen listalta    
function poista_kaveri() {
    console.log("poista_kaveri() -funktio kutsuttu");                               // Tulostetaan konsoliin, että funktio on suoritettu

    let kaveri = document.getElementById('kaveri_nimi').value.trim();               // Haetaan kaverin nimi input-kentästä ja poistetaan ylimääräiset välilyönnit
    let poistettava_kaveri = Kaverilista.indexOf(kaveri);                           // Etsitään kaverin nimi listalta
    if (poistettava_kaveri !== -1) {                                                // Jos poistettava_kaveri ei ole -1, eli kaveri löytyy listalta, poistetaan kaveri listalta
        Kaverilista.splice(poistettava_kaveri, 1);                                  // Poistetaan kaveri listalta, 1 tarkoittaa, että poistetaan vain yksi kaveri
        console.log(`Poistettu kaveri: ${kaveri}`);                                 // Tulostetaan konsoliin poistettu kaveri
        paivita_kaverilista();                                                      // Kutsutaan funktiota, joka päivittää kaverilistan näkymän

    } else {                                                                        // Jos kaveria ei löydy listalta...
        alert("Kaveria ei löydy listalta!");                                        // ...ilmoitetaan käyttäjälle, että kaveria ei löydy listalta
        console.log("Kaveria ei löydy listalta!");                                  // Tulostetaan konsoliin, että kaveria ei löydy listalta
        document.getElementById('kaveri_nimi').value = '';                          // Tyhjennetään syötekenttä kaverin nimen poistamisen jälkeen
        console.log("Syötekenttä tyhjennetty");                                     // Tulostetaan konsoliin, että syötekenttä on tyhjennetty
    }
}

// Funktio järjestää kaverit aakkosjärjestykseen
function jarjesta_kaverit() {
    console.log("jarjesta_kaverit() -funktio kutsuttu");                            // Tulostetaan konsoliin, että funktio on suoritettu

    Kaverilista.sort();                                                             // Järjestetään kaverit aakkosjärjestykseen
    console.log("Kaverit järjestetty aakkosjärjestykseen");                         // Tulostetaan konsoliin, että kaverit on järjestetty aakkosjärjestykseen
    paivita_kaverilista();                                                          // Kutsutaan funktiota, joka päivittää kaverilistan näkymän

}

function paivita_kaverilista() {
    console.log("paivita_kaverilista() -funktio kutsuttu");                     // Tulostetaan konsoliin, että funktio on suoritettu

    let itemList = document.getElementById('kaverilista');                      // Haetaan HTML-dokumentista elementti, jonka id on 'kaverilista', johon kaverilista halutaan tulostaa
    itemList.innerHTML = '';                                                    // Tyhjennetään kaverilista ennen kuin se päivitetään 
    Kaverilista.forEach((kaveri, index) => {                                    // Käydään läpi jokainen kaveri ja sen indeksi (järjestysnumero) listalla ja lisätään ne listaelementtiin
        let li = document.createElement('li');                                  // Luodaan uusi listaelementti
        li.textContent = `${index + 1}. ${kaveri}`;                             // Lisätään listaelementtiin tekstisisältö, indeksi ja kaverin nimi
        itemList.appendChild(li);                                               // Lisätään listaelementti HTML-dokumenttiin
        console.log(`Lisätty listaan: ${index + 1}. ${kaveri}`);                // Tulostetaan konsoliin lisätty nimi ja sen indeksi
    });
}