export default function handleLoadMoreScroll(el) {
  const top = el.getBoundingClientRect().height * 2;
  console.log(top);
  window.scrollBy({
    top,
    behavior: "smooth",
  });
}
