import { useState } from "react";
import { SingleArticle } from "../../interfaces";
import './ArticleDetails.css';

interface ArticleDetailsProps {
  articleDetails: SingleArticle
}

export const ArticleDetails = ({articleDetails}: ArticleDetailsProps) => {

  return(
    <article className="articles">
      <h3>{articleDetails.title}</h3>
    </article>
  );
}
