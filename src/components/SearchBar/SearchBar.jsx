import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Fileds shouldn't be empty");

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="searchTarget"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
