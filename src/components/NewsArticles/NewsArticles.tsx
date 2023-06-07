import { Article } from "./Article";
import './NewsArticles.css';

export const NewsArticles = () => {
  return(
    <section className="articles">
      <Article />
      <Article />
      <Article />
    </section>
  );
}
