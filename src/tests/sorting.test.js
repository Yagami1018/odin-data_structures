import {
  bubbleSort,
  insertionSort,
  quickSort,
  selectionSort,
} from "../algorithms/sortFns.js";
import tests from '../samples.js'


describe.skip("BubbleSort", () => {
  tests.forEach(({ input, output }) => {
    test(`input(${input}) -> [${output.join(", ")}]`, () => {
      expect(bubbleSort(input)).toEqual(output);
    });
  });
});

describe.skip("SelectionSort", () => {
  tests.forEach(({ input, output }) => {
    test(`input(${input}) -> [${output.join(", ")}]`, () => {
      expect(selectionSort(input)).toEqual(output);
    });
  });
});

describe.skip("InsertionSort", () => {
  tests.forEach(({ input, output }) => {
    test(`input(${input}) -> [${output.join(", ")}]`, () => {
      expect(insertionSort(input)).toEqual(output);
    });
  });
});

describe('Quick Sort',()=>{
  tests.forEach(({input,output})=>{
    test(`input(${input}) -> [${output.join(', ')}]`, () =>{
      expect(quickSort(input)).toEqual(output)
    })
  })
})