"use client";

import React, { useState } from 'react';

interface CountsState {
  row1: number[];
  row2: number[];
  row3: number[];
  row4: number[];
  row5: number[];
  row6: number[];
}

const MainGame: React.FC = () => {
  const [counts, setCounts] = useState<CountsState>({
    row1: [0, 0, 0],
    row2: [0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0],
    row5: [0, 0, 0, 0, 0],
    row6: [0, 0, 0],
  });

  const handlePop = (rowIndex: number, circleIndex: number) => {
    setCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      updatedCounts[`row${rowIndex}` as keyof CountsState][circleIndex] += 1;
      return updatedCounts;
    });
  };

  const handleReset = () => {
    setCounts({
      row1: [0, 0, 0],
      row2: [0, 0, 0, 0, 0],
      row3: [0, 0, 0, 0, 0, 0],
      row4: [0, 0, 0, 0, 0, 0],
      row5: [0, 0, 0, 0, 0],
      row6: [0, 0, 0],
    });
  };

  return (
    <div>
      <h1>Pop It!</h1>
      <div className="large-circle"></div>
      <div className="rows-container">
        {Object.keys(counts).map((rowKey, rowIndex) => (
          <div key={rowKey} className={`row-${rowIndex + 1}`}>
            {counts[rowKey as keyof CountsState].map((count, circleIndex) => (
              <div
                key={circleIndex}
                className={`circle ${count > 0 ? 'popped' : ''}`}
                onClick={() => handlePop(rowIndex + 1, circleIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MainGame;