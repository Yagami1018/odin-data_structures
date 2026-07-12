class HashMap {
    hash(key) {
        let hashcode = 0;
        const primeNumber=31;

        for(let i = 0; i<key; i++) {
            hashcode += primeNumber * hashcode + key.charCodeAt(i);
        }
        return hashcode;
    }
}