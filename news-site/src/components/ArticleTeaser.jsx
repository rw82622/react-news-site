import { useState } from 'react'
import Article from './Article'

function ArticleTeaser({ article }) {

  return (
    <div className='articleTeaser'>
      <span>{article.id + 1}. </span>
      <span>
        <a href={`#/articles/${article.id + 1}`}><strong>
          {article.title}
        </strong>
        </a>
      </span>
      <p className="date">{article.created_date}</p>
    </div>
  )
}

export default ArticleTeaser;
