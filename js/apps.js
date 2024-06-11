
document.getElementById('triangle-btn').addEventListener('click',function(){
    const inputb = document.getElementById('input-b');
    const inputh = document.getElementById('input-h');

    const inputbString = inputb.value;
    const inputhString = inputh.value;

    const inputbNumber = parseInt(inputbString);
    const inputhNumber = parseInt(inputhString);

    const triangleResult = 0.5*inputbNumber*inputhNumber;

    const calculatedarea = document.getElementById('resutlarea');
    calculatedarea.innerText=triangleResult;

    

})