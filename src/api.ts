import { SingleArticle } from "./interfaces";

interface ArticlesReturn {
  status: string;
  totalResults: number;
  articles: SingleArticle[];
}

export const getArticlesApi = async (topic: string): Promise<ArticlesReturn> => {
  console.log(process.env.REACT_APP_API_KEY)
  const endpoint = `https://newsapi.org/v2/everything?q=${topic}&from=2023-06-06&to=2023-06-06&sortBy=popularity&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
  
  const response = await fetch(endpoint);
  
  if(!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
