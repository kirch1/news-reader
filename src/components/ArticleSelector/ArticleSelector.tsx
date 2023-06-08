import { SingleArticle } from '../../interfaces';
import { ArticleMini } from './ArticleMini';
import './ArticleSelector.css';

interface ArticleSelectorProps {
  articles: SingleArticle[];
  setSelectedArticle: React.Dispatch<React.SetStateAction<number>>
}

export const ArticleSelector = ({articles, setSelectedArticle}: ArticleSelectorProps) => {
  const getMiniSelectors = () => {
    return articles.map((article, i) => {
      return <ArticleMini 
        key={i} 
        id={i}
        title={article.title}
        image={article.urlToImage}
        setSelectedArticle={setSelectedArticle}/>
    })
  }

  return (
    <div className='articles-selector'>
      {getMiniSelectors()}
    </div>
  )
}
