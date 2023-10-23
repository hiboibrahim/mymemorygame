const cards = document.querySelectorAll('.memory-card');
let cardFlipped = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
  
    if (!cardFlipped) {
      // first click
      hascardFlipped = true;
      firstCard = this;
    } else {
      // second click
      hasFlippedCard = false;
      secondCard = this;
  
      console.log(firstCard.dataset.framework);
      console.log(secondCard.dataset.framework);
    }
  }
  

cards.forEach(card => card.addEventListener('click', flipCard));