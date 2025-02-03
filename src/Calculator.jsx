import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Erro");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900">
      <div className="max-w-xs p-6 bg-gray-800/80 backdrop-blur-sm text-white rounded-2xl shadow-2xl border border-gray-700/50 w-96">
        {/* Display */}
        <div className="mb-6 p-5 bg-gray-900/50 rounded-xl shadow-inner">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-3xl text-right text-white bg-transparent focus:outline-none placeholder:text-gray-400"
            placeholder="0"
          />
          {result && (
            <div className="mt-2 text-right text-2xl text-purple-300 font-medium">
              = {result}
            </div>
          )}
        </div>

        {/* Teclado */}
        <div className="grid grid-cols-4 gap-3">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((char) => (
            <button
              key={char}
              className={`p-6 rounded-xl text-2xl font-bold transition-all 
                ${
                  char === "="
                    ? "col-span-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                    : "bg-gray-700/50 hover:bg-gray-600/50"
                }
                shadow-lg hover:shadow-xl active:scale-95`}
              onClick={() =>
                char === "=" ? calculateResult() : handleClick(char)
              }
            >
              {char}
            </button>
          ))}

          {/* Botões especiais */}
          <button
            className="col-span-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 p-6 rounded-xl text-2xl font-bold shadow-lg hover:shadow-xl active:scale-95"
            onClick={clearInput}
          >
            C
          </button>
          <button
            className="col-span-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 p-6 rounded-xl text-2xl font-bold shadow-lg hover:shadow-xl active:scale-95"
            onClick={() => setInput(input.slice(0, -1))}
          >
            ⌫
          </button>
        </div>
        <footer className="mt-4 text-white text-sm text-center">
          Desenvolvido por{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Rodrigo
          </a>
        </footer>
      </div>
    </div>
  );
}
