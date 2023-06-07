import { useEffect, useState } from 'react';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';
import { ArticleSelector } from '../ArticleSelector/ArticleSelector';
import { SingleArticle } from '../../interfaces';
import './App.css';

function App() {
  const [articles, setArticles] = useState<SingleArticle[] | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch('./testdata.json');
        if(!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setArticles(data.articles);
      }catch(err) {
        console.log(err);
      }
    }
    
    getArticles();
  }, []);

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
