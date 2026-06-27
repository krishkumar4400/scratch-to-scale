import React, { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-medium transition-all text-white
        ${size === "small" ? "text-sm px-3 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600" : ""}
        ${color === "success" ? "bg-green-500 hover:bg-green-600" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2>Basic Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        autem laborum sed accusantium ipsam vitae eligendi? Porro iure provident
        ducimus!
      </p>
      <div className="space-y-4">
        <h3 className="text-xl font-medium my-4 ">Differnet colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text={"Primary Button"}
            color={"primary"}
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text={"Secondary Button"}
            color={"secondary"}
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text={"Danger Button"}
            color={"danger"}
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text={"Success Button"}
            color={"success"}
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium my-4 ">Differnet Sizes </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text={"Small"}
            color={"primary"}
            onClick={() => setClickCount(clickCount + 1)}
            size={"small"}
          />
          <Button
            text={"Medium(Default)"}
            size={"medium"}
            color={"secondary"}
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text={"Large"}
            size={"large"}
            color={"danger"}
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-medium my-4 ">Differnet Sizes </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text={"Enabled Button"}
            color={"primary"}
            onClick={() => setClickCount(clickCount + 1)}
            size={"small"}
          />
          <Button
            text={"Disabled Button"}
            size={"large"}
            color={"secondary"}
            disabled={true}
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-medium text-gray-400">
          Click Count:{" "}
          <span className="text-blue-600 font-bold">{clickCount}</span>
        </p>
      </div>
    </section>
  );
};

export default BasicProps;
