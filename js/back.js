// Get the Elements
const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');
const cardsSection = document.getElementById('cards-section');
const historySection = document.getElementById('history-section');

// Function to toggle between sections
function toggleSection(showElement, hideElement) {
    showElement.style.display = 'block';
    hideElement.style.display = 'none';
}

// Function to handle donation button click
function handleDonationClick() {
    toggleSection(cardsSection, historySection);
}

// Function to handle history button click
function handleHistoryClick() {
    toggleSection(historySection, cardsSection);
}

// Assign event listeners using the functional approach
donationBtn.addEventListener('click', handleDonationClick);
historyBtn.addEventListener('click', handleHistoryClick);

// Active button
function setActiveButton(button) {
	donationBtn.style.backgroundColor = '';
	historyBtn.style.backgroundColor = '';
	
	//add active button
button.style.backgroundColor = '#B4F461';	
}
// donation button active

donationBtn.addEventListener('click', function(){
	setActiveButton(donationBtn);
});

// history button active

historyBtn.addEventListener('click', function(){
	setActiveButton(historyBtn);
});

//Define target amount..

let targetAmount = parseInt(document.getElementById('target-amount').textContent, 10);

//Update target Amount..

function updateTargetAmount(donation) {
    const targetElement = document.getElementById('target-amount');
    targetAmount -= donation;
    targetElement.textContent = `${targetAmount} BDT`;
}

// Handle Donation.

function handleDonation(inputElement, donationAmountElement, modalElement ) {
    
    if(!inputElement || typeof inputElement.value === 'undefined'){
        console.log('invalid input element');
        return
    }
    const donationValue = inputElement.value.trim();
    //console.log('inputElement:', inputElement);
    //console.log('donationAmountElement:', donationAmountElement);
    //console.log('modatElement:', modalElement)

// check if donation is valid or not

if(isNaN(donationValue) || donationValue === '') {
    alert('Please enter a valid donation amount.');
    inputElement.value = '';
    return;
}
    // Parse donation amount to number

    const donationAmount = parseInt(donationValue, 10);
    const currentAmount = parseInt(donationAmountElement.textContent, 10);
    
    //Update donation Amount

    donationAmountElement.textContent = 
    (currentAmount + donationAmount) + 'BDT';

    // Update target amount

    updateTargetAmount(donationAmount);


    // Show modal and clear input.
    if(targetAmount >= 0) {
        modalElement.showModal();
        inputElement.value = '';
    }
    else{
        alert('Target Amount reached or exceeded');
    }
}

// Add donation to history

function addDonationToHistory(amount, location) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${location}: ${amount} BDT at ${new Date().toLocaleString()}`;
    historyList.appendChild(listItem);
}

// Event handler for cards button

document.getElementById('noakhali-donation-btn')
.onclick = function() {
    const donationInput = document.getElementById('noakhali-donation-input');
    const donationAmountElement = document.getElementById('noakhali-donation-amount');
    const modalElement = document.getElementById('my_modal_5');

    handleDonation(donationInput, donationAmountElement, modalElement);
    addDonationToHistory(donationInput.value, 'Noakhali');
};

document.getElementById('feni-donation-btn').onclick = function () {
    const donationInput = document.getElementById('feni-donation-input');
    const donationAmountElement = document.getElementById('feni-donation-amount');
    const modalElement = document.getElementById('my_modal_5');

    handleDonation(donationInput, donationAmountElement, modalElement);
    addDonationToHistory(donationInput.value, 'Feni');
};

document.getElementById('quota-donation-btn').onclick = function () {
    const donationInput = document.getElementById('quota-Donation-Input');
    const donationAmountElement = document.getElementById('quota-donation-amount');
    const modalElement = document.getElementById('my_modal_5');

    if(!donationInput || !donationAmountElement || !modalElement) {
        console.error('one or more element not found');
        return;
    }
    const donationValue = inputElement.value.trim();
    console.log('donationValue:', donationValue)

    handleDonation(donationInput, donationAmountElement, modalElement);
    addDonationToHistory(donationInput.value, 'Quota');
};

