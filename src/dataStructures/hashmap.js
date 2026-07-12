class HashMap {
    constructor() {
       this.buckets = new Array(16).fill(null).map(()=>[])
       this.size = 0 
    }
    _hash(key) {
        let hashcode = 0;
        const primeNumber=31;

        for(let i = 0; i<key.length; i++) {
            hashcode = (primeNumber * hashcode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashcode;
    }
}