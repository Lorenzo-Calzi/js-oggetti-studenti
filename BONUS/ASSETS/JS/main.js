/* Studente inserito dall'utente */
var userStudent = {
    Nome: prompt('Inserisci il nome'),
    Cognome: prompt('Inserisci il cognome'),
    Età: Number(prompt('Inserisci l\'età'))
}

var sectionEl = document.getElementById('user_student');
for (var key in userStudent) {
    userStudent[key]
    sectionEl.insertAdjacentHTML('beforeend', `
        
        <p> ${key}: ${userStudent[key]}</p>
        `
        )  
}


/* Creato oggetto studente e stampate le proprietà */
var profEl = document.getElementById('prof');
var studente = {
    Nome: 'Davide',
    Cognome: 'Brusa',
    Età: 51
}
for (var key in studente) {
    studente[key]
    console.log(key + ': ' + studente[key]);
    profEl.insertAdjacentHTML('beforeend', `
        
        <p> ${key}: ${studente[key]}</p>
        `
        ) 
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
var listStudent = document.querySelector('section');
for(var i = 0; i < studenti.length; i++) {
    var listStudent = studenti[i];

}


for(var i = 0; i < studenti.length; i++) {
    var studEl = studenti[i];
    console.log('Dati: ' + studEl.Nome +  ' ' + studEl.Cognome);
}





