import React from "react";

interface ColorSelectorProps {
  changeBackground: (color: string) => void;
}


interface ButtonProps {
  onClick: () => void;
  label: string;
  className: string;
}

const CollorSelector: React.FC<ColorSelectorProps> = ({ changeBackground }) => {
  return (
    <div className="mx-auto pb-4 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
      <button className="bg-white hover:bg-gray-200 text-black border py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-white")}></button>
      <button className="bg-black hover:bg-gray-900 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-black")}></button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-gray-500")}></button>
      <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-red-500")}></button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-yellow-500")}></button>
      <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-green-500")}></button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-blue-500")}></button>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-indigo-500")}></button>
      <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-purple-500")}></button>
      <button className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-pink-500")}></button>
      <button className="bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-violet-500")}></button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-orange-500")}></button>
      <button className="bg-[#FF9B82] hover:bg-[#d6836f] text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-[#FF9B82]")}></button>
      <button className="bg-[#F1B4BB] hover:bg-[#cc989e] text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-[#F1B4BB]")}></button>
      <button className="bg-[#86A789] hover:bg-[#596f5b] text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-[#86A789]")}></button>
      <button className="bg-[#662549] hover:bg-[#58203f] text-white py-2 px-4 rounded-full h-14 w-14" onClick={() => changeBackground("bg-[#662549]")}></button>
    </div>
  );
};

const CustomButton: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export { CollorSelector, CustomButton };
