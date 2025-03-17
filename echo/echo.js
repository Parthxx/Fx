document.addEventListener("DOMContentLoaded", () => {
  // ---- Hover Effects for Ultra Group Cards ----
  const ultraGroups = document.querySelectorAll('.ultra-group');
  
  ultraGroups.forEach(group => {
      group.addEventListener('mouseover', function () {
          this.style.transform = 'scale(1.05)';
          this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
          this.style.backgroundColor = '#f8f8f8';
      });

      group.addEventListener('mouseout', function () {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
          this.style.backgroundColor = '#ffffff';
      });
  });

  // ---- Click Event to Toggle Detailed Information ----
  ultraGroups.forEach(group => {
      const details = group.querySelectorAll('p');
      details.forEach(p => {
          p.style.display = 'none'; 
      group.addEventListener('click', function () {
          details.forEach(p => {
              p.style.display = p.style.display === 'none' ? 'block' : 'none';
          });
      });
  });

  // ---- Smooth Scroll on Section Headings ----
  const groupHeadings = document.querySelectorAll('.ultra-group h2');
  groupHeadings.forEach(heading => {
      heading.addEventListener('click', function () {
          const group = this.closest('.ultra-group');
          group.classList.toggle('active'); 
      });
  });

  // ---- Dynamic Video Play ----
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
      video.addEventListener('mouseover', function () {
          this.play();  
      });

      video.addEventListener('mouseout', function () {
          this.pause(); 
          this.currentTime = 0; 
      });
  });
});

// Footer Interaction
const footer = document.getElementById('site-footer');

footer.addEventListener('mouseover', () => {
  console.log('Thank you for visiting The Fieldstead!');
});

footer.addEventListener('mouseout', () => {
  console.log('We hope to see you again soon!');
});
