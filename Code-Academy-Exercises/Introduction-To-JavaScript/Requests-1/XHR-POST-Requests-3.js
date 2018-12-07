// Information to reach API
const apiKey = '58c1eb30ab7444f6bec0eeb9c868c517';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value();
  const data = JSON.stringify({destination: urlToShorten});
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) { renderResponse(xhr.response); 
    }
  };
  
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json'); xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
  
};


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// How to make a POST request to the Rebrandly API to shorten a URL