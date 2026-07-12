import { HashMap } from '../dataStructures/hashmaps'
describe('HashMaps',()=>{
    let hashmap;
    beforeEach(() => {
        hashmap = new HashMap()
        hashmap.set("name", 'hector')
        hashmap.set("age", 25)
    })

    test('Set method', () =>{
        expect(hashmap.get("name")).toBe('hector')
    })

    test('Has', () => {
        expect(hashmap.has('name')).toBe(true)
    })

    test('Remove', () => {
        hashmap.remove('name')
        expect(hashmap.has('name')).toBe(false)
    })

    test("length", () => {
        expect(hashmap.length()).toBe(2)
    })

    test('Clear', () => {
        hashmap.clear()
        expect(hashmap.length()).toBe(0)
    })

    test('Keys', () => {
        expect(hashmap.keys()).toEqual(['name'])
    })

})