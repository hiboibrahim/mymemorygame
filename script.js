const accessKey = 'TG2TGsynwo0C05uWJ5lEOlHFTAX8B4nyFz7q5DLEogo';
const apiUrl = 'https://api.unsplash.com/collections/9525226/photos/?per_page=20';

fetch(apiUrl, {
  headers: {
    'Authorization': `Client-ID ${accessKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the data and set background images for your cards
    const cardElements = document.querySelectorAll('.card');
    for (let i = 0; i < cardElements.length; i++) {
      cardElements[i].style.backgroundImage = `url(${data[i].urls.regular})`;
    }
  })
  .catch(error => console.error(error));

 

