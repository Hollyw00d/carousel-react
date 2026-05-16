export default function Slide({ image }) {
  return (
    <figure>
      <img src={image.src} alt={image.description} width="600" height="400" />
      <figcaption>{image.description}</figcaption>
    </figure>
  );
}
