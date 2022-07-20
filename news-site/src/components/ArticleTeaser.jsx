function ArticleTeaser({ id, title, created_date, handleTitleClick }) {

  return (
    <div className='hstack gap-2'>
      <p><a onClick={() => handleTitleClick({ id })}><strong>{title}</strong></a> ({created_date})</p>
    </div>
  )
}

export default ArticleTeaser;
