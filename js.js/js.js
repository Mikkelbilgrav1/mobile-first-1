function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 // Tilføj eller fjern klassen "scrolled" baseret på scrollposition
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var body = document.querySelector('body');
  if (scrollPosition > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

// Vælg alle produktbillederne
const productImages = document.querySelectorAll('.product img');

// Tilføj en klikbegivenhedshåndterer til hvert billede
productImages.forEach(img => {
  img.addEventListener('click', function() {
    // Flyt billedet til venstre
    this.style.transform = 'translateX(-50%)';

    // Opret en tekstboks
    const textBox = document.createElement('div');
    textBox.classList.add('text-box');
    textBox.textContent = 'Din tekst her';
    
    // Indsæt tekstboksen ved siden af billedet
    this.parentNode.appendChild(textBox);
  });
});

