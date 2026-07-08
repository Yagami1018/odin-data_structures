import {
  bubbleSort,
  insertionSort,
  selectionSort,
} from "../algorithms/sortFns.js";

const tests = [
  {
    input: [5, 4, 3, 2, 1, 44, 0, -1, 1, 9, 6],
    output: [-1, 0, 1, 1, 2, 3, 4, 5, 6, 9, 44],
  },
  { input: [1, 2, 3, 4, 5], output: [1, 2, 3, 4, 5] },
  {
    input: [10, 9, 7, 6, 5],
    output: [5, 6, 7, 9, 10],
  },
  {
    input: [],
    output: [],
  },
  { input: [1], output: [1] },
];

describe("BubbleSort", () => {
  tests.forEach(({ input, output }) => {
    test(`input(${input}) -> [${output.join(", ")}]`, () => {
      expect(bubbleSort(input)).toEqual(output);
    });
  });
});

describe("SelectionSort", () => {
  tests.forEach(({ input, output }) => {
    test(`input(${input}) -> [${output.join(", ")}]`, () => {
      expect(selectionSort(input)).toEqual(output);
    });
  });
});

describe("InsertionSort", () => {
  tests.forEach(({ input, output }) => {
    test(`input(${input}) -> [${output.join(", ")}]`, () => {
      expect(insertionSort(input)).toEqual(output);
    });
  });
});
