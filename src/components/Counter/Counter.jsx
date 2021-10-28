import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = `Вы нажали ${count} раз`;
    alert(`Вы нажали ${count} раз`);
  });
  const updateCount = () => {
    setCount(count + 1);
  };
  const updateText=()=>{
      
  }
  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={updateCount}>Нажми на меня</button>
    </div>
  );
};
export default Counter;
