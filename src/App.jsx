import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="name"
          value={name}
        />
      </form>
    </div>
  );
};

export default App;
