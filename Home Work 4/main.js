// First exercise
function isEmpty(obj) {
    if (typeof obj === 'object' && obj !== null && typeof obj.length === 'undefined'){
        var counter = 0;

        for (var key in obj) {
            counter++;
        }

        if (counter > 0){
            return false;
        }

        return true;
    }
}

// Second exercise
function pow(x, n) {
    var result = 1;

    for (var i = 1; i <= n; i++){
        result *= x;
    }

    return result;
}

alert('Please enter x and n to receive x to power of n.');

while (true){
    var x = prompt('Enter x from 1 and more.');

    if (+x > 0 && x && +x === +x){
        x = +x;
        break;
    }
}

while (true){
    var n = prompt('Enter n from 1 and more.');

    if (+x > 0 && x && +x === +x){
        x = +x;
        break;
    }
}

alert(pow(x, n));

// Third exercise
// Самый быстрый через подсчет формулой. Самый медленный рекурсия. В формуле у нас одна переменная и несколько
// математических операций. В цикле больше шагов выполнения математических функций, плюс сравнение условия и
// инкрементация для работы цикла. Рекурсия самая длинная скорее всего потому что мы дергаем функцию каждый раз что
// занимает больше ресурсов что бы отследить и завершить каждую из функций в рекурсии.
// Можно посчитать рекурсией sumTo(100000). Возможно что в каком то случае выпадет ошибка с переполнением ресурсов.

function sumTo(n) {
    var result = 0;

    for (var i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

function sumTo2(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumTo2(n -1);
}

function sumTo3(n) {
    return (n * (n + 1)) / 2;
}

// Fourth exercise
function treeSum(arr) {
    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        var variable = arr[i];

        if (variable === +variable) {
            result += variable;
        }
        else if(variable !== null && typeof variable == 'object' && variable.length > 0) {
            result += treeSum(arr[i]);
        }
    }

    return result;
}