
// Get the Elements

const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');
const cardsSection = document.getElementById('cards-section');
const historySection = document.getElementById('history-section');

//const blogBtn = document.getElementById('blog-button');
//const blogSection = document.getElementById('blog-section');
//const targetAmount = document.getElementById('target-amount');
//const historyList = document.getElementById('history-list');
//const modal = document.getElementById('my_modal_5');

// Section to section show hide

function toggleSection(showElement, hideElement) {
    showElement.style.display = 'block';
    hideElement.style.display = 'none';
}

// Donation button click

function handleDonationClick(){
    //toggle Section

    toggleSection(cardsSection, historySection)
};

function handleHistoryClick(){
    //toggle Section

    toggleSection(historySection, cardsSection )
}

donationBtn.addEventListener('click', handleDonationClick);
historyBtn.addEventListener('click', handleHistoryClick);



