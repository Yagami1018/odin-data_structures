import {
  bubbleSort,
  insertionSort,
  selectionSort,
} from "../algorithms/sortFns.js";
import tests from '../samples.js'


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
