document.getElementById('newsletter-form').addEventListener('submit', function (event) {
  event.preventDefault(); 
  
  // Show a thank you message
  alert('Thank you for joining the Fieldstead Family!');
  
  // Optionally, clear the input field after submission
  const emailInput = this.querySelector('input[type="email"]');
  emailInput.value = ''; 
});


// Welcome Message Display on Page Load
window.addEventListener('load', () => {
  console.log('Welcome to The Fieldstead - The Home for Football Fan Culture!');
});

  // Data for the 10 teams
  const teamsData = [
    {
      name: 'FC Barcelona',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
      foundingYear: 1899,
      keyMilestones: ['Multiple La Liga Titles', 'UEFA Champions League Victories'],
      legendaryPlayers: ['Lionel Messi', 'Johan Cruyff', 'Xavi Hernández'],
      majorAchievements: ['5 UEFA Champions League', '26 La Liga Titles'],
      notableMatches: ['El Clasico vs Real Madrid'],
      fanbase: 'Known as "culés", Barcelona has a passionate following worldwide.',
      fanCulture: ['Famous for the "Camp Nou" chants', 'Fans gather in large numbers for matches'],
    },
    {
      name: 'Manchester United',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
      foundingYear: 1878,
      keyMilestones: ['20 English Premier League Titles', '3 UEFA Champions League Wins'],
      legendaryPlayers: ['Cristiano Ronaldo', 'George Best', 'Ryan Giggs'],
      majorAchievements: ['3 UEFA Champions League', '20 Premier League Titles'],
      notableMatches: ['Manchester Derby', 'Famous comeback against Bayern Munich in 1999'],
      fanbase: 'Man Utd has one of the largest global fanbases, known for their unwavering support.',
      fanCulture: ['"Glory Glory Man United" chant', 'Fans celebrate at Old Trafford and globally'],
    },
    {
      name: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Real_Madrid_CF_logo.svg/1200px-Real_Madrid_CF_logo.svg.png',
      foundingYear: 1902,
      keyMilestones: ['13 UEFA Champions League Wins', '34 La Liga Titles'],
      legendaryPlayers: ['Cristiano Ronaldo', 'Alfredo Di Stéfano', 'Zinedine Zidane'],
      majorAchievements: ['13 UEFA Champions League', '34 La Liga Titles'],
      notableMatches: ['El Clasico vs Barcelona'],
      fanbase: 'Real Madrid fans, known as "Madridistas", are known for their global and passionate support.',
      fanCulture: ['"Hala Madrid" chant', 'Real Madrid’s global fan groups unite for matches'],
    },
    {
      name: 'Bayern Munich',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/FC_Bayern_München_logo.svg/1200px-FC_Bayern_München_logo.svg.png',
      foundingYear: 1900,
      keyMilestones: ['Multiple Bundesliga Titles', 'UEFA Champions League Wins'],
      legendaryPlayers: ['Franz Beckenbauer', 'Karl-Heinz Rummenigge', 'Arjen Robben'],
      majorAchievements: ['6 UEFA Champions League', '31 Bundesliga Titles'],
      notableMatches: ['Bayern vs Borussia Dortmund in Der Klassiker'],
      fanbase: 'Bayern fans are known for their loyalty and for supporting their team across the world.',
      fanCulture: ['"Stern des Südens" chant', 'Massive fan celebrations in Munich and globally'],
    },
    {
      name: 'Juventus',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Juventus_FC_Logo.svg/1200px-Juventus_FC_Logo.svg.png',
      foundingYear: 1897,
      keyMilestones: ['Multiple Serie A Titles', 'UEFA Champions League Runners-Up'],
      legendaryPlayers: ['Cristiano Ronaldo', 'Alessandro Del Piero', 'Michel Platini'],
      majorAchievements: ['2 UEFA Champions League', '36 Serie A Titles'],
      notableMatches: ['Juventus vs Inter Milan', 'Famous comeback against Real Madrid in 2018'],
      fanbase: 'Juventus fans, known as "Juve", are some of the most dedicated football followers.',
      fanCulture: ['"Fino Alla Fine" chant', 'Massive celebrations at Allianz Stadium'],
    },
    {
      name: 'Liverpool FC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Liverpool_FC_logo.svg/1200px-Liverpool_FC_logo.svg.png',
      foundingYear: 1892,
      keyMilestones: ['6 UEFA Champions League Wins', '19 English Premier League Titles'],
      legendaryPlayers: ['Steven Gerrard', 'Ian Rush', 'Kenny Dalglish'],
      majorAchievements: ['6 UEFA Champions League', '19 English Premier League Titles'],
      notableMatches: ['Liverpool vs Manchester United', 'The Miracle of Istanbul (2005 final)'],
      fanbase: 'Known for their passionate supporters, "The Kop", Liverpool has a global fan following.',
      fanCulture: ['"You’ll Never Walk Alone" chant', 'The iconic red scarves waving at Anfield'],
    },
    {
      name: 'AC Milan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/AC_Milan_logo.svg/1200px-AC_Milan_logo.svg.png',
      foundingYear: 1899,
      keyMilestones: ['7 UEFA Champions League Wins', '18 Serie A Titles'],
      legendaryPlayers: ['Paolo Maldini', 'Francesco Gento', 'Andriy Shevchenko'],
      majorAchievements: ['7 UEFA Champions League', '18 Serie A Titles'],
      notableMatches: ['AC Milan vs Inter Milan', 'Famous win in 2007 Champions League Final'],
      fanbase: 'AC Milan fans are known for their style, passion, and support, especially in Milan.',
      fanCulture: ['"Forza Milan" chant', 'The “Curva Sud” fan section in San Siro'],
    },
    {
      name: 'Paris Saint-Germain',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Paris_Saint-Germain_FC_Logo.svg/1200px-Paris_Saint-Germain_FC_Logo.svg.png',
      foundingYear: 1970,
      keyMilestones: ['Multiple Ligue 1 Titles', 'UEFA Champions League Finals'],
      legendaryPlayers: ['Neymar', 'Kylian Mbappé', 'Zlatan Ibrahimović'],
      majorAchievements: ['1 UEFA Champions League Runners-Up', '9 Ligue 1 Titles'],
      notableMatches: ['PSG vs Marseille (Le Classique)', 'Famous comeback against Barcelona in 2017'],
      fanbase: 'PSG’s fans, known as "Les Ultras", are some of the most vocal and passionate.',
      fanCulture: ['"Allez Paris" chant', 'Big celebrations at Parc des Princes'],
    },
    {
      name: 'Chelsea FC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chelsea_FC_logo.svg/1200px-Chelsea_FC_logo.svg.png',
      foundingYear: 1905,
      keyMilestones: ['5 Premier League Titles', '2 UEFA Champions League Wins'],
      legendaryPlayers: ['Frank Lampard', 'Didier Drogba', 'John Terry'],
      majorAchievements: ['2 UEFA Champions League', '5 Premier League Titles'],
      notableMatches: ['Chelsea vs Arsenal', '2008 UEFA Champions League final'],
      fanbase: 'Chelsea’s fans are passionate, especially for their “Blue Is the Colour” spirit.',
      fanCulture: ['"Keep The Blue Flag Flying High" chant', 'Supporters unite at Stamford Bridge'],
    }
  ];

  // Container for team cards
  const teamCardsContainer = document.getElementById('team-cards');

  // Function to generate and display team cards
  teamsData.forEach((team) => {
    const card = document.createElement('div');
    card.classList.add('team-card');
    
    card.innerHTML = `
      <div class="team-logo">
        <img src="${team.logo}" alt="${team.name} Logo" />
      </div>
      <h3>${team.name}</h3>
      <p><strong>Founded:</strong> ${team.foundingYear}</p>
      <p><strong>Major Achievements:</strong> ${team.majorAchievements.join(', ')}</p>
      <p><strong>Legendary Players:</strong> ${team.legendaryPlayers.join(', ')}</p>
      <p><strong>Fanbase:</strong> ${team.fanbase}</p>
      <p><strong>Fan Culture:</strong> ${team.fanCulture.join(', ')}</p>
      <button class="read-more">Learn More</button>
    `;
    teamCardsContainer.appendChild(card);
  });

  // Handle "Learn More" button functionality
  const learnMoreButtons = document.querySelectorAll('.read-more');
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Here you can add more information about the team, such as their history and fans!');
    });
  });

  // Handling the Learn More button
  const learnMoreButton = document.getElementById('learn-more');
  if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function() {
      alert('Learn More button clicked! Redirecting to detailed guide page...');
      //(adjust with actual detailed guide page URL)
      window.location.href = '#learn-more'; // Adjust this link as needed
    });
  }

  // Handling the Join Us Now button
  const joinUsButton = document.getElementById('join-us');
  if (joinUsButton) {
    joinUsButton.addEventListener('click', function() {
      alert('Join Us Now button clicked! Redirecting to registration page...');
      window.location.href = '#join'; 
    });
  }

  // Handling the Twitter social media button
  const twitterButton = document.getElementById('twitter');
  if (twitterButton) {
    twitterButton.addEventListener('click', function() {
      alert('Twitter button clicked! Redirecting to Twitter...');
      window.location.href = 'https://twitter.com';
    });
  }


  // Handling the navigation buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert(`${this.textContent} Button Clicked!`);
    });
  });

  // Handling the Login button
  const loginButton = document.getElementById('login');
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      alert('Login button clicked! Redirecting to login page...');
      //(adjust with actual login page URL)
      window.location.href = 'login.html';
    });
  }

  // Handling the Profile button
  const profileButton = document.getElementById('profile');
  if (profileButton) {
    profileButton.addEventListener('click', function() {
      alert('Profile button clicked! Redirecting to profile page...');
      window.location.href = 'profile.html';
    });
  }

  // Handling the Submit Story button
  const submitStoryButton = document.getElementById('submitStory');
  if (submitStoryButton) {
    submitStoryButton.addEventListener('click', function() {
      alert('Submit Your Story button clicked! Redirecting to submission page...');
      window.location.href = 'submit-story.html';
    });
  }

  // Handling the Join Community button
  const joinCommunityButton = document.getElementById('joinCommunity');
  if (joinCommunityButton) {
    joinCommunityButton.addEventListener('click', function() {
      alert('Join the Community button clicked! Redirecting to community page...');
      window.location.href = 'community.html';
    });
  }

  // Social Media buttons functionality
  const socialButtons = {
    twitter: document.getElementById('twitter'),
    instagram: document.getElementById('instagram')
  };

  // Add event listeners to the social media buttons
  for (let platform in socialButtons) {
    if (socialButtons[platform]) {
      socialButtons[platform].addEventListener('click', function() {
        alert(`${platform.charAt(0).toUpperCase() + platform.slice(1)} button clicked!`);
        window.location.href = `https://www.${platform}.com/`;
      });
    }
  }

  // Handling the Contact Us button
  const contactUsButton = document.getElementById('contactUs');
  if (contactUsButton) {
    contactUsButton.addEventListener('click', function() {
      alert('Contact Us button clicked! Redirecting to contact page...');
      window.location.href = 'contact-us.html';
    });
  }

  // Handling the About Us button
  const aboutUsButton = document.getElementById('aboutUs');
  if (aboutUsButton) {
    aboutUsButton.addEventListener('click', function() {
      alert('About Us button clicked! Redirecting to about page...');
      window.location.href = 'about-us.html';
    });
  }

  const allButtons = document.querySelectorAll('.btn');
  allButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });

});

// Smooth Scrolling to Section Anchors 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Toggle More Info on Click for Gang Info 
document.querySelectorAll('.gang-info').forEach(function(gangInfo) {
  gangInfo.addEventListener('click', function() {
      this.classList.toggle('active'); 
      const moreInfo = this.querySelector('.more-info');
      if (moreInfo) {
          moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
      }
  });
});

// Animation for Images on Hover 
document.querySelectorAll('.gang-info img').forEach(function(image) {
  image.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease-in-out';
  });

  image.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
  });
});

// Animation for Section Reveal on Scroll
const revealElements = document.querySelectorAll('.gang-info');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight * 0.8) { 
          element.classList.add('reveal'); 
      }
  });
};

// Listen for scroll event to trigger animations
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // 

function openNewTab() {
  const url = "https://thefieldstead.com"; 
  window.open(url, "_blank");
}

 // Get references to form elements
 const loginButton = document.getElementById("loginButton");
 const usernameInput = document.getElementById("username");
 const passwordInput = document.getElementById("password");
 const errorMessage = document.getElementById("errorMessage");

 // Add click event listener for the login button
 loginButton.addEventListener("click", function () {
     const username = usernameInput.value.trim();
     const password = passwordInput.value.trim();
     errorMessage.textContent = "";

     // Validate inputs
     if (!username && !password) {
         errorMessage.textContent = "Please enter your username and password.";
         return;
     }
     if (!username) {
         errorMessage.textContent = "Please enter your username.";
         return;
     }
     if (!password) {
         errorMessage.textContent = "Please enter your password.";
         return;
     }

     // If validation passes
     errorMessage.textContent = "Validation passed. You can now submit the form!";
 });
});

 // JavaScript for Interaction (Hover and Animations)
document.querySelectorAll('.ritual').forEach(function(ritualBox) {
  ritualBox.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)'; 
    this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; 
  });

  ritualBox.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)'; 
    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

document.querySelector('#matchday-rituals').addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.02)';
  this.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
});

document.querySelector('#matchday-rituals').addEventListener('mouseout', function() {
  this.style.transform = 'scale(1)';
  this.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.1)';
});

// 1. Particle Animation with Color Change
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
let particleColor = "rgba(255, 253, 242, 0.8)"; // Default color

// Create particles on mouse move
function createParticle(x, y) {
  const size = Math.random() * 5 + 1;
  const speed = Math.random() * 2 + 0.5;
  const angle = Math.random() * Math.PI * 2;
  const velocityX = speed * Math.cos(angle);
  const velocityY = speed * Math.sin(angle);
  
  particles.push({ x, y, size, velocityX, velocityY });
}

// Update particles and animate them
function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach((particle, index) => {
    particle.x += particle.velocityX;
    particle.y += particle.velocityY;
    
    particle.size *= 0.98;  // Particle shrink effect
    
    if (particle.size < 0.1) {
      particles.splice(index, 1); // Remove particles that are too small
    }
    
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particleColor;  // Particle color
    ctx.fill();
  });
  
  requestAnimationFrame(updateParticles);
}

canvas.addEventListener("mousemove", (event) => {
  createParticle(event.x, event.y);
});

// Change particle color on screen click
canvas.addEventListener("click", () => {
  particleColor = particleColor === "rgba(255, 253, 242, 0.8)" ? "rgba(0, 255, 255, 0.8)" : "rgba(255, 253, 242, 0.8)";
});

updateParticles();

// 2. Interactive Hover Effects on Welcome Content
const welcomeContent = document.querySelector('.welcome-content');

welcomeContent.addEventListener('mousemove', (e) => {
  const centerX = welcomeContent.offsetWidth / 2;
  const centerY = welcomeContent.offsetHeight / 2;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  const deltaX = (mouseX - centerX) / centerX;
  const deltaY = (mouseY - centerY) / centerY;

  welcomeContent.style.transform = `rotateX(${5 * deltaY}deg) rotateY(${-5 * deltaX}deg)`;
});

welcomeContent.addEventListener('mouseleave', () => {
  welcomeContent.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// 3. Morph Text Animation
const morphText = document.querySelector('.morph-text');

function changeMorphText() {
  const phrases = [
    "The Fieldstead",
    "Football Culture",
    "Ultimate Fan Experience",
    "Join the Passion"
  ];
  
  let i = 0;
  setInterval(() => {
    morphText.textContent = phrases[i];
    i = (i + 1) % phrases.length;
  }, 5000); // Change every 5 seconds
}

changeMorphText(); // Start the morphing text

// 4. Parallax Effect on Scroll
const layers = document.querySelectorAll('.welcome-layer');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  layers.forEach((layer, index) => {
    const depth = index * 2 + 1;
    const movement = scrollPosition * depth / 100;
    layer.style.transform = `translate(-50%, -50%) scale(${1 + movement / 1000})`;
  });

  // Trigger animations as elements scroll into view
  document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    
    if (elementPosition < viewportHeight * 0.8) {
      element.classList.add('in-view');
    }
  });
});

// 5. Scroll Animation Trigger for Text (Animate text on scroll)
const scrollElements = document.querySelectorAll('.animate-on-scroll');

scrollElements.forEach((el) => {
  el.style.opacity = 0;  // Start with hidden text
  el.style.transition = 'opacity 1.5s ease-out';
});

window.addEventListener('scroll', () => {
  scrollElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.style.opacity = 1;  // Fade text into view
    }
  });
});

// 6. Smooth Scroll on Button Click
const joinButton = document.getElementById("join-us");

joinButton.addEventListener('click', (event) => {
  event.preventDefault();
  const targetSection = document.getElementById('target-section'); // Add your target section's ID
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

// 7. Resize Event to Adjust Canvas Size Dynamically
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


