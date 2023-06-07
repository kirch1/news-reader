import { NavBar } from '../NavBar/NavBar';
import { NewsArticles } from '../NewsArticles/NewsArticles';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>News Reader</h1>
      <main>
        <NavBar />
        <NewsArticles />
      </main>
    </div>
  );
}

export default App;
