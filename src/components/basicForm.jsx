import React, { useState } from "react";
const Form = () => {
  const [kaczka, setKaczka] = useState("");
  const handleSubmit = (e) => {
    console.log("sent handleSubmit with:", kaczka);
    setKaczka("");
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log("handleChange triggered");
    setKaczka(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="kaczka"
        onChange={handleChange}
        placeholder="Title"
        value={kaczka}
      />
    </form>
  );
};
export default Form;