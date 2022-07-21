import ArticleTeaser from "../components/ArticleTeaser";

const Homepage = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <ArticleTeaser
                    article={article}
                    key={article.id}
                />))
            }
        </div>
    )
}

export default Homepage