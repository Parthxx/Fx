document.addEventListener('DOMContentLoaded', () => {
  // 1. Hover Effects for Sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.classList.add('active');
    });
    section.addEventListener('mouseleave', () => {
      section.classList.remove('active');
    });
  });

  // 2. Hover Effects for Headings (h1 and section h2)
  const headings = document.querySelectorAll('h1, .section h2');
  headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
      heading.classList.add('hovered');
    });
    heading.addEventListener('mouseleave', () => {
      heading.classList.remove('hovered');
    });
  });

  // 3. Button Hover Effect (Add active class to buttons on hover)
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('active');
    });
    button.addEventListener('mouseleave', () => {
      button.classList.remove('active');
    });
  });

  // 4. Scroll Animations for Sections
  const scrollElements = document.querySelectorAll('.section');
  const animateOnScroll = () => {
    scrollElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;
      if (elementPosition < screenPosition) {
        element.classList.add('in-view');
      } else {
        element.classList.remove('in-view');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); 

  // 5. Dynamic Content Loading for Card or Fan Group Sections
  const cardSections = document.querySelectorAll('.card');
  cardSections.forEach(card => {
    card.addEventListener('click', () => {
      const moreInfo = card.querySelector('.more-info');
      if (moreInfo) {
        moreInfo.classList.toggle('show');
      }
    });
  });

  // 6. Scroll to Top Button (for better UX)
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.textContent = '↑';
  scrollToTopBtn.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show scroll-to-top button after a certain scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  // 7. Modal Window for Detailed Information 
  const modalTrigger = document.querySelectorAll('.card .more-info-btn');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.modal .close');

  modalTrigger.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const modalContent = trigger.closest('.card').querySelector('.modal-content').innerHTML;
      modal.querySelector('.modal-body').innerHTML = modalContent;
      modal.classList.add('active');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // 8. Smooth Scrolling to Sections (for anchor links)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth',
      });
    });
  });

// Adding class on page load for initial animations (if needed)
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.classList.add('page-loaded');
});
