
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