import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FruitPage() {
  const [fruitList, setFruitList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/fruit")
      .then((res) => res.json())
      .then((data) => setFruitList(data));
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-pink-500 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-center text-[40px] font-bold mb-6 text-amber-50">FRUIT LIST</h1>
      <ul className="bg-gradient-to-t from-pink-200 to-pink-300 p-6 rounded-lg shadow-lg w-full max-w-md">
        {fruitList.map((fruit, index) => (
          <li key={index} className="border-b last:border-none p-2 text-gray-800">
            {fruit}
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg font-semibold"
      >
        Add More Fruits
      </button>
    </div>
  );
}

export default FruitPage