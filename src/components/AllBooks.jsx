import History from "../data/history.json";
import Fantasy from "../data/fantasy.json";
import Scifi from "../data/scifi.json";
import Romance from "../data/romance.json";
import Horror from "../data/horror.json";

const allBooks = () => {
  let books = [];
  books.push(History);
  books.push(Fantasy);
  books.push(Scifi);
  books.push(Romance);
  books.push(Horror);
  return books;
};

export default allBooks();
