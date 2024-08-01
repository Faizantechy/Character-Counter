let counter=document.querySelector('.counter');
let txtArea=document.querySelector('textArea');

txtArea.addEventListener('input',function(){

    counter.innerHTML=txtArea.value.length;

})