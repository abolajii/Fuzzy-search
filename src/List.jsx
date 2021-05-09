const List = ({ title, lastName, firstName }) => {
  return (
    <div className="title-Container">
      <h4>{title}</h4>
      <div>
        <span>{firstName}</span> <span>{lastName}</span>
      </div>
    </div>
  );
};

export default List;
