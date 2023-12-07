import { ContextBox } from '../../App';
import React, { useContext, useState, useEffect } from 'react';
import module from './Cart.module.scss';

const Product = ({ item, index }) => {
  const [box, setBox] = useContext(ContextBox);
  
};

const Cart = () => {
  const [box, setBox] = useContext(ContextBox); 
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let itemsCount = 0;
    let totalPrice = 0;

    for (let i = 0; i < box.length; i++) {
        const count = box[i].count || 1;
        itemsCount += count;
        totalPrice += Number(box[i].price) * count;
        console.log( totalPrice);
    }

    setTotalItems(itemsCount);
    setTotalPrice(totalPrice);
}, [box]);

const handleIncrease = (index) => {
  const updatedBox = [...box];
  updatedBox[index].count = (updatedBox[index].count || 1) + 1;
  setBox(updatedBox);
};

const handleDecrease = (index) => {
  const updatedBox = [...box];

  if (updatedBox[index].count > 1) {
      updatedBox[index].count -= 1;
      setBox(updatedBox);
  }
};

const removeItem = (index) => {
  const newBox = [...box];
  newBox.splice(index, 1);
  setBox(newBox);
};

  // const totalCost = box.reduce((total, item) => total + item.totalPrice, 0);

  const allProducts = box.map((item, index) => (
    <div className={module.maincards}>
      <div className={module.photo}>
        <div className={module.line2}>
          <img src={item.image} alt='' />
        </div>
      </div>
      <div className={module.cardbody}>
        <div className={module.name}>
          <h3>{item.title}</h3>
        </div>
        <div className={module.price}>{item.price * (item.count || 1)}som</div>
        <div className={module.pr}>
          <button className={module.minus} onClick={() => handleDecrease(index)}>
            -
          </button>
          <input  className={module.quantity}  value={item.count || 1} readOnly />
          <button
            className={module.plus}
            onClick={() => handleIncrease(index)}
          >
            +
          </button>
          <button className={module.btncart} onClick={() => removeItem(index)}>
            УДАЛИТЬ
          </button>
        </div>
        <div className={module.line}></div>
      </div>
    </div>
  ));

  return (
    <div className={module.container}>
      <h2 className={module.text1}>Корзина</h2>
      <span className={module.numItems}>Количество товаров: {totalItems}</span>
      <span className={module.numItems}>Итого: {totalPrice}</span>
      <div className={module.products}>{allProducts}</div>
    </div>
  );
};

export default Cart;