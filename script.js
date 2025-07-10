

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

    


  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Typing Effect
  const typingElement = document.getElementById('typing');
  const words = ["Web Developer", "Content Writer", "Graphic Designer", "Developer"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];
    const displayText = isDeleting
      ? currentWord.substring(0, letterIndex - 1)
      : currentWord.substring(0, letterIndex + 1);

    typingElement.innerHTML = displayText;
    letterIndex = isDeleting ? letterIndex - 1 : letterIndex + 1;

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && letterIndex === currentWord.length) {
      typeSpeed = 1000; // Pause before deleting
      isDeleting = true;
    } 
    
    else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 1000;
    }

    setTimeout(type, typeSpeed);
  }

  type(); // Start typing animation

  
  const sections = document.querySelectorAll('section');

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, 100);
  });
});

