// Function to update the visible authors based on search and filters
function updateAuthorDisplay() {
  const searchQuery = document.getElementById('search-author').value.toLowerCase();
  const categoryFilter = document.getElementById('category').value;
  const authors = document.querySelectorAll('.author-card');
  authors.forEach(author => {
    const authorName = author.querySelector('.author-name').textContent.toLowerCase();
    const authorCategory = author.dataset.category || 'all';

    // Show or hide authors based on search query and selected category
    if ((authorName.includes(searchQuery) || searchQuery === '') && (categoryFilter === 'all' || authorCategory === categoryFilter)) {
      author.style.display = 'block'; 
    } else {
      author.style.display = 'none'; 
    }
  });
}

// Debounced search function for better performance
let debounceTimer;
document.getElementById('search-author').addEventListener('input', function() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(updateAuthorDisplay, 500); 
});

// Event listener for category change
document.getElementById('category').addEventListener('change', updateAuthorDisplay);
document.addEventListener('DOMContentLoaded', updateAuthorDisplay);
document.querySelectorAll('.author-card').forEach(card => {
  card.addEventListener('mouseover', function() {
    console.log(`You are viewing the profile of ${card.querySelector('.author-name').textContent}`);
  });
});

document.querySelectorAll('.author-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});
