/* Studente inserito dall'utente */
var userStudent = {
    Nome: prompt('Inserisci il nome'),
    Cognome: prompt('Inserisci il cognome'),
    Età: Number(prompt('Inserisci l\'età'))
}
for (var key in userStudent) {
    userStudent[key]
    console.log(key + ': ' + userStudent[key]);
}

/* Creato oggetto studente e stampate le proprietà */
var studente = {
    Nome: 'Lorenzo',
    Cognome: 'Calzi',
    Età: 21
}
for (var key in studente) {
    studente[key]
    console.log(key + ': ' + studente[key]);
}


/* Array di studenti */
var studenti = [
    {
        Nome: 'Francesco',
        Cognome: 'Rossi',
        Età: 43
    },
    {
        Nome: 'Alberto',
        Cognome: 'Bianchi',
        Età: 18
    },
    {
        Nome: 'Franco',
        Cognome: 'Costa',
        Età: 67
    },
    {
        Nome: 'Andrea',
        Cognome: 'Romano',
        Età: 35
    }
]

/* Aggiunto userStudent all'array di studenti */
studenti.push(userStudent);

/* Stampa di Nome e Cognome dell'array di studenti  */
for(var i = 0; i < studenti.length; i++) {
    var studEl = studenti[i];
    console.log('Dati: ' + studEl.Nome +  ' ' + studEl.Cognome);
}


