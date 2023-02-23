import { useRef, useLayoutEffect, useState } from "react";

export const Quote = ( {image, name} ) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });

  }, [image]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{display: 'flex'}}>
        <img ref={ pRef } className="rounded-circle mb-2" src={image} alt={ name } />
        <footer className="blockquote-footer">{ name }</footer>
      </blockquote>

      {/* <code>{JSON.stringify(boxSize)}</code> */}
    </>
    
  )
}
