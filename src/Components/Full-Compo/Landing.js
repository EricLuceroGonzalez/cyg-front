import { React } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="font-sans pt-16 text-center">
        <h1 className="text-3xl font-bold">Comenta y gana</h1>
        <button className="px-10 text-sm mt-4 bg-indigo-500 hover:bg-indigo-700 p-3 rounded-full font-bold text-white">
            <Link to='/cliente'>Probar</Link>
            </button>
      </div>

    </div>
  );
};

export default Landing;
