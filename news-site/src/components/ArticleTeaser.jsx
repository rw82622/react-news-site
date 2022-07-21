import { useState } from 'react'
import Article from './Article'

function ArticleTeaser({ article }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className='articleTeaser'>
      <span>{article.id}. </span>
      <span>
        <strong
          onClick={() => setShowDetails(!showDetails)}>{article.title}
        </strong>
      </span>
      <p className="date">{article.created_date}</p>
      <div>
        {showDetails && <Article {...article} />}
      </div>
    </div>
  )
}

export default ArticleTeaser;
