import { useState } from "react";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    if (name.trim() !== "") {
      setList([...list, name]);
      setName("");
    }
  }
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Add name</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default AddUsers;
