
// triangle 
document.getElementById('triangle-btn').addEventListener('click',function(){
    const inputb = document.getElementById('input-b');
    const inputh = document.getElementById('input-h');

    const inputbString = inputb.value;
    const inputhString = inputh.value;

    const inputbNumber = parseInt(inputbString);
    const inputhNumber = parseInt(inputhString);

    const triangleResult = 0.5*inputbNumber*inputhNumber;

    const calculatedarea = document.getElementById('resutlarea1');
    calculatedarea.innerText=triangleResult;

    

})
// rectangle 
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const inputb = document.getElementById('input-w');
    const inputh = document.getElementById('input-i');

    const inputbString = inputb.value;
    const inputhString = inputh.value;

    const inputbNumber = parseInt(inputbString);
    const inputhNumber = parseInt(inputhString);

    const triangleResult = inputbNumber*inputhNumber;

    const calculatedarea = document.getElementById('resutlarea3');
    calculatedarea.innerText=triangleResult;


})

// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const inputb = document.getElementById('input-b');
    const inputh = document.getElementById('input-h');

    const inputbString = inputb.value;
    const inputhString = inputh.value;

    const inputbNumber = parseInt(inputbString);
    const inputhNumber = parseInt(inputhString);

    const triangleResult = inputbNumber*inputhNumber;

    const calculatedarea = document.getElementById('resutlarea2');
    calculatedarea.innerText=triangleResult;

    

})