import { useState } from "react";

const AddCategory = ({ onNewCategorie }) => {
  const [InputValue, setInputValue] = useState("");
  /*es event.target.value*/
  const InputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (InputValue.trim().length < 1) return;
    setInputValue("");
    onNewCategorie(InputValue.trim());
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={InputValue}
        onChange={InputChange}
      />
    </form>
  );
};

export { AddCategory };
