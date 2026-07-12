export class HashMap {
    constructor() {
        this.buckets = new Array(16).fill(null).map(() => []);
        this.size = 0;
    }

    resize() {
        const cap = this.capacity();
        const copy = [...this.buckets];
        this.buckets = new Array(cap * 2).fill(null).map(() => []);
        this.size = 0;
        for (let bucket of copy) {
            for (let pair of bucket) {
                this.set(pair[0], pair[1]);
            }
        }
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
        if (this.size / this.capacity() > 0.75) this.resize();
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

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        if (!this.has(key)) return false;
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
    }

    length() {
        return this.size;
    }

    capacity() {
        return this.buckets.length;
    }

    clear() {
        this.buckets = new Array(16).fill(null).map(() => []);
        this.size = 0;
    }

    keys() {
        let keys = [];
        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                keys.push(pair[0]);
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                values.push(pair[1]);
            }
        }
        return values;
    }

    entries() {
        let entries = [];
        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                entries.push([pair[0], pair[1]]);
            }
        }
        return entries;
    }
}
