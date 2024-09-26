"use client";

import useGrid from "@/store/features/grid";

const ThemeDisplay = () => {
  const { correctWords } = useGrid();

  const totalWords = correctWords.length;
  const foundWords = correctWords.filter(word => word.found).length;

  return (
    <div className="w-80 flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center w-60 overflow-hidden rounded-lg border-gray-500 border-2 border-solid">
        <p className="bg-sky-600 w-full text-center">Today&apos;s Theme</p>
        <h1 className="text-2xl font-bold h-8">Fruits</h1>
      </div>
      <span>
        <b>{foundWords}</b> of <b>{totalWords}</b> theme words found.
      </span>
    </div>
  );
};

export default ThemeDisplay;
