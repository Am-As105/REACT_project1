import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list, text]); 
    setText(""); 
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

 export default App;