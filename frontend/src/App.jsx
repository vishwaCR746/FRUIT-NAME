import { useState } from 'react';

import './App.css';

function App() {
  return (
    <div className='bg-gradient-to-b from-pink-500 to-indigo-900  w-auto min-h-screen flex flex-col items-center justify-center p-6'>
      <h1 className='text-center text-[40px] font-bold mb-6 text-amber-50'>FRUIT NAME FORM</h1>
      <form action="http://localhost:3000/fruit" method="get" className='bg-gradient-to-t from-pink-200 to-pink-300 p-6 rounded-lg shadow-lg w-full max-w-md'>
        <label className='block text-lg text-[20px] font-semibold mb-2'>
          Fruit Name:
          <input 
        name="fruitname" 
        placeholder="e.g., Apple, Banana, Kiwi" 
        required 
        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-500"
      /> 
        </label>
        <br />
        <label>
          <input type="submit" value="Submit" className="w-full mt-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 
                 hover:bg-right hover:transition-all duration-500 
                 text-white uppercase text-center px-12 py-3 
                 rounded-lg shadow-lg font-semibold" />
        </label>
      </form>
    </div>
  );
}

export default App;
