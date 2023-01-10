
export const GifItem = ({url, id, title}) => {
  return (
    <div key={id} className="card">
        <img src={url} alt={title}></img>
        <p>{ title }</p>
    </div>
  )
}
