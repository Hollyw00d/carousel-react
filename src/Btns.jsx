export default function Btns({ imageNum, images, handlePrev, handleNext }) {
  return (
    <div className="btns">
      {imageNum !== 0 && (
        <button className="prev" onClick={handlePrev}>
          Previous
        </button>
      )}
      {imageNum !== images.length - 1 && (
        <button className="next" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}
