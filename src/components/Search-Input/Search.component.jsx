import './serch-input.style.css';

const Search = ({onChangeHandlers}) => {
  return (
    <div>
      <input className='search-box-container'
      type="search" onChange={onChangeHandlers}
      placeholder="Search founders..."
      />
    </div>
  );
};

export default Search;
