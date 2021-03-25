function getWeight(array){
        
    var weight = 0;

    for (var i = 0; i < array.length; i++){

        weight += array[i]['weight'];
    }

    return weight
}

function es1(){
    
    var arrZucch = [
    
        {
            'type': 'primo',
            'weight': 6,
            'length': 10
        },
    
        {
            'type': 'secondo',
            'weight': 2,
            'length': 10
        },
    
        {
            'type': 'terzo',
            'weight': 24,
            'length': 10
        }
    ]

    var weightEs1 = getWeight(arrZucch);
    console.log('Peso totale: ' + weightEs1);
};

function es2(){

    var arrZucch = [
        
        {
            'type': 'primo',
            'weight': 45,
            'length': 12
        },
    
        {
            'type': 'secondo',
            'weight': 2,
            'length': 25
        },
    
        {
            'type': 'terzo',
            'weight': 31,
            'length': 30
        },

        {
            'type': 'quarto',
            'weight': 6,
            'length': 2
        }
    ]
    
    var moreThan15 = [];
    var lessThan15 = [];
    
    for (var i = 0; i < arrZucch.length; i++){
        
        if (arrZucch[i]['length'] >= 15){
            
            moreThan15.push(arrZucch[i]);
        } else {
            
            lessThan15.push(arrZucch[i]);
        }
    }

    var moreThanWeight = getWeight(moreThan15);
    var lessThanWeight = getWeight(lessThan15);
    
    console.log('Peso gruppo corto: ' + moreThanWeight, 'Peso gruppo lungo: ' + lessThanWeight);
};

function es3(str){

    var strLen = str.length - 1;
    var strRev = '';
    
    for (var i = strLen; i >= 0; i--){
        
        strRev += str[i];
    }
    
    console.log(strRev);
};

function es4(){

    var firstArr = ['a', 'b', 'c'];
    var secondArr = [1, 2, 3];
    
    function merge(arr1, arr2){
        
        var arrFus = [];

        for (var i = 0; i < arr1.length; i++){
            
            arrFus.push(arr1[i], arr2[i]);
        }

        return arrFus
    };

    var mergeResult = merge(firstArr, secondArr);
    console.log(firstArr, secondArr);
    console.log(mergeResult);
};

function es5(array, a, b){

    var range = [];

    if (a < b && b <= array.length){
        
        for (var i = a; i <= b; i++){
            
            range.push(array[i]);
        }
    }
    
    return range
}

function init(){
    
    // es1();
    // es2();
    // es3('test');
    // es4()
    
    // es5
    // var arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // var arrayRes = es5(arrayTest, 1, 6);
    // console.log(arrayRes);
};

$(document).ready(init);



