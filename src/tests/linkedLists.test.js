import { LinkedList } from "../dataStructures/linkedLists";

describe("LinkedLists", () => {
    let list;
    beforeEach(() => {
        list = new LinkedList(1, 2, 3, 4, 5);
    });

    test("Appending", () => {
        list.append(6);
        expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> null");
    });
    test("Prepending", () => {
        list.prepend(5);
        expect(list.toString()).toBe("( 5 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null");
    });

    test("Popping", () => {
        let popped = list.pop();
        expect(popped).toBe(1);
        expect(list.toString()).toBe("( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null");
    });

    test("Contains", () => {
        expect(list.contains(6)).toBe(false);
        expect(list.contains(3)).toBe(true);
    });

    test("Find Index", () => {
        expect(list.findIndex(9)).toBe(-1);
        expect(list.findIndex(3)).toBe(2);
    });

    test("Insert at ", () => {
        list.insertAt(4, 1, 2, 3);
        expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 5 ) -> null");
    });

    test("Remove at", () => {
        list.removeAt(1);
        expect(list.toString()).toBe("( 1 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null");
    });
});
