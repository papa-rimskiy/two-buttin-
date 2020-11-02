/*var minus = document.querySelector('#minus')
var plus = document.querySelector('#plus')
var zero = document.querySelector('zero')*/

document.addEventListener('DOMContentLoaded', function() { //addEventListener - можно повесить много событий на объект.
    // Событие DOMContentLoad срабатывает после того, как все загрузится 
    var zero = document.querySelectorAll('#zero'); // создаю переменную зеро, по его значению id. Почему работает только когда 
    //ALL, я так и не понял. На сколько понял я, ALL достает все значения, которые подходят под селектор. А zero ведь одно
    [].forEach.call(document.querySelectorAll('#plus'), function(input,i){ // [] - я так понял создается исскуственно 
        //псеводо массив, который не используется, но зато дает дает доступ к прототипам массива. ForEach - перебор массива, где 
        // в виде аргумента другая функция и имеет три параметра (элемент elem, индекс i  и изначальный массив arr). Call
        // я вызваю, для того чтобы мог использовать функцию ниже, хоть сколько раз. 
        input.addEventListener('click', function() { // input это элемент, на который при клике будет работать функция ниже
            zero[i].innerHTML -= -1   
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var zero = document.querySelectorAll('#zero');
    [].forEach.call(document.querySelectorAll('#minus'), function(input,i){
        input.addEventListener('click', function() {
            zero[i].innerHTML -= 1
        });
    });
});
/*</head><!DOCTYPE HTML>
<html>
<head>
  <title>Untitled</title>
  <meta charset="utf-8">
 </head>
<body>
<input class="plus" type="button" value="+" > <p class="count">1</p>
<script>
window.addEventListener('DOMContentLoaded', function() {
var p = document.querySelectorAll('.count');
[].forEach.call(document.querySelectorAll('.plus'), function(input,i) {
        input.addEventListener('click', function() {
            p[i].innerHTML -= -1
        });
    });
});
</script>
</body>
</html>  */