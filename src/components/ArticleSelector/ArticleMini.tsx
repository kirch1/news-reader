import './ArticleMini.css'

interface ArticleMiniProps {
  id: number;
  title: string;
  image: string;
  setSelectedArticle: React.Dispatch<React.SetStateAction<number>>;
  selectedArticle: number;
}
export const ArticleMini = ({id, title, image, setSelectedArticle, selectedArticle} : ArticleMiniProps) => {
  const isSelected = id === selectedArticle;
  const divclass = "mini-parent" + (isSelected ? " isSelected" : "");
  return(
    <div className={divclass} onClick={() => setSelectedArticle(id)}>
      <img className='mini-thumbnail' src={image} alt='thumb' />
      <p className='mini-title'>{title}</p>
    </div>
  )
}
