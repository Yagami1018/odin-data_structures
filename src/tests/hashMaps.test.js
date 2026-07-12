import { HashMap } from '../dataStructures/hashmaps'
describe('HashMaps',()=>{

    test('Set method', () =>{
        let hashmap = new HashMap()
        hashmap.set("name", "hector")
        expect(hashmap.get("name")).toBe('hector')
    })
})