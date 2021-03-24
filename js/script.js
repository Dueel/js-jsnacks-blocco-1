var objStudent = {

    'name': 'Giovanni',
    'last name': 'Verga',
    'age': 82
}

for (var key in objStudent){
    document.getElementById('student').innerHTML += key + ': ' + objStudent[key] + '<br>'
}

var objStd1 = {

    'name': 'Giacomo',
    'last name': 'Leopardi'
}

var objStd2 = {

    'name': 'Italo',
    'last name': 'Calvino'
}

var objStd3 = {

    'name': 'Luigi',
    'last name': 'Pirandello'
}

var objStd4 = {

    'name': prompt('Inserisci il nome'),
    'last name': prompt('Inserisci il cognome'),
    'age': prompt("Inserisci l'etá")
}

var arr = [objStd1, objStd2, objStd3, objStd4];

console.log(arr);

for (var i = 0; i < arr.length; i++){

    for (var key in arr[i]){
        console.log(key + ': ' + arr[i][key]);
        document.getElementById('test').innerHTML += '<div>' + key + ': ' + arr[i][key] + '</div>';

    }
    document.getElementById('test').innerHTML += '<hr>'
}