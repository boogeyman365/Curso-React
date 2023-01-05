import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  // useEffect es un efecto secundario cuando pasa algo, en este caso es un efecto secundario de cuando se crea o se destruye el componente al dejar el segundo parametro vacío
  useEffect(() => {
    getImages();
  }, [])
  
  

  return (
    <>
    <div>
      <h3>{ category }</h3> 
      <ol className="card-grid">
      {
        images.map( ({url, id, title}) => (
          <li key={id} className="card">
            <img src={url}></img>
            <p>{ title }</p>
          </li>
        ))
      }
      </ol>
    </div>
      
    </>
  )
}