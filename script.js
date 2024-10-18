let number = document.querySelector('.number');
let from = document.querySelector('.from');
let to = document.querySelector('.to');
let doBtn = document.querySelector('.btn');
let resultDiv = document.querySelector('.result');
doBtn.addEventListener('click',function(){
    let result = 0;
    if(from.value=='m'&&to.value=='m'){
        result=number.value;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='m'&&to.value=='cm'){
        result=number.value*100;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='m'&&to.value=='km'){
        result=number.value*0.001;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='cm'&&to.value=='cm'){
        result=number.value;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='cm'&&to.value=='m'){
        result=number.value*0.01;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='cm'&&to.value=='km'){
        result=number.value*0.00001;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='km'&&to.value=='km'){
        result=number.value;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='km'&&to.value=='m'){
        result=number.value*1000;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
    else if(from.value=='km'&&to.value=='cm'){
        result=number.value*100000;
        console.log(result);
        let resultDiv = document.querySelector('.result');
        resultDiv.innerHTML=result;
    }
})
