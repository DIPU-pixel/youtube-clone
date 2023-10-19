import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-4 py-1 rounded-lg m-3 bg-gray-200">{name}</button>
    </div>
  );
};

export default Button;
