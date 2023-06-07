import { SingleArticle } from '../../interfaces';
import { ArticleMini } from './ArticleMini';
import './ArticleSelector.css';

interface ArticleSelectorProps {
  articles: SingleArticle[]
}

export const ArticleSelector = ({articles}: ArticleSelectorProps) => {
  const getMiniSelectors = () => {
    return articles.map(article => <ArticleMini title={article.title} image={article.urlToImage}/>)
  }

  return (
    <div className='articles-selector'>
      {getMiniSelectors()}
    </div>
  )
}
