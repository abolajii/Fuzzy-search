import Lists from "./Lists";
import { Search } from "./Search";
import "./styles.css";
import Fuse from "fuse.js";
import { useState } from "react";
import lists from "./list.json";

export default function App() {
  const [search, setSearch] = useState("");

  const handlechange = (e) => {
    setSearch(e.target.value);
  };

  const options = {
    keys: ["title", "author.firstName", "author.lastName"],
    includeScore: true
  };

  const fuse = new Fuse(lists, options);

  const searchResults = fuse.search(search);

  const listSearch = search
    ? searchResults.map((result) => result.item)
    : lists;

  return (
    <div className="App">
      <Search handlechange={handlechange} search={search} />
      <Lists listSearch={listSearch} />
    </div>
  );
}
