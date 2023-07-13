import axios from 'axios';

const API_KEY =
  'live_AYm3OFL5RsopcRxkS6vktyN1rahZysaNXWqUpYbk0YmAblViSMpWRz5uBAhpOooy';
const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `${BASE_URL}/images/search?breed_ids=${breedId}`;
  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching cat:', error);
      throw error;
    });
}
