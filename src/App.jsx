import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMore";
import ImageModal from "./components/ImageModal/ImageModal";
import getImages from "./api";
import Container from "./components/Container/Container";

export default function App() {
  const [images, setImages] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  function openModal(modalData) {
    setIsOpen(true);
    setModalData(modalData);
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  }

  useEffect(() => {
    async function handleSearch() {
      try {
        if (currentQuery !== "") {
          setIsLoading(true);
          setError(false);
          const imageData = await getImages(currentQuery, currentPage);
          if (currentPage === 1) {
            setTotalPages(imageData.total_pages);
          }
          setImages((prevImages) => [...prevImages, ...imageData.results]);
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
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <main>
        <Container notHeader>
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onOpenModal={openModal}
              setModalData={setModalData}
            />
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
          {images.length > 0 && !isLoading && currentPage !== totalPages && (
            <LoadMoreBtn onClick={handleLoadMoreBtnClick} />
          )}
          {modalIsOpen && (
            <ImageModal
              onCloseModal={closeModal}
              modalIsOpen={modalIsOpen}
              modalData={modalData}
            />
          )}
        </Container>
      </main>
    </div>
  );
}
