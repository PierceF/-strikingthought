require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import { searchBooks } from "../components/booksapi";
// searchBooks("harry potter");

const searchForm = document.querySelector("#search-books")
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    results.innerHTML = "";
    const keyword = document.querySelector("#keyword").value;
    searchBooks(keyword);
  });
