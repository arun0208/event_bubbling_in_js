document.getElementById('outer').addEventListener('click', function(event) {
    alert('Event capturing on outer: ' + event.currentTarget.id);
  }, true);
  
  document.getElementById('middle').addEventListener('click', function(event) {
    alert('Event capturing on middle: ' + event.currentTarget.id);
  }, true);
  
  document.getElementById('inner').addEventListener('click', function(event) {
    alert('Event capturing on inner: ' + event.currentTarget.id);
  }, true);
  
  document.getElementById('outer').addEventListener('click', function(event) {
    alert('Event bubbling on outer: ' + event.currentTarget.id);
  });
  
  document.getElementById('middle').addEventListener('click', function(event) {
    alert('Event bubbling on middle: ' + event.currentTarget.id);
  });
  
  document.getElementById('inner').addEventListener('click', function(event) {
    alert('Event bubbling on inner: ' + event.currentTarget.id);
  });
  