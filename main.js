// calcolare la media e trovare i valori minori e maggiori della media
function calcolaMediaEValori(array) {

    // somma dei valori nell'array
    let somma = array.reduce((acc, val) => acc + val, 0);

    // media
    let media = somma / array.length;

    // valori minori della media
    let valoriMinori = array.filter(val => val < media);

    // valori maggiori della media
    let valoriMaggiori = array.filter(val => val > media);


    return {

        media,
        valoriMinori,
        numMinori: valoriMinori.length,
        numMaggiori: valoriMaggiori.length


    };
}


let array = [3, 5, 10, 2, 8];
let risultato = calcolaMediaEValori(array);

console.log("Media =", risultato.media);
console.log("Valori minori della media =", risultato.valoriMinori);
console.log("Numero di valori minori della media =", risultato.numMinori);
console.log("Numero di valori maggiori della media =", risultato.numMaggiori);
