import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

const breedSelect = document.querySelector('.breed-select');
const catInfoDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

breedSelect.style.display = 'none';
catInfoDiv.style.display = 'none';
hideError();

fetchBreeds(BASE_URL)
  .then(breeds => {
    hideLoader();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    breedSelect.style.display = 'block';
  })
  .catch(error => {
    console.error('Error:', error);
    hideLoader();
    showError();
  });

breedSelect.addEventListener('change', event => {
  const selectedBreedId = event.target.value;
  if (selectedBreedId) {
    showLoader();
    hideError();
    fetchCatByBreed(selectedBreedId)
      .then(catData => {
        hideLoader();
        displayCatInfo(catData[0]);
      })
      .catch(error => {
        console.error('Error:', error);
        hideLoader();
        showError();
      });
  } else {
    clearCatInfo();
  }
});

function displayCatInfo(catData) {
  clearCatInfo();

  const catImage = document.createElement('img');
  catImage.src = catData.url;
  catImage.classList.add('cat-image');
  const breedName = document.createElement('h2');
  breedName.textContent = catData.breeds[0].name;
  breedName.classList.add('breed-name');
  const description = document.createElement('p');
  description.textContent = catData.breeds[0].description;
  description.classList.add('breed-description');
  const temperament = document.createElement('p');
  temperament.textContent = `Temperament: ${catData.breeds[0].temperament}`;
  temperament.classList.add('breed-temperament');

  catInfoDiv.appendChild(catImage);
  catInfoDiv.appendChild(breedName);
  catInfoDiv.appendChild(description);
  catInfoDiv.appendChild(temperament);

  catInfoDiv.style.display = 'block';
}

function clearCatInfo() {
  catInfoDiv.innerHTML = '';
  catInfoDiv.style.display = 'none';
}
