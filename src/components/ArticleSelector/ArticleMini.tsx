import './ArticleMini.css'

interface ArticleMiniProps {
  id: number;
  title: string;
  image: string;
  setSelectedArticle: React.Dispatch<React.SetStateAction<number>>;
}
export const ArticleMini = ({id, title, image, setSelectedArticle} : ArticleMiniProps) => {
  return(
    <div className="mini-parent" onClick={() => setSelectedArticle(id)}>
      <img className='mini-thumbnail' src={image} alt='thumb' />
      <p className='mini-title'>{title}</p>
    </div>
  )
}
