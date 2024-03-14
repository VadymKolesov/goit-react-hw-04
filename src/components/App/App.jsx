import { useEffect, useState } from "react";
import getPhotosByQuery from "../../api/unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        if (query === "") {
          return;
        }

        const data = await getPhotosByQuery(query, page);

        if (data.length <= 0) {
          return;
        }

        setIsVisible(true);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch {
        setIsVisible(false);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, query]);

  async function handleSearch(query) {
    setQuery(query);
    setIsLoading(true);
    setError(false);
    setPage(1);
    setPhotos([]);
  }

  function openModal(image) {
    setImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isVisible && <ImageGallery data={photos} onOpenModal={openModal} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {isVisible && !isLoading ? (
        <LoadMoreBtn
          onLoadMode={() => {
            setPage(page + 1);
          }}
        />
      ) : null}
      {image && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          url={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </>
  );
}
