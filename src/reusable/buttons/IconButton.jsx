import * as React from "react";

function IconButton({text = "" , onClick , icon = "→"}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '370px',
        height: '60px',
        padding: '10px 10px 10px 60px',
        borderRadius: '30px 30px 30px 30px',
      }}
      className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold py-2 px-8 rounded inline-flex items-center shadow-lg"
    >
      {text}
      <span className="ml-2"><img src = {icon}/>
      </span>
    </button>
  );
}
export default IconButton;

