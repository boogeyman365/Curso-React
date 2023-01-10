import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }
  
  // useEffect es un efecto secundario cuando pasa algo, en este caso es un efecto secundario de cuando se crea o se destruye el componente al dejar el segundo parametro vacío
  useEffect(() => {
    getImages();
  }, [])

  return {
    images,
    isLoading
  }
  
}


