
import { useFecthGifs } from "../hooks/useFecthGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFecthGifs( category );

  console.log(images, isLoading);

  return (
    <>
    <div>
      <h3>{ category }</h3> 
      {
        isLoading && (<h2 >Cargando...</h2>)
      }
      

      <div className="card-grid">
      {
        images.map( (image) => (
          <GifItem key={image.id} 
          // Asi se manda todo el objeto al padre
          { ...image }
          ></GifItem>
        ))
      }
      </div>
    </div>
      
    </>
  )
}