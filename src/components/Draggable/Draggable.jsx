import s from "./Draggable.module.css";
import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { randomColor } from "randomcolor";
import Draggable from "react-draggable";

const DraggableTodo = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const newItem = () => {
    console.log(item);
    if (item.trim !== "") {
      const newItem = {
        id: v4(),
        item,
        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: {
          x: 500,
          y: -500,
        },
      };
      setItems((items) => [...items, newItem]);
      setItem("");
    } else {
      alert("Enter something!!!");
      setItem("");
    }
  };
  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const updatePos = (data, index) => {
    let newArray = [...items];
    newArray[index].defaultPos = {
      x: data.x,
      y: data.y,
    };
    setItems(newArray);
  };
  return (
    <div>
      <div className={s.wrapper}>
        <input
          value={item}
          type="text"
          placeholder="Enter something..."
          onChange={(e) => setItem(e.target.value)}
        />
        <button className={s.enter} onClick={newItem}>
          Enter
        </button>
      </div>

      {items.map((item, index) => {
        return (
          <Draggable
            key={index}
            defaultPosition={item.defaultPos}
            onStop={(_, data) => {
              updatePos(data, index);
            }}
          >
            {
              <div
                className={s.todo__item}
                style={{ backgroundColor: item.color }}
              >
                {`${item.item}`}
                <button
                  className={s.delete}
                  onClick={() => deleteNote(item.id)}
                >
                  x
                </button>
              </div>
            }
          </Draggable>
        );
      })}
    </div>
  );
};
export default DraggableTodo;
