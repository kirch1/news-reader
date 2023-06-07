import './ArticleMini.css'

interface ArticleMiniProps {
  title: string;
  image: string;
}
export const ArticleMini = ({title, image} : ArticleMiniProps) => {
  return(
    <div className="mini-parent">
      <img className='mini-thumbnail' src={image} alt={title} />
      <p className='mini-title'>{title}</p>
    </div>
  )
}
