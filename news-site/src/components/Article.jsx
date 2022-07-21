function Article({ title, created_date, abstract, byline, image }) {
  return (
    <div className="article">
      {image && <img src={image.url} />}
      <h1>{title}</h1>
      <p>{created_date}</p>
      {byline && <h2>{byline}</h2>}
      <p>{abstract}</p>
    </div>
  )
}

export default Article;
