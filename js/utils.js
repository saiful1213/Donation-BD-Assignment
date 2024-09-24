// get input value in number format
function getInputValueById(id) {
    return Number(document.getElementById(id).value);
}
// get text value in number format
function getTextValueById(id) {
    return Number(document.getElementById(id).innerText);
}
// get innertext
function getInnerTextById(id) {
    return document.getElementById(id).innerText;
}
// set innertext
function setInnerTextById(id, value) {
    return document.getElementById(id).innerText = value;
}

// validate function
function inputValidate(donateValueId) {
    const donateValue = getInputValueById(donateValueId);
    const amountBalance = getTextValueById('my-balance')

    if (amountBalance < donateValue) {
        alert('you dont have enough balance');
        return false;
    }
    else if (isNaN(donateValue) || donateValue < 1) {
        alert('donation failed! please donate a positive number')
        return false;
    }
}

// donateCalculate func
function donateCalculate(donateValueId, donateAmountId) {
    let myBalance = getTextValueById('my-balance');
    const donateValue = getInputValueById(donateValueId);
    let amountValue = getTextValueById(donateAmountId);
    amountValue += donateValue;
    myBalance -= donateValue;
    setInnerTextById('my-balance', myBalance);
    setInnerTextById(donateAmountId, amountValue);
}

// function for setHistory
const historyPageCardContainer = document.getElementById('history-page');
function setHistory(donateTitleId, donateValueId) {
    const donateTitle = getInnerTextById(donateTitleId);
    const donateValue = getInputValueById(donateValueId);
    const newCard = document.createElement('div');

    newCard.innerHTML = `
        <h2 class="text-[#111111] text-xl font-bold mb-4"> ${donateValue} Taka is Donated for ${donateTitle}</h2>
                    <p class="text-[#111111b3] font-light">Date: ${new Date().toUTCString()}</p>
    `;
    newCard.className = "border border-[#1111111a] bg-white rounded-2xl p-8 mb-6";
    historyPageCardContainer.appendChild(newCard);
}

// modal activity function
const modal = document.getElementById('my-modal');
const closeModal = document.getElementById('close-modal');

// show and close modal
function modalActivity() {
    modal.classList.remove('hidden');
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
}