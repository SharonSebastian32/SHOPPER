import "./newCollection.css";
import new_collections from "../../assets/new_collections.js";
import ItemCard from "../items/item.jsx";

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collection">
        {new_collections.map((item, i) => {
          return (
            <ItemCard
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
