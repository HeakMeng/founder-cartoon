import Card from "../Card/Card";
import './cartList.css';

const CardList = ({ founders }) => {
  return (
    <div className="card-list">
      {founders.map(({ name, email, id }) => (
        <Card key={id} name={name} email={email} id={id} />
      ))}
    </div>
  );
};

export default CardList;