import "./popular.css";
import dataProduct from "../../assets/data";
import ItemCard from "../../Components/items/item.jsx";
const popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popularItem">
        {dataProduct.map((item, i) => {
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

export default popular;
