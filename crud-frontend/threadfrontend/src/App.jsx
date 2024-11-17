import { useState, useEffect } from 'react';
import Axios from 'axios'; 
import './App.css';

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [newFoodName, setNewFoodName] = useState("");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3000/insert", {
      foodName: foodName,
      days: days,
    });
  };

  const updateFood = (id) => {
    Axios.put("http://localhost:3000/update", {
      id:id,
      newFoodName: newFoodName,
    });
  };

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`);
  };

  return (
    <>
      <div className="App">
        <h1>CRUD APPLICATIONS</h1>
        <label>Food Name</label>
        <input type="text" onChange={(e) => setFoodName(e.target.value)} />
        <label>Days</label>
        <input type="number" onChange={(e) => setDays(e.target.value)} />
        <button onClick={addToList}>Add To List</button>
        <h1>Food List</h1>
        {foodList.map((val, key) => (
          <div className="food" key={key}>
            <h1>{val.foodName}</h1>
            <h1>{val.daysSinceIAte}</h1>
            <input
              type="text"
              placeholder="new food name..."
              onChange={(e) => setNewFoodName(e.target.value)}
            />
            <button onClick={() => updateFood(val._id)}>UPDATE</button>
            <button onClick={() => deleteFood(val._id)}>DELETE</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
