import "../../src/Pages/CSS/Shopcategory.css";
import { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import dropdownicon from "../../src/assets/dropdown_icon.png";
import ItemCard from "../Components/items/item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="Shop-Category">
      <img className="shopcategory-banner" src={props.banner} alt="Shop Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span>
          out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort By <img src={dropdownicon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory_product">
        {all_product.map((item, i) => {
 
          if (props.category === item.category) {
            return (
              <ItemCard
                key={i}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory_loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
