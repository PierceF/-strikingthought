
const searchBooks = (keyword) => {
  const apiUrl = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=WRvzIEewNhhZlwTPqmN2fA&q=${keyword}`

  fetch(apiUrl)
        .then(response => response.text())
        .then((data) => {
          let parser = new DOMParser(),
          xmlDoc = parser.parseFromString(data, 'text/xml');
          Array.prototype.forEach.call(xmlDoc.getElementsByTagName('image_url'), (image) => {
            console.log(image.innerHTML);
            console.log(image.parentElement.getElementsByTagName('title')[0].innerHTML);
            const newBook = `<li>
              <img src="${image.innerHTML}" />
              <p>${image.parentElement.getElementsByTagName('title')[0].innerHTML}</p>
            </li>`
            results.insertAdjacentHTML('beforeend', newBook)
          });
        });
};

export { searchBooks };
// console.log(xmlDoc.getElementsByTagName('image_url'));
