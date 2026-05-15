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

link.style.display = 'inline-block';
link.style.marginTop = '20px';
link.style.fontSize = '20px';
link.style.color = 'blue';
link.style.textDecoration = 'none';
link.style.transition = '0.3s';

link.addEventListener('mouseover', function(){
    link.style.color = 'red';
    link.style.transform = 'scale(1.2)';
});
link.addEventListener('mouseout', function(){
    link.style.color = 'blue';
    link.style.transform = 'scale(1)';
});

document.body.append(link);

//4
const ball = document.getElementById('ball');
const start = document.getElementById('start');

start.addEventListener('click', function(){
    ball.style.top = '-100px';
})