var studente = {
    nome: 'Lorenzo',
    cognome: 'Calzi',
    età: 21
}

for (var key in studente) {
    studente[key]
    console.log(key + ': ' + studente[key]);
}


var studenti = [
    {
        nome: 'Francesco',
        cognome: 'Rossi',
        età: 43
    },
    {
        nome: 'Alberto',
        cognome: 'Bianchi',
        età: 18
    },
    {
        nome: 'Franco',
        cognome: 'Costa',
        età: 67
    },
    {
        nome: 'Andrea',
        cognome: 'Romano',
        età: 35
    }
]

for(var i = 0; i < studenti.length; i++) {
    var studEl = studenti[i];
    console.log('Dati: ' + studEl.nome +  ' ' + studEl.cognome);
}