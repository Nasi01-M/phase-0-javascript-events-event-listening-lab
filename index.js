
function addingEventListener() {
    const input = document.getElementById('input');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  // Call the outer function to execute addEventListener() and activate the event listener
  addingEventListener();
  
  // Exporting the function for testing purposes
  module.exports = addingEventListener;
  