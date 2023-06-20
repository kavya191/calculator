function displayData(data){
    calcInput.value =calcInput.value+data
}

function allClear(){
    calcInput.value=""
}
//eval is an inbult method
function outputOperator(){
   calcInput.value=eval( calcInput.value)
}

function displayClear(){
    // already display cheythittulla valuesil ninnu last index value remove cheyyan slice method use cheyyunnu
    calcInput.value=calcInput.value.slice(0,-1)
}
function openBracket(){
    calcInput.value+="("
}
function closeBracket(){
    calcInput.value+=")"
}