document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      // Check if the clicked element is an <li> element
      alert('Clicked on ' + event.target.innerText);
    }
  });
  