import toast, { Toaster } from "react-hot-toast";
import Container from "../Container/Container";
import css from "./SearchBar.module.css";

const notify = () =>
  toast.error("Fileds shouldn't be empty", {
    position: "top-right",
    duration: 2000,
  });

export default function SearchBar({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue =
      event.currentTarget.elements.searchTarget.value.trim("");
    if (searchValue === "") {
      notify();
    } else {
      onSubmit(searchValue);
      event.currentTarget.reset();
    }
  }

  return (
    <header className={css.header}>
      <Container>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            name="searchTarget"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster
            toastOptions={{
              style: {
                padding: "0.5rem",
                color: " #403234",
                backgroundColor: "#e2c2b3",
              },
            }}
          />
        </form>
      </Container>
    </header>
  );
}
