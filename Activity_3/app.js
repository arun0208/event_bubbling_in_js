document.getElementById('accordionMenu').addEventListener('click', function(event) {
    // Check if the clicked element is a section header
    if (event.target.classList.contains('section-header')) {
      // Toggle the visibility of the corresponding section content
      const sectionContent = event.target.nextElementSibling;
      sectionContent.style.display = (sectionContent.style.display === 'none' || sectionContent.style.display === '') ? 'block' : 'none';
  
      // Prevent the click event from bubbling up to the body
      event.stopPropagation();
    }
  });
  