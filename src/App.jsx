import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMore";
import getImages from "./api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");

  useEffect(() => {
    setShowBtn(totalPages && totalPages !== currentPage);
  }, [currentPage, totalPages]);

  async function onSearchImages(query) {
    try {
      setImages([]);
      setError(false);
      setIsLoading(true);
      const res = await getImages(query, currentPage);
      setTotalPages(res.total);
      setCurrentPage(currentPage + 1);
      setImages(res.results);
      setCurrentQuery(query);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleShowMoreBtnClick() {
    try {
      setIsLoading(true);
      setCurrentPage(currentPage + 1);
      const res = await getImages(currentQuery, currentPage);
      setImages([...images, ...res.results]);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSubmit={onSearchImages} />
      {images.length > 0 && <ImageGallery images={images} />}
      {showBtn && <LoadMoreBtn onClick={handleShowMoreBtnClick} />}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
    </>
  );
}
