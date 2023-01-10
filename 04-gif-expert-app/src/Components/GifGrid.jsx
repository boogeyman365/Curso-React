
import { useFecthGifs } from "../hooks/useFecthGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFecthGifs( category );

  console.log(images, isLoading);
  // const [images, setImages] = useState([]);

  // const getImages = async() => {
  //   const newImages = await getGifs( category );
  //   setImages(newImages);
  // }

  // // useEffect es un efecto secundario cuando pasa algo, en este caso es un efecto secundario de cuando se crea o se destruye el componente al dejar el segundo parametro vacío
  // useEffect(() => {
  //   getImages();
  // }, [])
  
  

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