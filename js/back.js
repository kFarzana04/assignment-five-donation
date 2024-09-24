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
