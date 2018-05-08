document.addEventListener('DOMContentLoaded', function() {
  
  // Getting the analyze button 
  var checkPageButton = document.getElementById('analyze');
  
  // Adding event listener for the analyze button
  checkPageButton.addEventListener('click', function() {

    // Getting the current selected chrome tab 
    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      // Creating a form 
      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';

      // Getting the URL and other details
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      
      // URL of the current tab
      i.value = tab.url;  

      // Adding the current tab url details to the form
      f.appendChild(i);

      // Adding form to the document body
      d.body.appendChild(f);

      // Submitting the form
      f.submit();
    });
  }, false);
}, false);