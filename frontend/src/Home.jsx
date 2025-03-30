import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [fruitname, setFruitname] = useState("");
  const navigate = useNavigate();

  const addFruit = async (e) => {
    e.preventDefault();
    if (!fruitname) return alert("Please enter a fruit name");

    await fetch("http://localhost:3000/fruit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fruitname }),
    });

    navigate("/fruits"); // Redirect to FruitPage after adding fruit
  };

  return (
    <div className="bg-gradient-to-b from-pink-500 to-indigo-900 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-center text-[40px] font-bold mb-6 text-amber-50">FRUIT NAME FORM</h1>
      <form onSubmit={addFruit} className="bg-gradient-to-t from-pink-200 to-pink-300 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-lg text-[20px] font-semibold mb-2">
          Fruit Name:
          <input
            type="text"
            value={fruitname}
            onChange={(e) => setFruitname(e.target.value)}
            placeholder="e.g., Apple, Banana, Kiwi"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-500"
          />
        </label>
        <button
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 
                 hover:bg-right hover:transition-all duration-500 
                 text-white uppercase text-center px-12 py-3 
                 rounded-lg shadow-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;