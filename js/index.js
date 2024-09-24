// blog file
const blog = document.getElementById('blog-btn');
blog.addEventListener('click', () => {
    location.href = './blog.html'
})

// all donate button
const donateBtn = document.getElementById('donate-now-btn');
const donateBtn2 = document.getElementById('donate-now-btn2');
const donateBtn3 = document.getElementById('donate-now-btn3');

// donate now button 1
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
// donate now button 2
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
// donate now button 3
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

// set and remove active button, hide and unhide section page 
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