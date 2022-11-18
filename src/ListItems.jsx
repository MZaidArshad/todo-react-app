import React from "react";

const ListItems = (props) => {
  return (
    <div className="itemDiv">
      <i
        className="fa-solid fa-circle-xmark"
        onClick={() => {
          props.onSelected(props.id);
        }}
      ></i>
      <li>{props.item}</li>
    </div>
  );
};

export default ListItems;
