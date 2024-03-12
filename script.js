document.getElementById('extractBtn').addEventListener('click', function() {
  const inputContent = document.getElementById('inputArea');
  const links = inputContent.querySelectorAll('a[href]');
  const urlList = document.getElementById('urlList');
  
  // Clear previous results
  urlList.innerHTML = '';
  
  // Create a list of URLs
  links.forEach(link => {
    const url = link.getAttribute('href');
    const listItem = document.createElement('div');
    listItem.textContent = url;
    urlList.appendChild(listItem);
  });
  
  if(links.length === 0) {
    urlList.textContent = 'No URLs found.';
  }
});