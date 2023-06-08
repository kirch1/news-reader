import './Filters.css';

interface FiltersProps {
  date: string;
  category: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const Filters = ({date, category, setDate, setCategory}: FiltersProps) => {
  const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }

  const getCategoryOptions = () => {
    const categories = ['Sports', 'Gaming', 'Technology', 'Programming', 'Robotics'];
    return categories.map(category => <option value={category}>{category}</option>)
  }

  const max = new Date().toISOString().split('T')[0];
  return (
    <div>
      <input
        type="date" 
        defaultValue={date}
        max={max}
        id="news-date"
        name="news-date" 
        onChange={(e) => dateChange(e)}>
      </input>
      <select value={category} name='category' id='category-select' onChange={(e) => setCategory(e.target.value)}>
        {getCategoryOptions()}
      </select>
    </div>
  );
}
