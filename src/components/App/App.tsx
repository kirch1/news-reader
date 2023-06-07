import { useState } from 'react';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';
import { ArticleSelector } from '../ArticleSelector/ArticleSelector';
import { SingleArticle } from '../../interfaces';
import './App.css';

function App() {
  const [articles, setArticles] = useState<SingleArticle[] | null>(null);
  return (
    <div className="App">
      <h1>News Reader</h1>
      <main>
        {articles && <ArticleSelector articles={articles}/>}
        {articles && <ArticleDetails articleDetails={articles[0]}/>}
      </main>
    </div>
  );
}

export default App;
