// First exercise
var initialVariable = +prompt('Please insert initial value.', 0),
    summand = +prompt('How much should I add from the previous result?', 0),
    deductible = +prompt('How much to subtract from the previous result?', 0),
    multiplier = +prompt('How much to multiply from the previous result?', 0),
    divisor = +prompt('How much to divide from the previous result?', 0);
alert('Формула: ' + initialVariable + ' + ' + summand + ' - ' + deductible + ' * ' + multiplier + ' / ' + divisor + '.\n' +
      'Результат: ' + (((initialVariable + summand) - deductible) * multiplier / divisor));

// Second exercise
var login,
    pass;

login = prompt('Please enter the login.');

if (login === 'Админ') {
    pass = prompt('Please enter Your password.');

    if (pass == 'Чёрный Властелин') {
        alert('Welcome!');
    }
    else if (!pass) {
        alert('Enter declined.');
    }
    else {
        alert('Incorrect password.');
    }
}
else if (!login) {
    alert('Enter declined.');
}
else{
    alert('I don\'t know You.');
}

// Third exercise
var message;

message = (login === 'Вася') ?
    'Привет' :
    (login === 'Директор') ?
        'Здравствуйте' :
        (login === '') ?
            'Нет логина' :
            '';

// Fourth exercise
var lastName,
    firstName,
    patronymic,
    age,
    isMan,
    isRetiree;

while (true) {
    lastName = prompt('Please enter last name.');

    if (lastName === ''){
        alert('Last name could not be empty.');
    }
    else if (!lastName) {
        lastName = '-';
        break;
    }
    else{
        break;
    }
}

while (true) {
    firstName = prompt('Please enter first name.');

    if (firstName === ''){
        alert('First name could not be empty.');
    }
    else if (!firstName) {
        firstName = '-';
        break;
    }
    else{
        break;
    }
}

while (true) {
    patronymic = prompt('Please enter patronymic.');

    if (patronymic === ''){
        alert('Patronymic could not be empty.');
    }
    else if (!patronymic) {
        patronymic = '-';
        break;
    }
    else{
        break;
    }
}

while (true) {
    age = prompt('Please enter the age.');

    if (!age) {
        age = '-';
        break;
    }
    else if (age === ''){
        alert('Age could not be empty.');
    }
    else if (+age !== +age){
        alert('Age should be valid number.');
    }
    else if ((+age < 6) || (+age > 100)) {
        alert('Age should be between 6 and 100.');
    }
    else{
        age = +age;
        break;
    }
}

isMan = confirm('Your sex is men?');

isRetiree = ((isMan && (age >= 62)) || (!isMan && (age >= 57))) ? true : false;

alert('Ваше ФИО: ' + lastName +' '+ firstName +' '+ patronymic +'\n'+
      'Ваш возраст в годах: ' + age +'\n'+
      'Ваш возраст в днях: ' + ((+age === +age) ? (age * 365) : '-') +'\n'+
      'Через 5 лет вам будет: ' + ((+age === +age) ? (age + 5) : '-') +'\n'+
      'Ваш пол: ' + (isMan ? 'man' : 'woman') +'\n'+
      'Вы на пенсии: ' + ((+age === +age) ? (isRetiree ? 'Yes' : 'No') : 'unknown'));
