// import "./../assets/css/Input.css";

import { useState } from "react";

export default function Input({ name, type, setValue, datas, min, max }) {
  // cas d'un texte
  if (
    type === "text" ||
    type === "date" ||
    type === "password" ||
    type === "email"
  ) {
    return (
      <>
        <div className="inputContainer">
          <label className="inputLabel" htmlFor={`id_${name}`}>
            {name} :{" "}
          </label>
          <input
            className="inputComponent"
            type={type}
            name={name}
            placeholder={`Votre ${name}`}
            id={`id_${name}`}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      </>
    );
  }
  // cas du radio ou checkbox
  if (type === "radio" || type === "checkbox") {
    const boxes = datas.map((data, i) => {
      return (
        <>
          <input
            key={i}
            type={type}
            name={name}
            id={data}
            value={data}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            // checked={value === data}
          />{" "}
          <label htmlFor={data}>{data}</label>
        </>
      );
    });
    return (
      <div className="boxs">
        <span className="inputLabel">Votre {name} : </span>
        {boxes}
      </div>
    );
  }
  //cas du number ////////////////////////// ne fonctionne pas
  // const [qty, setQty] = useState("");

  // const handleChangeNumber = (e) => {
  //   const newValue = e.target.value;
  //   if (!isNaN(newValue) || newValue === "") {
  //     setQty(newValue);
  //     if (setValue) {
  //       setValue(qty);
  //     }
  //   }
  // };
  // if (type === "number") {
  //   return (
  //     <input
  //       type={type}
  //       id={`id_${name}`}
  //       name={name}
  //       min={min}
  //       max={max}
  //       value={qty}
  //       onChange={handleChangeNumber}
  //     ></input>
  //   );
  // }
}
