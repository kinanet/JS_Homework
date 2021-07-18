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
if (login == null) {
    alert('Enter declined.');
}
else {
    if (login != 'Админ') {
        alert('I don\'t know You.');
    }
    else{
        pass = prompt('Please enter Your password.')

        if (pass == 'Чёрный Властелин') {
            alert('Welcome!')
        }
        else if (pass == null) {
            alert('Enter declined.');
        }
        else {
            alert('Incorrect password.')
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
    isRetiree,
    isNotValid = true;

while (isNotValid) {
    lastName = prompt('Please enter last name.');

    if (lastName === ''){
        isNotValid = true;
        alert('Last name could not be empty.')
    }
    else if (lastName === null) {
        isNotValid = false;
        lastName = '-';
    }
    else{
        isNotValid = false;
    }
}

isNotValid = true;
while (isNotValid) {
    firstName = prompt('Please enter first name.');

    if (firstName === ''){
        isNotValid = true;
        alert('First name could not be empty.')
    }
    else if (firstName === null) {
        isNotValid = false;
        firstName = '-';
    }
    else{
        isNotValid = false;
    }
}

isNotValid = true;
while (isNotValid) {
    patronymic = prompt('Please enter patronymic.');

    if (patronymic === ''){
        isNotValid = true;
        alert('Patronymic could not be empty.')
    }
    else if (patronymic === null) {
        isNotValid = false;
        patronymic = '-';
    }
    else{
        isNotValid = false;
    }
}

isNotValid = true;
while (isNotValid) {
    age = prompt('Please enter the age.');

    if (age === ''){
        isNotValid = true;
        alert('Patronymic could not be empty.')
    }
    else if (+age !== +age){
        isNotValid = true;
        alert('Patronymic should be valid number.')
    }
    else if (age === null) {
        isNotValid = false;
        age = 0;
    }
    else{
        age = +age;
        isNotValid = false;
    }
}

isMan = confirm('Your sex is men?');

isRetiree = ((isMan && (age >= 62)) || (!isMan && (age >= 57))) ? true : false;

alert('Ваше ФИО: ' + lastName +' '+ firstName +' '+ patronymic +'\n'+
      'Ваш возраст в годах: ' + age +'\n'+
      'Ваш возраст в днях: ' + (age * 365) +'\n'+
      'Через 5 лет вам будет: ' + (age + 5) +'\n'+
      'Ваш пол: ' + (isMan ? 'man' : 'woman') +'\n'+
      'Вы на пенсии: ' + (isRetiree ? 'Yes' : 'No'))












