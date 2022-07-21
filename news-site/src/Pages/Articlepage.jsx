import Article from '../components/Article'
import { useParams } from 'react-router-dom'

const Articlepage = ({ getArticleById }) => {
    let { articleID } = useParams()
    let article = getArticleById(articleID - 1)
    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default Articlepage