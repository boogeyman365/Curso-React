export const Quote = ( {image, name} ) => {
  return (
    <>
      <blockquote className="blockquote text-end" >
        <img className="rounded-circle mb-2" src={image} alt={ name } />
        <footer className="blockquote-footer">{ name }</footer>
      </blockquote>
    </>
    
  )
}
