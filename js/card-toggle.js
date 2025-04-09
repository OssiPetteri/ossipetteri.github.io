function toggleCardClass(element) {
    // Find any currently expanded card
    const expandedCard = document.querySelector('.card-exp');
  
    if (expandedCard && expandedCard !== element) {
      expandedCard.classList.remove('card-exp');
      expandedCard.classList.add('card');
    }
  
    element.classList.toggle('card-exp');
    element.classList.toggle('card');

    if (element.classList.contains('card-exp')) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400); // 300ms delay
  }
  }