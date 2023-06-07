import './ArticleMini.css'

interface ArticleMiniProps {
  title: string;
  image: string;
}
export const ArticleMini = ({title, image} : ArticleMiniProps) => {
  return(
    <div className="mini-parent">
      <img className='mini-thumbnail' src={image} alt='thumb' />
      <p className='mini-title'>{title}</p>
    </div>
  )
}
