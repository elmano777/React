import { useState } from "react";
import { GifDrid,AddCategory } from "./components/indes";

const GitExpert = () => {
  const [categories, setCategories] = useState([""]);
  const OnAddCategories = (NewCategorie) => {
    if (categories.includes(NewCategorie)) return;
    setCategories([NewCategorie, ...categories]);
  };
  const MoreCategories = () => {
    const NewItem = "wazaaa";
    setCategories([NewItem, ...categories]);
  };
  return (
    <>
      {/*Titulo*/}
      <h1>Team Fortress 2</h1>
      {/*INPUT*/}
      <AddCategory onNewCategorie={OnAddCategories} />
      {/*GIF*/}
      <button onClick={MoreCategories}>Añadir</button>
      <ol>
        {categories.map((category) => (
          <GifDrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GitExpert;
