document.getElementById('itemList').addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete-btn')) {
      // Find the parent <li> element and remove it
      const listItem = event.target.closest('li');
      
      if (listItem) {
        listItem.remove();
      }
    }
  });
  