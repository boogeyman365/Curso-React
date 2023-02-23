import { memo } from "react";

// Solo cuando la property value cambia es cuando se redibuje, con la funcion memo
export const Small = memo(({ value }) => {
  console.log('Me volví a dibujar :(');
  return (
    <small>{ value }</small>
  )
})
