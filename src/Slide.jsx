export default function Slide({ image }) {
  return (
    <figure>
      {image?.src && image?.description ? (
        <>
          <img
            src={image.src}
            alt={image.description}
            width="600"
            height="400"
          />
          <figcaption>{image.description}</figcaption>
        </>
      ) : (
        <>
          <div className="image-not-found-placeholder"></div>
          <figurecaption>Image not found</figurecaption>
        </>
      )}
    </figure>
  );
}
