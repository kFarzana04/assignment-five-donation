const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');
const cardsSection = document.getElementById('cards-section');
const historySection = document.getElementById('history-section');

// blog button 
const blogBtn = document.getElementById('blog-button');
const blogSection = document.getElementById('blog-section');




donationBtn.addEventListener("click", function () {
    cardsSection.style.display = "block"; // Show the cards section
    historySection.style.display = "none"; // Hide the history section
  });
  
  historyBtn.addEventListener("click", function () {
    cardsSection.style.display = "none"; // Hide the cards section
    historySection.style.display = "block"; // Show the history section
  });

  blogBtn.addEventListener('click', function(){
    cardsSection.style.display = "none"; // Hide the cards section
    historySection.style.display = "none";// Hide history section
    blogSection.style.display = "block";// Show blog section
  })
  