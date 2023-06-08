import { SingleArticle } from "../../interfaces";
import './ArticleDetails.css';
import { ArticleDetailsHeader } from "./ArticleDetailsHeader";

interface ArticleDetailsProps {
  articleDetails: SingleArticle;
}

export const ArticleDetails = ({articleDetails}: ArticleDetailsProps) => {

  return(
    <article className="article-details">
      <div className="details-a">
        <p className="details-title">{articleDetails.title}</p>
        <img className="article-img" src={articleDetails.urlToImage} alt="article-img"/>
      </div>
      <div className="details-b">
        <ArticleDetailsHeader source={articleDetails.source.name} author={articleDetails.author} date={articleDetails.publishedAt}/>
        <p>{articleDetails.description}</p>
        <p>{articleDetails.content}</p>
        <a href={articleDetails.url}>Read More...</a>
      </div>
    </article>
  );
}
