const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');
const cardsSection = document.getElementById('cards-section');
const historySection = document.getElementById('history-section');




donationBtn.addEventListener("click", function () {
    cardsSection.style.display = "block"; // Show the cards section
    historySection.style.display = "none"; // Hide the history section
  });
  
  historyBtn.addEventListener("click", function () {
    cardsSection.style.display = "none"; // Hide the cards section
    historySection.style.display = "block"; // Show the history section
  });
  