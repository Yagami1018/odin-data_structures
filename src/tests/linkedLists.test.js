import { LinkedList } from "../dataStructures/linkedLists";

describe("LinkedLists", () => {
    let list;
    beforeEach(() => {
        list = new LinkedList(1, 2, 3, 4, 5);
    });

    test("Appending", () => {
        list.append(6);
        expect(list.toString()).toBe("1 -> 2 -> 3 -> 4 -> 5 -> 6");
    });
    test("Prepending", () => {
        list.prepend(5);
        expect(list.toString()).toBe("5 -> 1 -> 2 -> 3 -> 4 -> 5");
    })

    test("Popping", () => {
        let popped = list.pop()
        expect(popped).toBe(1);
        expect(list.toString()).toBe("2 -> 3 -> 4 -> 5")
    })
});
