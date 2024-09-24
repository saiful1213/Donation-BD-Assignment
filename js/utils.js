

function getInputValueById(id) {
    return Number(document.getElementById(id).value);
}

function getTextValueById(id){
    return Number(document.getElementById(id).innerText);
}

function getInnerTextById(id){
    return document.getElementById(id).innerText;
}

function setInnerTextById(id, value){
    return document.getElementById(id).innerText = value;
}