import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMore";
import getImages from "./api";

// Revise how I did this part of hw
// Add loader and error message
// Add modal
// Check requirements

export default function App() {
  const [images, setImages] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  useEffect(() => {
    async function handleSearch() {
      if (currentQuery !== "") {
        const imageData = await getImages(currentQuery, currentPage);
        if (currentPage === 1) {
          setImages(imageData.results);
        } else {
          setImages((prevImages) => [...prevImages, ...imageData.results]);
        }
        const maxPageNum = imageData["total_pages"];
        setShowLoadMoreBtn(currentPage < maxPageNum);
      }
    }

    handleSearch();
  }, [currentQuery, currentPage]);

  function handleSubmit(query) {
    setCurrentQuery(query);
  }

  function handleLoadMoreBtnClick() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {showLoadMoreBtn && <LoadMoreBtn onClick={handleLoadMoreBtnClick} />}
    </>
  );
}
