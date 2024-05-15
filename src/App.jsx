import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMore";
import ImageModal from "./components/ImageModal/ImageModal";
import getImages from "./api";

// Add modal
// Check requirements
// Check my code
// Style

export default function App() {
  const [images, setImages] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function handleSearch() {
      try {
        if (currentQuery !== "") {
          setIsLoading(true);
          const imageData = await getImages(currentQuery, currentPage);
          if (currentPage === 1) {
            setImages(imageData.results);
          } else {
            setImages((prevImages) => [...prevImages, ...imageData.results]);
          }
          const maxPageNum = imageData["total_pages"];
          setShowLoadMoreBtn(currentPage < maxPageNum);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    handleSearch();
  }, [currentQuery, currentPage]);

  function handleSubmit(query) {
    setCurrentQuery(query);
    setCurrentPage(1);
    setImages([]);
  }

  function handleLoadMoreBtnClick() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {showLoadMoreBtn && <LoadMoreBtn onClick={handleLoadMoreBtnClick} />}
      {modalIsOpen && <ImageModal onCloseModal={closeModal} />}
    </>
  );
}
