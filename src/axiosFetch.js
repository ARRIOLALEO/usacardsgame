import axios from "axios";

// https://axios-http.com/

const IMAGES_API = "https://api.unsplash.com/photos";
// authentication(key) or authorization(access control)
const API_KEY = "67dzJ6HsOJ0oE9moFGN9_AGJ-de6jwkL-CAULtu3QWg";
const NUMBER_OF_IMAGES = 12;
const twelveImagesUrl = `${IMAGES_API}/?client_id=${API_KEY}&per_page=${NUMBER_OF_IMAGES}`;

// GET - to READ data
export const getImages = async () =>
  axios.get(twelveImagesUrl).then(({data}) => {

    return data.map(img => img.urls.small)
    });

// Fetch example
export const fetchExample = async () =>
  fetch(twelveImagesUrl).then((response) =>
    response.json().then((data) => console.log("fetch", { data }))
  )(
    // using async await
    async () => {
      const response = await fetch(twelveImagesUrl);
      const data = await response.json();
      console.log("async fetch", { data });
    }
  )();