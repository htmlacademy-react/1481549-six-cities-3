import gallery from '@data/mocks/gallery';

export default function Gallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {gallery.map((img) => (
          <div className="offer__image-wrapper" key={img}>
            <img className="offer__image" src={img} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
