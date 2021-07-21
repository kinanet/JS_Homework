// First exercise
var initialVariable = +prompt('Please insert initial value.', 0),
    summand = +prompt('How much should I add from the previous result?', 0),
    deductible = +prompt('How much to subtract from the previous result?', 0),
    multiplier = +prompt('How much to multiply from the previous result?', 0),
    divisor = +prompt('How much to divide from the previous result?', 0);

 alert(((initialVariable + summand) - deductible) * multiplier / divisor);

// Second exercise
var login,
    pass;

login = prompt('Please enter the login.');
if (!login) {
    alert('Enter declined.');
}
else {
    if (login != 'Админ') {
        alert('I don\'t know You.');
    }
    else{
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
}

// Third exercise
var message;

message = (login === 'Вася') ?
    message = 'Привет' :
    (login === 'Директор') ?
        message = 'Здравствуйте' :
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

    if (age === ''){
        alert('Age could not be empty.');
    }
    else if (+age !== +age){
        alert('Age should be valid number.');
    }
    else if (!age) {
        age = 0;
        break;
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
      'Ваш возраст в днях: ' + (age * 365) +'\n'+
      'Через 5 лет вам будет: ' + (age + 5) +'\n'+
      'Ваш пол: ' + (isMan ? 'man' : 'woman') +'\n'+
      'Вы на пенсии: ' + (isRetiree ? 'Yes' : 'No'));