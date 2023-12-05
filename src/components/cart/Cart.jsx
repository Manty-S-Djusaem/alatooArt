import React, { useContext } from 'react';
import { ContextBox } from '../../App';
import module from './Cart.module.scss';

const Product = ({ item, index }) => {
  const [box, setBox] = useContext(ContextBox);

  const handleQuantityChange = (index, operation) => {
    const newBox = [...box];
    const product = newBox[index];

    if (operation === 'add') {
      product.quantity += 1;
      if (typeof product.price === 'number' && !isNaN(product.price)) {
        product.totalPrice = product.quantity * product.price;
      } else {
        console.log('Ошибка: неверное значение цены товара');
        product.totalPrice = 0; // Установка общей стоимости в 0
      }
    } else if (operation === 'subtract' && product.quantity > 1) {
      product.quantity -= 1;
      if (typeof product.price === 'number' && !isNaN(product.price)) {
        product.totalPrice = product.quantity * product.price;
      } else {
        console.log('Ошибка: неверное значение цены товара');
        product.totalPrice = 0; // Установка общей стоимости в 0
      }
    }

    setBox(newBox);
  };

  const removeItem = (index) => {
    const newBox = [...box];
    newBox.splice(index, 1);
    setBox(newBox);
  };

  return (
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
        <div className={module.price}>{item.price}som</div>
        <div className={module.pr}>
          <button
            className={module.minus}
            onClick={() => handleQuantityChange(index, 'subtract')}
          >
            -
          </button>
          <span className={module.quantity}>{item.quantity}</span>
          <button
            className={module.plus}
            onClick={() => handleQuantityChange(index, 'add')}
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
  );
};

const Cart = () => {
  const [box] = useContext(ContextBox);

  const totalCost = box.reduce((total, item) => total + item.totalPrice, 0);

  const allProducts = box.map((item, index) => (
    <Product key={index} item={item} index={index} />
  ));

  return (
    <div className={module.container}>
      <h2 className={module.text1}>Корзина</h2>
      <span className={module.numItems}>Количество товаров: {box.length}</span>
      <div className={module.products}>{allProducts}</div>
    </div>
  );
};

export default Cart;
