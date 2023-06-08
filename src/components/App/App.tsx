import { useEffect, useState } from 'react';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';
import { ArticleSelector } from '../ArticleSelector/ArticleSelector';
import { SingleArticle } from '../../interfaces';
import { getArticlesApi } from '../../api';
import './App.css';
import { Filters } from '../Filters/Filters';

function App() {
  const [articles, setArticles] = useState<SingleArticle[] | null>(null);
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [category, setCategory] = useState('sports');

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await getArticlesApi(date, category);
        setArticles(data.articles);
      }catch(err) {
        console.log(err);
      }
    }
    
    getArticles();
  }, [date, category]);

  return (
    <div className="App">
      <div className='app-top-bar'>
        <h1>News Reader</h1>
        <Filters date={date} category={category} setDate={setDate} setCategory={setCategory}/>
      </div>
      <main>
        {articles && <ArticleSelector articles={articles} setSelectedArticle={setSelectedArticle} selectedArticle={selectedArticle}/>}
        {articles && <ArticleDetails articleDetails={articles[selectedArticle]}/>}
      </main>
    </div>
  );
}

export default App;
