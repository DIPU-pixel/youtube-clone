import React from "react";
import Button from "./button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="Gaming" />
      <Button name="Song" />
      <Button name="Music" />
      <Button name="Learnings" />
      <Button name="Comedy" />
      <Button name="Vlog" />
      <Button name="Race" />
    </div>
  );
};

export default ButtonList;
