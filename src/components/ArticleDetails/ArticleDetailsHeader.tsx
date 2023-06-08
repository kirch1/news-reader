import './ArticleDetailsHeader.css'

interface ArticleDetailsHeaderProps {
  source: string;
  author: string;
  date: string;
}

export const ArticleDetailsHeader = ({source, author, date}: ArticleDetailsHeaderProps) => {
  return(
    <div className='adh'>
      <div className="adh-left">
        <p className='source'>{source}</p>
        <p>{author}</p>
      </div>
      <p>{new Date(date).toDateString()}</p>
    </div>
  )
}
