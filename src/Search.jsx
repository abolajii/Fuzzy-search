export const Search = ({ search, handlechange }) => {
  return (
    <div className="search-container">
      <div className="search">
        <h2> Search Now !</h2>
        <div className="input-container">
          <input
            value={search}
            onChange={handlechange}
            type="text"
            placeholder="search"
          />
        </div>
      </div>
    </div>
  );
};
