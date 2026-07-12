import { HashMap } from "../dataStructures/hashmaps";
describe("HashMaps", () => {
    let hashmap;
    beforeEach(() => {
        hashmap = new HashMap();
        hashmap.set("name", "hector");
        hashmap.set("age", 25);
    });

    test("Set method", () => {
        expect(hashmap.get("name")).toBe("hector");
    });

    test("Has", () => {
        expect(hashmap.has("name")).toBe(true);
    });

    test("Remove", () => {
        hashmap.remove("name");
        expect(hashmap.has("name")).toBe(false);
    });

    test("length", () => {
        expect(hashmap.length()).toBe(2);
    });

    test("Clear", () => {
        hashmap.clear();
        expect(hashmap.length()).toBe(0);
    });

    test("Keys", () => {
        expect(hashmap.keys()).toEqual(["name", "age"]);
    });

    test("Values", () => {
        expect(hashmap.values()).toEqual(["hector", 25]);
    });

    test("Entries", () => {
        expect(hashmap.entries()).toEqual([
            ["name", "hector"],
            ["age", 25],
        ]);
    });

    test("Resize", () => {
        hashmap.set("apple", "red");
        hashmap.set("banana", "yellow");
        hashmap.set("carrot", "orange");
        hashmap.set("dog", "brown");
        hashmap.set("elephant", "gray");
        hashmap.set("frog", "green");
        hashmap.set("grape", "purple");
        hashmap.set("hat", "black");
        hashmap.set("ice cream", "white");
        hashmap.set("jacket", "blue");
        hashmap.set("kite", "pink");
        hashmap.set("lion", "golden");
        expect(hashmap.length()).toBe(14);
        expect(hashmap.capacity()).toBe(32);
    });
});
