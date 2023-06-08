import { SingleArticle } from "./interfaces";

interface ArticlesReturn {
  status: string;
  totalResults: number;
  articles: SingleArticle[];
}

export const getArticlesApi = async (date: string, topic: string): Promise<ArticlesReturn> => {
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const endpoint = `https://newsapi.org/v2/everything?q=${topic}&from=${yesterday}&to=${date}&sortBy=popularity&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
  
  const response = await fetch(endpoint);
  
  if(!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
