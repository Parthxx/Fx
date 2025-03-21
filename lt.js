const openMenuBtn = document.querySelector('#openMenuBtn');
const closeMenuBtn = document.querySelector('#closeMenuBtn');
const menu = document.querySelector('#menu');

openMenuBtn.addEventListener('click', () => {
  handleViewTransition(openMenu);
});

closeMenuBtn.addEventListener('click', () => {
  handleViewTransition(closeMenu);
});

// Close menu by Press Escape(ESC)
function handleCloseWithESC(e) {
  if (e.key == 'Escape') {
    handleViewTransition(closeMenu);
  }
}

function openMenu() {
  menu.classList.add('open');
  closeMenuBtn.focus();
  window.addEventListener('keyup', handleCloseWithESC);
}

function closeMenu() {
  menu.classList.remove('open');
  openMenuBtn.focus();
  window.removeEventListener('keyup', handleCloseWithESC, false);
}


function handleViewTransition(updateDom) {
  if (!document.startViewTransition) {
    updateDom();
    return;
  }
  document.startViewTransition(() => updateDom());
}


document.querySelectorAll('.NavLink').forEach((link) => {
  link.addEventListener('click', () => handleViewTransition(closeMenu));
});

//  Scroll Animation

let scrollDirection;
const nav = document.querySelector('.Navbar');
document.addEventListener(
  'scroll',
  (e) => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const direction = st > e.target.lastScrollTop ? 'down' : 'up';
    if (Math.abs(st - e.target.lastScrollTop) > 5)
      document.body.setAttribute('scroll-direction', direction);
    scrollDirection = direction;
    e.target.lastScrollTop = st <= 0 ? 0 : st;
  },
  {
    passive: true,
  }
);

function addRevealEffect(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      let revealClass;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealClass = scrollDirection === 'up' ? 'reveal-up' : 'reveal-down';

          entry.target.classList.add(revealClass);
        } else {
          entry.target.className = 'subject';
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

const elementsToReveal = document.querySelectorAll('.subject');
addRevealEffect(elementsToReveal);

//  About Text Replace

const NORMAL_PLAYBACK_RATE = 200;
const REDUCED_PLAYBACK_RATE = 1000;

let rate = NORMAL_PLAYBACK_RATE;

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) rate = REDUCED_PLAYBACK_RATE;

const words = [
  'passion',
  'success',
  'goals',
  'rhythm',
  'fun',
  'energy',
  'opportunity',
];

let intervalId = null;
function textReplace(words, targetElement, rate) {
  if (intervalId) clearInterval(intervalId);
  let wordIndex = 0;
  const randomWordElement = document.getElementById(targetElement);

  const changeWordWithAnimation = () => {
    randomWordElement.style.opacity = 0;
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      randomWordElement.textContent = words[wordIndex];
      randomWordElement.style.opacity = 1;
    }, 50);
  };

  intervalId = setInterval(changeWordWithAnimation, rate);
}


let lastScrollTop = 0;
let ticking = false;

document.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const direction = st > lastScrollTop ? 'down' : 'up';
      if (Math.abs(st - lastScrollTop) > 5) {
        document.body.setAttribute('scroll-direction', direction);
      }
      scrollDirection = direction;
      lastScrollTop = st <= 0 ? 0 : st;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
