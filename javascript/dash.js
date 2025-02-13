// Get the sidebar and cross button elements
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.fa-xmark');

// Add an event listener to the cross button
closeButton.addEventListener('click', () => {
  // Toggle the sidebar's visibility
  sidebar.style.display = 'none';
});