const btn1 = document.getElementById('btn');
const btn2 = document.getElementById('btn1');
const btn3 = document.getElementById('btn2');
const btn4 = document.getElementById('btn3');
const btn5 = document.getElementById('btn4');

btn1.addEventListener('click', function(){
    alert("Aprendizado em 40%");
});

btn2.addEventListener('click', function(){
    alert("Aprendizado em 60%");
})

btn3.addEventListener('click', function(){
    alert("Aprendizado 65%");
});

btn4.addEventListener('click', function(){
    alert("Aprendizado 20%");
});

btn5.addEventListener('click', function(){
    alert("Aprendizado 5%");
});