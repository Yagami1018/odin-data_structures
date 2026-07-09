import { LinkedList } from "../dataStructures/linkedLists";

describe("LinkedLists", () => {
    let list;
    beforeAll(() => {
        list = new LinkedList(1, 2, 3, 4, 5);
    });

    test("Appending", () => {
        list.append(6);
        expect(list.toString()).toBe("1 -> 2 -> 3 -> 4 -> 5 -> 6");
    });
});
