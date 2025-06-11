const quotes = [
     "Believe in yourself.",
  "Keep going, you're closer than you think.",
  "Success is built on consistency.",
  "Discipline > Motivation.",
  "The best way out is through.",
  "Push through the pain, earn the power."
];

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
    
}