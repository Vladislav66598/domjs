//1
let header  = document.querySelector('.test-text');
header.textContent = 'привет мир! Меня зовут Владислав'
const h1 = document.querySelector('.test-text');
h1.style.color  = "blue";
h1.style.background = "lightblue";
h1.style.border = "2px solid"

//2
const email = document.getElementById('email');
const checkbox = document.getElementById('remember');
const submit = document.getElementById('btn');

email.value = 'mail@mail.ru';
email.disabled = true;
checkbox.checked = true;
submit.textContent = 'войти';

//3
const link = document.createElement('a');

link.textContent = 'ссылка на сайт';
link.href = 'https://midis.ru';
link.target = '_blank';

link.addEventListener('mauseover', function(){
    link.style.color = 'red';
});
link.addEventListener('mauseout', function(){
    link.style.color = 'blue';
});

document.body.append(link);