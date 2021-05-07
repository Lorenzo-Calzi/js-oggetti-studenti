var studente = {
    nome: 'Lorenzo',
    cognome: 'Calzi',
    età: 21
}

for (var key in studente) {
    studente[key]
    console.log(key + ': ' + studente[key]);
}