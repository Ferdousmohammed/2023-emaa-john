
import React from 'react';

const Mama = (props) => {
  const cards = props.cards;

  let total = 0;
  cards.forEach((element) => {
    total += element.price * element.quantity;
  });

  const ship = total > 35 ? 0 : total > 15 ? 6 : total > 0 ? 10 : 12;
  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + ship + parseFloat(tax)).toFixed(2);

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cards.length}</p>
      <p>Price: {total}</p>
      <p>Shipping: {ship}</p>
      <p>
        <small>Tax + VAT: {tax}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Mama;

