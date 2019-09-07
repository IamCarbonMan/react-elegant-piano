import React from "react";

const blackKeys = [1, 4, 6, 9, 11];
const freq = n => 440 * 2 ** ((n - 49) / 12);

const Key = (x, key) => (
  <li className={"key " + (blackKeys.includes(key % 12) ? "black" : "white")} />
);

export default Key;
