import List from "./List";

const Lists = ({ listSearch }) => {
  return (
    <div>
      {listSearch.map(({ title, author }, index) => {
        const { firstName, lastName } = author;

        return (
          <List
            key={index}
            title={title}
            firstName={firstName}
            lastName={lastName}
          />
        );
      })}
    </div>
  );
};

export default Lists;
