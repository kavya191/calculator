function displayData(data){
    //calcInput.value=data
    calcInput.value =calcInput.value+data//data concatenation
}

function allClear(){
    calcInput.value=""
}
//eval is an inbult method
//eval () helps to convert string data to number
function outputOperator(){
    //inputilulla value eduth evaluate cheythu inputil store cheyyunnu. 
   calcInput.value=eval( calcInput.value)
}

function backSpace(){
    // already display cheythittulla valuesil ninnu last index value remove cheyyan slice method use cheyyunnu
    calcInput.value=calcInput.value.slice(0,-1)
}
function openBracket(){
    calcInput.value=calcInput.value+"("
}
function closeBracket(){
    calcInput.value=calcInput.value+")"
}
function displayPercentage(){
    calcInput.value=calcInput.value/100
}