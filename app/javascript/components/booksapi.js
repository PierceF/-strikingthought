// require('dotenv').config();
import { GOODREADS_API_KEY } from "../../../.env";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(i, element) {
  await sleep(5000 * i)
  searchCategories(element)
}

const searchBooks = (keyword) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${keyword}`

  fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
          const iterator = data.items.values();
          let collection = [];
        try
        {
          for (const value of iterator) {
            const isbn = value.volumeInfo.industryIdentifiers[1].identifier;
            console.log(isbn);
            collection.push(isbn);
          }
        }
          catch(err) { /* do nothing */ }
          console.log(collection);
          collection.forEach((element, i) => {
            demo(i, element)
          });
        });
};

const searchCategories = (isbn) => {
  const apiUrl = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/isbn/${isbn}?key=${GOODREADS_API_KEY}`
  // test apikey https://www.goodreads.com/book/isbn/1596983000?key=xQXvrwOTLq7xonOLcjt2A
  fetch(apiUrl)
        .then(response => response.text())
        .then((data) => {
          let parser = new DOMParser(),
          xmlDoc = parser.parseFromString(data, 'text/xml');
          let genres = [];
          Array.prototype.forEach.call(xmlDoc.getElementsByTagName('shelf'), (categories) => {
            // console.log(categories);
            genres.push(categories.attributes.name.value);
          });
            console.log(genres.includes('nonfiction') || genres.includes('non-fiction'));
            console.log(genres);
        });
};

// const searchBooks = (keyword) => {
//   const apiUrl = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=WRvzIEewNhhZlwTPqmN2fA&q=${keyword}`

//   fetch(apiUrl)
//         .then(response => response.text())
//         .then((data) => {
//           let parser = new DOMParser(),
//           xmlDoc = parser.parseFromString(data, 'text/xml');
//           Array.prototype.forEach.call(xmlDoc.getElementsByTagName('image_url'), (image) => {
//             console.log(image.innerHTML);
//             console.log(image.parentElement.getElementsByTagName('title')[0].innerHTML);
//             const newBook = `<li>
//               <img src="${image.innerHTML}" />
//               <p>${image.parentElement.getElementsByTagName('title')[0].innerHTML}</p>
//             </li>`
//             results.insertAdjacentHTML('beforeend', newBook)
//           });
//         });
// };

export { searchBooks };
export { searchCategories };
// console.log(xmlDoc.getElementsByTagName('image_url'));
