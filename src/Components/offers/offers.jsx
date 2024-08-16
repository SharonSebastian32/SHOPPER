import "./offers.css";
import excimage from "../../assets/exclusive_image.png";
const offers = () => {
  return (
    <div className="offers">

      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={excimage} alt="" />

      </div>
    </div>
  );
};

export default offers;
