// import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import getImages from "./api";

export default function App() {
  // const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState([false]);
  // const [error, setError] = useState(false);

  async function onSearchImages(query) {
    try {
      // setError(false);
      // setIsLoading(true);
      const res = await getImages(query);
      // setImages(res.results);
    } catch (error) {
      console.error(error);
      // setError(true);
    }
  }

  return (
    <>
      <SearchBar onSubmit={onSearchImages} />
    </>
  );
}
