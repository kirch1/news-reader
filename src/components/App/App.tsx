import { useEffect, useState } from 'react';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';
import { ArticleSelector } from '../ArticleSelector/ArticleSelector';
import { SingleArticle } from '../../interfaces';
import './App.css';
import { getArticlesApi } from '../../api';

function App() {
  const [articles, setArticles] = useState<SingleArticle[] | null>(null);
  const [selectedArticle, setSelectedArticle] = useState(0);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await getArticlesApi('google');
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
        {articles && <ArticleSelector articles={articles} setSelectedArticle={setSelectedArticle} selectedArticle={selectedArticle}/>}
        {articles && <ArticleDetails articleDetails={articles[selectedArticle]}/>}
      </main>
    </div>
  );
}

export default App;
