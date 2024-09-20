import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [Tasks, setTasks] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [indexValue, setindexValue] = useState(null);
  const [EditinputValue, setEditinputValue] = useState("");

  const AddValue = () => {
    if (inputValue) {
      setTasks([...Tasks, { name: inputValue, address: false }]);
      setinputValue("");
    }
  };

  const DeleteValue = (index) => {
    let data = Tasks.filter((data, i) => i !== index);
    setTasks(data);
  };

  const EditValue = (index) => {
    setindexValue(index);
    setEditinputValue(Tasks[index].name);
  };

  const UpdateValue = (index) => {
    if (EditinputValue) {
      let updateValu = [...Tasks];
      updateValu[index].name = EditinputValue;
      setTasks(updateValu);
      setEditinputValue("");
      setindexValue(null);
    }
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>

      <input
        type="text"
        placeholder="enter name ..."
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button onClick={AddValue}>Add item</button>
      <ul>
        {Tasks?.map((data, index) => (
          <li key={index}>
            {indexValue === index ? (
              <>
                <input
                  type="text"
                  placeholder="enter name ..."
                  value={EditinputValue}
                  onChange={(e) => setEditinputValue(e.target.value)}
                />
                <button onClick={() => UpdateValue(index)}>Update item</button>
              </>
            ) : (
              <>
                <p>{data?.name}</p>
                <p>{data?.address}</p>
                <button onClick={() => DeleteValue(index)}>Delete</button>
                <button onClick={() => EditValue(index)}>Edit item</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Log to console
console.log("Hello console");
