import { UseFetchGifs } from "../hooks/usefetchgifs";
import { GitItem } from "./gititem";

const GifDrid = ({ category }) => {
  const { Images, IsLoading } = UseFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {
        IsLoading&&(<h2>cargando....</h2>)
      }
      <div className="card-grid">
        {Images.map((Image) => (
          <GitItem key={Image.id} {...Image} />
        ))}
      </div>
    </>
  );
};

export { GifDrid };
