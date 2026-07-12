export class HashMap {
    constructor() {
        this.buckets = new Array(16).fill(null).map(() => []);
        this.size = 0;
    }

    _hash(key) {
        let hashcode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashcode = (primeNumber * hashcode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashcode;
    }

    set(key, value) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) return pair[1];
        }
        return null;
    }
}
