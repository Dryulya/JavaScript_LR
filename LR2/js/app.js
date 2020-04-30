var form1 = document.getElementById('form1');
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputValue = document.getElementById('task1').value;
    if (+inputValue > 17) {
        alert("Добрый вечер");
    } else {
        alert("Добрый день");
    }
});

var form2 = document.getElementById('form2');
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputValue = document.getElementById('task2').value;
    if (inputValue.trim() === "Jonh") {
        alert("Привет Jonh");
    } else {
        alert("Я вас не знаю");
    }
});

var form3 = document.getElementById('form3');
form3.addEventListener('submit', function (e) {
    e.preventDefault();
    var users = {
        "ivan": "333",
        "ssss": "666",
        "gibs": "0000"
    };
    var login_val = document.getElementById('login').value;
    var pass_val = document.getElementById('pass').value;

    if (users[login_val] && users[login_val] === pass_val) {
        alert("Добро пожаловать");
    } else {
        alert("Пользователь не найден");
    }
});

var form4 = document.getElementById('form4');
form4.addEventListener('submit', function (e) {
    e.preventDefault();
    var numbers = [];
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    numbers.push(num1);
    numbers.push(num2);
    numbers.push(num3);
    var i;
    var max = null;
    for (i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            alert('Incorrect number value: ' + numbers[i]);
            continue;
        }
        if (max === null) {
            max = numbers[i];
        } else if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    alert("Max Number is: " + max);
});