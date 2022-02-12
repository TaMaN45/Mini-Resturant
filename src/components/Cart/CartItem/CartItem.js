import React from "react";
import { adjustItemQty } from "../../../redux/Shopping/shopping-actions";
import { connect } from "react-redux";

const CartItem = ({ item, count, adjustQty }) => {
  const handleAdd = () => {
    adjustQty(item.id, 1);
  };

  const handleSub = () => {
    if (item.qty > 0) adjustQty(item.id, -1);
  };

  if (!item.qty) return null;

  return (
    <div>
      <img src={item.image} alt={item.title} style={{ width: 200 }} />

      <div>
        <p>{item.title}</p>
        <p> Quantity: {item.qty}</p>
        <p>$ {item.price}</p>
      </div>

      <div>
        <button style={{ width: 20 }} onClick={handleAdd}>
          +
        </button>

        <button style={{ width: 20 }} onClick={handleSub}>
          -
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, qty) => dispatch(adjustItemQty(id, qty)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
