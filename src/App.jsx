import React, { useState } from "react";
import "./index.css";
import ListItems from "./ListItems";

const App = () => {
  const [value, setValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const putItem = () => {
    if (value.trim() === "") {
      alert("Plese Enter Todo Item");
    } else {
      setTodoItems((oldItems) => {
        return [...oldItems, value];
      });
    }
    setValue("");
  };

  const delItem = (id) => {
    setTodoItems((oldItems) => {
      return oldItems.filter((oldElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add item"
        onChange={handleInput}
        value={value}
      />
      <button className="btn" onClick={putItem}>
        +
      </button>
      <div className="todo-container">
        <ol>
          {todoItems.map((item, index) => {
            return (
              <ListItems
                item={item}
                key={index}
                id={index}
                onSelected={delItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
