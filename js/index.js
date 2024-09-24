
// blog
const blog = document.getElementById('blog-btn');
blog.addEventListener('click', () => {
    location.href = './blog.html'
})

// all donate button
const donateBtn = document.getElementById('donate-now-btn');
const donateBtn2 = document.getElementById('donate-now-btn2');
const donateBtn3 = document.getElementById('donate-now-btn3');

function donateCalculate(donateValueId, donateAmountId) {
    let myBalance = getTextValueById('my-balance');
    const donateValue = getInputValueById(donateValueId);
    let amountValue = getTextValueById(donateAmountId);
    amountValue += donateValue;
    myBalance -= donateValue;
    setInnerTextById('my-balance', myBalance);
    setInnerTextById(donateAmountId, amountValue);
}

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

const modal = document.getElementById('my-modal');
const closeModal = document.getElementById('close-modal');

// show and close modal
function modalActivity() {
    modal.classList.remove('hidden');
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
}

// validate function
function inputValidate(donateValueId) {
    const donateValue = getInputValueById(donateValueId);
    const amountBalance = getTextValueById('my-balance')

    if (amountBalance < donateValue) {
        alert('you dont have enough balance');
        return false;
    }
    else if (isNaN(donateValue) || donateValue < 0) {
        alert('donation failed! please donate a positive number')
        return false;
    }
}

donateBtn.addEventListener('click', () => {
    if (inputValidate('input-donate') === false) {
        return;
    }
    else {
        donateCalculate('input-donate', 'donate-amount');
        setHistory('donate-title', 'input-donate');
        modalActivity();
        document.getElementById('input-donate').value = '';
    }
})

donateBtn2.addEventListener('click', () => {
    if (inputValidate('input-donate2') === false) {
        return;
    }
    else {
        donateCalculate('input-donate2', 'donate-amount2');
        setHistory('donate-title2', 'input-donate2');
        modalActivity();
        document.getElementById('input-donate2').value = '';
    }
})

donateBtn3.addEventListener('click', () => {
    if (inputValidate('input-donate3') === false) {
        return;
    }
    else {
        donateCalculate('input-donate3', 'donate-amount3');
        setHistory('donate-title3', 'input-donate3');
        modalActivity();
        document.getElementById('input-donate3').value = '';
    }
})


const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');
const donationPage = document.getElementById('donation-page');
const historyPage = document.getElementById('history-page');


historyBtn.addEventListener('click', () => {
    donationPage.classList.add('hidden');
    historyPage.classList.remove('hidden');
    // set active btn
    donationBtn.classList.remove('active');
    historyBtn.classList.add('active');
})

donationBtn.addEventListener('click', () => {
    historyPage.classList.add('hidden');
    donationPage.classList.remove('hidden');
    // set active btn
    historyBtn.classList.remove('active');
    donationBtn.classList.add('active');
})