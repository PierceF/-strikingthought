require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import { searchBooks } from "../components/booksapi";
import { searchCategories } from "../components/booksapi";
// searchCategories("1596983000");

const searchForm = document.querySelector("#search-books")
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    results.innerHTML = "";
    const keyword = document.querySelector("#keyword").value;
    searchBooks(keyword);
  });
