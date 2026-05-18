export default function Breadcrumbs({
  images,
  imageNum,
  setIsPrevNextBtnClick,
  handlePagination
}) {
  return (
    <ul className="breadcrumbs">
      {images.map((image, i) => {
        const num = i + 1;
        const activeClass = imageNum === i ? 'active' : '';

        return (
          <li key={image.src}>
            <button
              className={activeClass}
              onClick={() => handlePagination(num)}
              aria-label={`Show slide number ${num}`}
              tabIndex={0}
            >
              {num}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
