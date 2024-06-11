import { setDogPicture } from "./dom-helpers.js"

export const fetchNewDog = () => {
  console.log('fetching a new dog');
  // 1. fetch
  // 2. check if the response is ok
  // 3. parse the response body
  // 4. use the response body to set the dog picture
  // 5. handle errors
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch a new dog');
      }
      return response.json();
    })
    .then(data => {
      setDogPicture(data.message);
    })
    .catch(error => {
      console.error(error);
    })
}